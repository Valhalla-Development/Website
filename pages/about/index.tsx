import { createStyles, Badge, Group, Title, Text, Card, SimpleGrid, Container, rem } from "@mantine/core";
import { IconGauge, IconUser, IconCookie, TablerIconsProps } from "@tabler/icons-react";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import useStyles from "./About.styles";

const Icons = {
    IconGauge,
    IconUser,
    IconCookie
};

export default function FeaturesCards({ features }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { classes, theme } = useStyles();
    const feature = features.map((feature) => {
        const Icon = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<TablerIconsProps>;
        return (
            <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
                <Icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
                <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                    {feature.title}
                </Text>
                <Text fz="sm" c="dimmed" mt="sm">
                    {feature.description}
                </Text>
            </Card>
        );
    });

    return (
        <>
            <div
                style={{
                    backgroundImage: "url(/bg.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "20vh"
                }}
            ></div>
            <Container size="lg" py="xl" mt={-170}>
                <div
                    style={{
                        background: "#25262b",
                        padding: "50px",
                        borderRadius: "10px",
                        border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`
                    }}
                >
                    <Group position="center">
                        <Badge variant="filled" size="lg">
                            About us
                        </Badge>
                    </Group>

                    <Title
                        order={2}
                        className={classes.title}
                        ta="center"
                        mt="sm"
                        style={{
                            wordBreak: "break-word"
                        }}
                    >
                        Ragnarok Development
                    </Title>

                    <Text c="dimmed" className={classes.description} ta="center" mt="md">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi at ex modi architecto laudantium natus est repellendus?
                    </Text>
                </div>

                <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
                    {feature}
                </SimpleGrid>
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<{
    features: {
        title: string;
        description: string;
        icon: string;
    }[];
}> = async (context) => {
    return {
        props: {
            features: [
                {
                    title: "Extreme performance",
                    description: "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
                    icon: "IconGauge"
                },
                {
                    title: "Privacy focused",
                    description: "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
                    icon: "IconUser"
                },
                {
                    title: "No third parties",
                    description: "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
                    icon: "IconCookie"
                }
            ]
        }
    };
};
