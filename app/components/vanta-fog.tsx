"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

type VantaFogBackgroundProps = {
    className?: string;
};

export default function VantaFogBackground({ className }: VantaFogBackgroundProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const effectRef = useRef<ReturnType<typeof FOG> | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!containerRef.current || effectRef.current) {
            return undefined;
        }

        let cancelled = false;
        effectRef.current = FOG({
            el: containerRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            highlightColor: 0xff4d6d,
            midtoneColor: 0x170715,
            lowlightColor: 0x050208,
            baseColor: 0x010101,
            blurFactor: 0.5,
            speed: 0.85,
            zoom: 1.2,
        });

        const timeout = window.setTimeout(() => {
            if (!cancelled) {
                setIsReady(true);
            }
        }, 180);

        return () => {
            cancelled = true;
            window.clearTimeout(timeout);
            if (effectRef.current) {
                effectRef.current.destroy();
                effectRef.current = null;
            }
            setIsReady(false);
        };
    }, []);

    return (
        <div
            aria-hidden
            className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className ? className : ""}`}
        >
            <div className="absolute inset-0 bg-[#020208]" />
            <div
                className="absolute inset-0 transition-opacity duration-1200 ease-out"
                ref={containerRef}
                style={{ opacity: isReady ? 0.08 : 0 }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.55),transparent_80%)] opacity-45 mix-blend-screen" />
            <div className="absolute inset-x-0 bottom-[-10%] h-[45%] bg-linear-to-t from-background via-background/85 to-transparent opacity-65" />
        </div>
    );
}

