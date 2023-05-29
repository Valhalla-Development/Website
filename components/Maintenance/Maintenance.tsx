import { Title, Text } from '@mantine/core';
import useStyles from './Maintenance.styles';
import Head from "next/head";

export function Maintenance() {
  const { classes } = useStyles();

  return (
    <div className={classes.backgroundImage}>
        <Head>
            <title>Under Maintenance</title>
        </Head>
        <Title className={classes.title} align="center" mt={100}>
        Somethin' {' '}
        <Text className={`${classes.gradientText}`} component="span">
          Big {' '} <br />
        </Text>
          is comin' soon, matey!
      </Title>
      <Text className={classes.description} align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
          This page is currently under development.<br />Swim back later and check again!
      </Text>
    </div>
  );
}
