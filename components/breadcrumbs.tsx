import Link from 'next/link';
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-[13px] text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link
            className="underline-offset-4 hover:text-foreground hover:underline"
            href="/"
          >
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li className="flex items-center gap-2" key={i}>
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link
                className="underline-offset-4 hover:text-foreground hover:underline"
                href={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
