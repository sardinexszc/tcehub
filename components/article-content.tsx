export function articleSections(content: string) {
  return content
    .split('## ')
    .filter(Boolean)
    .map((s, i) => {
      const [title, ...body] = s.trim().split('\n');
      return { id: `section-${i + 1}`, title, body: body.join('\n') };
    });
}
export function ArticleContent({ content }: { content: string }) {
  return (
    <div className="space-y-9">
      {articleSections(content).map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-28">
          <h2 className="mb-3 text-2xl font-bold tracking-[-0.01em]">
            {s.title}
          </h2>
          <p className="whitespace-pre-line text-[17px] leading-8 text-foreground/90">
            {s.body}
          </p>
        </section>
      ))}
    </div>
  );
}
