const BASE = "https://juwa777.love";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export type HowToStep = {
  name: string;
  text: string;
};

export type HowToSchemaProps = {
  name: string;
  description: string;
  steps: HowToStep[];
  url?: string;
  totalTime?: string; // ISO 8601 duration, e.g. "PT5M" for 5 minutes
  image?: string;
};

/**
 * Renders HowTo JSON-LD for step-by-step guides. Supports GEO/AEO and rich results.
 */
export default function HowToSchema({
  name,
  description,
  steps,
  url,
  totalTime,
  image = `${BASE}/juwa-777-game-logo.webp`,
}: HowToSchemaProps) {
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image: image ? { "@type": "ImageObject", url: image } : undefined,
    totalTime: totalTime || undefined,
    url: url || undefined,
    step: steps.map((s, i) => ({
      "@type": "HowToStep" as const,
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(howTo) }}
    />
  );
}
