import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Deposit Money in Juwa 777 – Credits & Agents Guide" },
  description:
    "Learn how to deposit credits in Juwa 777 through trusted agents. Clear steps, payment tips, and safety checks before you fund your wallet.",
  alternates: { canonical: `${SITE.url}${ROUTES.deposit}` },
};

export default function DepositPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Deposit in Juwa 777", item: `${SITE.url}${ROUTES.deposit}` },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to Deposit Credits in Juwa 777",
        step: [
          { "@type": "HowToStep", position: 1, name: "Install and log in", text: "Install Juwa 777 and sign into your player account." },
          { "@type": "HowToStep", position: 2, name: "Contact a trusted agent", text: "Reach a verified Juwa agent or store for credit purchase options." },
          { "@type": "HowToStep", position: 3, name: "Send payment", text: "Pay using the method your agent confirms (bank, e-wallet, or cash network)." },
          { "@type": "HowToStep", position: 4, name: "Confirm credits", text: "Share your player ID, wait for wallet update, then verify the balance in-app." },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="deposit-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li className="text-accent" aria-current="page">Deposit</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How to Deposit Money in Juwa 777
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Juwa 777 usually funds player wallets through agents or store accounts rather than a
          public self-serve cashier on every build. This guide explains the safe pattern: verify the
          agent, send payment only after you confirm the player ID, and check the in-app wallet
          before you start spinning.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-4">Before You Deposit</h2>
        <ul className="space-y-3 text-gray-300 mb-8 list-disc list-inside">
          <li>
            Install from our{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">
              download page
            </Link>{" "}
            and finish registration.
          </li>
          <li>Write down your exact player ID / username from the app profile.</li>
          <li>Only use agents you can verify — see{" "}
            <Link href={ROUTES.admin} className="text-accent hover:underline">Juwa Admin</Link>{" "}
            for the agent-side context.</li>
          <li>Start with a small test amount the first time you work with a new agent.</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent mb-4">Deposit Steps</h2>
        <ol className="space-y-4 text-gray-300 mb-8 list-decimal list-inside">
          <li>Open Juwa 777 and confirm you are logged into the correct account.</li>
          <li>Message your agent with the credit amount you want and your player ID.</li>
          <li>Complete payment using only the details the agent provides for that order.</li>
          <li>Send the payment screenshot or reference number if the agent requests proof.</li>
          <li>Refresh the wallet. Credits should appear after the agent loads the account.</li>
        </ol>

        <h2 className="text-2xl font-bold text-accent mb-4">Common Payment Paths</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Exact methods vary by agent and region. Players commonly use bank transfer, popular
          e-wallets, cash-app style rails, or in-person store loads. Always match the method your
          agent lists for that transaction — do not invent a payment destination from a social post.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-4">If Credits Do Not Appear</h2>
        <ul className="space-y-2 text-gray-300 mb-8 list-disc list-inside">
          <li>Confirm the player ID spelling with the agent.</li>
          <li>Wait a few minutes, force-close the app, and reopen the wallet.</li>
          <li>Keep the payment receipt until the balance updates.</li>
          <li>
            Still stuck? Contact us via the{" "}
            <Link href={ROUTES.contact} className="text-accent hover:underline">
              contact page
            </Link>
            .
          </li>
        </ul>

        <p className="text-gray-400 text-sm mb-8">
          Ready to redeem later? Follow the{" "}
          <Link href={ROUTES.withdraw} className="text-accent hover:underline">
            withdraw guide
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
