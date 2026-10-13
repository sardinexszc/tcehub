export const metadata = { title: 'Workspace settings' };
export default function Settings() {
  return (
    <div className="grid gap-3">
      <header className="panel p-6 md:p-8">
        <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-medium tracking-[-0.04em]">
          Settings
        </h1>
      </header>
      <section className="panel max-w-2xl p-6 md:p-8">
        <h2 className="text-[21px] font-medium tracking-[-0.02em]">
          Publishing
        </h2>
        <p className="mt-2 text-muted">
          The community name, social links, image storage, and the publishing
          workflow will be configurable here in a later phase.
        </p>
      </section>
    </div>
  );
}
