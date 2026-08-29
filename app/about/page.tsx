import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    description:
        "How Valhalla Development started, what drives the studio, and the work we take on with communities.",
    title: "About",
};

const drivers = [
    {
        color: "bg-rose-500",
        text: "Bridge the gap between complex technology and effortless user experiences.",
    },
    {
        color: "bg-sky-400",
        text: "Design systems that grow with communities instead of constraining them.",
    },
    {
        color: "bg-amber-300",
        text: "Keep learning, iterating, and evolving right alongside the people we serve.",
    },
];

const milestones = [
    {
        description:
            "Valhalla Development began as a simple idea: to create tools that empower individuals and communities online.",
        title: "Idea to intention",
    },
    {
        description:
            "We recognized the potential of a connected world and set out to bridge the distance between technology and the people who use it.",
        title: "Gap bridged",
    },
    {
        description:
            "The platform matured into a robust API layer, giving partners a dependable foundation to build their own experiences.",
        title: "API becomes backbone",
    },
    {
        description:
            "Discord Bots followed, translating our values into tangible helpers that keep digital communities thriving.",
        title: "Community-first automation",
    },
    {
        description:
            "Today, the website ties every initiative together, inviting visitors into our process and spotlighting the people behind the work.",
        title: "A living gateway",
    },
];

