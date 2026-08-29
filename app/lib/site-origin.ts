export function siteOrigin(): string {
    const redirect = process.env.DISCORD_REDIRECT_URI;
    if (redirect) {
        return new URL(redirect).origin;
    }
    return "http://localhost:3000";
}
