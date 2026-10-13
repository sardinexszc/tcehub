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
    <div className="grid gap-14">
      {articleSections(content).map((s, i) => (
        <section key={s.id} id={s.id} className="scroll-mt-24">
          <h2 className="mb-5 flex items-baseline gap-4 text-3xl font-normal tracking-[-0.035em] md:text-4xl">
            <span className="text-[15px] tracking-normal">
              ({String(i + 1).padStart(2, '0')})
            </span>
            {s.title}
          </h2>
          <p className="max-w-[34em] whitespace-pre-line font-serif text-[21px] leading-[1.45] tracking-[-0.01em]">
            {s.body}
          </p>
        </section>
      ))}
    </div>
  );
}
