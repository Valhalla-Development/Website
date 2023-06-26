import {
    Col, Container, Grid, Title, Text, Image, Avatar, Button, Badge,
} from '@mantine/core';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ModalsProvider, modals } from '@mantine/modals';
import {
    IconBrandFacebook, IconBrandTwitter, IconCheck, IconCopy,
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useClipboard } from '@mantine/hooks';
import useStyles from './Blog.styles';

type Post = {
    image: string;
    link: string;
    title: string;
    description: string;
    author: {
        name: string;
        image: string;
    };
    project: string;
};

type APIResponse = {
    post: Post;
};

interface Gradient {
    from: string;
    to: string;
}

interface GradientMap {
    [key: string]: Gradient;
}

export const getServerSideProps: GetServerSideProps<{
    post: Post;
    blogUrl: string;
    displayDateTime: string;
}> = async (context) => {
    const { host } = context.req.headers;

    const { slug } = context.params as { slug: string };

    const protocol = host?.includes('localhost') ? 'http' : 'https';
    const url = `${protocol}://${host}/api/blog?slug=${slug}`;

    const data: APIResponse = await fetch(url)
        .then(async (res) => res.json())
        .catch((err) => console.log(err));

    const blogUrl = `${protocol}://${host}/blog/${slug}`;

    if (!data?.post?.title) {
        return {
            notFound: true,
        };
    }

    const displayDateTime = (() => new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    }).format(new Date()))();

    return {
        props: {
            post: data.post,
            blogUrl,
            displayDateTime,
        },
    };
};

export default function Blog({ post, blogUrl, displayDateTime }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { classes } = useStyles();
    const clipboard = useClipboard({ timeout: 500 });

    const openModal = (platform: string) => modals.openConfirmModal({
        title: 'Are you sure?',
        children: <Text size="sm">This action will open a new tab to {platform}.</Text>,
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: () => {
            const url = platform === 'Twitter'
                ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${post.title} (${blogUrl})`)}`
                : `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`;
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

    const gradient = gradients[post.project.toLowerCase()] || gradients.default;

    return (
        <Container size="lg" className={classes.wrapper}>
            <div className={classes.wrapper}>
                <Grid gutter={80}>
                    <Col span={12} md={5} className={classes.grid}>
                        <Image src={post.image} alt={post.title} radius={10} />
                        <Grid
                            style={{
                                alignItems: 'center',
                            }}
                        >
                            <Grid.Col xs={6}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: 8,
                                    }}
                                >
                                    <Avatar src={post.author.image} size={24} radius="xl" mr="xs" />
                                    <Text fz="sm" inline>
                                        {post.author.name}
                                    </Text>
                                </div>
                            </Grid.Col>
                            <Grid.Col
                                xs={6}
                                style={{
                                    textAlign: 'right',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: 8,
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <Text fz="sm" inline>
                                        {displayDateTime}
                                    </Text>
                                </div>
                            </Grid.Col>
                        </Grid>
                        <ModalsProvider>
                            <Grid
                                style={{
                                    justifyContent: 'flex-end',
                                }}
                                mt={10}
                            >
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
                                        clipboard.copy(blogUrl);

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
                            </Grid>
                        </ModalsProvider>
                    </Col>
                    <Col span={12} md={7}>
                        <div style={{ position: 'relative' }}>
                            <div className={classes.project}>
                                <Badge className={classes.project} variant="gradient" gradient={gradient}>
                                    {post.project}
                                </Badge>
                            </div>
                            <Title className={classes.title} order={2} style={{
                                width: 'fit-content',
                            }}>
                                {post.title}
                                <hr />
                            </Title>
                        </div>
                        {post.description.split('\n').map((paragraph, index) => (
                            <Text key={index} size="lg" className={classes.paragraph}
                                dangerouslySetInnerHTML={{
                                    __html: paragraph,
                                }}
                            ></Text>
                        ))}
                    </Col>

                </Grid>
            </div>
        </Container>
    );
}
