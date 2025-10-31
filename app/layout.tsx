import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                suppressHydrationWarning
            >
                <nav className="-translate-x-1/2 fixed top-6 left-1/2 z-50">
                    <div className="rounded-full border border-zinc-200 bg-white/90 px-6 py-3 shadow-md backdrop-blur supports-backdrop-filter:bg-white/60 dark:border-zinc-800 dark:bg-zinc-900/90">
                        <div className="flex items-center justify-center gap-8">
                            <a
                                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                href="/"
                            >
                                Home
                            </a>
                            <a
                                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                href="/portfolio"
                            >
                                Portfolio
                            </a>
                            <a
                                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                href="/about"
                            >
                                About
                            </a>
                            <a
                                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                                href="/contact"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
