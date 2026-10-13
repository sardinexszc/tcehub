export const metadata = { title: 'Workspace settings' };
export default function Settings() {
  return (
    <>
      <p className="eyebrow mb-4">Workspace</p>
      <h1 className="text-4xl font-medium tracking-[-0.035em]">Settings</h1>
      <div className="mt-8 max-w-xl rounded-xl border bg-surface p-6">
        <h2 className="text-lg font-medium tracking-[-0.02em]">
          Publishing configuration
        </h2>
        <p className="mt-4 leading-7 text-muted">
          The community name, social links, image storage, and publishing
          workflow will be configurable here in a later phase.
        </p>
      </div>
    </>
  );
}
