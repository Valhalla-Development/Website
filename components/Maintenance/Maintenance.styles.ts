import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  backgroundImage: {
    backgroundImage: `url(https://www.ragnarokbot.com/upload/files/bg_1685371454.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
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

    [theme.fn.smallerThan('md')]: {
      fontSize: 20,
    },
  },
}));
