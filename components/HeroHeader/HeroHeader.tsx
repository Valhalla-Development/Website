import {
    Overlay, Container, Title, Button, Text,
} from '@mantine/core';
import { IconBrandDiscord } from '@tabler/icons-react';
import useStyles from './HeroHeader.styles';

export function HeroHeader() {
    const { classes } = useStyles();

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <Title className={classes.title}>Ragnarok</Title>
                <Text className={classes.description} size="xl" mt="xl">
                    Ragnarok is a versatile Discord bot, equipped with a wide range of features from Moderation to a Ticket System, and a custom built Economy System.
                </Text>

                <div className={classes.buttonGroup}>
                    <Button
                        size="xl"
                        radius="xl"
                        className={classes.control}
                        component="a"
                        href="#features"
                    >
                        View Features
                    </Button>
                    <Button
                        variant="gradient"
                        size="xl"
                        radius="xl"
                        className={classes.control}
                        onClick={() => window.open('https://discordapp.com/oauth2/authorize?client_id=508756879564865539&scope=bot%20applications.commands&permissions=415306870006', '_blank')}
                    >
                        Invite Ragnarok
                    </Button>
                    <Button
                        variant="gradient"
                        size="xl"
                        radius="xl"
                        className={classes.control}
                        onClick={() => window.open('https://discord.gg/Q3ZhdRJ', '_blank')}
                    >
                        <IconBrandDiscord size="1.8rem" stroke={1.2} className={classes.icon} />Support Server
                    </Button>
                </div>
            </Container>
        </div>
    );
}
