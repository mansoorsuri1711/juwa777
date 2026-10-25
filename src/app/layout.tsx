import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { SITE } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#140606",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Juwa 777 APK Download – Slots & Fish Games App",
    template: "%s | Juwa 777",
  },
  description: SITE.description,
  keywords: [
    "Juwa 777",
    "Juwa 777 APK",
    "Juwa 777 download",
    "Juwa casino",
    "Juwa 2.0",
    "Juwa fish games",
    "Juwa slots",
    "online casino app",
  ],
  authors: [{ name: "Juwa 777 Team" }],
  creator: "Juwa 777",
  publisher: "Juwa 777",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: SITE.logo, type: "image/webp", sizes: "1024x1024" },
    ],
    apple: [{ url: SITE.logo, sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "Juwa 777 APK Download – Slots & Fish Games App",
    description: SITE.description,
    url: SITE.url,
    siteName: "Juwa 777",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE.url}${SITE.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Juwa 777 online casino app for Android and iOS",
      },
      {
        url: `${SITE.url}${SITE.ogSquare}`,
        width: 1200,
        height: 1200,
        alt: "Juwa 777 game logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juwa 777 APK Download – Slots & Fish Games App",
    description: SITE.description,
    images: [
      {
        url: `${SITE.url}${SITE.twitterImage}`,
        width: 1200,
        height: 600,
        alt: "Juwa 777 slots and fish games app",
      },
    ],
  },
  applicationName: "Juwa 777",
  category: "Gaming",
  classification: "Social Casino Gaming App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href={SITE.logo} type="image/webp" sizes="1024x1024" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href={SITE.logo} sizes="180x180" />

        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
              </Script>
            </>
          )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(196, 30, 30, 0.22) 0%, rgba(20, 6, 6, 0.02) 55%), radial-gradient(circle at 88% 10%, rgba(255, 209, 15, 0.08) 0%, transparent 40%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="flex-grow relative z-10">{children}</main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
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
              description: SITE.description,
              areaServed: {
                "@type": "Country",
                name: "United States",
                alternateName: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: SITE.email,
                areaServed: "US",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
