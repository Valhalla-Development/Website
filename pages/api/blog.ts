import { NextApiRequest, NextApiResponse } from 'next';

export default function hander(req: NextApiRequest, res: NextApiResponse) {
    const posts = [
        {
            image: 'https://www.ragnarokbot.com/upload/files/Valhalla_1687797020.png',
            title: 'Valhalla Introduction',
            description:
                '<h2>Valhalla Development Introduction</h2>'
                + '<section>'
                + '    <p>'
                + '        Welcome to Valhalla Development, a new chapter in the journey that started with the creation of Ragnarok in 2018. After creating three distinct Discord bots, I realized I didn\'t want to continue this journey alone. Valhalla Development is born out of the desire to create projects with the community, fostering collaboration and innovation.'
                + '    </p>'
                + '</section>'
                + '<section>'
                + '    <p>Our creations so far include three Discord bots:</p>'
                + '    <ul>'
                + '        <li><strong>Ragnarok:</strong> A multipurpose bot that serves various needs of Discord users.</li>'
                + '        <li><strong>The Seer:</strong> A unique bot designed to monitor the online status of other bots.</li>'
                + '        <li><strong>Wilbur:</strong> A fun bot, ensuring you\'re always entertained on Discord.</li>'
                + '    </ul>'
                + '</section>'
                + '<section>'
                + '    <p>'
                + '        Additionally, we offer an API available <a href="https://api.valhalladev.org" aria-label="Link to Valhalla Development API" target="_blank" rel="noreferrer">here</a>, which provides various services to further enhance your experience.'
                + '    </p>'
                + '</section>'
                + '<section>'
                + '    <p>'
                + '        We invite you to join our <a href="https://discord.gg/Q3ZhdRJ" aria-label="Link to Valhalla Development Discord" target="_blank" rel="noreferrer">community on Discord</a>. Your participation and feedback will help us to create more exciting projects and improve our current offerings.'
                + '    </p>'
                + '</section>'
                + '<section>'
                + '    <p>'
                + '        We\'re looking forward to having you join us in this exciting journey of creating and innovating together!'
                + '    </p>'
                + '</section>',
            author: {
                name: 'Ragnar Lotbrok',
                image: 'https://cdn.discordapp.com/avatars/151516555757223936/e4f075a62b5e2719c356ef1be855fa9f.webp?size=2048',
            },
            project: 'website',
            slug: 'valhalla-introduction',
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
