import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
    container: {
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    },

    heroImageWrapper: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
    },

    heroImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },

    title: {
        textAlign: 'center',
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    authorContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    authorImage: {
        borderRadius: '50%',
        marginRight: theme.spacing.md,
    },

    rating: {
        position: 'absolute',
        top: theme.spacing.xs,
        left: rem(12),
        pointerEvents: 'none',
    },
}));
