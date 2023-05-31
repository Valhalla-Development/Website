import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  backgroundImage: {
    backgroundImage: `url(/bg.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 80,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },

  gradientText: {
    background: 'linear-gradient(180deg, red, blue)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  description: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: "sans-serif",
    fontSize: 20,
    marginBottom: 100,

    [theme.fn.smallerThan('md')]: {
      fontSize: 20,
    },
  },
}));
