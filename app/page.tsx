import Link from "next/link";
import ProjectCard from "./components/project-card";
import { projects } from "./data/projects";

const baseStats = [
    { label: "Core team members", value: "4" },
    { label: "Primary stack", value: "TypeScript + Rust" },
];

const featuredProjects = projects
    .filter((project) => project.statusTag?.variant !== "archived")
    .slice(0, 2);

export default function Home() {
    const stats = [{ label: "Open-source projects", value: String(projects.length) }, ...baseStats];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 pt-20 lg:gap-20 lg:pt-24">
                <section className="grid gap-12 lg:grid-cols-[1.4fr,1fr]">
                    <div>
                        <p className="text-foreground/55 text-sm uppercase tracking-[0.35em]">
                            Valhalla Development
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-6xl">
                            Building software that keeps online communities moving.
                        </h1>
                        <p className="mt-6 max-w-2xl text-foreground/80 text-lg leading-relaxed">
                            We design and ship automation, infrastructure, and Discord-native tools
                            that help teams stay reliable, responsive, and human as they scale.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Link
                                className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-foreground px-6 py-3 font-semibold text-background text-sm transition hover:opacity-90"
                                href="/portfolio"
                            >
                                View portfolio
                            </Link>
                            <Link
                                className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background px-6 py-3 font-semibold text-foreground text-sm transition hover:bg-foreground/5"
                                href="/about"
                            >
                                About Valhalla
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-foreground/10 bg-linear-to-br from-foreground/5 via-background/60 to-background/90 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.14)] backdrop-blur-lg">
                        <p className="text-foreground/55 text-xs uppercase tracking-[0.4em]">
                            At a glance
                        </p>
                        <div className="mt-8 space-y-6">
                            {stats.map((item) => (
                                <div
                                    className="border-foreground/10 border-b pb-5 last:border-0 last:pb-0"
                                    key={item.label}
                                >
                                    <p className="font-semibold text-3xl">{item.value}</p>
                                    <p className="mt-2 text-foreground/70 text-sm">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="space-y-8 pb-4">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-foreground/55 text-xs uppercase tracking-[0.4em]">
                                Selected work
                            </p>
                            <h2 className="mt-3 font-semibold text-3xl tracking-tight">
                                What we are shipping
                            </h2>
                        </div>
                        <Link
                            className="font-semibold text-foreground text-sm underline-offset-4 transition hover:text-foreground/70 hover:underline"
                            href="/portfolio"
                        >
                            See the full portfolio
                        </Link>
                    </div>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
