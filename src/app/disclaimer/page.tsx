import { Metadata } from "next";
import Link from "next/link";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Disclaimer – Juwa 777 | juwa777.love" },
  description:
    "Disclaimer for juwa777.love: independent Juwa 777 information site. Entertainment only, 18+, no income guarantees, play responsibly.",
  alternates: { canonical: `${SITE.url}${ROUTES.disclaimer}` },
};

export default function DisclaimerPage() {
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
            Disclaimer
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Disclaimer</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: October 25, 2026</p>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          <strong className="text-white">juwa777.love</strong> is an independent information website
          about Juwa 777. Content is for educational and entertainment purposes only. We are not
          affiliated with every APK mirror, agent network, or third-party casino brand that uses a
          similar name.
        </p>

        <h2 className="text-2xl font-bold text-accent">No Income Guarantees</h2>
        <p>
          Juwa 777 gameplay involves chance. Nothing on this site promises profits, guaranteed
          withdrawals, or risk-free credits. Never spend more than you can afford to lose.
        </p>

        <h2 className="text-2xl font-bold text-accent">Adults Only (18+)</h2>
        <p>
          Guides assume readers are adults (18+). If gaming affects your finances, relationships, or
          mental health, take a break and seek responsible gaming resources in your region.
        </p>

        <h2 className="text-2xl font-bold text-accent">Downloads &amp; Sideloading</h2>
        <p>
          Installing apps outside official stores carries security risk. You are responsible for
          reviewing permissions, scanning files, and choosing trusted sources. We do not control
          third-party servers that may host APK packages after you leave this site.
        </p>

        <h2 className="text-2xl font-bold text-accent">Agents &amp; Payments</h2>
        <p>
          Credit deposits and redeems often involve independent agents. Verify them yourself. We are
          not a party to private payment disputes between players and agents.
        </p>

        <h2 className="text-2xl font-bold text-accent">Accuracy</h2>
        <p>
          App versions, event times, and features change. We update pages when we can, but always
          confirm critical details inside the live app or with your agent before acting.
        </p>

        <p>
          Questions?{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
            {SITE.email}
          </a>{" "}
          ·{" "}
          <Link href={ROUTES.privacy} className="text-accent hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
