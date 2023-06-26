import { NextApiRequest, NextApiResponse } from 'next';

export default function hander(req: NextApiRequest, res: NextApiResponse) {
    const posts = [
        {
            image: 'https://i.imgur.com/Cij5vdL.png',
            title: 'Valhalla Development Introduction',
            description:
                '<h1>Valhalla Development Introduction</h1>\n'
                + '    <p>\n'
                + '        Welcome to Valhalla Development, a new chapter in the journey that started with the creation of Ragnarok in 2018. After creating three distinct Discord bots, I realized I didn\'t want to continue this journey alone. Valhalla Development is born out of the desire to create projects with the community, fostering collaboration and innovation.\n'
                + '    </p>\n'
                + '    <p>\n'
                + '        Our creations so far include three Discord bots:\n'
                + '        <ul>\n'
                + '            <li><strong>Ragnarok:</strong> A multipurpose bot that serves various needs of Discord users.</li>\n'
                + '            <li><strong>The Seer:</strong> A unique bot designed to monitor the online status of other bots.</li>\n'
                + '            <li><strong>Wilbur:</strong> A fun bot, ensuring you\'re always entertained on Discord.</li>\n'
                + '        </ul>\n'
                + '    </p>\n'
                + '    <p>\n'
                + '        Additionally, we offer an API available at <a href="https://api.valhalladev.org">https://api.valhalladev.org</a>, which provides various services to further enhance your experience.\n'
                + '    </p>\n'
                + '    <p>\n'
                + '        We invite you to join our community on Discord at <a href="https://discord.gg/Q3ZhdRJ">https://discord.gg/Q3ZhdRJ</a>. Your participation and feedback will help us to create more exciting projects and improve our current offerings.\n'
                + '    </p>\n'
                + '    <p>\n'
                + '        We\'re looking forward to having you join us in this exciting journey of creating and innovating together!\n'
                + '    </p>',
            author: {
                name: 'Ragnar Lotbrok',
                image: 'https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
            },
            rating: 'outstanding',
            slug: 'help',
        },
    ];

    req?.query?.slug
        ? res.status(200).json({
            post: posts.find((post) => post.slug === req.query.slug) || {},
        })
        : res.status(200).json({
            posts,
        });
}
