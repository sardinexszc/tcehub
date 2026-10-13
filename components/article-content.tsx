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
    <div className="space-y-10">
      {articleSections(content).map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-28">
          <h2 className="mb-4 text-2xl font-medium tracking-[-0.02em]">
            {s.title}
          </h2>
          <p className="whitespace-pre-line text-base leading-8 text-muted">
            {s.body}
          </p>
        </section>
      ))}
    </div>
  );
}
