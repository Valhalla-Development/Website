import {
    Container, Group, ActionIcon, Tooltip, ActionIconProps, useMantineColorScheme, Image,
} from '@mantine/core';
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import useStyles from './Footer.styles';

interface IconProps extends ActionIconProps {
  label: string;
  icon: ReactNode;
  href: string;
}

interface FooterProps {
  footerLinks: { link: string; label: string }[];
}

const Icon = ({
    label, icon, href, ...others
}: IconProps) => (
    <Tooltip label={label}>
        <ActionIcon variant="transparent" {...others}>
            <a href={href} target="_blank" rel="noreferrer">
                {icon}
            </a>
        </ActionIcon>
    </Tooltip>
);

export function Footer({ footerLinks }: FooterProps) {
    const router = useRouter();
    const { classes, cx } = useStyles();
    const { colorScheme } = useMantineColorScheme();
    const iconColor = colorScheme === 'dark' ? 'white' : 'black';

    const items = footerLinks.map((link) => (
        <Link
            className={cx(classes.anchor, { [classes.mainLinkActive]: router.pathname === link.link })}
            key={link.label}
            href={link.link}
        >
            {link.label}
        </Link>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Link href="/">
                    <Image src='./favicon.svg' width='28' />
                </Link>
                <Group className={classes.links}>{items}</Group>
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
