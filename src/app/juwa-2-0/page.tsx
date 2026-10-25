import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { DOWNLOAD_JUWA2_URL } from "@/lib/constants";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Juwa 2.0 Download – New Slots & Faster Casino App" },
  description:
    "Juwa 2.0 brings refreshed slot themes, smoother performance, and updated rewards on top of the Juwa 777 experience. See what changed and how to update.",
  alternates: { canonical: `${SITE.url}${ROUTES.juwa2}` },
  openGraph: {
    title: "Juwa 2.0 Download – NewSlots & Faster Casino App",
    description: "Explore Juwa 2.0 features, updates, and download path.",
    url: `${SITE.url}${ROUTES.juwa2}`,
    siteName: "Juwa 777",
    images: [{ url: `${SITE.url}/juwa-2.0.webp`, width: 800, height: 500, alt: "Juwa 2.0" }],
  },
};

export default function Juwa2Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Juwa 2.0", item: `${SITE.url}${ROUTES.juwa2}` },
        ],
      },
      {
        "@type": "WebPage",
        name: "Juwa 2.0 Guide",
        description: "Overview of the Juwa 2.0 casino update for Juwa 777 players.",
        url: `${SITE.url}${ROUTES.juwa2}`,
      },
    ],
  };

  return (
    <>
      <Script id="juwa2-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li className="text-accent" aria-current="page">Juwa 2.0</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Juwa 2.0 – Updated Casino Experience
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Juwa 2.0 is the refreshed line of the Juwa casino client many players search alongside
          Juwa 777. It keeps the familiar slots-and-rewards loop while pushing newer themes, cleaner
          visuals, and snappier session starts for returning accounts.
        </p>

        <figure className="mb-8 flex justify-center">
          <Image
            src="/juwa-2.0.webp"
            alt="Juwa 2.0 casino app update artwork"
            width={160}
            height={160}
            className="rounded-xl object-contain w-28 h-28 md:w-40 md:h-40 drop-shadow-xl"
            priority
            sizes="160px"
          />
        </figure>

        <div className="flex justify-center mb-10">
          <DownloadButton
            label="DOWNLOAD JUWA 2.0 APK"
            href={DOWNLOAD_JUWA2_URL}
            ariaLabel="Download Juwa 2.0 APK for Android"
          />
        </div>

        <h2 className="text-2xl font-bold text-accent mb-4">What Juwa 2.0 Improves</h2>
        <ul className="space-y-3 text-gray-300 mb-8 list-disc list-inside">
          <li>Fresh slot themes with clearer bonus moments on each spin cycle</li>
          <li>Faster lobby loads on mid-range Android devices</li>
          <li>Updated daily reward presentation, including refreshed spin wheels</li>
          <li>Stability fixes that reduce mid-session disconnects on busy tables</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent mb-4">Juwa 2.0 vs Classic Juwa 777</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Classic Juwa 777 remains the brand players type into Google when they want slots plus fish
          shooters in one place. Juwa 2.0 is best understood as the upgraded presentation of that
          ecosystem — useful when your agent or store points you to the newer package name.
        </p>
        <p className="text-gray-300 mb-8 leading-relaxed">
          If you already play on Juwa 777, ask your agent whether your credits move with the 2.0
          client before you uninstall the older build. Account rules differ by distributor.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-4">How to Update</h2>
        <ol className="space-y-3 text-gray-300 mb-8 list-decimal list-inside">
          <li>
            Follow the same APK flow on our{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">
              download page
            </Link>
            .
          </li>
          <li>Uninstall only if your agent confirms a clean reinstall is required.</li>
          <li>Install the new package, then log in and verify wallet + favorites.</li>
        </ol>

        <p className="text-gray-400 text-sm">
          Still on mobile first? Start from the{" "}
          <Link href="/" className="text-accent hover:underline">
            Juwa 777 home overview
          </Link>
          .
        </p>
      </div>
    </>
  );
}
