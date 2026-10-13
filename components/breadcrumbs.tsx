import Link from 'next/link';
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-[15px]">
      <ol className="flex flex-wrap items-baseline gap-x-1.5">
        <li>
          <Link className="link-u" href="/">
            Home
          </Link>
          <span aria-hidden="true">,</span>
        </li>
        {items.map((item, i) => (
          <li key={i}>
            {item.href ? (
              <>
                <Link className="link-u" href={item.href}>
                  {item.label}
                </Link>
                <span aria-hidden="true">,</span>
              </>
            ) : (
              <span aria-current="page" className="text-muted">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
