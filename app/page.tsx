export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="mx-auto max-w-6xl px-6 pt-20 lg:pt-24">
                <div className="space-y-8">
                    <header className="space-y-3">
                        <p className="text-foreground/60 text-sm uppercase tracking-[0.3em]">
                            Valhalla Development
                        </p>
                        <h1 className="font-bold text-5xl">Home</h1>
                        <p className="max-w-2xl text-foreground/80 text-lg">
                            We&apos;re polishing this page before launch. Thanks for bearing with us
                            while we prep something worthy of Valhalla.
                        </p>
                    </header>
                    <section className="rounded-[32px] border border-foreground/10 bg-linear-to-br from-foreground/5 via-background/60 to-background/90 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.14)] backdrop-blur-lg">
                        <div className="relative flex flex-col gap-6">
                            <div
                                className="-left-2 absolute top-5 flex items-center"
                                style={{ width: "33%", maxWidth: "16rem" }}
                            >
                                <div
                                    className="-left-3 pointer-events-none absolute bg-linear-to-r from-rose-500/55 via-sky-400/35 to-transparent opacity-80 blur-2xl"
                                    style={{ height: "1.5rem", width: "7rem" }}
                                />
                                <div className="relative flex w-full items-center">
                                    <div className="h-0.75 w-10 bg-linear-to-r from-transparent to-rose-500/55" />
                                    <div className="h-0.75 flex-1 bg-linear-to-r from-rose-500/55 via-sky-400/45 to-amber-300/45 shadow-[0_0_18px_rgba(244,63,94,0.55)]" />
                                    <div className="h-0.75 w-8 bg-linear-to-r from-amber-300/45 to-transparent" />
                                </div>
                            </div>
                            <div>
                                <p className="text-foreground/55 text-xs uppercase tracking-[0.4em]">
                                    Work in progress
                                </p>
                                <h2 className="mt-8 text-balance font-semibold text-2xl leading-snug">
                                    This page is almost ready
                                </h2>
                                <p className="mt-4 text-foreground/85 text-sm leading-relaxed">
                                    The home experience is still under construction. We&apos;re
                                    locking in final copy, visuals, and interactions. Expect
                                    frequent updates, and check back soon to see the full release.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
