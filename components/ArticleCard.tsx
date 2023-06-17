import { IconShare, IconBrandFacebook, IconBrandTwitter } from "@tabler/icons-react";
import { Card, Image, Text, ActionIcon, Badge, Group, Center, Avatar, createStyles, rem, Popover, Button } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
    card: {
        position: "relative",
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    },

    rating: {
        position: "absolute",
        top: theme.spacing.xs,
        right: rem(12),
        pointerEvents: "none"
    },

    title: {
        display: "block",
        marginTop: theme.spacing.md,
        marginBottom: rem(5)
    },

    action: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
        })
    },

    iconButtonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    iconButton: {
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 10px',
    },

    footer: {
        marginTop: theme.spacing.md
    }
}));

interface ArticleCardProps {
    image: string;
    link: string;
    title: string;
    description: string;
    rating: string;
    author: {
        name: string;
        image: string;
    };
}

export function ArticleCard({ className, image, link, title, description, author, rating, ...others }: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<"div">, keyof ArticleCardProps>) {
    const { classes, cx, theme } = useStyles();
    const linkProps = { href: link, target: "_blank", rel: "noopener noreferrer" };

    const [sharePopoverOpened, setSharePopoverOpened] = useState(false);
    const url = "placeholder";

    return (
        <Card withBorder radius="md" className={cx(classes.card, className)} {...others}>
            <Card.Section>
                <a {...linkProps}>
                    <Image src={image} height={180} />
                </a>
            </Card.Section>

            <Badge className={classes.rating} variant="gradient" gradient={{ from: "yellow", to: "red" }}>
                {rating}
            </Badge>

            <Text className={classes.title} fw={500} component="a" {...linkProps}>
                {title}
            </Text>

            <Text fz="sm" color="dimmed" lineClamp={4}>
                {description}
            </Text>

            <Group position="apart" className={classes.footer}>
                <Center>
                    <Avatar src={author.image} size={24} radius="xl" mr="xs" />
                    <Text fz="sm" inline>
                        {author.name}
                    </Text>
                </Center>

                <Group spacing={8} mr={0}>
                    <Popover opened={sharePopoverOpened} onChange={setSharePopoverOpened}>
                        <Popover.Target>
                            <ActionIcon className={classes.action} onClick={() => setSharePopoverOpened((o) => !o)}>
                                <IconShare size="1rem" />
                            </ActionIcon>
                        </Popover.Target>
                        <Popover.Dropdown>
                            <div className={classes.iconButtonContainer}>
                                <Button
                                    component="a"
                                    href={`https://twitter.com/intent/tweet?text=${url}`}
                                    variant="outline"
                                    className={classes.iconButton}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconBrandTwitter size="1.25rem" />
                                </Button>
                                <Button
                                    component="a"
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                                    variant="outline"
                                    className={classes.iconButton}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconBrandFacebook size="1.25rem" />
                                </Button>
                            </div>
                        </Popover.Dropdown>
                    </Popover>
                </Group>
            </Group>
        </Card>
    );
}
