import {
    Image, Accordion, Grid, Col, Container, Title,
} from '@mantine/core';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import useStyles from './FAQ.styles';

type Question = {
    question: string;
    answer: string;
    id: string;
};

export const getServerSideProps: GetServerSideProps<{
    questions: Question[];
}> = async () => ({
    props: {
        questions: [
            {
                question: 'Are your bots open source?',
                answer: 'Yes, both Seer and Wilbur are open source. We also provide hosting services for these bots for your convenience!',
                id: 'open-source',
            },
            {
                question: 'How do I gain access to the API?',
                answer: 'To gain access to our API, please join our <a href="https://discord.gg/Q3ZhdRJ" target="_blank" rel="noopener noreferrer">Discord Server</a> and raise a ticket. We will assist you in creating an API key.',
                id: 'api-access',
            },
            {
                question: 'Does using the API incur any costs?',
                answer: 'No, our API is completely free to use!',
                id: 'api-costs',
            },
        ],
    },
});

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
                            {questions.map((question, index) => (
                                <Accordion.Item className={classes.item} value={question.id} key={index}>
                                    <Accordion.Control>{question.question}</Accordion.Control>
                                    <Accordion.Panel>
                                        <div dangerouslySetInnerHTML={{ __html: question.answer }} />
                                    </Accordion.Panel>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Col>
                </Grid>
            </Container>
        </div>
    );
}
