import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "./components/app-shell";
import Providers from "./components/providers";

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

const siteDescription =
    "Automation, infrastructure, and Discord-native tools from Valhalla Development.";

export const metadata: Metadata = {
    description: siteDescription,
    metadataBase: new URL("https://valhalladev.org"),
    openGraph: {
        description: siteDescription,
        locale: "en_GB",
        siteName: "Valhalla Development",
        title: "Valhalla Development",
        type: "website",
        url: "/",
    },
    title: {
        default: "Valhalla Development",
        template: "%s | Valhalla Development",
    },
    twitter: {
        card: "summary",
        description: siteDescription,
        title: "Valhalla Development",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
                suppressHydrationWarning
            >
                <Providers>
                    <AppShell>{children}</AppShell>
                </Providers>
            </body>
        </html>
    );
}
