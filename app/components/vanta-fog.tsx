"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import FOG from "vanta/dist/vanta.fog.min";

type VantaFogBackgroundProps = {
    className?: string;
    onReadyChange?: (ready: boolean) => void;
};

type ThreeModule = typeof import("three");

type BlendMode = "screen" | "multiply" | "normal";

type VantaPreset = {
    canvasOpacity: number;
    backgroundColor: string;
    radialGradient: string;
    radialOpacity: number;
    radialBlendMode: BlendMode;
    floorGradient: string;
    floorOpacity: number;
    vanta: {
        highlightColor: number;
        midtoneColor: number;
        lowlightColor: number;
        baseColor: number;
        blurFactor: number;
        speed: number;
        zoom: number;
    };
};

const PRESETS: Record<"dark" | "light", VantaPreset> = {
    dark: {
        canvasOpacity: 0.25,
        backgroundColor: "#020208",
        radialGradient: "radial-gradient(circle at top, rgba(15,23,42,0.55), transparent 80%)",
        radialOpacity: 0.45,
        radialBlendMode: "screen",
        floorGradient: "linear-gradient(0deg, var(--color-background) 0%, rgba(2,2,8,0))",
        floorOpacity: 0.65,
        vanta: {
            highlightColor: 0xff_4d_6d,
            midtoneColor: 0x17_07_15,
            lowlightColor: 0x05_02_08,
            baseColor: 0x01_01_01,
            blurFactor: 0.5,
            speed: 2,
            zoom: 1.2,
        },
    },
    light: {
        canvasOpacity: 0.25,
        backgroundColor: "#fdfbff",
        radialGradient: "radial-gradient(circle at top, rgba(255,183,197,0.35), transparent 78%)",
        radialOpacity: 0.55,
        radialBlendMode: "multiply",
        floorGradient: "linear-gradient(0deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0))",
        floorOpacity: 0.5,
        vanta: {
            highlightColor: 0xff_9d_b0,
            midtoneColor: 0xff_e4_f1,
            lowlightColor: 0xf2_f5_ff,
            baseColor: 0xff_ff_ff,
            blurFactor: 0.7,
            speed: 2,
            zoom: 1.12,
        },
    },
};

export default function VantaFogBackground({ className, onReadyChange }: VantaFogBackgroundProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const effectRef = useRef<ReturnType<typeof FOG> | null>(null);
    const threeRef = useRef<ThreeModule | null>(null);
    const [isReady, setIsReady] = useState(false);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const themeKey: "dark" | "light" = resolvedTheme === "light" ? "light" : "dark";
    const preset = PRESETS[themeKey];

    useEffect(() => {
        onReadyChange?.(mounted && isReady);
    }, [isReady, mounted, onReadyChange]);

    useEffect(() => {
        if (!(mounted && containerRef.current)) {
            return;
        }

        let cancelled = false;
        let timeout: number | undefined;

        const init = async () => {
            setIsReady(false);
            let THREE = threeRef.current;
            if (!THREE) {
                THREE = await import("three");
                threeRef.current = THREE;
            }

            if (cancelled || !containerRef.current) {
                return;
            }

            effectRef.current = FOG({
                el: containerRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                ...preset.vanta,
            });

            timeout = window.setTimeout(() => {
                if (!cancelled) {
                    setIsReady(true);
                }
            }, 180);
        };

        init();

        return () => {
            cancelled = true;
            if (typeof timeout === "number") {
                window.clearTimeout(timeout);
            }
            if (effectRef.current) {
                effectRef.current.destroy();
                effectRef.current = null;
            }
        };
    }, [mounted, themeKey]);

    if (!mounted) {
        return (
            <div
                aria-hidden
                className={`-z-10 pointer-events-none fixed inset-0 ${className ? className : ""}`}
                style={{ backgroundColor: "var(--color-background)" }}
            />
        );
    }

    return (
        <div
            aria-hidden
            className={`-z-10 pointer-events-none fixed inset-0 overflow-hidden ${className ? className : ""}`}
        >
            <div className="absolute inset-0" style={{ backgroundColor: preset.backgroundColor }} />
            <div
                className="absolute inset-0 transition-opacity duration-1200 ease-out"
                ref={containerRef}
                style={{ opacity: isReady ? preset.canvasOpacity : 0 }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background: preset.radialGradient,
                    opacity: preset.radialOpacity,
                    mixBlendMode: preset.radialBlendMode,
                }}
            />
            <div
                className="absolute inset-x-0 bottom-[-10%] h-[45%]"
                style={{
                    background: preset.floorGradient,
                    opacity: preset.floorOpacity,
                }}
            />
        </div>
    );
}
