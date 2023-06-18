import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
    card: {
        backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    avatar: {
        border: `${rem(2)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
        }`,
    },

    body: {
        paddingTop: theme.spacing.sm,
    },

    container: {
        marginBottom: theme.spacing.xl,
        marginTop: theme.spacing.xl,
    },
}));
