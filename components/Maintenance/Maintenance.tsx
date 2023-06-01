import { Title, Text } from '@mantine/core';
import classes from './Maintenance.module.css';
import Head from "next/head";

export function Maintenance() {
  return (
    <div className={classes.backgroundImage}>
        <Head>
            <title>Under Maintenance</title>
        </Head>
        <Title className={classes.title} mt={100}>
        Something {' '}
        <Text className={`${classes.gradientText}`} component="span">
          Big {' '} <br />
        </Text>
          is coming soon...
      </Title>
      <Text className={classes.description} size="lg" mx="auto" mt="xl">
          This page is currently under development<br />Check back soon!
      </Text>
    </div>
  );
}
