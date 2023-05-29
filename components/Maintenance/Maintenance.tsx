import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Maintenance.styles';

export function Maintenance() {
  const { classes } = useStyles();

  return (
    <div className={classes.backgroundImage}>
      <Title className={classes.title} align="center" mt={100}>
        Something {' '}
        <Text className={`${classes.gradientText}`} component="span">
          Big {' '} <br />
        </Text>
          is coming soon...
      </Title>
      <Text className={classes.description} align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
          This page is currently under development<br />Check back soon!
      </Text>
    </div>
  );
}
