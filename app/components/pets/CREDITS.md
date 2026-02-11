# Pets Credits

This folder contains a React/Next.js implementation of a walking pets effect.

## Upstream Project

- Project: **Kener**
- Author: **Raj Nandan Sharma**
- Repository: <https://github.com/rajnandan1/kener>
- License: **MIT**
- License file: <https://github.com/rajnandan1/kener/blob/main/LICENSE>

## What Was Adapted

- Concept and pet list: `src/lib/components/nav.svelte`
- Animation behavior: `src/theme.css` (`.pets-pattern`, `@keyframes petWalking`)

## GIF Assets Used

The following files are sourced from Kener's `static/` directory and copied into this repo under `public/pets/`:

- `chicken.gif`
- `dog.gif`
- `cockatiel.gif`
- `crab.gif`
- `fox.gif`
- `horse.gif`
- `panda.gif`
- `totoro.gif`
- `rabbit.gif`
- `duck.gif`
- `snake.gif`

## Local Implementation Notes

- Runtime component: `app/components/pets/pet-walker.tsx`
- Styling/animation: `app/components/pets/pet-walker.module.css`
- This implementation is framework-specific to Next.js/React and is not a direct code copy.
