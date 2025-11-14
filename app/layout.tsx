import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Providers from "./components/providers";
import ThemeToggle from "./components/theme-toggle";
import VantaFogBackground from "./components/vanta-fog";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Valhalla Development",
    description: "Homepage for Valhalla Development",
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
                    <div className="relative min-h-screen bg-background text-foreground">
                        <VantaFogBackground />
                        <div className="fixed top-6 right-6 z-50">
                            <ThemeToggle />
                        </div>
                        <Navbar />
                        <div className="relative z-10">{children}</div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
