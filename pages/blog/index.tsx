import {
    Grid, Container, TextInput, TextInputProps, Pagination,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { ModalsProvider } from '@mantine/modals';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState } from 'react';
import useStyles from './Blog.styles';
import { ArticleCard } from '../../components/ArticleCard';

type APIResponse = {
    posts: {
        image: string;
        link: string;
        title: string;
        description: string;
        author: {
            name: string;
            image: string;
        };
        rating: string;
    }[];
};

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

export const getServerSideProps: GetServerSideProps<{
    blog: APIResponse;
}> = async (context) => {
    const { host } = context.req.headers;
    const protocol = host?.includes('localhost') ? 'http' : 'https';
    const url = `${protocol}://${host}/api/blog`;

    const data: APIResponse = await fetch(url)
        .then(async (res) => res.json())
        .catch((err) => console.log(err));

    return {
        props: {
            blog: data,
        },
    };
};

function InputWithButton(props: TextInputProps) {
    return (
        <TextInput
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
            radius="xl"
            size="md"
            // rightSection={
            //     <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
            //         {theme.dir === "ltr" ? <IconArrowRight size="1.1rem" stroke={1.5} /> : <IconArrowLeft size="1.1rem" stroke={1.5} />}
            //     </ActionIcon>
            // }
            placeholder="Search questions"
            rightSectionWidth={42}
            {...props}
        />
    );
}

export default function Faq({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { classes } = useStyles();
    const [posts, setPosts] = useState(blog.posts);
    const [activePage, setPage] = useState(1);

    const chunk = (arr: Post[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
    const arrChunks = chunk(posts, 4);

    const currentChunk = arrChunks[activePage - 1];

    return (
        <div className={classes.wrapper}>
            <Container size="lg">
                <Container size="sm">
                    <InputWithButton
                        placeholder="Search articles"
                        style={{
                            justifyContent: 'center',
                        }}
                        onChange={(event) => {
                            setPage(1);
                            if (!event.currentTarget.value) return setPosts(blog.posts);

                            const filtered = blog.posts.filter((post) => {
                                const searchValue = event.currentTarget.value.toLowerCase();
                                const titleMatch = post.title.toLowerCase().includes(searchValue);
                                const descriptionMatch = post.description.toLowerCase().includes(searchValue);
                                const authorMatch = post.author.name.toLowerCase().includes(searchValue);
                                const reviewMatch = post.rating.toLowerCase().includes(searchValue);

                                return titleMatch || descriptionMatch || authorMatch || reviewMatch;
                            });

                            filtered.sort((postA, postB) => {
                                const searchValue = event.currentTarget.value.toLowerCase();
                                const titleMatchA = postA.title.toLowerCase().includes(searchValue);
                                const titleMatchB = postB.title.toLowerCase().includes(searchValue);
                                const descriptionMatchA = postA.description.toLowerCase().includes(searchValue);
                                const descriptionMatchB = postB.description.toLowerCase().includes(searchValue);
                                const authorMatchA = postA.author.name.toLowerCase().includes(searchValue);
                                const authorMatchB = postB.author.name.toLowerCase().includes(searchValue);
                                const reviewMatchA = postA.rating.toLowerCase().includes(searchValue);
                                const reviewMatchB = postB.rating.toLowerCase().includes(searchValue);

                                // Sort by highest match
                                if (titleMatchA !== titleMatchB) {
                                    return titleMatchB ? 1 : -1;
                                } if (descriptionMatchA !== descriptionMatchB) {
                                    return descriptionMatchB ? 1 : -1;
                                } if (authorMatchA !== authorMatchB) {
                                    return authorMatchB ? 1 : -1;
                                } if (reviewMatchA !== reviewMatchB) {
                                    return reviewMatchB ? 1 : -1;
                                }

                                // If all matches are the same, maintain the original order
                                return 0;
                            });

                            setPosts(filtered);
                        }}
                    />
                </Container>
                <ModalsProvider>
                    <Grid
                        mt={40}
                        style={{
                            justifyContent: 'center',
                        }}
                    >
                        {currentChunk?.length ? (
                            currentChunk.map((post, index) => (
                                <Grid.Col xs={3} key={index}>
                                    <ArticleCard image={post.image} link={post.link} title={post.title} description={post.description} author={post.author} rating={post.rating} />
                                </Grid.Col>
                            ))
                        ) : (
                            <p>No results found</p>
                        )}
                    </Grid>
                </ModalsProvider>
                <Pagination
                    mt={50}
                    value={activePage}
                    onChange={setPage}
                    total={Math.floor(posts.length / 4) + 1}
                    align="center"
                    style={{
                        justifyContent: 'center',
                    }}
                />
            </Container>
        </div>
    );
}
