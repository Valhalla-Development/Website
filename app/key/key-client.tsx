"use client";

import { useCallback, useState } from "react";

interface KeyClientProps {
    hint: string;
    keyValue: string;
    username: string;
}

const primary =
    "inline-flex items-center justify-center rounded-full border border-foreground/20 bg-foreground px-6 py-3 font-semibold text-background text-sm transition hover:opacity-90";
const secondary =
    "inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background px-6 py-3 font-semibold text-foreground text-sm transition hover:bg-foreground/5";

export default function KeyClient({ username, keyValue, hint }: KeyClientProps) {
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
        <div className="space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
                Signed in as <span className="font-semibold text-foreground">{username}</span>.
            </p>
            {key ? (
                <div className="space-y-3">
                    <p className="text-foreground/70 text-xs uppercase tracking-[0.4em]">
                        Your Bearer token
                    </p>
                    <code className="block break-all rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 font-mono text-sm">
                        {key}
                    </code>
                    <p className="text-foreground/70 text-sm">
                        Send it as{" "}
                        <code className="font-mono">Authorization: Bearer &lt;key&gt;</code> to{" "}
                        <a
                            className="underline underline-offset-4"
                            href="https://api.valhalladev.org/docs"
                        >
                            api.valhalladev.org
                        </a>
                        .
                    </p>
                </div>
            ) : (
                <p className="text-foreground/80 leading-relaxed">
                    You have a key ending in{" "}
                    <span className="font-mono font-semibold">{shownHint}</span>. We could not
                    unwrap it on this host — refresh to mint a new one. The old token stops working.
                </p>
            )}
            {error ? <p className="text-rose-400 text-sm">{error}</p> : null}
            <div className="flex flex-wrap items-center gap-3">
                {key ? (
                    <button className={primary} onClick={copyKey} type="button">
                        {copied ? "Copied" : "Copy key"}
                    </button>
                ) : null}
                <button className={secondary} disabled={busy} onClick={refreshKey} type="button">
                    {busy ? "Refreshing…" : "Refresh key"}
                </button>
                <form action="/api/auth/logout" method="post">
                    <button className={secondary} type="submit">
                        Log out
                    </button>
                </form>
            </div>
        </div>
    );
}
