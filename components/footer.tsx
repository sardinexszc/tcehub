import Link from 'next/link';
import { navigation } from '@/lib/navigation';
export function Footer() {
  return (
    <footer className="border-t bg-surface">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-black tracking-tighter">
            TCE<span className="text-accent">HUB</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            Good cars. Better company.
            <br />A home for every generation of Camry.
          </p>
          <p className="mt-4 text-xs text-muted">
            Independent enthusiast community. Not affiliated with Toyota.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest">
            Explore
          </h2>
          <div className="grid gap-3">
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                className="text-sm text-muted hover:text-foreground"
                href={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest">
            The community
          </h2>
          <div className="grid gap-3 text-sm text-muted">
            <Link href="/about">About TCEHub</Link>
            <Link href="/contact">Get in touch</Link>
            <Link href="/contact#submit-shop">Submit a Shop</Link>
            <span>Facebook · coming soon</span>
            <span>Instagram · coming soon</span>
          </div>
        </div>
      </div>
      <div className="container-shell flex flex-wrap justify-between gap-3 border-t py-6 text-xs text-muted">
        <span>
          © {new Date().getFullYear()} TCEHub. Built for Toyota Camry Elite Hub.
        </span>
        <span>Front-end preview · all listings are demo content</span>
      </div>
    </footer>
  );
}
