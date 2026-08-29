"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import DiscordMark from "../components/discord-mark";

interface KeyClientProps {
    avatar: string | null;
    discordId: string;
    hint: string;
    keyValue: string;
    username: string;
}

const blurple =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#5865F2] px-5 py-2.5 font-semibold text-sm text-white shadow-[0_8px_20px_rgba(88,101,242,0.28)] transition duration-150 hover:-translate-y-0.5 hover:bg-[#4752C4] hover:shadow-[0_12px_28px_rgba(88,101,242,0.4)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";
const secondary =
    "inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-[#2b2d31] px-5 py-2.5 font-semibold text-sm text-white/90 transition duration-150 hover:-translate-y-0.5 hover:bg-[#3b3d44] hover:text-white disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

function avatarUrl(discordId: string, avatar: string | null): string {
    if (avatar) {
        return `https://cdn.discordapp.com/avatars/${discordId}/${avatar}.webp?size=64`;
    }
    const index = Number.parseInt(discordId.slice(-2), 10) % 6;
    return `https://cdn.discordapp.com/embed/avatars/${index}.png`;
}

export default function KeyClient({ username, keyValue, hint, avatar, discordId }: KeyClientProps) {
    const [key, setKey] = useState(keyValue);
    const [shownHint, setShownHint] = useState(hint);
    const [copied, setCopied] = useState(false);
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const copyKey = useCallback(async () => {
        if (!key) {
            return;
        }
        await navigator.clipboard.writeText(key);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
    }, [key]);

    const refreshKey = useCallback(async () => {
        setBusy(true);
        setError(null);
        try {
            const res = await fetch("/api/key", { method: "POST" });
            if (!res.ok) {
                throw new Error("Could not refresh the key.");
            }
            const json = (await res.json()) as { hint: string; key: string };
            setKey(json.key);
            setShownHint(json.hint);
            setCopied(false);
        } catch {
            setError("Could not refresh the key.");
        } finally {
            setBusy(false);
        }
    }, []);

    return (
        <div className="bg-[#313338] text-white">
            <div className="flex items-center gap-3 bg-[#5865F2] px-5 py-4">
                <Image
                    alt={`${username}'s Discord avatar`}
                    className="h-11 w-11 rounded-full border-2 border-white/30 object-cover"
                    height={44}
                    src={avatarUrl(discordId, avatar)}
                    width={44}
                />
                <div className="min-w-0">
                    <p className="truncate font-semibold text-base">{username}</p>
                    <p className="flex items-center gap-1.5 text-white/80 text-xs">
                        <DiscordMark className="h-3.5 w-3.5" />
                        Signed in with Discord
                    </p>
                </div>
            </div>

            <div className="space-y-5 p-5">
                {key ? (
                    <div className="space-y-3">
                        <p className="text-white/55 text-xs uppercase tracking-[0.4em]">
                            Your Bearer token
                        </p>
                        <code className="block break-all rounded-xl bg-[#1e1f22] px-4 py-3 font-mono text-sm text-white/90">
                            {key}
                        </code>
                        <p className="text-sm text-white/65">
                            Send it as{" "}
                            <code className="font-mono text-white/80">
                                Authorization: Bearer &lt;key&gt;
                            </code>{" "}
                            to{" "}
                            <a
                                className="text-[#00a8fc] underline underline-offset-4"
                                href="https://api.valhalladev.org/docs"
                            >
                                api.valhalladev.org
                            </a>
                            .
                        </p>
                    </div>
                ) : (
                    <p className="text-white/80 leading-relaxed">
                        You have a key ending in{" "}
                        <span className="font-mono font-semibold">{shownHint}</span>. We could not
                        unwrap it on this host. Refresh to get a new one. The old token stops
                        working.
                    </p>
                )}
                {error ? <p className="text-[#fa777c] text-sm">{error}</p> : null}
                <div className="flex flex-wrap items-center gap-3">
                    {key ? (
                        <button className={blurple} onClick={copyKey} type="button">
                            {copied ? "Copied" : "Copy key"}
                        </button>
                    ) : null}
                    <button
                        className={secondary}
                        disabled={busy}
                        onClick={refreshKey}
                        type="button"
                    >
                        {busy ? "Refreshing…" : "Refresh key"}
                    </button>
                    <form action="/api/auth/logout" method="post">
                        <button className={secondary} type="submit">
                            Log out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
