import Link from 'next/link';
import { navigation } from '@/lib/navigation';
import { Logo } from '@/components/logo';
export function Footer() {
  return (
    <footer className="mt-10 border-t bg-surface">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-2xl font-medium leading-tight tracking-[-0.03em]">
            Good cars. Better company.
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            A home for every generation of Camry. Independent enthusiast
            community, not affiliated with Toyota.
          </p>
        </div>
        <div>
          <h2 className="meta mb-5">Explore</h2>
          <ul className="grid gap-3">
            {navigation.map(([label, href]) => (
              <li key={href}>
                <Link
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="meta mb-5">The community</h2>
          <ul className="grid gap-3 text-sm text-foreground/80">
            <li>
              <Link className="hover:text-foreground" href="/about">
                About TCEHub
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" href="/contact">
                Get in touch
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-foreground"
                href="/contact#submit-shop"
              >
                Submit a Shop
              </Link>
            </li>
            <li className="text-muted">Facebook · coming soon</li>
            <li className="text-muted">Instagram · coming soon</li>
          </ul>
        </div>
      </div>
      <div className="container-shell flex flex-wrap justify-between gap-3 border-t py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        <span>
          © {new Date().getFullYear()} TCEHub · Toyota Camry Elite Hub
        </span>
        <span>Front-end preview · demo content</span>
      </div>
    </footer>
  );
}
