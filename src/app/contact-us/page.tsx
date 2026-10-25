import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Juwa 777 Support – juwa777.love" },
  description:
    "Contact juwa777.love for help with Juwa 777 guides, download questions, privacy, or site content. Email support@juwa777.love.",
  alternates: { canonical: `${SITE.url}${ROUTES.contact}` },
  openGraph: {
    title: "Contact Juwa 777 Support",
    description: "Get help with Juwa 777 guides and downloads on juwa777.love.",
    url: `${SITE.url}${ROUTES.contact}`,
    siteName: "Juwa 777",
    type: "website",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-accent" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-lg text-gray-400">We are here to help with Juwa 777 site questions.</p>
        </div>

        <div className="bg-[#1A0A0A] rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-red-900/30">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Reach out if you need help with{" "}
            <Link href="/" className="text-accent hover:underline font-semibold">
              Juwa 777
            </Link>{" "}
            download guides,{" "}
            <Link href={ROUTES.about} className="text-accent hover:underline font-semibold">
              About us
            </Link>
            ,{" "}
            <Link href={ROUTES.privacy} className="text-accent hover:underline font-semibold">
              privacy
            </Link>
            , or other content on juwa777.love. For in-app credit issues, contact the agent who
            manages your player account.
          </p>

          <div className="rounded-xl p-8 border-2 border-accent/40 text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">Email Support</h2>
            <a
              href={`mailto:${SITE.email}`}
              className="text-accent text-xl font-semibold hover:underline break-all"
            >
              {SITE.email}
            </a>
            <p className="text-gray-400 text-sm mt-3">We aim to reply within 1–2 business days.</p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
