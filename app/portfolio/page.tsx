export default function Portfolio() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="mx-auto max-w-6xl px-6 pt-20 lg:pt-24">
                <div className="space-y-8">
                    <header className="space-y-3">
                        <p className="text-foreground/40 text-sm uppercase tracking-[0.3em]">
                            Valhalla Development
                        </p>
                        <h1 className="font-bold text-5xl">Portfolio</h1>
                        <p className="max-w-2xl text-foreground/70 text-lg">
                            We&apos;re curating highlights from recent builds and case studies. Hang
                            tight, this page will soon showcase the full roster.
                        </p>
                    </header>
                    <section className="rounded-3xl border border-foreground/10 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5">
                        <p className="font-semibold text-foreground/60 text-sm uppercase tracking-[0.2em] dark:text-white/60">
                            Work in progress
                        </p>
                        <h2 className="mt-3 font-semibold text-2xl">Portfolio coming soon</h2>
                        <p className="mt-2 text-base text-foreground/70 dark:text-white/70">
                            We&apos;re finishing write-ups, visuals, and stats for each project.
                            Check back shortly to explore the work, or reach out if you need a
                            preview in the meantime.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
