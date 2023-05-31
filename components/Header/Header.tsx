import { useState } from 'react';
import { Header, Container, Anchor, Group, Burger, rem, Image, useMantineColorScheme, Tooltip,
    ActionIcon, ActionIconProps, Drawer, Paper, Box } from '@mantine/core';
import useStyles, { headerHeight } from "./Header.styles";
import { useDisclosure } from '@mantine/hooks';
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Link from "next/link";

interface IconProps extends ActionIconProps {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const Icon = ({ label, icon, href, ...others }: IconProps) => (
    <Tooltip label={label}>
      <ActionIcon variant="transparent" {...others}>
        <a href={href} target="_blank" rel="noreferrer">
          {icon}
        </a>
      </ActionIcon>
    </Tooltip>
);

interface LinkProps {
  label: string;
  link: string;
}

interface CustomHeaderProps {
  mainLinks: LinkProps[];
}

export function CustomHeader({ mainLinks }: CustomHeaderProps) {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const iconColor = colorScheme === 'dark' ? 'white' : 'black';

  const mainItems = mainLinks.map((item, index) => (
        <Anchor<'a'>
            href={item.link}
            key={item.label}
            className={cx(classes.mainLink, { [classes.mainLinkActive]: router.pathname === item.link })}
        >
            {item.label}
        </Anchor>
    ));

    const icons = (
        <Paper className={classes.icons}>
            <Link href="https://discord.gg/Q3ZhdRJ">
                <IconBrandDiscord size="1.8rem" stroke={1.2} color={iconColor} />
            </Link>
            <Link href="https://github.com/Valhalla-Development">
                <IconBrandGithub size="1.8rem" stroke={1.2} color={iconColor} />
            </Link>
            <ColorSchemeToggle />
        </Paper>
    );

    const mobileNavigation = (
        <Drawer
            opened={opened}
            onClose={toggle}
            padding={20}
            position="right"
            size={100}
        >
            <div className={classes.mobileNavigation}>
                <div className={classes.tabs}>
                  {mainItems}
                </div>
                {icons}
            </div>
        </Drawer>
    );

  return (
      <Header height={headerHeight} mb={120}>
        <Container className={classes.inner}>
          <Link href="/">
            <Image src='./favicon.svg' width='28' />
          </Link>
          <div className={classes.links}>
            <Group spacing={10} position="right" className={classes.mainLinks}>
              {mainItems}
              <div className={classes.iconContainer}>
                <Icon label="Discord" href="https://discord.gg/Q3ZhdRJ" icon={<IconBrandDiscord size="1.8rem" stroke={1.2} color={iconColor} />} />
              </div>
              <div className={classes.iconContainer}>
                <Icon label="GitHub" href="https://github.com/Valhalla-Development" icon={<IconBrandGithub size="1.8rem" stroke={1.2} color={iconColor} />} />
              </div>
                <ColorSchemeToggle />
            </Group>
          </div>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </Container>
          {mobileNavigation}
      </Header>
  );
}
