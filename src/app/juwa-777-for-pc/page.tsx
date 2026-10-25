import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Juwa 777 for PC – Play with Android Emulator" },
  description:
    "Play Juwa 777 on PC or laptop with BlueStacks, LDPlayer, or MEmu. Step-by-step emulator install, APK setup, and performance tips.",
  alternates: { canonical: `${SITE.url}${ROUTES.pc}` },
};

export default function PcPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Juwa 777 for PC", item: `${SITE.url}${ROUTES.pc}` },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Play Juwa 777 on PC",
        step: [
          { "@type": "HowToStep", position: 1, name: "Install emulator", text: "Install BlueStacks, LDPlayer, or MEmu on Windows." },
          { "@type": "HowToStep", position: 2, name: "Download APK", text: "Download the Juwa 777 APK from juwa777.love." },
          { "@type": "HowToStep", position: 3, name: "Install APK in emulator", text: "Drag the APK into the emulator or use the Install APK button." },
          { "@type": "HowToStep", position: 4, name: "Play", text: "Launch Juwa 777, log in, and play with mouse or keyboard mapping." },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="pc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li className="text-accent" aria-current="page">PC Version</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Juwa 777 on PC – Emulator Setup Guide
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Juwa 777 is built for mobile, but Windows players can run the same APK inside an Android
          emulator. A larger screen helps with fishing aim and multi-slot browsing while you keep
          the same account used on your phone.
        </p>

        <div className="mb-8 flex justify-center">
          <DownloadButton label="GET JUWA 777 APK FOR PC" />
        </div>

        <h2 className="text-2xl font-bold text-accent mb-4">Recommended Emulators</h2>
        <ul className="space-y-2 text-gray-300 mb-8 list-disc list-inside">
          <li>BlueStacks — beginner-friendly, strong keyboard mapping</li>
          <li>LDPlayer — lighter on some mid-range PCs</li>
          <li>MEmu — solid alternative if BlueStacks conflicts with antivirus</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent mb-4">Install Juwa 777 on an Emulator</h2>
        <ol className="space-y-4 text-gray-300 mb-8 list-decimal list-inside">
          <li>Download and install your chosen emulator from its official site.</li>
          <li>
            Download the Juwa 777 APK from our{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">
              Android download guide
            </Link>
            .
          </li>
          <li>Open the emulator → use Install APK / drag-and-drop the file into the window.</li>
          <li>Allow any install prompt, then open the Juwa 777 icon on the emulator home screen.</li>
          <li>Log in with the same credentials you use on mobile.</li>
        </ol>

        <h2 className="text-2xl font-bold text-accent mb-4">Performance Tips</h2>
        <ul className="space-y-2 text-gray-300 mb-8 list-disc list-inside">
          <li>Assign at least 2–4 CPU cores and 3–4 GB RAM in emulator settings.</li>
          <li>Enable virtualization (VT-x / AMD-V) in BIOS if the emulator suggests it.</li>
          <li>Close heavy Chrome tabs while fishing games are open.</li>
          <li>Map mouse right-click or side buttons for faster shot fire if your emulator supports it.</li>
        </ul>

        <p className="text-gray-400 text-sm mb-8">
          Prefer phone play? Return to the{" "}
          <Link href="/" className="text-accent hover:underline">
            Juwa 777 homepage
          </Link>
          .
        </p>
      </div>
    </>
  );
}
