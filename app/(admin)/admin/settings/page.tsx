export const metadata = { title: 'Workspace settings' };
export default function Settings() {
  return (
    <>
      <h1 className="section-title">Settings</h1>
      <div className="mt-8 max-w-xl border-t-2 border-foreground pt-5">
        <h2 className="text-lg font-semibold">Publishing configuration</h2>
        <p className="mt-4 leading-7 text-muted">
          The community name, social links, image storage, and publishing
          workflow will be configurable here in a later phase.
        </p>
      </div>
    </>
  );
}
