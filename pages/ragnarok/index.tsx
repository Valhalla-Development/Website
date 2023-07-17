import React from 'react'
import { Container } from '@mantine/core'
import ParallaxCard from '../../components/Cards/ParallaxCard/ParallaxCard'
import useStyles from './Ragnarok.styles'
import { HeroHeader } from '../../components/HeroHeader/HeroHeader'
import { createStyles, Badge, Group, Title, Text, Card, Grid, rem } from '@mantine/core'
export default function Ragnarok() {
    const { classes } = useStyles()

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
    ]

    return (
        <>
            <HeroHeader />
            <div
                style={{
                    margin: '30px auto',
                    width: 'fit-content',
                }}
            >
                <Container size="lg" py="xl">
                    <Group position="center">
                        <Badge variant="filled" size="lg">
                            Best company ever
                        </Badge>
                    </Group>
                    <Title order={2} className={classes.title} ta="center" mt="sm">
                        Integrate effortlessly with any technology stack
                    </Title>
                    <Text c="dimmed" className={classes.description} ta="center" mt="md">
                        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.
                    </Text>
                </Container>
                <Grid
                    mt={40}
                    style={{
                        justifyContent: 'center',
                        gap: rem(40),
                    }}
                >
                    {cards.map((card, index) => (
                        <ParallaxCard key={index} {...card} />
                    ))}
                </Grid>
            </div>
            <Container id="features" size="xl" className={classes.cardContainer}></Container>
        </>
    )
}
