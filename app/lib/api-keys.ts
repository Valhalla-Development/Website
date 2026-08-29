import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";
import { model, models, Schema } from "mongoose";
import { connectMongo } from "./mongo";

const HASH_PREFIX = "sha256:";

interface ApiKeyDoc {
    discordId: string;
    hint: string;
    key: string;
    wrapped: string;
}

const apiKeySchema = new Schema<ApiKeyDoc>(
    {
        discordId: { required: true, sparse: true, type: String, unique: true },
        hint: { required: true, type: String },
        key: { required: true, type: String, unique: true },
        wrapped: { required: true, type: String },
    },
    { collection: "apiKeys" }
);

const ApiKey = models.ApiKey ?? model<ApiKeyDoc>("ApiKey", apiKeySchema, "apiKeys");

function hashApiKey(raw: string): string {
    return `${HASH_PREFIX}${createHash("sha256").update(raw).digest("hex")}`;
}

function wrapSecret(): Buffer {
    const value = process.env.SESSION_SECRET;
    if (!value || value.length < 32) {
        throw new Error("You need to define `SESSION_SECRET` (32+ chars) in .env");
    }
    return createHash("sha256").update(value).digest();
}

function wrapKey(raw: string): string {
    const iv = randomBytes(12);
    const cipher = createCipheriv("aes-256-gcm", wrapSecret(), iv);
    const enc = Buffer.concat([cipher.update(raw, "utf8"), cipher.final()]);
    const tag = cipher.getAuthTag();
    return Buffer.concat([iv, tag, enc]).toString("base64url");
}

function unwrapKey(wrapped: string): string | null {
    try {
        const buf = Buffer.from(wrapped, "base64url");
        const iv = buf.subarray(0, 12);
        const tag = buf.subarray(12, 28);
        const enc = buf.subarray(28);
        const decipher = createDecipheriv("aes-256-gcm", wrapSecret(), iv);
        decipher.setAuthTag(tag);
        return Buffer.concat([decipher.update(enc), decipher.final()]).toString("utf8");
    } catch {
        return null;
    }
}

function mintKey(): string {
    return `vd_${randomBytes(24).toString("base64url")}`;
}

export interface IssuedKey {
    hint: string;
    key: string;
}

/** Issue a new key, or rotate the one already tied to this Discord user. */
export async function issueKey(discordId: string): Promise<IssuedKey> {
    await connectMongo();
    const raw = mintKey();
    const doc = {
        discordId,
        hint: raw.slice(-4),
        key: hashApiKey(raw),
        wrapped: wrapKey(raw),
    };
    await ApiKey.findOneAndUpdate({ discordId }, doc, { new: true, upsert: true });
    return { hint: doc.hint, key: raw };
}

/** Load the stored key for this Discord user, if we can still unwrap it. */
export async function readKey(discordId: string): Promise<IssuedKey | null> {
    await connectMongo();
    const doc = await ApiKey.findOne({ discordId });
    if (!doc) {
        return null;
    }
    const raw = unwrapKey(doc.wrapped);
    if (!raw) {
        return { hint: doc.hint, key: "" };
    }
    return { hint: doc.hint, key: raw };
}
