import { Image, Accordion, Grid, Col, Container, Title } from "@mantine/core";
import useStyles from "./FAQ.styles";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Question = {
    question: string;
    answer: string;
    id: string;
};

export default function Faq({ questions }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                    <Col span={12} md={6}>
                        <Image src="./faq.svg" alt="Frequently Asked Questions" />
                    </Col>
                    <Col span={12} md={6}>
                        <Title order={2} ta="left" className={classes.title}>
                            Frequently Asked Questions
                        </Title>

                        <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                            {questions.map((question, index) => {
                                return (
                                    <Accordion.Item className={classes.item} value={question.id} key={index}>
                                        <Accordion.Control>{question.question}</Accordion.Control>
                                        <Accordion.Panel>{question.answer}</Accordion.Panel>
                                    </Accordion.Item>
                                );
                            })}
                        </Accordion>
                    </Col>
                </Grid>
            </Container>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<{
    questions: Question[];
}> = async () => {
    return {
        props: {
            questions: [
                {
                    question: "Are the bots open source?",
                    answer: "The Seer, Wilbur and the API are open source but we also host them for you so you can use them!",
                    id: "open-source"
                },
                {
                    question: "How can I get access to the API?",
                    answer: "If you want to get access to our API please join our Discord Server and open a ticket so we can create a API key for you!",
                    id: "api-access"
                },
                {
                    question: "Are costs involved with using the API?",
                    answer: "No, the API is free to usessssss!",
                    id: "api-costs"
                }
            ]
        }
    };
};
