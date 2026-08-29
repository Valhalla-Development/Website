import type { Metadata } from "next";
import ProjectCard from "../components/project-card";
import { projects } from "../data/projects";

export const metadata: Metadata = {
    description:
        "Open-source automation, media tooling, and Discord-native builds from Valhalla Development.",
    title: "Portfolio",
};

const activeProjects = projects.filter((project) => project.statusTag?.variant !== "archived");
const archivedProjects = projects.filter((project) => project.statusTag?.variant === "archived");

export default function Portfolio() {
    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-20 lg:pt-24">
                <section className="grid gap-12 lg:grid-cols-[1.5fr,1fr]">
                    <div>
                        <p className="text-foreground/60 text-sm uppercase tracking-[0.35em]">
                            Valhalla Development
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                            Real-time automation, media tooling, and Discord-native builds
                        </h1>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="font-semibold text-2xl tracking-tight">Active</h2>
                    <div className="grid gap-6 lg:grid-cols-2">
                        {activeProjects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </section>

                {archivedProjects.length > 0 && (
                    <section className="space-y-6">
                        <h2 className="font-semibold text-2xl tracking-tight">Archive</h2>
                        <div className="grid gap-6 lg:grid-cols-2">
                            {archivedProjects.map((project) => (
                                <ProjectCard key={project.title} {...project} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
