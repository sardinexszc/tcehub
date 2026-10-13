import Link from 'next/link';
export function Related({
  title,
  href,
  linkLabel,
  children,
}: {
  title: string;
  href: string;
  linkLabel: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-label={title} className="mt-9 md:mt-12">
      <div className="flex flex-wrap items-end justify-between gap-4 px-2 md:px-4">
        <h2 className="label">{title}</h2>
        <Link
          href={href}
          className="text-[15px] text-muted transition-colors hover:text-foreground"
        >
          {linkLabel}
        </Link>
      </div>
      <div className="content-grid mt-4">{children}</div>
    </section>
  );
}
