const TOKEN_URL = "https://discord.com/api/oauth2/token";
const AUTHORIZE_URL = "https://discord.com/api/oauth2/authorize";
const ME_URL = "https://discord.com/api/users/@me";

export function discordAuthUrl(state: string): string {
    const params = new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID ?? "",
        redirect_uri: process.env.DISCORD_REDIRECT_URI ?? "",
        response_type: "code",
        scope: "identify",
        state,
    });
    return `${AUTHORIZE_URL}?${params}`;
}

export async function exchangeCode(code: string): Promise<string> {
    const body = new URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID ?? "",
        client_secret: process.env.DISCORD_CLIENT_SECRET ?? "",
        code,
        grant_type: "authorization_code",
        redirect_uri: process.env.DISCORD_REDIRECT_URI ?? "",
    });
    const res = await fetch(TOKEN_URL, {
        body,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST",
    });
    if (!res.ok) {
        throw new Error(`Discord token exchange failed (${res.status})`);
    }
    const json = (await res.json()) as { access_token?: string };
    if (!json.access_token) {
        throw new Error("Discord token exchange returned no access_token");
    }
    return json.access_token;
}

export async function fetchDiscordUser(accessToken: string): Promise<{
    avatar: string | null;
    id: string;
    username: string;
}> {
    const res = await fetch(ME_URL, {
        headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!res.ok) {
        throw new Error(`Discord profile failed (${res.status})`);
    }
    const json = (await res.json()) as {
        avatar?: string | null;
        global_name?: string | null;
        id: string;
        username: string;
    };
    return {
        avatar: json.avatar ?? null,
        id: json.id,
        username: json.global_name || json.username,
    };
}
