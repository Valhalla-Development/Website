import { NextResponse } from "next/server";
import { issueKey, readKey } from "../../lib/api-keys";
import { log } from "../../lib/console";
import { readSession } from "../../lib/session";

export async function GET(): Promise<NextResponse> {
    const session = await readSession();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const issued = await readKey(session.discordId);
        return NextResponse.json({
            hint: issued?.hint ?? null,
            key: issued?.key || null,
            username: session.username,
        });
    } catch (error) {
        log.error("API key read failed", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}

export async function POST(): Promise<NextResponse> {
    const session = await readSession();
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const issued = await issueKey(session.discordId);
        return NextResponse.json({
            hint: issued.hint,
            key: issued.key,
            username: session.username,
        });
    } catch (error) {
        log.error("API key rotate failed", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
