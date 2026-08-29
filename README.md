<div align="center">
  <h1 id="top">⚡ Valhalla Portal</h1>

  <p>
    <a href="https://discord.gg/Q3ZhdRJ"><img src="https://img.shields.io/discord/495602800802398212.svg?colorB=5865F2&logo=discord&logoColor=white&style=for-the-badge" alt="Discord"></a>
    <br>
    <a href="https://valhalladev.org"><img src="https://img.shields.io/badge/Live-valhalladev.org-111827?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Website"></a>
    <a href="https://github.com/Valhalla-Development/ValhallaPortal/blob/main/LICENCE"><img src="https://img.shields.io/github/license/Valhalla-Development/ValhallaPortal?style=for-the-badge&color=2563eb" alt="License"></a>
    <a href="https://github.com/Valhalla-Development/ValhallaPortal"><img src="https://img.shields.io/github/stars/Valhalla-Development/ValhallaPortal?style=for-the-badge&color=f59e0b" alt="Stars"></a>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Powered%20by-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Powered by Next.js"></a>
    <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/Made%20with-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="Made with TypeScript"></a>
  </p>

  <p><em>Public site and portfolio for Valhalla Development.</em></p>
</div>

---

## 🌟 Welcome

This repo is [valhalladev.org](https://valhalladev.org): the studio homepage, portfolio, team, legal pages, a contact page with the Discord widget, and `/key` for Discord-signed API tokens. Open-source work lives in the other Valhalla repos; this one is the front door.

## 🎮 Features

<table>
  <tr>
    <td width="50%">
      <h3>🏠 Studio home</h3>
      <p>Who we are, what we ship, and a couple of active projects up front.</p>
    </td>
    <td width="50%">
      <h3>🧰 Portfolio</h3>
      <p>Live work first, then the archive, with GitHub and npm links where they exist.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>👥 Team & contact</h3>
      <p>The crew, plus <code>/contact</code> with the Discord server widget, a mail address, and <code>/key</code> for a Bearer token.</p>
    </td>
    <td width="50%">
      <h3>📜 Legal</h3>
      <p>Studio Privacy and Terms, plus Ragnarok’s own pages for the bot listings.</p>
    </td>
  </tr>
</table>

## 🚀 Requirements

- [Bun](https://bun.sh/)

## 🛠️ Setup Guide

1. Clone the repository:

   ```bash
   git clone https://github.com/Valhalla-Development/ValhallaPortal.git
   cd ValhallaPortal
   ```

2. Install Bun:
   - Mac/Linux:
     ```bash
     curl -fsSL https://bun.sh/install | bash
     ```
   - Windows:
     ```powershell
     powershell -c "irm bun.sh/install.ps1 | iex"
     ```

3. Install dependencies:

   ```bash
   bun install
   ```

4. Run it:

   ```bash
   bun run dev    # watch
   bun run build && bun start  # production
   bun run lint
   ```

   Local site: `http://localhost:3000`

   For `/key`, copy `.env.example` and fill `MongoUri` (same as the API), a Discord OAuth app with redirect `http://localhost:3000/api/auth/callback`, and a 32+ character `SESSION_SECRET`. Production redirect is `https://valhalladev.org/api/auth/callback`.

## 🤝 Contributing

We welcome contributions! If you'd like to contribute:

1. Fork the repository
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them with a clear, descriptive message:
   ```bash
   git commit -m 'Add feature: brief description of your changes'
   ```
4. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request against the main repository's `main` branch

Please run `bun run lint` before opening a Pull Request.

## 📜 License

This project is licensed under the GPL-3.0-or-later License - see the LICENCE file for details. (It's mostly "Share the love, and keep it open!")

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) for the app
- [Bun](https://bun.sh/) for the runtime
- [Tailwind CSS](https://tailwindcss.com/) for the layout
- [Three.js](https://threejs.org/) and [Vanta](https://www.vantajs.com/) for the background
- [Motion](https://motion.dev/) for the nav

## 📬 Support & Community

Got questions or need help? Join our [Discord server](https://discord.gg/Q3ZhdRJ)!

---

<div align="center">

💻 Crafted with ❤️ by [Valhalla-Development](https://github.com/Valhalla-Development)

[🐛 Spotted an issue?](https://github.com/Valhalla-Development/ValhallaPortal/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml&title=%5BBUG%5D+Short+Description) | [💡 Got an idea?](https://github.com/Valhalla-Development/ValhallaPortal/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml&title=%5BFeature%5D+Short+Description) | [🤔 Need help?](https://discord.gg/Q3ZhdRJ)

<a href="#top">🔝 Back to Top</a>
</div>
