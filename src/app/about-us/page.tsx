import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About Juwa 777 – juwa777.love" },
  description:
    "About juwa777.love: an independent information site helping US players download Juwa 777, learn bonuses, and play responsibly.",
  alternates: { canonical: `${SITE.url}${ROUTES.about}` },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE.url}${ROUTES.about}` },
        ],
      },
      {
        "@type": "AboutPage",
        name: "About Juwa 777",
        url: `${SITE.url}${ROUTES.about}`,
        description: "Independent Juwa 777 guides and download help on juwa777.love.",
      },
    ],
  };

  return (
    <>
      <Script id="about-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li className="text-accent" aria-current="page">About Us</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">About Juwa 777 on juwa777.love</h1>

        <div className="flex justify-center mb-8">
          <Image
            src="/juwa-777-game-logo.webp"
            alt="Juwa 777 brand logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        <div className="space-y-5 text-gray-300 leading-relaxed mb-10">
          <p>
            <strong className="text-white">juwa777.love</strong> is an independent information
            website focused on Juwa 777 — the mobile social gaming app known for slots, fish
            shooters, daily events, and agent-based credit wallets popular with US players.
          </p>
          <p>
            We publish clear download steps, deposit and withdraw guidance, Juwa 2.0 notes, PC
            emulator help, and a small set of blog posts that match real search demand (login,
            safety, iOS, bonuses). We are not the app developer and we do not operate Juwa Admin
            backends.
          </p>
          <p>
            Our goal is editorial clarity: original copy, honest risk language, on-domain download
            guidance, and pages structured for people first — not doorway clones stuffed with the
            same paragraph on every EMD.
          </p>
          <p>
            Questions about this site? Email{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
              {SITE.email}
            </a>{" "}
            or use the{" "}
            <Link href={ROUTES.contact} className="text-accent hover:underline">
              contact page
            </Link>
            .
          </p>
        </div>

        <div className="text-center">
          <DownloadButton />
        </div>
      </div>
    </>
  );
}
