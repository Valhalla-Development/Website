import { createStyles, rem } from '@mantine/core';

export const headerHeight = rem(84);

export default createStyles((theme) => ({
  inner: {
    height: headerHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: headerHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: `calc(${theme.spacing.sm} * -1)`,
  },

  mainLink: {
    textTransform: 'uppercase',
    fontSize: rem(13),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `${rem(7)} ${theme.spacing.sm}`,
    fontWeight: 700,
    borderBottom: `${rem(2)} solid transparent`,
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },

  iconContainer: {
    marginLeft: '10px',
    marginRight: '10px',
  },

  icons: {
    display: 'flex',
    justifyContent: 'center',
    padding: '25px 10px',
    alignItems: 'center',
    flexFlow: "wrap",
    gap: 5
  },

  mobileNavigation: {
    height: 'calc(100vh - 100px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  tabs: {
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'wrap',
  },
}));
