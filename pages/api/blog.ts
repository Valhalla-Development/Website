import { NextApiRequest, NextApiResponse } from 'next';

export default function hander(req: NextApiRequest, res: NextApiResponse) {
    const posts = [
        {
            image: 'https://www.ragnarokbot.com/upload/files/AirReps_1700500825.png',
            title: 'AirRepsGPT Discord Bot',
            description:
                '<section>'
                + '    <p>'
                + 'On 10th November, I embarked on the development journey of AirRepsGPT for our vibrant AirReps community. This endeavor was a monumental task, demanding significant time and effort to elevate the quality of our product. Over the course of 10 days, a total of 33 hours were dedicated by me, being the sole developer working on the Discord Bot itself, to expanding the capabilities of AirRepsGPT.'
                + '    </p>'
                + '    <p>'
                + 'In this short span, we witnessed remarkable progress, transitioning from version 1.0.0 to the more robust 1.2.22. The relentless dedication to improvement doesn\'t cease here; we have ambitious plans to continually nurture AirReps into something truly exceptional.'
                + '    </p>'
                + '    <p>'
                + 'Below is a curated list of some noteworthy changelog entries, highlighting the advancements made for the benefit of our end users.'
                + '    </p>'
                + '</section>'
                + '<section>'
                + '    <h2>AirRepsGPT Changelog</h2>'
                + '    <!-- Query Limits -->'
                + '    <h3>Query Limits</h3>'
                + '    <ul>'
                + '        <li>Users now enjoy a maximum of <strong>4</strong> queries per day, resetting 24 hours after the initial usage.</li>'
                + '    </ul>'
                + '    <!-- Bug Fixes -->'
                + '    <h3>Bug Fixes</h3>'
                + '    <ul>'
                + '        <li>Resolved an issue where the bot would occasionally misinterpret replies to its messages.</li>'
                + '        <li>Users can now seamlessly reply to the bot without the need to directly mention it.</li>'
                + '    </ul>'
                + '    <!-- Help Command -->'
                + '    <h3>Help Command</h3>'
                + '    <ul>'
                + '        <li>The staff menu in the help command is now exclusively accessible to staff members.</li>'
                + '    </ul>'
                + '    <!-- Queries Command -->'
                + '    <h3>Queries Command</h3>'
                + '    <ul>'
                + '        <li>Buttons are discreetly hidden for non-staff members, enhancing the interface\'s clarity.</li>'
                + '        <li>Command buttons won\'t appear if used on oneself, streamlining self-interactions.</li>'
                + '        <li>The reset button is intelligently disabled for whitelisted or blacklisted users, maintaining system integrity.</li>'
                + '        <li>Moderators no longer possess access to the whitelist button, aligning with user privilege hierarchy.</li>'
                + '        <li>Any user can now seamlessly view queries for other users, fostering transparency.</li>'
                + '        <li>A resolved bug now ensures that non-staff members can effectively utilize the queries command.</li>'
                + '    </ul>'
                + '    <!-- Additional Functionality -->'
                + '    <h3>Additional Functionality</h3>'
                + '    <ul>'
                + '        <li>Implemented a sophisticated message-splitting mechanism to handle cases where a message exceeds the Discord message limit.</li>'
                + '        <li>Introduced a blacklist command, allowing administrators to curate user interactions effectively.</li>'
                + '        <li>Fixed a humorous bug where users could whitelist themselves, ensuring a touch of levity in the changelog. 🤣</li>'
                + '        <li>Each user is now treated as a unique thread, optimizing the user experience.</li>'
                + '        <li>Incorporated logic to check for existing queued queries per user, providing a clear message in case of duplicates.</li>'
                + '        <li>Added a reset command for enhanced user control and system management.</li>'
                + '    </ul>'
                + '    <!-- General Fixes -->'
                + '    <h3>General Fixes</h3>'
                + '    <ul>'
                + '        <li>Addressed a bug where pinging the bot without additional context prompted an unnecessary response.</li>'
                + '        <li>Implemented a new function to process queries, efficiently stripping any mentions. If the length is 0, it returns false.</li>'
                + '    </ul>'
                + '</section>',
            author: {
                name: 'Ragnar Lotbrok',
                image: 'https://avatars.githubusercontent.com/u/30740511',
            },
            project: 'AirReps',
            time: 1700498246,
            slug: 'airreps-1-2-22',
        },
        {
            image: 'https://www.ragnarokbot.com/upload/files/Valhalla_1687797020.png',
            title: 'Valhalla Introduction',
            description:
                '<section>'
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
                image: 'https://avatars.githubusercontent.com/u/30740511',
            },
            project: 'website',
            time: 1691340607,
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