export default function About() {
    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-20 lg:pt-24">
                <section className="grid gap-12 lg:grid-cols-[1.5fr,1fr]">
                    <div>
                        <p className="text-foreground/60 text-sm uppercase tracking-[0.35em]">
                            Valhalla Development
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                            Building digital infrastructure that still feels human.
                        </h1>
                        <p className="mt-6 text-foreground/80 text-lg leading-relaxed">
                            Valhalla Development began as a simple idea: to craft solutions that
                            empower individuals and communities online. We saw the potential of a
                            connected world and took it upon ourselves to bridge the gap between
                            technology and the user. Today, that spirit still guides every line of
                            code we ship.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-[32px] border border-foreground/10 bg-linear-to-br from-foreground/5 via-background/60 to-background/90 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.14)] backdrop-blur-lg">
                            <div className="relative flex flex-col gap-6">
                                <div
                                    className="absolute top-5 -left-2 flex min-w-40 items-center sm:min-w-48"
                                    style={{ maxWidth: "16rem", width: "33%" }}
                                >
                                    <div
                                        className="pointer-events-none absolute -left-3 bg-linear-to-r from-rose-500/55 via-sky-400/35 to-transparent opacity-80 blur-2xl"
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
                                        Word from the founder
                                    </p>
                                    <p className="mt-8 text-balance font-semibold text-2xl leading-snug">
                                        Tools that empower individuals and communities to feel at
                                        home online.
                                    </p>
                                    <p className="mt-4 text-foreground/85 text-sm leading-relaxed">
                                        Valhalla Development was born from a desire to grow
                                        alongside the community. Collaboration should feel easier
                                        than shepherding a solo project, so this studio is my
                                        promise to build tools with people, not just for them.
                                    </p>
                                    <div className="mt-6 flex items-center gap-4">
                                        <Image
                                            alt="Ragnar's GitHub profile"
                                            className="h-16 w-16 rounded-3xl border border-white/10 object-cover shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                                            height={64}
                                            src="https://avatars.githubusercontent.com/u/30740511?v=4"
                                            width={64}
                                        />
                                        <div>
                                            <p className="font-semibold">Ragnar Lothbrok</p>
                                            <p className="text-foreground/60 text-sm">
                                                Founder, Valhalla Development
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="relative overflow-hidden rounded-[40px] border border-foreground/10 bg-background/80 p-10 shadow-[0_25px_90px_rgba(0,0,0,0.12)]">
                        <div className="pointer-events-none absolute inset-x-6 top-0 h-48 rounded-full bg-linear-to-r from-rose-500/15 via-transparent to-sky-500/15 blur-3xl" />
                        <div className="relative grid gap-12 lg:grid-cols-[1.2fr,1fr]">
                            <div className="flex flex-col gap-10">
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)] backdrop-blur">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <p className="text-foreground/55 text-xs uppercase tracking-[0.35em]">
                                            What drives us
                                        </p>
                                        <span className="text-foreground/60 text-xs">
                                            Principles we check against every build.
                                        </span>
                                    </div>
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {drivers.map((driver) => (
                                            <div
                                                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/85 px-4 py-3 text-left text-foreground/80 text-sm shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                                                key={driver.text}
                                            >
                                                <span
                                                    className={`h-2.5 w-2.5 rounded-full ${driver.color}`}
                                                />
                                                <span>{driver.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative flex flex-col gap-10">
                                    <div
                                        className="absolute top-5 -left-2 flex min-w-40 items-center sm:min-w-48"
                                        style={{ maxWidth: "16rem", width: "33%" }}
                                    >
                                        <div
                                            className="pointer-events-none absolute -left-3 bg-linear-to-r from-rose-500/55 via-sky-400/35 to-transparent opacity-80 blur-2xl"
                                            style={{ height: "1.5rem", width: "7rem" }}
                                        />
                                        <div className="relative flex w-full items-center">
                                            <div className="h-0.75 w-10 bg-linear-to-r from-transparent to-rose-500/55" />
                                            <div className="h-0.75 flex-1 bg-linear-to-r from-rose-500/55 via-sky-400/45 to-amber-300/45 shadow-[0_0_18px_rgba(244,63,94,0.55)]" />
                                            <div className="h-0.75 w-8 bg-linear-to-r from-amber-300/45 to-transparent" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-foreground/50 text-xs uppercase tracking-[0.35em]">
                                            Our story
                                        </p>
                                        <h2 className="mt-8 font-semibold text-3xl tracking-tight">
                                            Still evolving, always curious
                                        </h2>
                                        <p className="mt-5 text-base text-foreground/75 leading-relaxed">
                                            What started as a curiosity project has grown into a
                                            multi-surface platform spanning infrastructure,
                                            community tools, and digital storytelling. Each release
                                            is another chance to refine how we listen, respond, and
                                            raise the bar for the teams that trust us.
                                        </p>
                                        <p className="mt-4 text-base text-foreground/75 leading-relaxed">
                                            The work ahead is ambitious, but our north star stays
                                            the same: make the internet kinder, clearer, and more
                                            capable for everyone navigating it.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex flex-col gap-10">
                                <div
                                    className="absolute top-5 -left-2 flex min-w-40 items-center sm:min-w-48"
                                    style={{ maxWidth: "16rem", width: "33%" }}
                                >
                                    <div
                                        className="pointer-events-none absolute -left-3 bg-linear-to-r from-rose-500/55 via-sky-400/35 to-transparent opacity-80 blur-2xl"
                                        style={{ height: "1.5rem", width: "7rem" }}
                                    />
                                    <div className="relative flex w-full items-center">
                                        <div className="h-0.75 w-10 bg-linear-to-r from-transparent to-rose-500/55" />
                                        <div className="h-0.75 flex-1 bg-linear-to-r from-rose-500/55 via-sky-400/45 to-amber-300/45 shadow-[0_0_18px_rgba(244,63,94,0.55)]" />
                                        <div className="h-0.75 w-8 bg-linear-to-r from-amber-300/45 to-transparent" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-foreground/50 text-xs uppercase tracking-[0.35em]">
                                        Milestones
                                    </p>
                                    <ol className="mt-8 space-y-6">
                                        {milestones.map((milestone, index) => (
                                            <li className="flex gap-4" key={milestone.title}>
                                                <span className="font-semibold text-foreground/45 text-sm">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <div>
                                                    <h3 className="font-semibold text-lg">
                                                        {milestone.title}
                                                    </h3>
                                                    <p className="mt-2 text-foreground/70 text-sm">
                                                        {milestone.description}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
