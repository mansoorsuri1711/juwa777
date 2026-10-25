import Link from "next/link";
import { Metadata } from "next";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Juwa 777 Blog – Login, Safety, iOS & Bonuses" },
  description:
    "Juwa 777 guides based on real search demand: login help, safety review, iOS download, and daily bonuses. No filler posts.",
  alternates: { canonical: `${SITE.url}${ROUTES.blog}` },
};

const posts = [
  {
    href: ROUTES.blogLogin,
    title: "Juwa 777 Login Guide: Create Account & Sign In",
    excerpt:
      "Step-by-step registration, login, forgot password, and fixes for common Juwa 777 sign-in errors.",
    read: "8 min",
    tag: "Account",
  },
  {
    href: ROUTES.blogSafe,
    title: "Is Juwa 777 Safe? Honest Review for New Players",
    excerpt:
      "Sideloading risks, agent trust, responsible play, and what red flags mean before you deposit credits.",
    read: "9 min",
    tag: "Safety",
  },
  {
    href: ROUTES.blogIos,
    title: "Juwa 777 iOS Download: iPhone Install Options",
    excerpt:
      "How iPhone players get Juwa 777 when the full hub is not on the App Store, plus practical limits.",
    read: "7 min",
    tag: "iOS",
  },
  {
    href: ROUTES.blogBonuses,
    title: "Juwa 777 Bonuses & Events: Wager Hour, Cashback, Wheel",
    excerpt:
      "CST schedules for Wager Bonus Hour, cashback tiers, Lucky Wheel, and daily draws explained clearly.",
    read: "8 min",
    tag: "Bonuses",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-accent" aria-current="page">
            Blog
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Juwa 777 Blog</h1>
      <p className="text-gray-300 mb-10 text-lg max-w-3xl">
        Only guides that match active Juwa 777 searches — login, safety, iOS install, and bonuses.
        Deposit, withdraw, PC, and Juwa 2.0 live on dedicated pages so we do not cannibalize those
        intents here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.href}
            className="bg-[#1A0A0A] px-6 py-7 rounded-xl border border-red-900/40 hover:border-accent transition-colors"
          >
            <span className="inline-block text-xs font-semibold tracking-wide text-accent mb-3">
              {post.tag}
            </span>
            <h2 className="text-xl font-bold mb-3 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>October 2026</span>
              <span>·</span>
              <span>{post.read} read</span>
            </div>
            <Link href={post.href} className="text-accent hover:underline font-semibold">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
