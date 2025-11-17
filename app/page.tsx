export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="mx-auto max-w-6xl px-6 py-20">
                <div className="space-y-8">
                    <header className="space-y-3">
                        <p className="text-foreground/40 text-sm uppercase tracking-[0.3em]">
                            Valhalla Development
                        </p>
                        <h1 className="font-bold text-5xl">Home</h1>
                        <p className="max-w-2xl text-foreground/70 text-lg">
                            We&apos;re polishing this page before launch. Thanks for bearing with us
                            while we prep something worthy of Valhalla.
                        </p>
                    </header>
                    <section className="rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5">
                        <p className="font-semibold text-foreground/60 text-sm uppercase tracking-[0.2em] dark:text-white/60">
                            Work in progress
                        </p>
                        <h2 className="mt-3 font-semibold text-2xl">This page is almost ready</h2>
                        <p className="mt-2 text-base text-foreground/70 dark:text-white/70">
                            The home experience is still under construction. We&apos;re locking in
                            final copy, visuals, and interactions. Expect frequent updates, and
                            check back soon to see the full release.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
