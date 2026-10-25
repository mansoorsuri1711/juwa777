import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

/** Legacy endpoint — send crawlers to the canonical sitemap index */
export async function GET() {
  return NextResponse.redirect(`${SITE.url}/sitemap-index.xml`, 308);
}
