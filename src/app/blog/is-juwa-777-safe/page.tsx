import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Is Juwa 777 Safe? Honest Review for Players" },
  description:
    "Is Juwa 777 safe to download and play? Cover APK risks, agent trust, permissions, and responsible gaming before you deposit credits.",
  alternates: { canonical: `${SITE.url}${ROUTES.blogSafe}` },
};

export default function SafeBlog() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}${ROUTES.blog}` },
          { "@type": "ListItem", position: 3, name: "Is Juwa 777 Safe", item: `${SITE.url}${ROUTES.blogSafe}` },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: "Is Juwa 777 Safe? Honest Review for New Players",
        datePublished: "2026-10-25",
        dateModified: "2026-10-25",
        author: { "@type": "Organization", name: "Juwa 777" },
        publisher: {
          "@type": "Organization",
          name: "Juwa 777",
          logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` },
        },
        image: `${SITE.url}${SITE.logo}`,
        mainEntityOfPage: `${SITE.url}${ROUTES.blogSafe}`,
      },
    ],
  };

  return (
    <>
      <Script id="safe-blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="container mx-auto px-4 py-10 max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li><Link href={ROUTES.blog} className="hover:text-accent">Blog</Link></li>
            <li>/</li>
            <li className="text-accent" aria-current="page">Is Juwa 777 Safe?</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Is Juwa 777 Safe? Honest Review for New Players
        </h1>
        <p className="text-gray-400 text-sm mb-6">Updated October 25, 2026 · 9 min read</p>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          “Is Juwa 777 safe?” mixes three questions: Is the APK file clean, is the agent trustworthy,
          and is social casino play healthy for you? Treating those as one yes/no answer is how
          players get burned. Here is a practical checklist instead of hype.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">APK &amp; Device Safety</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Juwa 777 is commonly sideloaded. That is normal for this category, but it means you — not
          Google Play — choose the file source. Stick to a consistent download path, keep antivirus
          on, and review permissions before you tap Install.
        </p>
        <ul className="space-y-2 text-gray-300 mb-6 list-disc list-inside">
          <li>Prefer the current button on{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">juwa777.love/download</Link>
            .</li>
          <li>Avoid APKs forwarded in random group chats with no checksum or known agent.</li>
          <li>After install, you can revoke “install unknown apps” for that browser.</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent mb-3">Agent &amp; Credit Safety</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Most money risk sits with the human who loads credits — not the spin animation. Deposit
          only after you verify the agent, start small, and never send payment to a brand-new
          contact who refuses to confirm a store lineage.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Use our{" "}
          <Link href={ROUTES.deposit} className="text-accent hover:underline">
            deposit
          </Link>{" "}
          and{" "}
          <Link href={ROUTES.withdraw} className="text-accent hover:underline">
            withdraw
          </Link>{" "}
          guides so the request pattern stays consistent.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">What Juwa 777 Is (and Is Not)</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Juwa 777 is a social / sweepstakes-style gaming app for adults. Outcomes are chance-based.
          No guide — including this one — can promise profits. If a site claims guaranteed income,
          treat that as a red flag.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">Responsible Play Rules</h2>
        <ul className="space-y-2 text-gray-300 mb-8 list-disc list-inside">
          <li>18+ only</li>
          <li>Set a weekly credit budget before you deposit</li>
          <li>Stop when the session stops being fun</li>
          <li>Read the{" "}
            <Link href={ROUTES.disclaimer} className="text-accent hover:underline">disclaimer</Link>
          </li>
        </ul>

        <div className="text-center py-4">
          <DownloadButton />
        </div>
      </article>
    </>
  );
}
