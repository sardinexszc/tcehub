import Link from 'next/link';
import { navigation } from '@/lib/navigation';
import { Logo } from '@/components/logo';
const columns = [
  ['Explore', navigation.map(([l, h]) => [l, h] as const)],
  [
    'TCEHub',
    [
      ['About', '/about'],
      ['Contact', '/contact'],
      ['Submit a shop', '/contact#submit-shop'],
    ],
  ],
] as const;
export function Footer() {
  return (
    <footer className="section-dark mt-16">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr_1fr] md:py-14">
        <div>
          <Logo descriptor={false} />
          <p className="mt-4 max-w-xs text-sm leading-6 text-background/65">
            An independent directory and community site for Toyota Camry owners
            in the Philippines. Not affiliated with Toyota Motor Corporation.
          </p>
        </div>
        {columns.map(([title, links]) => (
          <div key={title}>
            <h2 className="meta mb-4 text-background/50">{title}</h2>
            <ul className="grid gap-2.5 text-sm">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link
                    className="text-background/85 underline-offset-4 hover:text-background hover:underline"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="meta mb-4 text-background/50">Social</h2>
          <p className="text-sm text-background/60">
            Facebook and Instagram pages open at launch.
          </p>
        </div>
      </div>
      <div className="container-shell flex flex-wrap justify-between gap-3 border-t border-background/15 py-5 text-xs text-background/50">
        <span>© {new Date().getFullYear()} TCEHub</span>
        <span>
          Preview build. Listings, events, and stories are demo content.
        </span>
      </div>
    </footer>
  );
}
