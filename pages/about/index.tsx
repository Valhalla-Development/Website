import { Badge, Group, Title, Text, Card, SimpleGrid, Container, rem } from "@mantine/core";
import { IconServer, IconUser, IconGlobe, TablerIconsProps } from "@tabler/icons-react";
import Head from "next/head";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import useStyles from "./About.styles";

const Icons = {
    IconServer,
    IconUser,
    IconGlobe
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
            <Head>
                <title>About Us</title>
            </Head>
            <Container size="lg" py="xl">
                <div className={classes.mainContainer}>
                    <Group position="center">
                        <Badge variant="filled" size="lg">
                            About us
                        </Badge>
                    </Group>

                    <Title order={2} className={classes.title} ta="center" mt="sm">
                        Valhalla Development
                    </Title>

                    <Text c="dimmed" className={classes.description} ta="center" mt="md">
                        Valhalla Development began as a simple idea - to create tools that empower individuals and communities online. We understood the potential of a connected world and took it upon
                        ourselves to craft solutions that bridge the gap between technology and user. Today, we continue our journey with the same spirit, constantly evolving and striving to make the
                        internet a better place.
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
                    title: "API",
                    description:
                        "Our robust API serves as the backbone of our services, enabling seamless integration and interaction across platforms. It has been designed to be both flexible and scalable, accommodating the needs of a wide range of applications.",
                    icon: "IconServer"
                },
                {
                    title: "Discord Bots",
                    description:
                        "Built with the community in mind, our Discord Bots enhances user experience on Discord servers. They provide a range of features and functionalities that help server administrators manage their communities more effectively.",
                    icon: "IconUser"
                },
                {
                    title: "Website",
                    description:
                        "Our website is the gateway to our services and products. It's designed to be user-friendly and informative, offering visitors an insight into our operations, our team, and our commitment to excellence.",
                    icon: "IconGlobe"
                }
            ]
        }
    };
};
