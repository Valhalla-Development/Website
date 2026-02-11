export interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    repo: {
        href: string;
    };
    statusTag?: {
        text: string;
        variant?: "neutral" | "wip" | "archived";
    };
}

const ArrowIcon = () => (
    <svg
        aria-hidden="true"
        className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3 8h10M8.5 3.5 13 8l-4.5 4.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
        />
    </svg>
);

const ACCENT_GRADIENTS = [
    "radial-gradient(circle at 15% -10%, rgba(6,182,212,0.35) 0%, rgba(6,182,212,0.12) 40%, transparent 65%), radial-gradient(circle at 85% 0%, rgba(129,140,248,0.4) 0%, rgba(129,140,248,0.14) 50%, transparent 75%)",
    "radial-gradient(circle at 10% -20%, rgba(251,191,36,0.4) 0%, rgba(251,146,60,0.12) 45%, transparent 65%), radial-gradient(circle at 80% 10%, rgba(236,72,153,0.35) 0%, rgba(244,114,182,0.1) 45%, transparent 75%)",
    "radial-gradient(circle at 20% -15%, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.15) 40%, transparent 60%), radial-gradient(circle at 82% 5%, rgba(14,165,233,0.35) 0%, rgba(14,165,233,0.12) 45%, transparent 75%)",
    "radial-gradient(circle at 12% -18%, rgba(248,113,113,0.38) 0%, rgba(244,114,182,0.12) 40%, transparent 60%), radial-gradient(circle at 78% 5%, rgba(217,70,239,0.35) 0%, rgba(236,72,153,0.12) 48%, transparent 72%)",
] as const;

const buildAccentStyle = (seed: string) => {
    const hash = Array.from(seed).reduce((total, char) => total + char.charCodeAt(0), 0);
    const gradient = ACCENT_GRADIENTS[hash % ACCENT_GRADIENTS.length];
    return { background: gradient };
};

export default function ProjectCard({
    title,
    subtitle,
    description,
    tech,
    repo,
    statusTag,
}: ProjectCardProps) {
    const statusVariant = statusTag?.variant ?? "neutral";
    let statusBadgeClass = "border border-foreground/15 bg-foreground/5";
    if (statusVariant === "archived") {
        statusBadgeClass = "border border-foreground/10 bg-foreground/[0.1] text-foreground/60";
    } else if (statusVariant === "wip") {
        statusBadgeClass = "border border-amber-300 bg-amber-300/30 text-amber-200";
    }
    const accentStyle = buildAccentStyle(`${title}-${subtitle}`);
    return (
        <article className="group relative overflow-hidden rounded-[32px] border border-foreground/10 bg-foreground/[0.05] p-px shadow-[0_35px_120px_rgba(0,0,0,0.18)]">
            <div className="relative flex h-full flex-col gap-6 rounded-[30px] bg-background/95 p-8 backdrop-blur-xl">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen blur-2xl transition duration-700 group-hover:opacity-100"
                    style={accentStyle}
                />
                <div className="relative flex flex-wrap items-center gap-3 text-foreground/55 text-xs uppercase tracking-[0.3em]">
                    <span>{subtitle}</span>
                    {statusTag && (
                        <span
                            className={`rounded-full px-3 py-1 text-[0.65rem] tracking-[0.25em] ${statusBadgeClass}`}
                        >
                            {statusTag.text}
                        </span>
                    )}
                </div>
                <div className="relative space-y-3">
                    <h3 className="text-balance font-semibold text-3xl leading-tight">{title}</h3>
                    <p className="text-base text-foreground/80 leading-relaxed">{description}</p>
                </div>
                <div className="relative mt-auto flex flex-col gap-5">
                    <ul className="flex flex-wrap gap-2 text-foreground/80 text-sm">
                        {tech.map((item) => (
                            <li
                                className="rounded-full border border-foreground/15 bg-foreground/[0.04] px-3 py-1"
                                key={item}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a
                        className="group/cta inline-flex items-center gap-2 font-semibold text-foreground text-sm transition hover:text-foreground/70 focus-visible:outline-2 focus-visible:outline-foreground/40 focus-visible:outline-offset-4"
                        href={repo.href}
                        rel="noreferrer"
                        target="_blank"
                    >
                        View on GitHub
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </article>
    );
}
