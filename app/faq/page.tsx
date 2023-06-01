import {
  Container,
  Title,
} from "@mantine/core";

import {
  Accordion,
  Grid,
  Col,
  Image,
} from "@mantine/next";

import classes from "./FAQ.module.css";

export default function Faq() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image src='./faq.svg' alt="Frequently Asked Questions" />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="separated"
            >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>Are the bots open source?</Accordion.Control>
                <Accordion.Panel>
                  The Seer, Wilbur and the API are open source but we also host
                  them for you so you can use them!
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                  How can I get access to the API?
                </Accordion.Control>
                <Accordion.Panel>
                  If you want to get access to our API please join our Discord
                  Server and open a ticket so we can create a API key for you!
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                  Are costs involved with using the API?
                </Accordion.Control>
                <Accordion.Panel>No, the API is free to use!</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}
