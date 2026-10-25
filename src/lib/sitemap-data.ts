import { SITE, ROUTES } from "./site";

export type SitemapPage = {
  path: string;
  lastmod: string;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  images?: { loc: string; title: string; caption: string }[];
};

const lastmod = SITE.lastUpdated;

export const SITEMAP_PAGES: SitemapPage[] = [
  {
    path: ROUTES.home,
    lastmod,
    changefreq: "daily",
    priority: 1.0,
    images: [
      {
        loc: `${SITE.url}${SITE.logo}`,
        title: "Juwa 777 game logo",
        caption: "Official Juwa 777 app icon for slots and fish games",
      },
      {
        loc: `${SITE.url}/juwa-777-welcome-page.webp`,
        title: "Juwa 777 welcome screen",
        caption: "Juwa 777 mobile welcome page screenshot",
      },
      {
        loc: `${SITE.url}/juwa-777-lobby.webp`,
        title: "Juwa 777 game lobby",
        caption: "Juwa 777 lobby showing slots and fishing games",
      },
    ],
  },
  {
    path: ROUTES.download,
    lastmod,
    changefreq: "weekly",
    priority: 0.95,
    images: [
      {
        loc: `${SITE.url}/juwa777-download.webp`,
        title: "Download Juwa 777 APK",
        caption: "Juwa 777 Android APK download guide image",
      },
    ],
  },
  { path: ROUTES.deposit, lastmod, changefreq: "weekly", priority: 0.85 },
  { path: ROUTES.withdraw, lastmod, changefreq: "weekly", priority: 0.85 },
  { path: ROUTES.pc, lastmod, changefreq: "weekly", priority: 0.85 },
  {
    path: ROUTES.juwa2,
    lastmod,
    changefreq: "weekly",
    priority: 0.9,
    images: [
      {
        loc: `${SITE.url}/juwa-2.0.webp`,
        title: "Juwa 2.0",
        caption: "Juwa 2.0 casino update with new slot themes",
      },
    ],
  },
  { path: ROUTES.admin, lastmod, changefreq: "monthly", priority: 0.7 },
  { path: ROUTES.about, lastmod, changefreq: "monthly", priority: 0.6 },
  { path: ROUTES.blog, lastmod, changefreq: "weekly", priority: 0.8 },
  { path: ROUTES.contact, lastmod, changefreq: "monthly", priority: 0.6 },
  { path: ROUTES.privacy, lastmod, changefreq: "yearly", priority: 0.4 },
  { path: ROUTES.disclaimer, lastmod, changefreq: "yearly", priority: 0.4 },
  {
    path: ROUTES.blogLogin,
    lastmod,
    changefreq: "weekly",
    priority: 0.75,
  },
  {
    path: ROUTES.blogSafe,
    lastmod,
    changefreq: "weekly",
    priority: 0.75,
  },
  {
    path: ROUTES.blogIos,
    lastmod,
    changefreq: "weekly",
    priority: 0.75,
  },
  {
    path: ROUTES.blogBonuses,
    lastmod,
    changefreq: "weekly",
    priority: 0.75,
    images: [
      {
        loc: `${SITE.url}/juwa-777-spin-wheel.webp`,
        title: "Juwa 777 Lucky Wheel",
        caption: "Lucky Hour Wheel bonus on Juwa 777",
      },
      {
        loc: `${SITE.url}/juwa-777-cashback-rewards.webp`,
        title: "Juwa 777 cashback rewards",
        caption: "Daily cashback rewards screen in Juwa 777",
      },
    ],
  },
];
