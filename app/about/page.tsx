import Image from "next/image";

const principles = [
    {
        tag: "Mindset",
        title: "People-first tooling",
        description:
            "We begin every project by asking how it empowers the communities that trust Valhalla Development.",
    },
    {
        tag: "Delivery",
        title: "Reliable infrastructure",
        description:
            "Resilience, clarity, and observability are built in from day one so our partners can ship with confidence.",
    },
];

const focusAreas = [
    {
        title: "API",
        tag: "Infrastructure",
        summary:
            "Our robust API serves as the backbone of our services, enabling seamless integration and interaction across platforms.",
        details:
            "It is designed to be both flexible and scalable, adapting gracefully to the demands of a wide range of applications.",
    },
    {
        title: "Discord Bots",
        tag: "Community",
        summary:
            "Built with the community in mind, our Discord Bots enhance user experience on the servers we support.",
        details:
            "They deliver thoughtful automations so administrators can cultivate safer, more engaging spaces.",
    },
    {
        title: "Website",
        tag: "Experience",
        summary:
            "Our website is the gateway to our services and products, a clear window into the people and the craft behind Valhalla Development.",
        details:
            "It remains intentionally simple to navigate, yet rich enough to communicate our vision, team, and commitment to excellence.",
    },
];

const milestones = [
    {
        title: "Idea to intention",
        description:
            "Valhalla Development began as a simple idea: to create tools that empower individuals and communities online.",
    },
    {
        title: "Gap bridged",
        description:
            "We recognized the potential of a connected world and set out to bridge the distance between technology and the people who use it.",
    },
    {
        title: "API becomes backbone",
        description:
            "The platform matured into a robust API layer, giving partners a dependable foundation to build their own experiences.",
    },
    {
        title: "Community-first automation",
        description:
            "Discord Bots followed, translating our values into tangible helpers that keep digital communities thriving.",
    },
    {
        title: "A living gateway",
        description:
            "Today, the website ties every initiative together, inviting visitors into our process and spotlighting the people behind the work.",
    },
];

export default function About() {
    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-32 pb-24 lg:pt-40">
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

                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            {principles.map((principle) => (
                                <div
                                    className="rounded-3xl border border-foreground/10 bg-background/70 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.07)] backdrop-blur"
                                    key={principle.title}
                                >
                                    <p className="text-foreground/55 text-xs uppercase tracking-[0.35em]">
                                        {principle.tag}
                                    </p>
                                    <h3 className="mt-3 font-semibold text-xl">
                                        {principle.title}
                                    </h3>
                                    <p className="mt-3 text-foreground/70 text-sm">
                                        {principle.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-foreground/10 bg-linear-to-br from-foreground/5 via-background/60 to-background/90 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.14)] backdrop-blur-lg">
                        <p className="text-foreground/55 text-xs uppercase tracking-[0.4em]">
                            What drives us
                        </p>
                        <p className="mt-4 font-semibold text-2xl leading-snug">
                            Tools that empower individuals and communities to feel at home online.
                        </p>
                        <ul className="mt-8 space-y-4 text-foreground/75 text-sm">
                            <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-rose-500" />
                                <span>
                                    Bridge the gap between complex technology and effortless user
                                    experiences.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                                <span>
                                    Design systems that grow with communities instead of
                                    constraining them.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                                <span>
                                    Keep learning, iterating, and evolving right alongside the
                                    people we serve.
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="relative overflow-hidden rounded-[40px] border border-foreground/10 bg-background/95 p-8 shadow-[0_45px_140px_rgba(0,0,0,0.18)]">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="-top-16 absolute left-6 h-40 w-40 rounded-full bg-rose-500/15 blur-3xl" />
                        <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-sky-500/15 blur-3xl" />
                    </div>
                    <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start">
                        <Image
                            alt="Ragnar's GitHub profile"
                            className="h-24 w-24 rounded-[40px] border border-white/10 object-cover shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                            height={96}
                            src="https://avatars.githubusercontent.com/u/30740511?v=4"
                            width={96}
                        />
                        <div className="space-y-4">
                            <p className="text-foreground/55 text-xs uppercase tracking-[0.45em]">
                                Word from the founder
                            </p>
                            <p className="text-balance text-foreground/90 text-lg leading-relaxed">
                                Valhalla Development was born from a desire to grow alongside the
                                community. Collaboration should feel easier than shepherding a solo
                                project, so this studio is my promise to build tools with people,
                                not just for them.
                            </p>
                            <div>
                                <p className="font-semibold">Ragnar Lothbrok</p>
                                <p className="text-foreground/60 text-sm">
                                    Founder, Valhalla Development
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-foreground/55 text-xs uppercase tracking-[0.35em]">
                                Product surface
                            </p>
                            <h2 className="mt-3 font-semibold text-3xl tracking-tight">
                                Ecosystem in focus
                            </h2>
                        </div>
                        <p className="max-w-xl text-foreground/70 text-sm">
                            Every touchpoint reflects the same mission: design dependable
                            experiences that make the internet a better place.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {focusAreas.map((area) => (
                            <article
                                className="group hover:-translate-y-1 relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/80 p-6 shadow-[0_15px_60px_rgba(0,0,0,0.08)] transition"
                                key={area.title}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="h-full w-full bg-linear-to-br from-rose-500/10 via-transparent to-sky-500/10" />
                                </div>
                                <div className="relative">
                                    <span className="text-[11px] text-foreground/60 uppercase tracking-[0.4em]">
                                        {area.tag}
                                    </span>
                                    <h3 className="mt-4 font-semibold text-2xl">{area.title}</h3>
                                    <p className="mt-4 text-foreground/80 text-sm leading-relaxed">
                                        {area.summary}
                                    </p>
                                    <p className="mt-3 text-foreground/70 text-sm">
                                        {area.details}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
                    <div className="rounded-3xl border border-foreground/10 bg-background/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
                        <p className="text-foreground/50 text-xs uppercase tracking-[0.35em]">
                            Our story
                        </p>
                        <h2 className="mt-4 font-semibold text-3xl tracking-tight">
                            Still evolving, always curious
                        </h2>
                        <p className="mt-5 text-base text-foreground/75 leading-relaxed">
                            What started as a curiosity project has grown into a multi-surface
                            platform spanning infrastructure, community tools, and digital
                            storytelling. Each release is another chance to refine how we listen,
                            respond, and raise the bar for the teams that trust us.
                        </p>
                        <p className="mt-4 text-base text-foreground/75 leading-relaxed">
                            The work ahead is ambitious, but our north star stays the same: make the
                            internet kinder, clearer, and more capable for everyone navigating it.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-foreground/10 bg-background/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
                        <p className="text-foreground/50 text-xs uppercase tracking-[0.35em]">
                            Milestones
                        </p>
                        <ol className="mt-6 space-y-6">
                            {milestones.map((milestone, index) => (
                                <li className="flex gap-4" key={milestone.title}>
                                    <span className="font-semibold text-foreground/50 text-sm">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-lg">{milestone.title}</h3>
                                        <p className="mt-2 text-foreground/70 text-sm">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>
            </main>
        </div>
    );
}
