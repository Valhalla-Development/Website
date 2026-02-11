<div align="center">

# Valhalla Portal

Portal and portfolio for **Valhalla Development**.

<p>
  <a href="https://valhalladev.org"><img src="https://img.shields.io/badge/Live-valhalladev.org-111827?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Website"></a>
  <a href="https://github.com/Valhalla-Development/ValhallaPortal/blob/main/LICENCE"><img src="https://img.shields.io/github/license/Valhalla-Development/ValhallaPortal?style=for-the-badge&color=2563eb" alt="License"></a>
  <a href="https://github.com/Valhalla-Development/ValhallaPortal"><img src="https://img.shields.io/github/stars/Valhalla-Development/ValhallaPortal?style=for-the-badge&color=f59e0b" alt="Stars"></a>
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Powered%20by-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Powered by Next.js"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/Made%20with-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="Made with TypeScript"></a>
</p>

</div>

---

## Overview

This repository powers the public Valhalla Portal.

It includes:

- Homepage and studio positioning
- Portfolio of open-source and active projects
- About and Team pages
- Legal pages (Privacy / Terms)
- Shared UI shell with animated background and footer controls

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Motion (`motion/react`)
- Three.js + Vanta (background effect)

## Local Development

### Requirements

- [Bun](https://bun.sh/) (recommended)

### Run

```bash
bun install
bun run dev
```

App runs on:

- `http://localhost:3000`

### Quality checks

```bash
bun run lint
```

## Project Structure

```text
app/
  components/   # shared UI (navbar, footer, app shell, etc.)
  data/         # content datasets used by pages (e.g. projects)
  about/        # about page
  team/         # team page
  portfolio/    # portfolio page
  privacy/      # privacy policy
  terms/        # terms of service
```

## License

This repository is licensed under **GPL-3.0-or-later**.  
See `LICENCE` for details.

---

<div align="center">

Built by [Valhalla-Development](https://github.com/Valhalla-Development)

</div>