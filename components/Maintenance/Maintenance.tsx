import { Title, Text, Anchor, BackgroundImage } from '@mantine/core';
import useStyles from './Maintenance.styles';

export function Maintenance() {
  const { classes } = useStyles();

  return (
    <>
      <BackgroundImage src="https://www.ragnarokbot.com/upload/files/bg_1685371454.png">
      <Title className={classes.title} align="center" mt={100}>
        Something {' '}
        <Text inherit variant="gradient" component="span">
          Big {' '}
        </Text>
          is coming...
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
          This page is currently under development<br />Come back soon!
      </Text>
      </BackgroundImage>
    </>
  );
}
