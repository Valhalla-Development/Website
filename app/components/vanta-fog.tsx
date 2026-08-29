"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

interface VantaFogBackgroundProps {
    className?: string;
    onReadyChange?: (ready: boolean) => void;
}

type ThreeModule = typeof import("three");

type BlendMode = "screen" | "multiply" | "normal";

interface VantaEffect {
    destroy: () => void;
}

const SOFTWARE_RENDERER_PATTERNS = ["swiftshader", "llvmpipe", "software rasterizer"];

function supportsAcceleratedWebGl() {
    const canvas = document.createElement("canvas");
    const contextAttributes: WebGLContextAttributes = {
        failIfMajorPerformanceCaveat: true,
        powerPreference: "high-performance",
    };

    try {
        const context =
            canvas.getContext("webgl2", contextAttributes) ??
            canvas.getContext("webgl", contextAttributes);

        if (!context) {
            return false;
        }

        const rendererInfo = context.getExtension("WEBGL_debug_renderer_info");
        const renderer = rendererInfo
            ? String(context.getParameter(rendererInfo.UNMASKED_RENDERER_WEBGL)).toLowerCase()
            : "";
        context.getExtension("WEBGL_lose_context")?.loseContext();

        return !SOFTWARE_RENDERER_PATTERNS.some((pattern) => renderer.includes(pattern));
    } catch {
        return false;
    }
}

interface VantaPreset {
    backgroundColor: string;
    canvasOpacity: number;
    floorGradient: string;
    floorOpacity: number;
    radialBlendMode: BlendMode;
    radialGradient: string;
    radialOpacity: number;
    vanta: {
        highlightColor: number;
        midtoneColor: number;
        lowlightColor: number;
        baseColor: number;
        blurFactor: number;
        speed: number;
        zoom: number;
    };
}

const PRESETS: Record<"dark" | "light", VantaPreset> = {
    dark: {
        backgroundColor: "#020208",
        canvasOpacity: 0.25,
        floorGradient: "linear-gradient(0deg, var(--color-background) 0%, rgba(2,2,8,0))",
        floorOpacity: 0.65,
        radialBlendMode: "screen",
        radialGradient: "radial-gradient(circle at top, rgba(15,23,42,0.55), transparent 80%)",
        radialOpacity: 0.45,
        vanta: {
            baseColor: 0x01_01_01,
            blurFactor: 0.5,
            highlightColor: 0xff_4d_6d,
            lowlightColor: 0x05_02_08,
            midtoneColor: 0x17_07_15,
            speed: 2,
            zoom: 1.2,
        },
    },
    light: {
        backgroundColor: "#fdfbff",
        canvasOpacity: 0.25,
        floorGradient: "linear-gradient(0deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0))",
        floorOpacity: 0.5,
        radialBlendMode: "multiply",
        radialGradient: "radial-gradient(circle at top, rgba(255,183,197,0.35), transparent 78%)",
        radialOpacity: 0.55,
        vanta: {
            baseColor: 0xff_ff_ff,
            blurFactor: 0.7,
            highlightColor: 0xff_9d_b0,
            lowlightColor: 0xf2_f5_ff,
            midtoneColor: 0xff_e4_f1,
            speed: 2,
            zoom: 1.12,
        },
    },
};

export default function VantaFogBackground({ className, onReadyChange }: VantaFogBackgroundProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
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
        let effect: VantaEffect | undefined;

        const init = async () => {
            setIsReady(false);

            if (!supportsAcceleratedWebGl()) {
                document.documentElement.dataset.renderingMode = "software";
                setIsReady(true);
                return;
            }

            document.documentElement.dataset.renderingMode = "accelerated";

            try {
                let THREE = threeRef.current;
                const fogModulePromise = import("vanta/dist/vanta.fog.min");
                if (!THREE) {
                    THREE = await import("three");
                    threeRef.current = THREE;
                }
                const { default: FOG } = await fogModulePromise;

                if (cancelled || !containerRef.current) {
                    return;
                }

                effect = FOG({
                    el: containerRef.current,
                    gyroControls: false,
                    mouseControls: true,
                    THREE,
                    touchControls: true,
                    ...preset.vanta,
                });

                timeout = window.setTimeout(() => {
                    if (!cancelled) {
                        setIsReady(true);
                    }
                }, 180);
            } catch {
                if (!cancelled) {
                    document.documentElement.dataset.renderingMode = "software";
                    setIsReady(true);
                }
            }
        };

        init();

        return () => {
            cancelled = true;
            if (typeof timeout === "number") {
                window.clearTimeout(timeout);
            }
            effect?.destroy();
        };
    }, [mounted, themeKey]);

    if (!mounted) {
        return (
            <div
                aria-hidden
                className={`pointer-events-none fixed inset-0 -z-10 ${className ? className : ""}`}
                style={{ backgroundColor: "var(--color-background)" }}
            />
        );
    }

    return (
        <div
            aria-hidden
            className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className ? className : ""}`}
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
                    mixBlendMode: preset.radialBlendMode,
                    opacity: preset.radialOpacity,
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
