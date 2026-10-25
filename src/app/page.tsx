import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import DownloadButton from "@/components/DownloadButton";
import { ROUTES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Juwa 777 APK Download – Slots & Fish Games App" },
  description:
    "Download Juwa 777 APK for Android. Play slots and fish shooters with Wager Bonus Hour, cashback, Lucky Wheel, and daily draws. Free social casino app for US players.",
  keywords: [
    "Juwa 777",
    "Juwa 777 APK",
    "Juwa 777 download",
    "Juwa casino",
    "Juwa fish games",
    "Juwa slots",
    "Juwa 2.0",
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Juwa 777 APK Download – Slots & Fish Games App",
    description:
      "Play Juwa 777 slots and fishing games with daily bonuses, cashback, and Lucky Wheel rewards.",
    url: SITE.url,
    siteName: "Juwa 777",
    type: "website",
    images: [
      {
        url: `${SITE.url}${SITE.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Juwa 777 online casino app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juwa 777 APK Download – Slots & Fish Games App",
    description: "Download Juwa 777 for slots, fish games, and daily rewards.",
    images: [`${SITE.url}${SITE.twitterImage}`],
  },
};

const faqs = [
  {
    q: "Is Juwa 777 free to download?",
    a: "Yes. Juwa 777 is free to download as an APK for Android. You can get the file from juwa777.love, install it manually, and create or log into an account without paying for the app itself.",
  },
  {
    q: "What games can I play in Juwa 777?",
    a: "Juwa 777 focuses on slot machines and fishing shooters. Popular slots include Lucky Puppy, Shamrock Spin, Borgata 777 Respin, and Crystal Clovers. Fishing titles include Deep Sea Predator, King Kongs Rampage, and Dragon Slayer.",
  },
  {
    q: "Can I play Juwa 777 on iPhone or PC?",
    a: "Yes. iPhone users should follow our iOS download guide for agent or profile-based installs. On PC, run the Android APK inside BlueStacks, LDPlayer, or MEmu using our PC guide.",
  },
  {
    q: "Does Juwa 777 give daily redeem codes?",
    a: "Juwa 777 does not rely on public daily redeem codes. Extra credits usually come from Wager Bonus Hour, cashback tiers, the Lucky Hour Wheel, and scheduled draws shown inside the app.",
  },
  {
    q: "How do I reset my Juwa 777 password?",
    a: "On the login screen, tap Forgot Password and follow the steps. If an agent created your account, that agent may need to reset access from Juwa Admin.",
  },
  {
    q: "Is Juwa 777 safe to play?",
    a: "Juwa 777 is a social casino-style app for adults 18+. Download from a trusted source, review permissions, verify your agent before depositing, and treat credits as entertainment spend. Outcomes are chance-based.",
  },
  {
    q: "How do I deposit credits in Juwa 777?",
    a: "Most players fund wallets through a trusted agent. Install the app, share your player ID, pay only the method the agent confirms, then check the in-app wallet. Full steps are on our deposit guide.",
  },
  {
    q: "How do withdrawals work?",
    a: "Redeem requests usually go through the same agent who loaded credits. Confirm your balance, request a redeem amount, share payout details, and wait for the quoted window. See our withdraw guide for the checklist.",
  },
  {
    q: "What is Juwa 2.0?",
    a: "Juwa 2.0 is the refreshed client many stores offer alongside classic Juwa 777. It keeps slots and rewards while updating themes and performance. Ask your agent before switching packages so credits stay linked correctly.",
  },
  {
    q: "Why is Juwa 777 not on Google Play?",
    a: "The full social casino hub is commonly distributed as an APK outside Play Store policies for this category. That is why install guides focus on unknown-sources setup and trusted download paths.",
  },
];

const slotGames = [
  "Lucky Puppy",
  "Shamrock Spin",
  "Borgata 777 Respin",
  "Black Wolf 2",
  "Simple Triple Smile",
  "Simple Dollar 2",
  "Simple Dollar",
  "Gold Standard Jackpots",
  "Crystal Clovers 7",
  "Super Stars",
  "Mega Pay 10x",
  "Wild Royale Gold",
  "Wicked Sticky",
  "Jackpot Link",
  "Hit in Vegas",
  "Pinata Trio",
  "Piggy Biggy Wheel",
  "Buffalo Gold Revolution",
  "Banana Town",
  "Top GUN",
  "Wilds of Fortune 777",
  "Chicken Fox JR",
  "Great Emperor",
  "Monopoly Electric Wins",
  "Cherry Valentine",
  "Hex Gems",
  "Glitz",
];

const fishGames = [
  "King Kongs Rampage",
  "Deep Sea Predator",
  "Deep Sea Behemoth",
  "Juwa Kirin",
  "Dragon Slayer",
  "Fishermans Wharf",
  "Aquaman 3",
  "Happy Fishing",
  "Havoc in Haven",
  "Golden Cicada",
  "Cash Cow",
  "Dragon Treasure",
  "Likui Split Fish",
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: "Juwa 777",
        description: SITE.description,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: "Juwa 777",
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}${SITE.logo}`,
          width: 1024,
          height: 1024,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "Juwa 777",
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE.ratingValue,
          bestRating: "5",
          ratingCount: SITE.ratingCount,
        },
        softwareVersion: SITE.version,
        fileSize: SITE.fileSize,
        downloadUrl: `${SITE.url}${ROUTES.download}`,
        image: `${SITE.url}${SITE.logo}`,
        description: SITE.description,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "HowTo",
        name: "How to Download and Install Juwa 777 APK",
        description:
          "Install Juwa 777 on Android in a few minutes with unknown-sources enabled.",
        totalTime: "PT5M",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Open the download page",
            text: "Visit juwa777.love and open the Juwa 777 download guide.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Download the APK",
            text: "Tap DOWNLOAD NOW and wait for the Juwa 777 APK to finish saving.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Allow unknown sources",
            text: "In Android Settings, allow installs from your browser or file manager.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Install and open",
            text: "Open the APK, tap Install, then launch Juwa 777 to register or log in.",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Juwa 777</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent">
                Download APK &amp; Play Real Money Games Online 2026
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Juwa 777 brings slots and fishing shooters to your phone with a clear lobby, a built-in
              credit wallet, and daily events that keep sessions fresh. US players open the app for
              quick spins, arcade fish hunts, cashback tiers, and Lucky Wheel rewards without
              traveling to a physical casino floor.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This guide on juwa777.love covers what the app offers, how to install the latest APK,
              how credits move through agents, and which bonuses actually matter. Dedicated pages
              handle deep install, deposit, withdraw, PC, and Juwa 2.0 steps so every search intent
              has a clean home.
            </p>

            <div className="flex items-center gap-3 justify-center md:justify-start text-sm text-gray-300">
              <span
                className="text-accent font-semibold text-lg"
                aria-label={`${SITE.ratingValue} out of 5 stars`}
              >
                {SITE.ratingValue} ★★★★☆
              </span>
              <span>({Number(SITE.ratingCount).toLocaleString()} ratings)</span>
              <span>· Free · Android · Game</span>
            </div>

            <div className="flex justify-center md:justify-start my-6">
              <DownloadButton />
            </div>

            <div
              className="flex flex-row gap-4 justify-center md:justify-start mt-6 mb-4"
              style={{ minHeight: "120px" }}
            >
              <div
                className="bg-[#1A0A0A] p-5 rounded-2xl text-center flex-1 max-w-[160px]"
                style={{ minHeight: "110px" }}
              >
                <div className="text-white text-2xl font-bold mb-1">{SITE.downloadsLabel}</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div
                className="bg-[#1A0A0A] p-5 rounded-2xl text-center flex-1 max-w-[160px]"
                style={{ minHeight: "110px" }}
              >
                <div className="text-white text-2xl font-bold mb-1">{SITE.ratingValue}</div>
                <div className="text-gray-400 text-sm">Avg Rating</div>
              </div>
              <div
                className="bg-[#1A0A0A] p-5 rounded-2xl text-center flex-1 max-w-[160px]"
                style={{ minHeight: "110px" }}
              >
                <div className="text-white text-2xl font-bold mb-1">{SITE.fileSize}</div>
                <div className="text-gray-400 text-sm">App Size</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left italic">
              *Android APK sideload · iOS &amp; PC guides available
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-8">
            <figure className="mx-auto md:ml-auto md:mr-0 text-center w-[280px] md:w-[320px] max-w-full">
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] max-w-full">
                <Image
                  src="/juwa-777-game-logo.webp"
                  alt="Juwa 777 official app logo for slots and fish casino games"
                  title="Juwa 777"
                  width={320}
                  height={320}
                  className="object-contain drop-shadow-2xl w-full h-full"
                  priority
                  fetchPriority="high"
                />
              </div>
              <figcaption className="sr-only">Juwa 777 app icon</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* APK details */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-8" id="apk-details">
        <h2 className="text-3xl font-bold text-accent mb-4">Juwa 777 APK Details</h2>
        <p className="text-gray-300 mb-6 max-w-3xl leading-relaxed">
          Before you install, confirm you are grabbing the current package. Version numbers shift
          across mirrors, so juwa777.love keeps one clear table for size, Android requirement, and
          update date. Matching these details reduces the chance of installing an outdated build
          that fails login or misses newer slot themes.
        </p>
        <div className="overflow-x-auto rounded-xl border border-red-900/40 bg-[#1A0A0A]">
          <table className="w-full text-left text-gray-200">
            <tbody>
              {[
                ["App Name", "Juwa 777"],
                ["Developer", "Juwa"],
                ["Version", SITE.version],
                ["File Size", SITE.fileSize],
                ["Supports", SITE.androidMin],
                ["Category", "Social casino / Game"],
                ["Platform", "Android (iOS & PC via guides)"],
                ["Last Updated", "October 25, 2026"],
                [
                  "Rating",
                  `${SITE.ratingValue} / 5 (${Number(SITE.ratingCount).toLocaleString()} ratings)`,
                ],
                ["License", "Free to download"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-red-950/50">
                  <th className="px-4 py-3 font-semibold text-accent w-1/3">{label}</th>
                  <td className="px-4 py-3">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-center">
          <DownloadButton label="DOWNLOAD JUWA 777 APK" />
        </div>
      </section>

      {/* What is */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-4">What Is Juwa 777?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Juwa 777 is a mobile social gaming app built around two play styles players search for
              most: themed slot machines and arcade fish shooters. You open the lobby, pick a
              favorite tile, and start spinning or shooting within seconds instead of waiting through
              a long onboarding maze.
            </p>
            <p>
              The app adds structure beyond single-game luck. Credits sit in a visible wallet,
              leaderboards show competitive standings, and Favorites pin the titles you reopen every
              day. That combination feels close to a sweepstakes-style social casino while staying
              simple enough for first-time mobile players in the United States.
            </p>
            <p>
              Scheduled rewards keep the calendar interesting. The morning{" "}
              <strong className="text-white">Wager Bonus Hour</strong> (4:00–5:00 AM CST), daily
              cashback based on play volume, the Lucky Hour Wheel, and timed draws give regular
              reasons to return. The newer{" "}
              <Link href={ROUTES.juwa2} className="text-accent hover:underline">
                Juwa 2.0 release
              </Link>{" "}
              expands themes and presentation for players whose store recommends the refreshed
              client.
            </p>
            <p>
              Who benefits most from Juwa 777? Players who want both reel games and skill-leaning
              fish tables in one APK, plus clear daily events instead of chasing random social-media
              “codes.” With Juwa 777, the path from download to first session stays short and
              practical.
            </p>
          </div>
          <figure>
            <Image
              src="/juwa-777-welcome-page.webp"
              alt="Juwa 777 welcome page on mobile showing casino lobby entry"
              width={640}
              height={400}
              className="rounded-xl w-full h-auto border border-red-900/30"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </figure>
        </div>
      </section>

      {/* Features - expanded */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-4">
          Features That Keep Juwa 777 Sessions Smooth
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl leading-relaxed">
          Each Juwa 777 feature exists to shorten the path from open app to first spin, then to keep
          progress visible so you know what you earned and what is still available today. Below is
          how the core tools work and who they help.
        </p>

        <div className="space-y-8">
          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/30">
            <h3 className="text-xl font-semibold text-white mb-3">Clear mobile lobby</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Juwa 777 organizes slots and fishing games into a lobby you can scan quickly. Menus
              stay short, tiles stay large enough for thumbs, and categories reduce hunting through
              nested folders.
            </p>
            <p className="text-gray-300 leading-relaxed">
              That layout helps beginners start faster and helps regulars reopen Favorites without
              friction. A clean lobby is why Juwa 777 works well for short sessions on the go.
            </p>
          </div>

          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/30">
            <h3 className="text-xl font-semibold text-white mb-3">Stable performance on mid-range phones</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Games are tuned so spins and fish tables load without long stalls on common Android
              devices. Smooth timing matters most on fishing shooters, where shot delay costs
              credits.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Players on mid-range hardware benefit the most because they get arcade action without
              needing a flagship phone. Juwa 777 stays usable during commute breaks and evening
              sessions alike.
            </p>
          </div>

          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/30">
            <h3 className="text-xl font-semibold text-white mb-3">Secure credit wallet</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Balances live inside the in-app wallet so you can check credits before you play, after
              a bonus, or before a redeem request. Seeing the number in one place reduces confusion
              when an agent loads or pulls funds.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Anyone who deposits through agents should verify the wallet after every transfer. With
              Juwa 777, that habit becomes part of a safer credit routine.
            </p>
          </div>

          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/30">
            <h3 className="text-xl font-semibold text-white mb-3">Leaderboards and Favorites</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Leaderboards add light competition, while Favorites pin the titles you actually open.
              Together they cut search time and give returning players a reason to check rankings
              after a strong fish or slot run.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Competitive players and casual regulars both gain: one group chases rank, the other
              jumps straight into preferred games. Juwa 777 keeps both paths one tap away.
            </p>
          </div>
        </div>

        <figure className="mt-8">
          <Image
            src="/juwa-777-lobby.webp"
            alt="Juwa 777 lobby with slot and fishing game tiles"
            width={1200}
            height={675}
            className="rounded-xl w-full h-auto border border-red-900/30"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </figure>
      </section>

      {/* Games */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-4">Games Inside Juwa 777</h2>
        <p className="text-gray-300 mb-6 max-w-3xl leading-relaxed">
          The Juwa 777 library splits into slots for reel players and fishing shooters for arcade
          action. Both categories pay in in-app credits and share the same daily bonus systems, so
          you can rotate styles without leaving the app.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/30">
            <h3 className="text-2xl font-semibold text-white mb-4">Slot Games</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Themes range from classic fruit reels to modern jackpot layouts. Spins are short,
              rules are obvious, and Favorites help you reopen the same title tomorrow. Slot players
              who like variety can move across themes without learning a new ruleset each time.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 text-sm">
              {slotGames.map((g) => (
                <li key={g} className="before:content-['•'] before:text-accent before:mr-2">
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/30">
            <h3 className="text-2xl font-semibold text-white mb-4">Fishing Games</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Aim cannons at fish with different credit values. Timing and target choice matter more
              than pure luck, which is why many players rotate between fish tables and slots when
              they want a more active session.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 text-sm">
              {fishGames.map((g) => (
                <li key={g} className="before:content-['•'] before:text-accent before:mr-2">
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-4">Bonuses &amp; Daily Promotions</h2>
        <p className="text-gray-300 mb-6 max-w-3xl leading-relaxed">
          Juwa 777 leans on scheduled events instead of random promo spam. Knowing the CST clock
          helps credits stretch further. Full schedules and examples live in our{" "}
          <Link href={ROUTES.blogBonuses} className="text-accent hover:underline">
            bonuses and events guide
          </Link>
          .
        </p>
        <div className="space-y-6">
          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/30">
            <h3 className="text-xl font-semibold text-white mb-3">Wager Bonus Hour</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Every day from <strong className="text-white">4:00 AM – 5:00 AM CST</strong>, Juwa 777
              runs Wager Bonus Hour. Active play in that window can unlock elevated rewards on
              qualifying action.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Players who already planned a morning session — or late-night West Coast players —
              benefit most by parking spins inside this hour instead of burning the same stack at
              noon. Juwa 777 turns that clock into a practical planning tool.
            </p>
          </div>
          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/30">
            <h3 className="text-xl font-semibold text-white mb-3">Cashback Rewards</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Cashback tiers track total daily gameplay. Higher volume unlocks higher return bands,
              which rewards consistent play more than one oversized bet.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Regulars who check the cashback panel after a full day can see which tier they reached
              and plan tomorrow’s session with clearer expectations. That steady loop is a core Juwa
              777 habit.
            </p>
          </div>
          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/30">
            <h3 className="text-xl font-semibold text-white mb-3">Lucky Hour Wheel</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              The Lucky Hour Wheel adds a short spin for random credit prizes. It is a bonus layer
              on top of regular slots and fishing, not a replacement for them.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Use the wheel when the event is live, collect, then return to your main games with a
              bankroll limit still in place. Juwa 777 keeps the surprise without turning the whole
              day into a code hunt.
            </p>
          </div>
          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/30">
            <h3 className="text-xl font-semibold text-white mb-3">Daily Draws</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Scheduled draws run at several CST hours through morning and evening blocks. Staying
              logged in near those windows improves your chance to collect draw credits when your
              account qualifies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Active players who glance at in-app banners before logging off catch more of these
              windows. Juwa 777 uses draws to keep the lobby lively across the day.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Image
            src="/juwa-777-spin-wheel.webp"
            alt="Juwa 777 Lucky Hour Wheel bonus spin screen"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto border border-red-900/30"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Image
            src="/juwa-777-cashback-rewards.webp"
            alt="Juwa 777 daily cashback rewards interface"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto border border-red-900/30"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Download */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10" id="download">
        <h2 className="text-3xl font-bold text-accent mb-4">
          How to Download &amp; Install Juwa 777
        </h2>
        <p className="text-gray-300 mb-6 max-w-3xl leading-relaxed">
          Juwa 777 is typically installed as an APK outside Google Play. The full walkthrough,
          screenshots, and troubleshooting live on the{" "}
          <Link href={ROUTES.download} className="text-accent hover:underline">
            Juwa 777 download page
          </Link>
          . Use this overview to finish a clean first install.
        </p>
        <ol className="space-y-4 text-gray-300 list-decimal list-inside max-w-3xl mb-6">
          <li>Tap DOWNLOAD NOW on this site and wait until the APK finishes saving.</li>
          <li>Open Settings → Apps → Special app access → Install unknown apps.</li>
          <li>Allow your browser or file manager to install packages.</li>
          <li>Open the APK from Downloads, tap Install, then Open.</li>
          <li>
            Register or log in — see the{" "}
            <Link href={ROUTES.blogLogin} className="text-accent hover:underline">
              login guide
            </Link>{" "}
            if the sign-in screen rejects your password.
          </li>
        </ol>
        <p className="text-gray-300 mb-6 max-w-3xl leading-relaxed">
          After install, you can turn unknown sources back off for that browser. Prefer phone play
          on iOS or a desktop window? Use the{" "}
          <Link href={ROUTES.blogIos} className="text-accent hover:underline">
            iPhone install article
          </Link>{" "}
          or the{" "}
          <Link href={ROUTES.pc} className="text-accent hover:underline">
            PC emulator guide
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-col md:flex-row gap-6 items-center">
          <Image
            src="/juwa777-download.webp"
            alt="Download Juwa 777 APK button and install artwork"
            width={480}
            height={320}
            className="rounded-xl border border-red-900/30"
            sizes="(max-width: 768px) 100vw, 480px"
          />
          <DownloadButton />
        </div>
      </section>

      {/* Registration & Login */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-4">
          Registration and Login on Juwa 777
        </h2>
        <p className="text-gray-300 mb-4 max-w-3xl leading-relaxed">
          Some players self-register inside the app. Others receive a username from a store agent
          through Juwa Admin. Both paths end at the same login screen, so write down the exact
          player ID before you deposit.
        </p>
        <p className="text-gray-300 mb-4 max-w-3xl leading-relaxed">
          To create an account, open Juwa 777, choose Register, and complete the fields shown —
          username, password, and any invite or store code your agent provided. After submit, log in
          once to confirm the credentials stick. If Forgot Password appears later, use it, or ask
          the agent who created the account to reset access.
        </p>
        <p className="text-gray-300 max-w-3xl leading-relaxed">
          Full screenshots and common error fixes are in the{" "}
          <Link href={ROUTES.blogLogin} className="text-accent hover:underline">
            Juwa 777 login guide
          </Link>
          . Agent-side context sits on the{" "}
          <Link href={ROUTES.admin} className="text-accent hover:underline">
            Juwa Admin page
          </Link>
          .
        </p>
      </section>

      {/* Deposit / Withdraw */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-4">
          Deposit, Withdraw &amp; Payment Flow
        </h2>
        <p className="text-gray-300 mb-4 max-w-3xl leading-relaxed">
          Many Juwa 777 wallets fund and redeem through trusted agents rather than a public
          self-serve cashier on every build. That model works when you verify the agent, start with
          a small test amount, and always match the player ID on the transfer.
        </p>
        <p className="text-gray-300 mb-6 max-w-3xl leading-relaxed">
          Payment methods vary by agent and region — bank transfer, e-wallets, cash networks, or
          in-person store loads. Never invent a payment destination from a random social post. Use
          only the details confirmed for that order, then refresh the wallet before you spin.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { href: ROUTES.deposit, label: "Deposit credits guide" },
            { href: ROUTES.withdraw, label: "Withdraw / redeem guide" },
            { href: ROUTES.blogLogin, label: "Create account & login" },
            { href: ROUTES.admin, label: "Juwa Admin / agents" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-[#1A0A0A] border border-red-900/40 rounded-xl px-5 py-4 text-center text-accent font-semibold hover:border-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <figure className="max-w-xl">
          <Image
            src="/juwa-777-leaderboard.webp"
            alt="Juwa 777 leaderboard showing top player rankings"
            width={640}
            height={400}
            className="rounded-xl w-full h-auto border border-red-900/30"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </figure>
      </section>

      {/* Tips */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-4">Practical Tips for Juwa 777 Players</h2>
        <ul className="space-y-4 text-gray-300 max-w-3xl">
          <li>
            <strong className="text-white">Plan around CST events.</strong> Wager Bonus Hour and
            draws reward presence more than random late-night grinding. Check the clock before you
            load a large credit stack.
          </li>
          <li>
            <strong className="text-white">Pin Favorites early.</strong> Save two slots and one fish
            table you enjoy so every return visit starts faster.
          </li>
          <li>
            <strong className="text-white">Verify the wallet after every agent transfer.</strong>{" "}
            Confirm the balance before you play so disputes stay simple.
          </li>
          <li>
            <strong className="text-white">Rotate fish and slots.</strong> Fishing rewards aim and
            timing; slots reward short sessions. Switching styles keeps Juwa 777 from feeling flat.
          </li>
          <li>
            <strong className="text-white">Ignore public “daily code” spam.</strong> Focus on in-app
            cashback, wheel, and draws instead of unverified social posts.
          </li>
        </ul>
      </section>

      {/* Troubleshooting */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-4">Quick Troubleshooting</h2>
        <div className="space-y-4 text-gray-300 max-w-3xl">
          <p>
            <strong className="text-white">Install blocked:</strong> Re-check Install unknown apps
            for the browser that downloaded the APK, then reopen the file from Downloads.
          </p>
          <p>
            <strong className="text-white">Login fails:</strong> Retype the password carefully or use
            Forgot Password. Agent-created accounts may need an admin reset — see the{" "}
            <Link href={ROUTES.blogLogin} className="text-accent hover:underline">
              login guide
            </Link>
            .
          </p>
          <p>
            <strong className="text-white">Credits missing:</strong> Confirm player ID spelling with
            your agent, force-close the app, and reopen the wallet before sending a second payment.
          </p>
          <p>
            <strong className="text-white">Lag on fish tables:</strong> Close background apps, switch
            to stable Wi-Fi, or try the{" "}
            <Link href={ROUTES.pc} className="text-accent hover:underline">
              PC emulator setup
            </Link>{" "}
            for a larger screen.
          </p>
        </div>
      </section>

      {/* Pros Cons */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-6">Pros &amp; Cons of Juwa 777</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-green-900/40">
            <h3 className="text-xl font-semibold text-white mb-3">Pros</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Strong mix of slots and fish shooters in one APK</li>
              <li>• Clear daily events with published CST windows</li>
              <li>• Favorites, wallet, and leaderboards reduce friction</li>
              <li>• Guides for Android, iOS, PC, and Juwa 2.0 on this site</li>
              <li>• Full game lists and bonus details for planning sessions</li>
            </ul>
          </div>
          <div className="bg-[#1A0A0A] p-6 rounded-xl border border-red-900/40">
            <h3 className="text-xl font-semibold text-white mb-3">Cons</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Full hub usually requires APK sideload, not Play Store</li>
              <li>• Credit funding often depends on finding a reliable agent</li>
              <li>• Outcomes are chance-based — no guaranteed winnings</li>
              <li>• Sideloading always needs basic Android security care</li>
              <li>• iOS installs can depend on temporary agent links</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety + Support */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-4">Safety and Customer Support</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl mb-4">
          Juwa 777 is for adults 18+. Treat credits as entertainment spend, set personal limits, and
          take breaks if play affects sleep, mood, or money. Download only from a trusted path,
          review permissions, and verify agents before larger deposits. Read{" "}
          <Link href={ROUTES.blogSafe} className="text-accent hover:underline">
            Is Juwa 777 safe?
          </Link>{" "}
          and the{" "}
          <Link href={ROUTES.disclaimer} className="text-accent hover:underline">
            disclaimer
          </Link>{" "}
          before you fund a wallet.
        </p>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          For website guide questions, email{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
            {SITE.email}
          </a>{" "}
          or use the{" "}
          <Link href={ROUTES.contact} className="text-accent hover:underline">
            contact page
          </Link>
          . For in-app credit issues, contact the agent who manages your player account — that is
          usually faster than a generic social inbox.
        </p>
      </section>

      {/* FAQs */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-accent mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="bg-[#1A0A0A] border border-red-900/40 rounded-xl px-5 py-4 group"
            >
              <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center gap-4">
                {item.q}
                <span className="text-accent group-open:rotate-45 transition-transform text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </summary>
              <p className="text-gray-300 mt-3 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold text-accent mb-4">Start Playing Juwa 777 Today</h2>
        <p className="text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
          Juwa 777 stands out for pairing slots and fishing games with scheduled bonuses, a visible
          wallet, and a mobile lobby that stays easy to navigate. Whether you want Lucky Puppy
          spins, Deep Sea Predator hunts, or cashback after a full day, the app keeps those tools in
          one place.
        </p>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Download the latest APK, create your account, and explore daily events with clear limits.
          Prefer the refreshed client? Jump to{" "}
          <Link href={ROUTES.juwa2} className="text-accent hover:underline">
            Juwa 2.0
          </Link>
          . Always play responsibly.
        </p>
        <DownloadButton label="DOWNLOAD JUWA 777 NOW" size="lg" />
      </section>
    </>
  );
}
