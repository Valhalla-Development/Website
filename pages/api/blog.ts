import { NextApiRequest, NextApiResponse } from "next";

export default function hander(req: NextApiRequest, res: NextApiResponse) {
    const posts = [
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar midnuight",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "midnuight Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        },
        {
            image: "https://i.imgur.com/Cij5vdL.png",
            link: "",
            title: "Resident Evil Village review",
            description:
                "Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.",

            author: {
                name: "Ragnar Lotbrok",
                image: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            },
            rating: "outstanding",
            slug: "resident-evil-village-review"
        }
    ];

    req?.query?.slug
        ? res.status(200).json({
              post: posts.find((post) => post.slug === req.query.slug) || {}
          })
        : res.status(200).json({
              posts
          });
}
