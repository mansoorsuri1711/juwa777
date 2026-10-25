'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';
import { ROUTES } from '@/lib/site';

export default function Header() {
  return (
    <header className="bg-primary py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-red-950/80">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10 mr-2">
            <Image
              src="/juwa-777-game-logo.webp"
              alt="Juwa 777 logo"
              width={40}
              height={40}
              className="object-contain"
              priority={true}
              fetchPriority="high"
            />
          </div>
          <span className="text-accent text-xl md:text-2xl font-bold">
            Juwa 777
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href={ROUTES.home} className="text-white hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href={ROUTES.download} className="text-white hover:text-accent font-medium transition-colors">
            Download
          </Link>
          <Link href={ROUTES.juwa2} className="text-white hover:text-accent font-medium transition-colors">
            Juwa 2.0
          </Link>
          <Link href={ROUTES.deposit} className="text-white hover:text-accent font-medium transition-colors">
            Deposit
          </Link>
          <Link href={ROUTES.withdraw} className="text-white hover:text-accent font-medium transition-colors">
            Withdraw
          </Link>
          <Link href={ROUTES.pc} className="text-white hover:text-accent font-medium transition-colors">
            PC Version
          </Link>
          <Link href={ROUTES.blog} className="text-white hover:text-accent font-medium transition-colors">
            Blog
          </Link>
          <Link href={ROUTES.contact} className="text-white hover:text-accent font-medium transition-colors">
            Contact
          </Link>
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
