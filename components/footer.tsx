import Link from 'next/link';
import { navigation } from '@/lib/navigation';
import { imageCredit } from '@/lib/mock-data';
import { LogoMark } from '@/components/logo';
import { ArrowDisc } from '@/components/ui/button';
export function Footer() {
  return (
    <footer className="shell mt-3 pb-3 md:mt-5 md:pb-5">
      <div className="rounded-panel bg-night px-6 pb-6 pt-12 text-white md:px-10 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display max-w-[11ch] text-[clamp(3rem,6vw,5.5rem)]">
              Every Camry has a keeper.
            </p>
            <Link
              href="/contact#submit-shop"
              className="group mt-8 inline-flex h-12 items-center gap-4 rounded-full bg-white pl-6 pr-2 text-[15px] font-medium text-foreground"
            >
              Recommend a shop
              <ArrowDisc tone="ink" />
            </Link>
          </div>
          <div>
            <h2 className="label text-white/60">Explore</h2>
            <ul className="mt-5 grid gap-2 text-lg">
              {navigation.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-opacity hover:opacity-60"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="label text-white/60">Community</h2>
            <ul className="mt-5 grid gap-2 text-lg">
              <li>
                <Link
                  href="/about"
                  className="transition-opacity hover:opacity-60"
                >
                  About TCEHub
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-opacity hover:opacity-60"
                >
                  Get in touch
                </Link>
              </li>
              <li className="text-white/50">Facebook, soon</li>
              <li className="text-white/50">Instagram, soon</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-[13px] text-white/55">
          <span className="flex items-center gap-2.5">
            <LogoMark className="size-4" />© {new Date().getFullYear()} TCEHub.
            Independent, not affiliated with Toyota.
          </span>
          <span>{imageCredit}. All listings are demo content.</span>
        </div>
      </div>
    </footer>
  );
}
