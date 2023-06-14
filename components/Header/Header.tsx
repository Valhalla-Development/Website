import { useEffect } from "react";
import {
    Header,
    Container,
    Anchor,
    Group,
    Burger,
    Image,
    useMantineColorScheme,
    Tooltip,
    ActionIcon,
    ActionIconProps,
    Drawer,
    Paper,
    HoverCard,
    Center,
    Box,
    Text,
    Divider,
    SimpleGrid,
    Button,
    UnstyledButton,
    ThemeIcon,
    rem
} from "@mantine/core";
import useStyles, { headerHeight } from "./Header.styles";
import { useDisclosure } from "@mantine/hooks";
import { IconBook, IconBrandDiscord, IconBrandGithub, IconChartPie3, IconChevronDown, IconCode, IconCoin, IconFingerprint, IconNotification, IconWebhook } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { ReactNode } from "react";
import Link from "next/link";

interface IconProps extends ActionIconProps {
    label: string;
    icon: ReactNode;
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

const mockdata = [
    {
        icon: IconCode,
        title: "Paste Code",
        description: "Ragnars hastebin",
        link: "https://paste.valhalladev.org/"
    },
    {
        icon: IconWebhook,
        title: "API",
        description: "Valhalla api",
        link: "https://api.valhalladev.org/"
    },
    {
        icon: IconBook,
        title: "Dashboard",
        description: "Valhalla dashboard",
        link: "https://ragnarok.valhalladev.org/"
    }
];

export function CustomHeader({ mainLinks }: CustomHeaderProps) {
    const router = useRouter();
    const [opened, { toggle }] = useDisclosure(false);
    const { classes, cx, theme } = useStyles();
    const { colorScheme } = useMantineColorScheme();
    const iconColor = colorScheme === "dark" ? "white" : "black";

    const mainItems = mainLinks.map((item) => (
        <Anchor<"a"> href={item.link} key={item.label} className={cx(classes.mainLink, { [classes.mainLinkActive]: router.pathname === item.link })}>
            {item.label}
        </Anchor>
    ));

    const links = mockdata.map((item) => (
        <Anchor<"a"> href={item.link} key={item.title} className={classes.link}>
            <UnstyledButton className={classes.subLink} key={item.title}>
                <Group noWrap align="flex-start">
                    <ThemeIcon size={34} variant="default" radius="md">
                        <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
                    </ThemeIcon>
                    <div>
                        <Text size="sm" fw={500}>
                            {item.title}
                        </Text>
                        <Text size="xs" color="dimmed">
                            {item.description}
                        </Text>
                    </div>
                </Group>
            </UnstyledButton>
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
        <Drawer opened={opened} onClose={toggle} padding={20} position="right" size={100}>
            <div className={classes.mobileNavigation}>
                <div className={classes.tabs}>{mainItems}</div>
                {icons}
            </div>
        </Drawer>
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 576 && opened) {
                toggle();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [opened, toggle]);

    return (
        <Header height={headerHeight} mb={120}>
            <Container className={classes.inner}>
                <Link href="/">
                    <Image src="./favicon.svg" width="28" />
                </Link>
                <div className={classes.links}>
                    <Group spacing={10} position="right" className={classes.mainLinks}>
                        {mainItems}
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5} className={cx(classes.mainLink)}>
                                            Services
                                        </Box>
                                        <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                                <Group position="apart" px="md">
                                    <Text>Services</Text>
                                </Group>

                                <Divider my="sm" mx="-md" color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"} />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>

                                {/* <div className={classes.dropdownFooter}>
                                    <Group position="apart">
                                        <div>
                                            <Text fw={500} fz="sm">
                                                Get started
                                            </Text>
                                            <Text size="xs" color="dimmed">
                                                Their food sources have decreased, and their numbers
                                            </Text>
                                        </div>
                                        <Button variant="default">Get started</Button>
                                    </Group>
                                </div> */}
                            </HoverCard.Dropdown>
                        </HoverCard>
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
