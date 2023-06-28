import React from 'react';
import { Container } from '@mantine/core';
import ParallaxCard from '../../components/ParallaxCard/ParallaxCard';
import useStyles from './Ragnarok.styles';

export default function Ragnarok() {
    const { classes } = useStyles();

    const cards = [
        {
            title: 'Economy',
            description: 'A complete economy, custom built from the ground up with features including crop growing, stealing & games!',
            image: 'https://www.ragnarokbot.com/assets/img/functions/eco.png',
        },
        {
            title: 'Fun',
            description: 'A collection of commands that are fun and useful, from calculators to crypto, Trakt integration and more.',
            image: 'https://www.ragnarokbot.com/assets/img/functions/eco.png',
        },
        {
            title: 'Informative',
            description: 'We provide a number of commands to support the user and provide them with stats on themselves and their usage.',
            image: 'https://www.ragnarokbot.com/assets/img/functions/eco.png',
        },
        {
            title: 'Moderation',
            description: 'Commands to make moderation of users that much easier. Includes ban, kick, poll and other handy options.',
            image: 'https://www.ragnarokbot.com/assets/img/functions/eco.png',
        },
    ];

    return (
        <Container size="xl" className={classes.cardContainer}>
            {cards.map((card, index) => (
                <ParallaxCard key={index} {...card} />
            ))}
        </Container>
    );
}
