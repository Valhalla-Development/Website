"use client";

import { type ReactNode, useCallback, useEffect, useState } from "react";
import Footer from "./footer";
import Loader from "./loader";
import Navbar from "./navbar";
import VantaFogBackground from "./vanta-fog";

type AppShellProps = {
    children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
    const [vantaReady, setVantaReady] = useState(false);
    const [minDelayDone, setMinDelayDone] = useState(false);
    const [loaderVisible, setLoaderVisible] = useState(true);
    const [renderLoader, setRenderLoader] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => setMinDelayDone(true), 500);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (renderLoader && vantaReady && minDelayDone) {
            const timer = window.setTimeout(() => setLoaderVisible(false), 100);
            return () => window.clearTimeout(timer);
        }
        return;
    }, [minDelayDone, renderLoader, vantaReady]);

    useEffect(() => {
        if (!loaderVisible && renderLoader) {
            const timer = window.setTimeout(() => setRenderLoader(false), 400);
            return () => window.clearTimeout(timer);
        }
        return;
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
        <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
            <VantaFogBackground onReadyChange={handleVantaReady} />
            <div
                aria-hidden={renderLoader}
                className={`relative z-10 transition-opacity duration-500 ${
                    renderLoader ? "opacity-0" : "opacity-100"
                }`}
            >
                <Navbar />
                <main>{children}</main>
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
