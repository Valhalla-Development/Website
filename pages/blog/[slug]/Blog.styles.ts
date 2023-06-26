import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        [theme.fn.smallerThan('md')]: {
            paddingTop: 10,
        },
        paddingTop: 30,
    },

    iconButton: {
        width: 35,
        height: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 10px',
        borderRadius: '100%',
        padding: 0,
        marginLeft: 0,
    },

    paragraph: {
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        '& a': {
            textDecoration: 'none',
            color: theme.colorScheme === 'dark' ? '#4287f5' : '#1a0dab',
            transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
            '&:visited': {
                color: theme.colorScheme === 'dark' ? '#4287f5' : '#1a0dab',
                textDecoration: 'none',
            },
            '&:hover, &:focus': {
                color: theme.colorScheme === 'dark' ? '#6a42f5' : '#4a0dab',
                textDecoration: 'none',
            },
            '&:active': {
                color: theme.colorScheme === 'dark' ? '#4287f5' : '#1a0dab',
                textDecoration: 'none',
            },
        },
    },

    grid: {
        [theme.fn.largerThan('md')]: {
            borderRight: '1px solid',
            height: '50vh',
        },
    },

    image: {
        /* [theme.fn.smallerThan('md')]: {
             width: '0',
        }, */
        width: '-webkit-fill-available',
    },

    project: {
        position: 'absolute',
        top: -12,
        left: 0,
        pointerEvents: 'none',
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(36),
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));
