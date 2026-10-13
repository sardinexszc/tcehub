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
    <div className="grid gap-12">
      {articleSections(content).map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-6">
          <h2 className="text-[28px] font-medium leading-tight tracking-[-0.03em]">
            {s.title}
          </h2>
          <p className="mt-4 max-w-[62ch] whitespace-pre-line text-[19px] leading-[1.65] text-foreground/85">
            {s.body}
          </p>
        </section>
      ))}
    </div>
  );
}
