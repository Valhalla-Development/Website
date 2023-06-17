import { Grid, Container, TextInput, TextInputProps, ActionIcon, useMantineTheme, Pagination } from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import useStyles from "./Blog.styles";

import { ArticleCard } from "../../components/ArticleCard";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";

export default function Faq({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { classes } = useStyles();
    const [activePage, setPage] = useState(1);

    const chunk = (arr: any[], size: number) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
    const arrChunks = chunk(blog.posts, 4);
    const currentChunk = arrChunks[activePage - 1];

    return (
        <div className={classes.wrapper}>
            <Container size="lg">
                <Container size="sm">
                    <InputWithButton />
                </Container>
                <Grid
                    mt={40}
                    style={{
                        justifyContent: "center"
                    }}
                >
                    {currentChunk.map((post, index) => (
                        <Grid.Col xs={3} key={index}>
                            <ArticleCard image={post.image} link={post.link} title={post.title} description={post.description} author={post.author} rating={post.rating} />
                        </Grid.Col>
                    ))}
                </Grid>
                <Pagination
                    mt={50}
                    value={activePage}
                    onChange={setPage}
                    total={blog.pages}
                    align="center"
                    style={{
                        justifyContent: "center"
                    }}
                />
            </Container>
        </div>
    );
}

function InputWithButton(props: TextInputProps) {
    const theme = useMantineTheme();

    return (
        <TextInput
            icon={<IconSearch size="1.1rem" stroke={1.5} />}
            radius="xl"
            size="md"
            rightSection={
                <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                    {theme.dir === "ltr" ? <IconArrowRight size="1.1rem" stroke={1.5} /> : <IconArrowLeft size="1.1rem" stroke={1.5} />}
                </ActionIcon>
            }
            placeholder="Search questions"
            rightSectionWidth={42}
            {...props}
        />
    );
}

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
    items: number;
    pages: number;
};

export const getServerSideProps: GetServerSideProps<{
    blog: APIResponse;
}> = async (context) => {
    const host = context.req.headers.host;

    let url = host === "localhost:3000" ? "http://localhost:3000/api/blog" : `https://${host}/api/blog`;

    const data: APIResponse = await fetch(url)
        .then(async (res) => {
            return res.json();
        })
        .catch((err) => console.log(err));

    return {
        props: {
            blog: data
        }
    };
};
