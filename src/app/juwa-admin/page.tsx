import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Juwa Admin – Agent & Distributor Guide" },
  description:
    "Understand Juwa Admin / agent backends used with Juwa 777. Learn what store owners do, how player accounts are created, and what players should verify.",
  alternates: { canonical: `${SITE.url}${ROUTES.admin}` },
};

export default function AdminPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Juwa Admin", item: `${SITE.url}${ROUTES.admin}` },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="admin-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li className="text-accent" aria-current="page">Juwa Admin</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Juwa Admin Explained for Players &amp; Stores
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Searches for “Juwa admin” usually point to the agent or distributor backend that creates
          player accounts and loads credits for Juwa 777. Players do not need that dashboard for
          everyday spins — but understanding it helps you judge whether an agent is legitimate.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-4">What the Admin Side Does</h2>
        <ul className="space-y-3 text-gray-300 mb-8 list-disc list-inside">
          <li>Create and manage player logins for a store or downline</li>
          <li>Load or reclaim credits tied to those accounts</li>
          <li>Track sub-agent hierarchies for distributors</li>
          <li>Support password resets when a player is locked out</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent mb-4">What Players Should Verify</h2>
        <ul className="space-y-3 text-gray-300 mb-8 list-disc list-inside">
          <li>The agent can show they operate under a real store / distributor chain</li>
          <li>Deposit and redeem rules are written before you send money</li>
          <li>Your player ID is created inside Juwa 777, not a random clone app</li>
          <li>Support replies consistently — not only when collecting deposits</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent mb-4">Related Player Guides</h2>
        <ul className="space-y-2 text-gray-300 mb-10">
          <li>
            <Link href={ROUTES.deposit} className="text-accent hover:underline">
              Deposit credits in Juwa 777
            </Link>
          </li>
          <li>
            <Link href={ROUTES.withdraw} className="text-accent hover:underline">
              Withdraw / redeem credits
            </Link>
          </li>
          <li>
            <Link href={ROUTES.blogLogin} className="text-accent hover:underline">
              Account &amp; login help
            </Link>
          </li>
        </ul>

        <div className="text-center">
          <DownloadButton />
        </div>
      </div>
    </>
  );
}
