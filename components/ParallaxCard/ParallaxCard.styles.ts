import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => ({
    cardWrapper: {
        width: '30vh',
        padding: rem(10),
    },
    cardContainer: {
        borderRadius: '14px',
        boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.1), 0px 10px 24px rgba(0, 0, 0, 0.2)',
    },
    cardImage: {
        width: '22vh',
        display: 'block',
        margin: '0 auto',
    },
    cardTitle: {
        fontWeight: 600,
        fontSize: '18px',
        lineHeight: '20px',
        margin: '10px 0',
        userSelect: 'none',
    },
    divider: {
        border: 'none',
        height: '1px',
        background:
            theme.colorScheme === 'dark'
                ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)'
                : 'linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)',
    },
    cardText: {
        fontWeight: 400,
        fontSize: '13px',
        lineHeight: '22px',
        userSelect: 'none',
    },
}));
