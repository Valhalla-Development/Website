import { Container, Group, ActionIcon, rem, Tooltip, ActionIconProps, useMantineColorScheme } from '@mantine/core';
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react';
import useStyles from "./Footer.styles";
import Link from 'next/link';
import { Image } from '@mantine/core';
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";

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

export function Footer() {
  const { classes } = useStyles();
    const { colorScheme } = useMantineColorScheme();
    const iconColor = colorScheme === 'dark' ? 'white' : 'black';

    return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Link href="/">
        <Image src='./favicon.svg' width='28' />
        </Link>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <div className={classes.iconContainer}>
            <Icon label="Discord" href="https://discord.gg/Q3ZhdRJ" icon={<IconBrandDiscord size="1.8rem" stroke={1.2} color={iconColor} />} />
          </div>
          <div className={classes.iconContainer}>
            <Icon label="GitHub" href="https://github.com/Valhalla-Development" icon={<IconBrandGithub size="1.8rem" stroke={1.2} color={iconColor} />} />
          </div>
          <ColorSchemeToggle />
        </Group>
      </Container>
    </div>
  );
}
