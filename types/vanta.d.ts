declare module "vanta/dist/vanta.fog.min" {
    import type * as THREE_TYPES from "three";

    type VantaInstance = {
        destroy: () => void;
    };

    type VantaOptions = {
        el: HTMLElement;
        THREE: typeof THREE_TYPES;
        [key: string]: unknown;
    };

    export default function VantaFog(options: VantaOptions): VantaInstance;
}

