import { createStyles, rem } from "@mantine/core";

export default createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,
        wordBreak: "break-word",

        [theme.fn.smallerThan("sm")]: {
            fontSize: rem(24)
        }
    },

    description: {
        maxWidth: 600,
        margin: "auto",

        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`
    },

    cardTitle: {
        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm
        }
    },

    mainContainer: {
        background: theme.colorScheme === "dark" ? theme.colors.dark[6] : "#ffffff",
        padding: "50px",
        borderRadius: "10px",
        border: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`
    }
}));
