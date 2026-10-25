import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Download Juwa 777 APK – Android Install Guide" },
  description:
    "Download Juwa 777 APK for Android with step-by-step install instructions. Latest version, file size, unknown sources setup, and safety tips on juwa777.love.",
  alternates: { canonical: `${SITE.url}${ROUTES.download}` },
  openGraph: {
    title: "Download Juwa 777 APK – Android Install Guide",
    description: "Get the latest Juwa 777 APK and install it safely on Android.",
    url: `${SITE.url}${ROUTES.download}`,
    siteName: "Juwa 777",
    images: [{ url: `${SITE.url}/juwa777-download.webp`, width: 800, height: 500, alt: "Download Juwa 777 APK" }],
  },
};

export default function DownloadPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Download Juwa 777", item: `${SITE.url}${ROUTES.download}` },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Juwa 777",
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE.ratingValue,
          bestRating: "5",
          ratingCount: SITE.ratingCount,
        },
        softwareVersion: SITE.version,
        fileSize: SITE.fileSize,
        downloadUrl: `${SITE.url}${ROUTES.download}`,
      },
      {
        "@type": "HowTo",
        name: "Install Juwa 777 APK on Android",
        totalTime: "PT5M",
        step: [
          { "@type": "HowToStep", position: 1, name: "Download APK", text: "Tap DOWNLOAD NOW and save the Juwa 777 APK." },
          { "@type": "HowToStep", position: 2, name: "Allow unknown apps", text: "Enable Install unknown apps for your browser or Files app." },
          { "@type": "HowToStep", position: 3, name: "Install", text: "Open the APK from Downloads and tap Install." },
          { "@type": "HowToStep", position: 4, name: "Launch", text: "Open Juwa 777 and create or log into your account." },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="download-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-accent" aria-current="page">Download Juwa 777</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Download Juwa 777 APK for Android
        </h1>
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          This page is the install hub for Juwa 777 on Android phones and tablets. You will get the
          current APK details, a short safety checklist, and exact settings paths so the install
          finishes without Play Store access.
        </p>

        <div className="flex items-center gap-3 mb-6 text-sm text-gray-300">
          <span className="text-accent font-semibold text-lg">{SITE.ratingValue} ★★★★☆</span>
          <span>({Number(SITE.ratingCount).toLocaleString()}) · Free · Android · Game</span>
        </div>

        <div className="flex justify-center mb-8">
          <DownloadButton label="DOWNLOAD JUWA 777 APK" />
        </div>

        <figure className="mb-10">
          <Image
            src="/juwa777-download.webp"
            alt="Juwa 777 APK download artwork for Android install"
            width={900}
            height={500}
            className="rounded-xl w-full h-auto border border-red-900/30"
            priority
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </figure>

        <h2 className="text-2xl font-bold text-accent mb-4">APK Information</h2>
        <div className="overflow-x-auto rounded-xl border border-red-900/40 bg-[#1A0A0A] mb-10">
          <table className="w-full text-left text-gray-200">
            <tbody>
              {[
                ["App Name", "Juwa 777"],
                ["Version", SITE.version],
                ["Size", SITE.fileSize],
                ["Requirement", SITE.androidMin],
                ["License", "Free"],
                ["Updated", "October 25, 2026"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-red-950/50">
                  <th className="px-4 py-3 text-accent w-1/3">{k}</th>
                  <td className="px-4 py-3">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-accent mb-4">Step-by-Step Android Install</h2>
        <ol className="space-y-5 text-gray-300 mb-10">
          <li>
            <strong className="text-white">1. Download the APK.</strong> Use the button above. Wait
            until the file finishes — do not open a partial download.
          </li>
          <li>
            <strong className="text-white">2. Open install permissions.</strong> Go to Settings →
            Apps → Special app access → Install unknown apps. Select Chrome (or your browser / Files)
            and turn Allow from this source ON.
          </li>
          <li>
            <strong className="text-white">3. Open the file.</strong> In Files or Downloads, tap the
            Juwa 777 APK.
          </li>
          <li>
            <strong className="text-white">4. Install.</strong> Review the permission prompt, tap
            Install, then Open when it completes.
          </li>
          <li>
            <strong className="text-white">5. Sign in.</strong> Create an account or log in. Need
            help? Read the{" "}
            <Link href={ROUTES.blogLogin} className="text-accent hover:underline">
              Juwa 777 login guide
            </Link>
            .
          </li>
        </ol>

        <h2 className="text-2xl font-bold text-accent mb-4">Safety Tips Before You Sideload</h2>
        <ul className="space-y-3 text-gray-300 mb-10 list-disc list-inside">
          <li>Download only from this site&apos;s current button — avoid random Telegram APKs.</li>
          <li>Keep Play Protect or a mobile antivirus enabled when testing new APKs.</li>
          <li>After install, you can turn unknown sources back off for that browser.</li>
          <li>
            Review our{" "}
            <Link href={ROUTES.blogSafe} className="text-accent hover:underline">
              safety article
            </Link>{" "}
            before depositing credits.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-accent mb-4">Other Platforms</h2>
        <ul className="space-y-2 text-gray-300 mb-10">
          <li>
            <Link href={ROUTES.blogIos} className="text-accent hover:underline">
              Juwa 777 iOS download
            </Link>{" "}
            — iPhone / iPad install paths
          </li>
          <li>
            <Link href={ROUTES.pc} className="text-accent hover:underline">
              Juwa 777 for PC
            </Link>{" "}
            — BlueStacks / LDPlayer setup
          </li>
          <li>
            <Link href={ROUTES.juwa2} className="text-accent hover:underline">
              Juwa 2.0
            </Link>{" "}
            — refreshed client overview
          </li>
        </ul>

        <div className="text-center py-6">
          <DownloadButton size="lg" />
        </div>
      </div>
    </>
  );
}
