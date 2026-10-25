import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Juwa 777 iOS Download – iPhone Install Guide" },
  description:
    "Install Juwa 777 on iPhone when the full hub is not on the App Store. Learn common iOS paths, limits, and safer alternatives including Android APK and PC.",
  alternates: { canonical: `${SITE.url}${ROUTES.blogIos}` },
};

export default function IosBlog() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}${ROUTES.blog}` },
          { "@type": "ListItem", position: 3, name: "Juwa 777 iOS Download", item: `${SITE.url}${ROUTES.blogIos}` },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: "Juwa 777 iOS Download: iPhone Install Options",
        datePublished: "2026-10-25",
        dateModified: "2026-10-25",
        author: { "@type": "Organization", name: "Juwa 777" },
        publisher: {
          "@type": "Organization",
          name: "Juwa 777",
          logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` },
        },
        image: `${SITE.url}${SITE.logo}`,
        mainEntityOfPage: `${SITE.url}${ROUTES.blogIos}`,
      },
    ],
  };

  return (
    <>
      <Script id="ios-blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="container mx-auto px-4 py-10 max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li><Link href={ROUTES.blog} className="hover:text-accent">Blog</Link></li>
            <li>/</li>
            <li className="text-accent" aria-current="page">iOS Download</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Juwa 777 iOS Download: iPhone Install Guide
        </h1>
        <p className="text-gray-400 text-sm mb-6">Updated October 25, 2026 · 7 min read</p>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          Apple&apos;s store rules mean the full Juwa 777 social casino hub is rarely a one-tap App
          Store install. iPhone players still search for “Juwa 777 iOS download,” so this guide
          explains the realistic options without promising a permanent public IPA that Apple will
          never revoke.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">Typical iOS Paths</h2>
        <ul className="space-y-3 text-gray-300 mb-6 list-disc list-inside">
          <li>
            <strong className="text-white">Agent / TestFlight style links:</strong> some distributors
            share invite builds. Links expire and require trust in that agent.
          </li>
          <li>
            <strong className="text-white">Enterprise or profile installs:</strong> may work until
            Apple revokes the certificate — expect occasional reinstalls.
          </li>
          <li>
            <strong className="text-white">Web play (when offered):</strong> a few portals open in
            Safari; availability depends on your agent&apos;s stack.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-accent mb-3">Practical Install Checklist</h2>
        <ol className="space-y-3 text-gray-300 mb-6 list-decimal list-inside">
          <li>Ask your agent which iOS method they currently support.</li>
          <li>Open the link only on the iPhone that will play — do not forward blindly.</li>
          <li>If iOS asks to trust a developer profile, review it under Settings → General → VPN &amp; Device Management.</li>
          <li>After install, log in and confirm the wallet matches your Android account if you migrate.</li>
        </ol>

        <h2 className="text-2xl font-bold text-accent mb-3">If iOS Keeps Failing</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Many players keep Juwa 777 on Android for reliability. You can{" "}
          <Link href={ROUTES.download} className="text-accent hover:underline">
            download the APK
          </Link>{" "}
          on a spare Android phone or run it on a PC emulator via our{" "}
          <Link href={ROUTES.pc} className="text-accent hover:underline">
            PC guide
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">Safety Notes for iPhone</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Never install configuration profiles from strangers. If a site demands iCloud credentials
          or charges for a “guaranteed IPA,” walk away. Pair this article with{" "}
          <Link href={ROUTES.blogSafe} className="text-accent hover:underline">
            Is Juwa 777 safe?
          </Link>
          .
        </p>

        <div className="text-center py-4">
          <DownloadButton label="ANDROID APK DOWNLOAD" />
        </div>
      </article>
    </>
  );
}
