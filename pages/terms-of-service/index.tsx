import {
    Title, Text, Grid, Col, rem, Container,
} from '@mantine/core';

import useStyles from './Terms-of-Service.styles';

export default function termsOfService() {
    const { classes } = useStyles();

    return (
        <Container size="lg" className={classes.wrapper}>
            <div className={classes.wrapper}>
                <Grid gutter={80}>
                    <Col span={12} md={5}>
                        <Title className={classes.title} order={2}>
                            Terms of Service
                        </Title>
                        <Text c="dimmed">
                            These terms govern your use of our website. Please read them carefully before using our services.
                        </Text>
                    </Col>
                    <Col span={12} md={7}>
                        <h1>Terms of Service</h1>

                        <h2>Introduction</h2>
                        <p>
                            These Terms of Service ("Terms") govern your access to and use of our website. By accessing or using our website, you agree to be bound by these Terms and accept all legal consequences.
                        </p>

                        <h2>Changes to These Terms</h2>
                        <p>
                            We reserve the right to update or modify these Terms at any time, and will alert you to any changes by updating the "Last Updated" date of these Terms, and you waive any right to receive specific notice of each such change.
                        </p>

                        <h2>Prohibited Conduct</h2>
                        <p>
                            You agree not to use the website in a way that may cause, the website to be interrupted, damaged, rendered less efficient or such that the effectiveness or functionality of the website is in any way impaired.
                        </p>

                        <h2>Limitation of Liability</h2>
                        <p>
                            In no event shall we, our directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any errors, mistakes, or inaccuracies of content, etc.
                        </p>

                        <h2>Intellectual Property</h2>
                        <p>
                            Our website and all its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>

                        <h2>Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at ragnarlothbrokjr@proton.me.</p>
                    </Col>
                </Grid>
            </div>
        </Container>
    );
}
