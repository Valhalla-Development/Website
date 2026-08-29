import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    description: "The people behind Valhalla Development.",
    title: "Team",
};

const teamMembers = [
    {
        avatar: "https://avatars.githubusercontent.com/u/30740511?v=4",
        bio: "Ragnar keeps the studio anchored to a people-first mission, stewarding the core platform and the partnerships that trust it.",
        email: "ragnarlothbrokjr@proton.me",
        location: "Manchester, UK",
        name: "Ragnar",
        role: "Founder & Systems Architect",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/46864390?v=4",
        bio: "zeen wrangles the backend, guarding infrastructure, tuning pipelines, and making sure every automation lands with confidence.",
        email: "mrdennis1212@pm.me",
        location: "Germany, DE",
        name: "zeen",
        role: "Developer",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/68955155?v=4",
        bio: "iMidnight handles the front-of-house, shaping the visual language of our interfaces and sweating the details in every interaction.",
        email: "mohaidarus@gmail.com",
        location: "London, UK",
        name: "iMidnight",
        role: "Developer",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/18649687?v=4",
        bio: "Danel keeps the pipes humming and reminds us that reliability is a love language for every community we support.",
        email: "danelsonic123@serverargentina.com",
        location: "Buenos Aires, AR",
        name: "DanelSonic123",
        role: "Systems Administrator",
    },
];

export default function Team() {
    return (
        <div className="relative min-h-screen bg-background text-foreground">
            <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-20 lg:pt-24">
                <section className="grid gap-12 lg:grid-cols-[1.5fr,1fr]">
                    <div>
                        <p className="text-foreground/70 text-sm uppercase tracking-[0.35em]">
                            Valhalla Development
                        </p>
                        <h1 className="mt-4 text-balance font-semibold text-4xl tracking-tight sm:text-5xl">
                            Meet the crew keeping human warmth in shipping software.
                        </h1>
                    </div>
                </section>

                <section>
                    <h2 className="sr-only">Team members</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {teamMembers.map((member) => (
                            <article
                                className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/85 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
                                key={member.email}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="h-full w-full bg-linear-to-br from-rose-500/10 via-transparent to-sky-500/10" />
                                </div>
                                <div className="relative flex items-start gap-4">
                                    <Image
                                        alt={`${member.name} avatar`}
                                        className="h-20 w-20 rounded-[28px] border border-white/10 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                                        height={80}
                                        src={member.avatar}
                                        width={80}
                                    />
                                    <div>
                                        <p className="text-foreground/70 text-xs uppercase tracking-[0.35em]">
                                            {member.role}
                                        </p>
                                        <h3 className="mt-2 font-semibold text-2xl">
                                            {member.name}
                                        </h3>
                                        <p className="text-foreground/60 text-sm">
                                            {member.location}
                                        </p>
                                    </div>
                                </div>
                                <p className="relative mt-5 text-foreground/80 text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                                <div className="relative mt-6 border-foreground/10 border-t pt-4 text-sm">
                                    <a
                                        className="text-foreground hover:text-rose-400"
                                        href={`mailto:${member.email}`}
                                    >
                                        {member.email}
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
