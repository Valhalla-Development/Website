"use client";

import { type ReactNode, useCallback, useEffect, useState } from "react";
import Footer from "./footer";
import Loader from "./loader";
import Navbar from "./navbar";
import PetWalker from "./pets/pet-walker";
import VantaFogBackground from "./vanta-fog";

interface AppShellProps {
    children: ReactNode;
}

const BACKGROUND_READY_TIMEOUT_MS = 4000;

export default function AppShell({ children }: AppShellProps) {
    const [vantaReady, setVantaReady] = useState(false);
    const [backgroundTimedOut, setBackgroundTimedOut] = useState(false);
    const [minDelayDone, setMinDelayDone] = useState(false);
    const [loaderVisible, setLoaderVisible] = useState(true);
    const [renderLoader, setRenderLoader] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => setMinDelayDone(true), 500);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = window.setTimeout(
            () => setBackgroundTimedOut(true),
            BACKGROUND_READY_TIMEOUT_MS
        );
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (renderLoader && (vantaReady || backgroundTimedOut) && minDelayDone) {
            const timer = window.setTimeout(() => setLoaderVisible(false), 100);
            return () => window.clearTimeout(timer);
        }
    }, [backgroundTimedOut, minDelayDone, renderLoader, vantaReady]);

    useEffect(() => {
        if (!loaderVisible && renderLoader) {
            const timer = window.setTimeout(() => setRenderLoader(false), 400);
            return () => window.clearTimeout(timer);
        }
    }, [loaderVisible, renderLoader]);

    const handleVantaReady = useCallback(
        (ready: boolean) => {
            if (renderLoader) {
                setVantaReady(ready);
            }
        },
        [renderLoader]
    );

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
            <VantaFogBackground onReadyChange={handleVantaReady} />
            <div
                aria-hidden={renderLoader}
                className={`relative z-10 transition-opacity duration-500 ${
                    renderLoader ? "opacity-0" : "opacity-100"
                }`}
            >
                <a
                    className="sr-only z-100 rounded-full bg-foreground px-4 py-2 font-semibold text-background text-sm focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
                    href="#content"
                >
                    Skip to content
                </a>
                <Navbar />
                <main id="content">{children}</main>
                <PetWalker />
                <Footer />
            </div>
            {renderLoader && (
                <div
                    className={`pointer-events-auto fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
                        loaderVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Loader />
                    <p className="mt-6 text-foreground/70 text-xs uppercase tracking-[0.35em]">
                        Launching Valhalla
                    </p>
                </div>
            )}
        </div>
    );
}
