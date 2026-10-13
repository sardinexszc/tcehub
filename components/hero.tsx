'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cutouts, imageCredit } from '@/lib/mock-data';
const details = [
  '/images/camry-detail-front.webp',
  '/images/camry-poster-club.webp',
  '/images/camry-detail-side.webp',
  '/images/camry-poster-script.webp',
];
/** Small image set inside a line of type; cycles like Watson's statement unless motion is reduced. */
function InlineFrame({
  images,
  offset = 0,
  fit = 'cover',
  className = '',
}: {
  images: string[];
  offset?: number;
  fit?: 'cover' | 'contain';
  className?: string;
}) {
  const [i, setI] = useState(offset);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setI((n) => n + 1), 1100);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span
      aria-hidden="true"
      className={`relative mx-[0.12em] inline-block h-[0.86em] w-[1.15em] overflow-hidden align-[-0.06em] ${className}`}
    >
      {images.map((src, n) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="160px"
          className={`${fit === 'cover' ? 'object-cover' : 'object-contain'} ${n === i % images.length ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </span>
  );
}
function Note({ n }: { n: number }) {
  return (
    <sup className="ml-[0.08em] align-[0.9em] font-sans text-[max(11px,0.2em)] font-normal tracking-normal">
      ({n})
    </sup>
  );
}
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="container-shell pt-8 text-center md:pt-12"
    >
      <div className="relative mx-auto w-fit">
        <span className="absolute -left-[0.2em] -top-[1.6em] text-[15px] md:-left-[1.8em] md:-top-[0.4em]">
          PH
        </span>
        <h1
          id="hero-title"
          aria-label="TCEHub"
          className="wordmark text-[30vw] md:text-[22vw]"
        >
          TCEHub
        </h1>
      </div>
      <p className="mx-auto mt-[0.3em] max-w-[12.5em] text-balance font-serif text-[clamp(2.4rem,5.6vw,6rem)] leading-[1.02] tracking-[-0.035em]">
        <span className="font-sans font-extralight tracking-[-0.05em]">
          (Philippines)
        </span>{' '}
        is a home for{' '}
        <Link href="/shops" className="link-u">
          trusted shops
        </Link>
        <Note n={1} />,{' '}
        <InlineFrame images={cutouts} fit="contain" className="bg-subtle" />{' '}
        honest{' '}
        <Link href="/journals" className="link-u">
          build stories
        </Link>
        <Note n={2} /> and{' '}
        <Link href="/events" className="link-u">
          weekend meets
        </Link>
        <Note n={3} /> <span className="font-sans font-extralight">—</span> for
        every <InlineFrame images={details} offset={1} /> Camry on the road.
      </p>
      <div className="mx-auto mt-10 flex max-w-[44rem] flex-wrap items-baseline justify-between gap-4 text-left md:mt-14">
        <Link
          href="/about"
          className="font-serif text-xl transition-opacity hover:opacity-60"
        >
          More (About) Us →
        </Link>
        <span className="meta text-muted">{imageCredit}</span>
      </div>
    </section>
  );
}
