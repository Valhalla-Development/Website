import {
    Paper, Text, Image, Avatar, Badge, Container,
} from '@mantine/core';
import useStyles from './Blog.styles';

type PostProps = {
    post: {
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
};

export function Blog({ post }: PostProps) {
    const { classes } = useStyles();

    return (
        <Container size="lg" className={classes.container}>
            <Paper shadow="xs">
                <div className={classes.authorContainer}>
                    <Avatar className={classes.authorImage} size="md" src={post.author.image} alt={post.author.name} />
                    <Text>{post.author.name}</Text>
                    <Badge variant="gradient" gradient={{ from: 'yellow', to: 'red' }} className={classes.project}>
                        {post.project}
                    </Badge>
                </div>
                <div className={classes.heroImageWrapper}>
                    <Image className={classes.heroImage} src={post.image} alt={post.title} />
                </div>
                <Text className={classes.title} size="xl" weight={500}>{post.title}</Text>
                <Container>
                    <Text>{post.description}</Text>
                </Container>
            </Paper>
        </Container>
    );
}
