import type { MetadataRoute } from "next";

const base = "https://valhalladev.org";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/about",
        "/portfolio",
        "/team",
        "/contact",
        "/key",
        "/privacy",
        "/terms",
        "/ragnarok/privacy",
        "/ragnarok/terms",
    ];

    return routes.map((route) => ({
        url: `${base}${route}`,
    }));
}
