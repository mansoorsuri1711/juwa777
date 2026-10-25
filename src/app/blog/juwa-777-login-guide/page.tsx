import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Juwa 777 Login Guide – Create Account & Sign In" },
  description:
    "Create a Juwa 777 account, log in on Android, reset your password, and fix common login errors with clear steps.",
  alternates: { canonical: `${SITE.url}${ROUTES.blogLogin}` },
};

export default function LoginBlog() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}${ROUTES.blog}` },
          { "@type": "ListItem", position: 3, name: "Juwa 777 Login Guide", item: `${SITE.url}${ROUTES.blogLogin}` },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: "Juwa 777 Login Guide: Create Account & Sign In",
        datePublished: "2026-10-25",
        dateModified: "2026-10-25",
        author: { "@type": "Organization", name: "Juwa 777" },
        publisher: {
          "@type": "Organization",
          name: "Juwa 777",
          logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` },
        },
        image: `${SITE.url}${SITE.logo}`,
        mainEntityOfPage: `${SITE.url}${ROUTES.blogLogin}`,
        description:
          "How to register, log in, and recover a Juwa 777 account on mobile.",
      },
    ],
  };

  return (
    <>
      <Script id="login-blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="container mx-auto px-4 py-10 max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-accent">Home</Link></li>
            <li>/</li>
            <li><Link href={ROUTES.blog} className="hover:text-accent">Blog</Link></li>
            <li>/</li>
            <li className="text-accent" aria-current="page">Login Guide</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Juwa 777 Login Guide: Create Account &amp; Sign In
        </h1>
        <p className="text-gray-400 text-sm mb-6">Updated October 25, 2026 · 8 min read</p>

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          Most Juwa 777 login searches come from players who just installed the APK or received a
          player ID from an agent. This guide covers both self-registration flows and agent-created
          accounts so you can reach the lobby without bouncing between random Facebook tips.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">Install Before You Log In</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Login only works inside the real Juwa 777 client. If you still need the package, follow
          the{" "}
          <Link href={ROUTES.download} className="text-accent hover:underline">
            Android download steps
          </Link>{" "}
          first, then return here.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">Create a New Account</h2>
        <ol className="space-y-3 text-gray-300 mb-6 list-decimal list-inside">
          <li>Open Juwa 777 and choose Register / Sign Up.</li>
          <li>Enter the username, password, and any phone or invite fields the form shows.</li>
          <li>If an agent gave you a referral or store code, enter it exactly as written.</li>
          <li>Submit, then log in once with the same credentials to confirm they stick.</li>
        </ol>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Some players never see a public register button because their store issues accounts from
          Juwa Admin. In that case, ask the agent for the username and temporary password, then
          change the password after the first successful login.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">Daily Login Steps</h2>
        <ol className="space-y-3 text-gray-300 mb-6 list-decimal list-inside">
          <li>Launch the app on a stable Wi-Fi or LTE connection.</li>
          <li>Enter username and password on the login screen.</li>
          <li>Tap Login and wait for the lobby — do not spam the button.</li>
          <li>If biometric or remember-me options appear, enable them only on your own device.</li>
        </ol>

        <h2 className="text-2xl font-bold text-accent mb-3">Forgot Password</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Tap Forgot Password on the login screen and follow the in-app reset. When the account was
          created by an agent, the agent may need to reset it from the admin panel. Keep your player
          ID ready so support can find the correct record.
        </p>

        <h2 className="text-2xl font-bold text-accent mb-3">Common Login Problems</h2>
        <ul className="space-y-3 text-gray-300 mb-8 list-disc list-inside">
          <li>
            <strong className="text-white">Wrong password:</strong> retype carefully; agent-issued
            passwords often mix numbers and letters.
          </li>
          <li>
            <strong className="text-white">Network timeout:</strong> switch networks, then retry once.
          </li>
          <li>
            <strong className="text-white">Old APK:</strong> update from the{" "}
            <Link href={ROUTES.download} className="text-accent hover:underline">
              download page
            </Link>
            .
          </li>
          <li>
            <strong className="text-white">Account frozen:</strong> contact the agent who manages
            your credits — see{" "}
            <Link href={ROUTES.admin} className="text-accent hover:underline">
              Juwa Admin
            </Link>
            .
          </li>
        </ul>

        <div className="text-center py-4">
          <DownloadButton />
        </div>
      </article>
    </>
  );
}
