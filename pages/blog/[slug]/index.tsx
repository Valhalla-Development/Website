import {
    Col, Container, Grid, Title, Text, Image, Center, Avatar, Button,
} from '@mantine/core';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { IconBrandFacebook, IconBrandTwitter } from '@tabler/icons-react';
import { useState } from 'react';
import { modals } from '@mantine/modals';
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
    rating: string;
};

type APIResponse = {
    post: Post;
};

const displayDateTime = (() => new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
}).format(new Date()))();

export const getServerSideProps: GetServerSideProps<{
    post: Post;
}> = async (context) => {
    const { host } = context.req.headers;

    const { slug } = context.params as { slug: string };

    const protocol = host?.includes('localhost') ? 'http' : 'https';
    const url = `${protocol}://${host}/api/blog?slug=${slug}`;

    const data: APIResponse = await fetch(url)
        .then(async (res) => res.json())
        .catch((err) => console.log(err));

    console.log(data);

    if (!data?.post?.title) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post: data.post,
        },
    };
};

export default function Blog({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { classes } = useStyles();

    const [sharePopoverOpened, setSharePopoverOpened] = useState(false);

    const openModal = (platform: string) => modals.openConfirmModal({
        title: 'Are you sure?',
        children: <Text size="sm">This action will open a new tab to {platform}.</Text>,
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onConfirm: () => window.open(`https://twitter.com/intent/tweet?text=${'Hello'}`),
    });

    return (
        <Container size="lg" className={classes.wrapper}>
            <div className={classes.wrapper}>
                <Grid gutter={80}>
                    <Col span={12} md={5}>
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
                                {displayDateTime}
                            </Grid.Col>
                        </Grid>
                        <Grid
                            style={{
                                justifyContent: 'flex-end',
                            }}
                            mt={10}
                        >
                            <Button variant="outline" className={classes.iconButton} onClick={() => openModal('Twitter')}>
                                <IconBrandTwitter size="1.25rem" />
                            </Button>
                            <Button ml={0} variant="outline" className={classes.iconButton} onClick={() => openModal('Facebook')}>
                                <IconBrandFacebook size="1.25rem" />
                            </Button>
                        </Grid>
                    </Col>
                    <Col span={12} md={7}>
                        <Title className={classes.title} order={2}>
                            {post.title}
                        </Title>
                        {post.description.split('\n').map((paragraph, index) => (
                            <Text key={index} size="lg" className={classes.paragraph}>
                                {paragraph}
                            </Text>
                        ))}
                    </Col>
                </Grid>
            </div>
        </Container>
    );
}
