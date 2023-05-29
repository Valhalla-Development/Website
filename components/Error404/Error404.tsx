import { Title, Text, Button, Container, Group, rem } from '@mantine/core';
import Link from 'next/link';
import Head from 'next/head';
import useStyles from "./Error404.styles";

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
        Ye've stumbled upon a secret spot.
        <br />Unfortunately, it's just a 404 page. You might've mistyped the address, or the page got moved elsewhere.
      </Text>
      <Group position="center">
        <Link href="/">
          <Button variant="subtle" size="md">
            Click me to get back home!
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
