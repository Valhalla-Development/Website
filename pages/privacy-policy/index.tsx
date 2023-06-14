import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, rem, Container } from "@mantine/core";
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(36),
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === "dark" ? theme.white : theme.black
    }
}));

const features = [
    {
        icon: IconReceiptOff,
        title: "Free and open source",
        description: "All packages are published under MIT license, you can use Mantine in any project"
    },
    {
        icon: IconFileCode,
        title: "TypeScript based",
        description: "Build type safe applications, all components and hooks export types"
    },
    {
        icon: IconCircleDotted,
        title: "No annoying focus ring",
        description: "With new :focus-visible selector focus ring will appear only when user navigates with keyboard"
    },
    {
        icon: IconFlame,
        title: "Flexible",
        description: "Customize colors, spacing, shadows, fonts and many other settings with global theme object"
    }
];

export default function FeaturesTitle() {
    const { classes } = useStyles();

    const items = features.map((feature) => (
        <div key={feature.title}>
            <ThemeIcon size={44} radius="md" variant="gradient" gradient={{ deg: 133, from: "blue", to: "cyan" }}>
                <feature.icon size={rem(26)} stroke={1.5} />
            </ThemeIcon>
            <Text fz="lg" mt="sm" fw={500}>
                {feature.title}
            </Text>
            <Text c="dimmed" fz="sm">
                {feature.description}
            </Text>
        </div>
    ));

    return (
        <Container size="lg" className={classes.wrapper}>
            <div className={classes.wrapper}>
                <Grid gutter={80}>
                    <Col span={12} md={5}>
                        <Title className={classes.title} order={2}>
                            Comprehensive Privacy Policy
                        </Title>
                        <Text c="dimmed">
                            We aim to be as transparent as possible with our users. This privacy policy is designed to help you understand what information we collect and how we use it.
                        </Text>
                    </Col>
                    <Col span={12} md={7}>
                        <h1>Privacy Policy</h1>

                        <h2>Introduction</h2>
                        <p>This Privacy Policy describes how we collect, use, and disclose your personal information when you use our website.</p>

                        <h2>Information We Collect</h2>
                        <p>
                            We collect certain information when you visit our website, including your IP address, browser type, and referring URL. We also collect personal information that you provide
                            to us, such as your name and email address.
                        </p>

                        <h2>Use of Information</h2>
                        <p>
                            We use the collected information to improve our website, respond to your inquiries, and provide you with updates and marketing materials if you have opted to receive them.
                        </p>

                        <h2>Disclosure of Information</h2>
                        <p>
                            We may share your personal information with third-party service providers who assist us in operating our website and conducting our business. We may also disclose your
                            information if required by law or to protect our rights or the rights of others.
                        </p>

                        <h2>Security</h2>
                        <p>
                            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or
                            electronic storage is 100% secure.
                        </p>

                        <h2>Changes to this Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised version will be effective when it is posted.</p>

                        <h2>Contact Us</h2>
                        <p>If you have any questions or concerns about this Privacy Policy, please contact us at ragnarlothbrokjr@proton.me</p>
                    </Col>
                </Grid>
            </div>
        </Container>
    );
}
