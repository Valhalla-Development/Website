import { NextResponse } from "next/server";
import { issueKey, readKey } from "../../../lib/api-keys";
import { log } from "../../../lib/console";
import { exchangeCode, fetchDiscordUser } from "../../../lib/discord-oauth";
import { attachSession, clearOauthCookie, readOauthState } from "../../../lib/session";
import { siteOrigin } from "../../../lib/site-origin";

export async function GET(request: Request): Promise<NextResponse> {
    const origin = siteOrigin();
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const expected = await readOauthState();

    if (!(code && state && expected && state === expected)) {
        const failed = NextResponse.redirect(new URL("/key?error=oauth", origin));
        clearOauthCookie(failed);
        return failed;
    }

    try {
        const token = await exchangeCode(code);
        const user = await fetchDiscordUser(token);
        const existing = await readKey(user.id);
        if (!existing?.key) {
            await issueKey(user.id);
        }
        const response = NextResponse.redirect(new URL("/key", origin));
        clearOauthCookie(response);
        attachSession(response, {
            avatar: user.avatar,
            discordId: user.id,
            username: user.username,
        });
        return response;
    } catch (error) {
        log.error("Discord OAuth callback failed", error);
        const failed = NextResponse.redirect(new URL("/key?error=oauth", origin));
        clearOauthCookie(failed);
        return failed;
    }
}
