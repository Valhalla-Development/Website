import ProjectCard from "../components/project-card";
import { projects } from "../data/projects";

export default function Portfolio() {
    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-20 lg:pt-24">
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
                    <div className="grid gap-6 lg:grid-cols-2">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
