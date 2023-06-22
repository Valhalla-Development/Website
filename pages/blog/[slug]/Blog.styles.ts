import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
    wrapper: {
        padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },

    iconButton: {
        width: 40,
        height: 40,
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
