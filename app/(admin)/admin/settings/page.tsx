export const metadata = { title: 'Workspace settings' };
export default function Settings() {
  return (
    <>
      <h1 className="page-title">(Settings)</h1>
      <section className="mt-12 max-w-xl border-t border-foreground pt-3">
        <h2 className="text-[15px]">Publishing configuration</h2>
        <p className="mt-3 font-serif text-2xl leading-[1.2] tracking-[-0.02em]">
          The community name, social links, image storage, and publishing
          workflow will be configurable here in a later phase.
        </p>
      </section>
    </>
  );
}
