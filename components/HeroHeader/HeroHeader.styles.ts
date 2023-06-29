import { createStyles, rem } from '@mantine/core';
import { headerHeight } from '../Header/Header.styles';

export default createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage:
            'url(https://ragnarokbot.com/assets/img/header-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `calc(100vh - ${headerHeight})`,
    },

    container: {
        height: rem(700),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: `calc(${theme.spacing.xl} * 6)`,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
            height: rem(500),
            paddingBottom: `calc(${theme.spacing.xl} * 3)`,
        },
    },

    title: {
        color: theme.white,
        fontSize: rem(60),
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(40),
            lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
            lineHeight: 1.3,
        },
    },

    description: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
            fontSize: theme.fontSizes.sm,
        },
    },

    control: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,
        backgroundImage: `linear-gradient(to right, ${theme.colors[theme.primaryColor][6]}, ${theme.colors[theme.primaryColor][9]})`,
        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },

    buttonGroup: {
        display: 'flex',
        gap: '10px',
    },

    icon: {
        marginRight: '10px',
    },
}));
