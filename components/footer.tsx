import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import { NewsletterForm } from '@/components/newsletter-form';
const community = [
  ['About TCEHub', '/about'],
  ['Get in touch', '/contact'],
  ['Submit a Shop', '/contact#submit-shop'],
] as const;
export function Footer() {
  return (
    <footer className="section-dark mt-10 overflow-hidden">
      <div className="container-shell grid gap-10 border-b border-background/10 py-14 md:grid-cols-[1.2fr_1fr] md:items-end md:py-16">
        <div>
          <p className="eyebrow text-background/60 before:ring-background/20">
            The Sunday dispatch
          </p>
          <h2 className="mt-5 max-w-lg text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
            New shops, builds, and meets — once a month, no noise.
          </h2>
        </div>
        <div className="min-w-0 md:justify-self-end">
          <NewsletterForm />
          <p className="mt-3 pl-5 text-xs text-background/45">
            Preview build: signups aren’t stored yet.
          </p>
        </div>
      </div>
      <div className="container-shell grid gap-12 py-14 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 md:col-span-1">
          <Link
            href="/"
            aria-label="TCEHub home"
            className="flex items-baseline text-[26px] font-bold leading-none tracking-[-0.06em]"
          >
            TCE
            <span
              aria-hidden="true"
              className="ml-0.5 size-2 rounded-full bg-accent"
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-6 text-background/55">
            A home for every generation of Camry. Independent enthusiast
            community, not affiliated with Toyota.
          </p>
        </div>
        <FooterColumn
          title="Explore"
          links={navigation.map(([label, href]) => [label, href])}
        />
        <FooterColumn
          title="Community"
          links={community.map(([l, h]) => [l, h])}
        />
        <div>
          <h2 className="meta mb-5 text-background/45">Follow</h2>
          <ul className="grid gap-3 text-sm text-background/45">
            <li>Facebook · soon</li>
            <li>Instagram · soon</li>
            <li>YouTube · soon</li>
          </ul>
        </div>
      </div>
      <div className="container-shell" aria-hidden="true">
        <p className="select-none whitespace-nowrap text-[23vw] font-bold leading-[0.78] tracking-[-0.08em] text-background/[0.06] xl:text-[17rem]">
          TCEHub
        </p>
      </div>
      <div className="container-shell flex flex-wrap justify-between gap-3 border-t border-background/10 py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-background/45">
        <span>
          © {new Date().getFullYear()} TCEHub · Toyota Camry Elite Hub
        </span>
        <span>Front-end preview · demo content</span>
      </div>
    </footer>
  );
}
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: (readonly [string, string])[];
}) {
  return (
    <div>
      <h2 className="meta mb-5 text-background/45">{title}</h2>
      <ul className="grid gap-3">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link
              className="group inline-flex items-center gap-1 text-sm text-background/80 transition-colors hover:text-accent"
              href={href}
            >
              {label}
              <ArrowUpRight
                size={13}
                aria-hidden="true"
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
