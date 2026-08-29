import Link from "next/link";

export default function NotFound() {
    return (
        <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center gap-6 px-6 pt-20">
            <p className="text-foreground/70 text-sm uppercase tracking-[0.35em]">404</p>
            <h1 className="text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                This page is not here.
            </h1>
            <p className="max-w-xl text-foreground/80 text-lg leading-relaxed">
                The link may be old, or the page never existed. Try the homepage or the portfolio.
            </p>
            <div className="flex flex-wrap items-center gap-3">
                <Link
                    className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-foreground px-6 py-3 font-semibold text-background text-sm transition hover:opacity-90"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background px-6 py-3 font-semibold text-foreground text-sm transition hover:bg-foreground/5"
                    href="/portfolio"
                >
                    Portfolio
                </Link>
            </div>
        </div>
    );
}
