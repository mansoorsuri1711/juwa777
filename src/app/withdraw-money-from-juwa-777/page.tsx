import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Withdraw from Juwa 777 – Redeem Credits Guide" },
  description:
    "Withdraw or redeem Juwa 777 credits through your agent. Learn balance checks, request steps, timing, and how to avoid common payout mistakes.",
  alternates: { canonical: `${SITE.url}${ROUTES.withdraw}` },
};

export default function WithdrawPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Withdraw from Juwa 777", item: `${SITE.url}${ROUTES.withdraw}` },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Withdraw Credits from Juwa 777",
        step: [
          { "@type": "HowToStep", position: 1, name: "Check wallet", text: "Confirm available credits and any minimum redeem amount." },
          { "@type": "HowToStep", position: 2, name: "Request redeem", text: "Contact your Juwa agent with player ID and redeem amount." },
          { "@type": "HowToStep", position: 3, name: "Confirm payout details", text: "Share the payout method your agent supports." },
          { "@type": "HowToStep", position: 4, name: "Verify receipt", text: "Confirm funds arrived, then check the in-app balance dropped correctly." },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="withdraw-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li className="text-accent" aria-current="page">Withdraw</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How to Withdraw Money from Juwa 777
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Redeeming Juwa 777 credits works through the same agent relationship used for deposits.
          Clear communication, correct player IDs, and realistic timing beat rushing a payout
          request after a big session.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-4">Withdraw Checklist</h2>
        <ul className="space-y-3 text-gray-300 mb-8 list-disc list-inside">
          <li>Confirm the credit balance inside the Juwa 777 wallet.</li>
          <li>Ask your agent about minimum redeem amounts and processing windows.</li>
          <li>Use the same payout channel the agent already verified for you when possible.</li>
          <li>Keep screenshots of the request until the transfer lands.</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent mb-4">Step-by-Step Redeem Flow</h2>
        <ol className="space-y-4 text-gray-300 mb-8 list-decimal list-inside">
          <li>Open Juwa 777 and note your exact available credits.</li>
          <li>Message your agent with player ID, redeem amount, and preferred payout method.</li>
          <li>Wait for the agent to confirm they can process that amount today.</li>
          <li>After they approve, watch for the wallet deduction and the external payment.</li>
          <li>Reply only if something mismatches — do not send credits to unknown third parties.</li>
        </ol>

        <h2 className="text-2xl font-bold text-accent mb-4">Timing &amp; Expectations</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Some redeems finish within minutes; others wait for the agent&apos;s banking cut-off. Peak
          evenings and weekends can run slower. If a delay stretches past the window your agent
          quoted, send one polite follow-up with the original request details attached.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-4">Avoid These Mistakes</h2>
        <ul className="space-y-2 text-gray-300 mb-8 list-disc list-inside">
          <li>Requesting a redeem while still mid-game on a shared table.</li>
          <li>Switching payout accounts without telling the agent first.</li>
          <li>Working with a new contact who will not verify through a known store or admin.</li>
        </ul>

        <p className="text-gray-400 text-sm mb-8">
          Need to add credits first? Use the{" "}
          <Link href={ROUTES.deposit} className="text-accent hover:underline">
            deposit guide
          </Link>
          .
        </p>

        <div className="text-center">
          <DownloadButton />
        </div>
      </div>
    </>
  );
}
