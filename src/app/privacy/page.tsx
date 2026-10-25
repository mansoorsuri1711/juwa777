import { Metadata } from "next";
import Link from "next/link";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy – Juwa 777 | juwa777.love" },
  description:
    "Privacy Policy for juwa777.love. Learn what information we collect, how we use it, and your choices when visiting our Juwa 777 guides.",
  alternates: { canonical: `${SITE.url}${ROUTES.privacy}` },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-accent" aria-current="page">
            Privacy Policy
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: October 25, 2026</p>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          This Privacy Policy explains how <strong className="text-white">juwa777.love</strong>{" "}
          (“we”, “us”) handles information when you visit our independent Juwa 777 information
          website. We wrote this policy for this site — it is not a generic generator template.
        </p>

        <h2 className="text-2xl font-bold text-accent">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Basic server logs (IP address, browser type, pages viewed, timestamps)</li>
          <li>Messages you send via the contact form or email</li>
          <li>Optional analytics events if a measurement ID is configured</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent">How We Use Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To operate and improve juwa777.love</li>
          <li>To respond to support requests</li>
          <li>To understand which guides are helpful</li>
          <li>To protect the site against abuse</li>
        </ul>

        <h2 className="text-2xl font-bold text-accent">Cookies &amp; Similar Tech</h2>
        <p>
          We may use essential cookies for site function and, if enabled, analytics cookies to
          measure traffic. You can control cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-bold text-accent">Third Parties</h2>
        <p>
          Download destinations, emulators, or agent platforms you choose after leaving this site
          have their own privacy practices. Review those policies before installing apps or sending
          payment details.
        </p>

        <h2 className="text-2xl font-bold text-accent">Data Retention</h2>
        <p>
          Contact emails are kept as long as needed to resolve your request. Server logs are rotated
          on a normal hosting schedule.
        </p>

        <h2 className="text-2xl font-bold text-accent">Your Choices</h2>
        <p>
          Email us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
            {SITE.email}
          </a>{" "}
          to ask questions about data we hold from site contact forms.
        </p>

        <h2 className="text-2xl font-bold text-accent">Children</h2>
        <p>
          Juwa 777 content on this site is intended for adults 18+. We do not knowingly collect
          information from children.
        </p>

        <h2 className="text-2xl font-bold text-accent">Changes</h2>
        <p>
          We may update this policy when our practices change. The “Last updated” date at the top
          will reflect the latest revision.
        </p>

        <p>
          Related:{" "}
          <Link href={ROUTES.disclaimer} className="text-accent hover:underline">
            Disclaimer
          </Link>{" "}
          ·{" "}
          <Link href={ROUTES.contact} className="text-accent hover:underline">
            Contact
          </Link>
        </p>
      </div>
    </div>
  );
}
