export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <header className="mb-10 grid gap-6 border-b pb-10 md:mb-12 md:grid-cols-[1.4fr_1fr] md:items-end md:pb-12">
      <div>
        <p className="eyebrow mb-5">{kicker}</p>
        <h1 className="page-title">{title}</h1>
      </div>
      {description && (
        <p className="max-w-md leading-7 text-muted md:justify-self-end">
          {description}
        </p>
      )}
    </header>
  );
}
