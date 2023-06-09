import {
    IconShare, IconBrandFacebook, IconBrandTwitter, IconCopy, IconCheck,
} from '@tabler/icons-react';
import {
    Card, Image, Text, ActionIcon, Badge, Group, Center, Avatar, createStyles, rem, Popover, Button,
} from '@mantine/core';
import { useState, ComponentPropsWithoutRef } from 'react';
import { useClipboard } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { modals } from '@mantine/modals';

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    project: {
        position: 'absolute',
        top: theme.spacing.xs,
        right: rem(12),
        pointerEvents: 'none',
    },

    title: {
        display: 'block',
        marginTop: theme.spacing.md,
        marginBottom: rem(5),
    },

    action: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }),
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
        marginTop: theme.spacing.md,
    },
}));

interface ArticleCardProps {
    image: string;
    link: string;
    title: string;
    description: string;
    project: string;
    author: {
        name: string;
        image: string;
    };
    slug: string;
    blogUrl: string;
}

interface Gradient {
    from: string;
    to: string;
}

interface GradientMap {
    [key: string]: Gradient;
}

export function ArticleCard({
    className, image, title, description, author, project, slug, blogUrl, ...others
}: ArticleCardProps & Omit<ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
    const { classes, cx } = useStyles();
    const linkProps = { href: `/blog/${slug}`, target: '_blank', rel: 'noopener noreferrer' };
    const clipboard = useClipboard({ timeout: 500 });
    const stripHtmlRegex = description.replace(/<[^<]+?>/g, ' ');
    const [sharePopoverOpened, setSharePopoverOpened] = useState(false);

    const openModal = (platform: string) => modals.openConfirmModal({
        title: 'Are you sure?',
        children: <Text size="sm">This action will open a new tab to {platform}.</Text>,
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: () => {
            const url = platform === 'Twitter'
                ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} (${blogUrl}${slug})`)}`
                : `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl + slug)}`;
            window.open(url);
        },
    });

    const gradients: GradientMap & { default: Gradient } = {
        website: { from: 'blue', to: 'gray' },
        ragnarok: { from: 'red', to: 'blue' },
        wilbur: { from: 'blue', to: 'red' },
        theseer: { from: 'green', to: 'gray' },
        default: { from: 'yellow', to: 'red' },
    };

    const gradient = gradients[project.toLowerCase()] || gradients.default;

    return (
        <Card withBorder radius="md" className={cx(classes.card, className)} {...others}>
            <Card.Section>
                <a {...linkProps}>
                    <Image src={image} height={180} />
                </a>
            </Card.Section>

            <Badge className={classes.project} variant="gradient" gradient={gradient}>
                {project}
            </Badge>

            <Text className={classes.title} fw={500} component="a" {...linkProps}>
                {title}
            </Text>

            <Text fz="sm" color="dimmed" lineClamp={4}>
                {stripHtmlRegex}
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
                                <Button variant="outline" className={classes.iconButton} onClick={() => openModal('Twitter')}>
                                    <IconBrandTwitter size="1.25rem" />
                                </Button>
                                <Button variant="outline" className={classes.iconButton} onClick={() => openModal('Facebook')}>
                                    <IconBrandFacebook size="1.25rem" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className={classes.iconButton}
                                    color={clipboard.copied ? 'teal' : 'blue'}
                                    onClick={() => {
                                        clipboard.copy(`${blogUrl}${slug}`);

                                        notifications.show({
                                            title: 'Copied to clipboard',
                                            message: '',
                                            color: 'teal',
                                            icon: <IconCheck size="1rem" />,
                                            autoClose: 1500,
                                        });
                                    }}
                                >
                                    <IconCopy size="1.25rem" />
                                </Button>
                            </div>
                        </Popover.Dropdown>
                    </Popover>
                </Group>
            </Group>
        </Card>
    );
}
