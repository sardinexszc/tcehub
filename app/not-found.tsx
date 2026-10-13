import Image from 'next/image';
import Link from 'next/link';
import { ArrowDisc } from '@/components/ui/button';
export default function NotFound() {
  return (
    <main id="main-content" className="shell flex min-h-dvh py-3 md:py-5">
      <div className="relative isolate flex flex-1 flex-col items-center justify-center overflow-hidden rounded-panel bg-night px-6 py-24 text-center text-white">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[-10%] top-[45%] -z-10 opacity-30 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_70%,#000,transparent)]"
        >
          <Image
            src="/images/camry-cutout-3.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>
        <p className="text-[15px] text-white/60">Page not found</p>
        <h1 className="display mt-4 text-[clamp(3.5rem,9vw,8rem)]">
          Wrong turn.
        </h1>
        <p className="mt-5 max-w-sm text-white/65">
          That page has moved or never existed. The hub is still where you left
          it.
        </p>
        <Link
          href="/"
          className="group mt-9 inline-flex h-12 items-center gap-4 rounded-full bg-white pl-6 pr-2 text-[15px] font-medium text-foreground"
        >
          Back to TCEHub
          <ArrowDisc tone="ink" />
        </Link>
      </div>
    </main>
  );
}
