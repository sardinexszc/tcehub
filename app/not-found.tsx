import Link from 'next/link';
export default function NotFound() {
  return (
    <main
      id="main-content"
      className="container-shell flex min-h-dvh flex-col items-center justify-center text-center"
    >
      <p className="text-[15px]">(404) End of this road</p>
      <h1 className="wordmark mt-6 text-[34vw] md:text-[24vw]">Lost</h1>
      <p className="mt-8 max-w-[18em] font-serif text-3xl leading-[1.1] tracking-[-0.03em]">
        The address may have changed. Let’s get you{' '}
        <Link href="/" className="link-u">
          back to the hub
        </Link>
        .
      </p>
    </main>
  );
}
