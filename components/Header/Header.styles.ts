import { createStyles, rem } from "@mantine/core";

export const headerHeight = rem(84);

export default createStyles((theme) => ({
    inner: {
        height: headerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },

    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none"
        }
    },

    links: {
        paddingTop: theme.spacing.lg,
        height: headerHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        [theme.fn.smallerThan("sm")]: {
            display: "none"
        }
    },

    mainLinks: {
        marginRight: `calc(${theme.spacing.sm} * -1)`
    },

    mainLink: {
        textTransform: "uppercase",
        fontSize: rem(13),
        color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
        padding: `${rem(7)} ${theme.spacing.sm}`,
        fontWeight: 700,
        borderBottom: `${rem(2)} solid transparent`,
        transition: "border-color 100ms ease, color 100ms ease",
        textDecoration: "none",

        "&:hover": {
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            textDecoration: "none"
        }
    },

    mainLinkActive: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6]
    },

    iconContainer: {
        marginLeft: "10px",
        marginRight: "10px"
    },

    icons: {
        display: "flex",
        justifyContent: "center",
        padding: "25px 10px",
        alignItems: "center",
        flexFlow: "wrap",
        gap: 5
    },

    mobileNavigation: {
        height: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },

    tabs: {
        display: "flex",
        flexDirection: "column",
        flexFlow: "wrap"
    },

    link: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        textDecoration: "none",
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan("sm")]: {
            height: rem(42),
            display: "flex",
            alignItems: "center",
            width: "100%"
        },

        "&:hover": {
            textDecoration: "none"
        }

        // ...theme.fn.hover({
        //     backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]
        // })
    },

    subLink: {
        width: "100%",
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0]
        }),

        "&:active": theme.activeStyles
    },

    dropdownFooter: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: `calc(${theme.spacing.md} * -1)`,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`
    },

    hiddenMobile: {
        [theme.fn.smallerThan("sm")]: {
            display: "none"
        }
    },

    hiddenDesktop: {
        [theme.fn.largerThan("sm")]: {
            display: "none"
        }
    }
}));
