import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import type { NextResponse } from "next/server";

export interface Session {
    avatar: string | null;
    discordId: string;
    username: string;
}

const SESSION_COOKIE = "vd_session";
const OAUTH_COOKIE = "vd_oauth";
const MAX_AGE_SEC = 60 * 60 * 24 * 7;

function secret(): string {
    const value = process.env.SESSION_SECRET;
    if (!value || value.length < 32) {
        throw new Error("You need to define `SESSION_SECRET` (32+ chars) in .env");
    }
    return value;
}

function cookieBase(): {
    httpOnly: boolean;
    path: string;
    sameSite: "lax";
    secure: boolean;
} {
    return {
        httpOnly: true,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    };
}

function sign(payload: string): string {
    return createHmac("sha256", secret()).update(payload).digest("base64url");
}

function encode(session: Session): string {
    const payload = Buffer.from(JSON.stringify(session), "utf8").toString("base64url");
    return `${payload}.${sign(payload)}`;
}

function decode(raw: string): Session | null {
    const dot = raw.lastIndexOf(".");
    if (dot <= 0) {
        return null;
    }
    const payload = raw.slice(0, dot);
    const mac = raw.slice(dot + 1);
    const expected = sign(payload);
    const a = Buffer.from(mac);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) {
        return null;
    }
    try {
        const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as Session;
        if (!(parsed.discordId && parsed.username)) {
            return null;
        }
        return parsed;
    } catch {
        return null;
    }
}

export async function readSession(): Promise<Session | null> {
    const store = await cookies();
    const raw = store.get(SESSION_COOKIE)?.value;
    if (!raw) {
        return null;
    }
    return decode(raw);
}

export function attachSession(response: NextResponse, session: Session): void {
    response.cookies.set(SESSION_COOKIE, encode(session), {
        ...cookieBase(),
        maxAge: MAX_AGE_SEC,
    });
}

export function clearSessionCookie(response: NextResponse): void {
    response.cookies.delete(SESSION_COOKIE);
}

export function attachOauthState(response: NextResponse, state: string): void {
    response.cookies.set(OAUTH_COOKIE, state, {
        ...cookieBase(),
        maxAge: 60 * 10,
    });
}

export async function readOauthState(): Promise<string | undefined> {
    const store = await cookies();
    return store.get(OAUTH_COOKIE)?.value;
}

export function clearOauthCookie(response: NextResponse): void {
    response.cookies.delete(OAUTH_COOKIE);
}

export function authConfigured(): boolean {
    return Boolean(
        process.env.DISCORD_CLIENT_ID &&
            process.env.DISCORD_CLIENT_SECRET &&
            process.env.DISCORD_REDIRECT_URI &&
            process.env.SESSION_SECRET &&
            process.env.SESSION_SECRET.length >= 32
    );
}
