export function PageHeader({
  title,
  description,
  aside,
}: {
  title: React.ReactNode;
  description?: string;
  aside?: React.ReactNode;
}) {
  return (
    <header className="mb-10 grid gap-5 border-b pb-8 md:mb-12 md:grid-cols-[1.5fr_1fr] md:items-end md:pb-10">
      <h1 className="page-title">{title}</h1>
      {(description || aside) && (
        <div className="md:justify-self-end md:text-right">
          {description && (
            <p className="max-w-md text-[15px] leading-7 text-muted md:ml-auto">
              {description}
            </p>
          )}
          {aside}
        </div>
      )}
    </header>
  );
}
