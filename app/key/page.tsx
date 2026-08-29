import type { Metadata } from "next";
import { issueKey, readKey } from "../lib/api-keys";
import { authConfigured, readSession } from "../lib/session";
import KeyClient from "./key-client";

export const metadata: Metadata = {
    description: "Sign in with Discord to get a Bearer token for the Valhalla API.",
    title: "API key",
};

const errors: Record<string, string> = {
    config: "Key sign-in is not configured on this host.",
    oauth: "Discord sign-in failed. Try again.",
};

export default async function KeyPage({
    searchParams,
}: {
    searchParams: Promise<{ error?: string }>;
}) {
    const { error } = await searchParams;
    const session = authConfigured() ? await readSession() : null;
    let issued =
        session && process.env.MongoUri ? await readKey(session.discordId).catch(() => null) : null;
    if (session && process.env.MongoUri && !issued) {
        issued = await issueKey(session.discordId).catch(() => null);
    }

    return (
        <div className="relative min-h-screen text-foreground">
            <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pt-20 lg:pt-24">
                <header className="space-y-6">
                    <div>
                        <p className="text-foreground/70 text-xs uppercase tracking-[0.35em]">
                            API
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                            Get an API key
                        </h1>
                    </div>
                    <p className="max-w-2xl text-foreground/80 text-lg leading-relaxed">
                        Every{" "}
                        <a
                            className="underline underline-offset-4"
                            href="https://api.valhalladev.org/docs"
                        >
                            /v1
                        </a>{" "}
                        route on api.valhalladev.org needs a Bearer token. Sign in with Discord to
                        mint one, or to see the one you already have.
                    </p>
                </header>

                <section className="rounded-3xl border border-foreground/10 bg-background/85 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.1)]">
                    {error && errors[error] ? (
                        <p className="mb-6 text-rose-400">{errors[error]}</p>
                    ) : null}

                    {session && issued ? (
                        <KeyClient
                            hint={issued.hint}
                            keyValue={issued.key}
                            username={session.username}
                        />
                    ) : null}
                    {session && !issued ? (
                        <p className="text-foreground/80 leading-relaxed">
                            Signed in as {session.username}, but we could not load a key. Try again
                            in a moment.
                        </p>
                    ) : null}
                    {session ? null : (
                        <div className="space-y-6">
                            <p className="text-foreground/80 leading-relaxed">
                                Discord is only used to prove who you are. One key per account.
                                Refreshing it replaces the old token.
                            </p>
                            <a
                                className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-foreground px-6 py-3 font-semibold text-background text-sm transition hover:opacity-90"
                                href="/api/auth/discord"
                            >
                                Sign in with Discord
                            </a>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
