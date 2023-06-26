import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        // padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
        paddingTop: 50,
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
    },

    grid: {
        [theme.fn.largerThan('md')]: {
            borderRight: '1px solid',
        },
    },

    rating: {
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
