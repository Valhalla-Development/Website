"use client";

import { useEffect, useState } from "react";
import styles from "./pet-walker.module.css";

interface Pet {
    bottom: string;
    label: string;
    src: string;
}

/**
 * Attribution:
 * - Walking pets concept adapted from Kener (MIT): https://github.com/rajnandan1/kener
 * - Inspired by: src/lib/components/nav.svelte
 * - GIF assets sourced from Kener's static directory and stored in /public/pets
 * - Full credits: app/components/pets/CREDITS.md and public/pets/CREDITS.md
 */
const PETS: Pet[] = [
    { bottom: "-5px", label: "Chicken", src: "/pets/chicken.gif" },
    { bottom: "-17px", label: "Dog", src: "/pets/dog.gif" },
    { bottom: "-10px", label: "Cockatiel", src: "/pets/cockatiel.gif" },
    { bottom: "-20px", label: "Crab", src: "/pets/crab.gif" },
    { bottom: "-9px", label: "Fox", src: "/pets/fox.gif" },
    { bottom: "-11px", label: "Horse", src: "/pets/horse.gif" },
    { bottom: "0px", label: "Panda", src: "/pets/panda.gif" },
    { bottom: "-27px", label: "Totoro", src: "/pets/totoro.gif" },
    { bottom: "0px", label: "Rabbit", src: "/pets/rabbit.gif" },
    { bottom: "-5px", label: "Duck", src: "/pets/duck.gif" },
    { bottom: "0px", label: "Snake", src: "/pets/snake.gif" },
];

export default function PetWalker() {
    const [pet, setPet] = useState<Pet | null>(null);

    useEffect(() => {
        setPet(PETS[Math.floor(Math.random() * PETS.length)] ?? PETS[0]);
    }, []);

    if (!pet) {
        return null;
    }

    return (
        <div
            aria-hidden
            className={styles.petWalker}
            style={
                {
                    "--pet-bottom-offset": pet.bottom,
                    backgroundImage: `url(${pet.src})`,
                } as Record<string, string>
            }
            title={pet.label}
        />
    );
}
