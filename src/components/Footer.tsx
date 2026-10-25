import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { ROUTES, SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 pb-2 px-4 md:px-8 border-t border-red-950/80 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Juwa 777</h3>
            <p className="text-sm text-gray-300 mb-4">
              Juwa 777 is a US social gaming app built around slots, fish shooters, daily events,
              cashback, and Lucky Wheel rewards. Play on Android, iOS, or PC with a clear wallet and
              responsible gaming guidance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.home} className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={ROUTES.download} className="text-gray-300 hover:text-accent transition-colors">
                  Download APK
                </Link>
              </li>
              <li>
                <Link href={ROUTES.juwa2} className="text-gray-300 hover:text-accent transition-colors">
                  Juwa 2.0 Guide
                </Link>
              </li>
              <li>
                <Link href={ROUTES.pc} className="text-gray-300 hover:text-accent transition-colors">
                  Play on PC
                </Link>
              </li>
              <li>
                <Link href={ROUTES.admin} className="text-gray-300 hover:text-accent transition-colors">
                  Juwa Admin
                </Link>
              </li>
              <li>
                <Link href={ROUTES.about} className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={ROUTES.contact} className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={ROUTES.deposit} className="text-gray-300 hover:text-accent transition-colors">
                  Deposit Guide
                </Link>
              </li>
              <li>
                <Link href={ROUTES.withdraw} className="text-gray-300 hover:text-accent transition-colors">
                  Withdraw Guide
                </Link>
              </li>
              <li>
                <Link href={ROUTES.blogLogin} className="text-gray-300 hover:text-accent transition-colors">
                  Login & Account
                </Link>
              </li>
              <li>
                <Link href={ROUTES.blogBonuses} className="text-gray-300 hover:text-accent transition-colors">
                  Bonuses & Events
                </Link>
              </li>
              <li>
                <Link href={ROUTES.blogSafe} className="text-gray-300 hover:text-accent transition-colors">
                  Safety Guide
                </Link>
              </li>
              <li>
                <Link href={ROUTES.privacy} className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={ROUTES.disclaimer} className="text-gray-300 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Download App</h3>
            <p className="text-sm text-gray-300 mb-4">
              Get the latest Juwa 777 APK ({SITE.version}, {SITE.fileSize}) and start with slots,
              fishing games, and daily rewards.
            </p>
            <DownloadButton size="sm" />
          </div>
        </div>

        <div className="border-t border-red-950/80 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">
            © 2026 Juwa 777. All rights reserved. |{" "}
            <Link href="/" className="hover:text-accent">
              juwa777.love
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
