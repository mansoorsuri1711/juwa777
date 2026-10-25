import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Juwa 777 Bonuses & Events – Wager Hour, Cashback, Wheel" },
  description:
    "Juwa 777 bonus schedule: Wager Bonus Hour (4–5 AM CST), cashback tiers, Lucky Hour Wheel, and daily draws explained for regular players.",
  alternates: { canonical: `${SITE.url}${ROUTES.blogBonuses}` },
};

export default function BonusesBlog() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}${ROUTES.blog}` },
          { "@type": "ListItem", position: 3, name: "Juwa 777 Bonuses", item: `${SITE.url}${ROUTES.blogBonuses}` },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: "Juwa 777 Bonuses & Events: Wager Hour, Cashback, Wheel",
        datePublished: "2026-10-25",
        dateModified: "2026-10-25",
        author: { "@type": "Organization", name: "Juwa 777" },
        publisher: {
          "@type": "Organization",
          name: "Juwa 777",
          logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` },
        },
        image: [
          `${SITE.url}/juwa-777-spin-wheel.webp`,
          `${SITE.url}/juwa-777-cashback-rewards.webp`,
        ],
        mainEntityOfPage: `${SITE.url}${ROUTES.blogBonuses}`,
      },
    ],
  };

  return (
    <>
      <Script id="bonuses-blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="container mx-auto px-4 py-10 max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li><Link href={ROUTES.blog} className="hover:text-accent">Blog</Link></li>
            <li>/</li>
            <li className="text-accent" aria-current="page">Bonuses &amp; Events</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Juwa 777 Bonuses &amp; Events Explained
        </h1>
        <p className="text-gray-400 text-sm mb-6">Updated October 25, 2026 · 8 min read</p>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          Juwa 777 does not lean on daily public redeem codes. The real value sits in scheduled
          events: a morning wager window, cashback tiers, the Lucky Hour Wheel, and timed draws.
          Knowing the CST clock beats hunting random “codes” posts.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">Wager Bonus Hour</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Every day between <strong className="text-white">4:00 AM and 5:00 AM CST</strong>, Juwa
          777 runs Wager Bonus Hour. Players who are active in that window can earn elevated rewards
          on qualifying play. If you already wake early — or stay up late on the West Coast — park
          a planned session inside that hour instead of burning the same credits at noon.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">Cashback Rewards</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Cashback looks at total daily gameplay and unlocks higher return bands as volume rises.
          It favors steady play over one oversized bet. Check the in-app cashback panel after a
          full day to see which tier you reached.
        </p>
        <figure className="mb-6">
          <Image
            src="/juwa-777-cashback-rewards.webp"
            alt="Juwa 777 cashback rewards tiers on mobile"
            width={800}
            height={450}
            className="rounded-xl w-full h-auto border border-red-900/30"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </figure>

        <h2 className="text-2xl font-bold text-accent mb-3">Lucky Hour Wheel</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          The Lucky Hour Wheel is a short spin for random credit prizes. Use it as a bonus layer —
          not as your only plan. Spin when the event is live, collect, then return to slots or fish
          tables with a clear bankroll limit.
        </p>
        <figure className="mb-6">
          <Image
            src="/juwa-777-spin-wheel.webp"
            alt="Juwa 777 Lucky Hour Wheel spin screen"
            width={800}
            height={450}
            className="rounded-xl w-full h-auto border border-red-900/30"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </figure>

        <h2 className="text-2xl font-bold text-accent mb-3">Daily Draws</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Draws fire at multiple CST times across morning and evening blocks (examples often cited
          include early hours like 01:00, 02:00, 03:00 plus later windows). Being logged in near
          those times improves your chance to claim draw credits when your account qualifies.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">Do Redeem Codes Exist?</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Public “daily Juwa 777 redeem codes” are mostly noise. Focus on the four systems above,
          keep an eye on in-app banners, and ignore accounts selling fake codes. For funding and
          cash-out mechanics, use the{" "}
          <Link href={ROUTES.deposit} className="text-accent hover:underline">
            deposit
          </Link>{" "}
          and{" "}
          <Link href={ROUTES.withdraw} className="text-accent hover:underline">
            withdraw
          </Link>{" "}
          pages instead.
        </p>

        <div className="text-center py-4">
          <DownloadButton />
        </div>
      </article>
    </>
  );
}
