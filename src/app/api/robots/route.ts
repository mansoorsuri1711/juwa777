import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

/** Legacy endpoint — send crawlers to /robots.txt */
export async function GET() {
  return NextResponse.redirect(`${SITE.url}/robots.txt`, 308);
}
