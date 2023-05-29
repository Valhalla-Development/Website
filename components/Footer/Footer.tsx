import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandDiscord } from '@tabler/icons-react';
import useStyles from "./Footer.styles";
import Link from 'next/link';
import { Image } from '@mantine/core';

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link href="/">
        <Image src='./favicon.svg' width='28' />
        </Link>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Link href="https://discord.gg/Q3ZhdRJ">
          <ActionIcon size="lg">
            <IconBrandDiscord size="2rem" stroke={1.2} />
          </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
