import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { discordAuthUrl } from "../../../lib/discord-oauth";
import { attachOauthState, authConfigured } from "../../../lib/session";
import { siteOrigin } from "../../../lib/site-origin";

export function GET(): NextResponse {
    if (!authConfigured()) {
        return NextResponse.redirect(new URL("/key?error=config", siteOrigin()));
    }

    const state = randomBytes(16).toString("base64url");
    const response = NextResponse.redirect(discordAuthUrl(state));
    attachOauthState(response, state);
    return response;
}
