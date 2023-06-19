import {
    Title, Text, Button, Container, Group,
} from '@mantine/core';
import Link from 'next/link';
import Head from 'next/head';
import useStyles from './Error404.styles';

export function Error404() {
    const { classes } = useStyles();

    return (
        <Container className={classes.root}>
            <Head>
                <title>404 Page Not Found</title>
            </Head>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>You have found a secret place.</Title>
            <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
            </Text>
            <Group position="center">
                <Link href="/">
                    <Button variant="subtle" size="md">
            Take me back to home page
                    </Button>
                </Link>
            </Group>
        </Container>
    );
}
