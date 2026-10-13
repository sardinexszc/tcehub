'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDisc } from '@/components/ui/button';
const CAR = '/images/camry-cutout-3.webp';
// Where the light rests when nobody is steering it (percent of the stage).
const REST = { x: 56, y: 70 };
function CarLayer({ lit = false }: { lit?: boolean }) {
  return (
    // The masked layer spans the whole stage so the light uses stage coordinates.
    <div
      className="absolute inset-0"
      style={
        lit
          ? {
              maskImage:
                'radial-gradient(circle var(--r) at var(--lx) var(--ly), #000 0%, rgb(0 0 0 / 0.55) 45%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(circle var(--r) at var(--lx) var(--ly), #000 0%, rgb(0 0 0 / 0.55) 45%, transparent 100%)',
            }
          : undefined
      }
    >
      <div className="absolute inset-x-[-10%] bottom-[-6%] top-[52%] sm:inset-x-0 md:inset-x-[10%] md:top-[44%]">
        <Image
          src={CAR}
          alt={lit ? '' : 'Illustrated silver Toyota Camry XV40'}
          fill
          priority
          sizes="(max-width: 768px) 140vw, 1100px"
          className={
            lit
              ? 'object-contain object-bottom'
              : 'object-contain object-bottom brightness-[0.13] saturate-0'
          }
        />
      </div>
    </div>
  );
}
export function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const car = useRef<HTMLDivElement>(null);
  const [intro, setIntro] = useState(true);
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    // One orchestrated moment: the light sweeps in like a passing headlight.
    // With reduced motion the light is placed at rest and steering unlocks at once.
    const raf = requestAnimationFrame(() => {
      el.style.setProperty('--lx', `${REST.x}%`);
      el.style.setProperty('--ly', `${REST.y}%`);
    });
    const done = window.setTimeout(() => setIntro(false), reduce ? 0 : 1900);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(done);
    };
  }, []);
  const steer = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || intro) return;
    const el = stage.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    el.style.setProperty('--lx', `${nx * 100}%`);
    el.style.setProperty('--ly', `${ny * 100}%`);
    if (car.current) {
      car.current.style.transform = `rotateY(${(nx - 0.5) * 7}deg) rotateX(${(0.5 - ny) * 4}deg)`;
    }
  };
  const rest = () => {
    const el = stage.current;
    if (!el) return;
    el.style.setProperty('--lx', `${REST.x}%`);
    el.style.setProperty('--ly', `${REST.y}%`);
    if (car.current) car.current.style.transform = '';
  };
  return (
    <section aria-labelledby="hero-title" className="shell pt-3 md:pt-5">
      <div
        ref={stage}
        onPointerMove={steer}
        onPointerLeave={rest}
        className="spot-stage relative isolate flex min-h-[680px] flex-col overflow-hidden rounded-panel bg-night text-white md:min-h-[min(880px,calc(100svh-40px))]"
        data-intro={intro || undefined}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_30%_at_50%_100%,rgb(255_255_255/0.07),transparent)]"
        />
        <div className="absolute inset-0 -z-10 [perspective:1600px]">
          <div
            ref={car}
            className="absolute inset-0 transition-transform duration-700 ease-out [transform-style:preserve-3d]"
          >
            <CarLayer />
            <CarLayer lit />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_var(--r)_at_var(--lx)_var(--ly),rgb(255_240_220/0.09),transparent_70%)]"
        />
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-36 text-center md:pt-40">
          <p className="text-[15px] text-white/65">
            The Camry community of the Philippines
          </p>
          <h1
            id="hero-title"
            className="display mt-5 text-[clamp(3.6rem,9.5vw,9rem)]"
          >
            Every Camry
            <br />
            has a keeper.
          </h1>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <Link
              href="/shops"
              className="group inline-flex h-12 items-center gap-4 rounded-full bg-white pl-6 pr-2 text-[15px] font-medium text-foreground"
            >
              Find a trusted shop
              <ArrowDisc tone="ink" />
            </Link>
            <Link
              href="/journals"
              className="text-[15px] text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              Read owners’ build stories
            </Link>
          </div>
        </div>
        <div className="mt-auto flex items-end justify-between gap-4 p-5 text-[13px] text-white/50 md:p-8">
          <span className="hidden md:block">Move your cursor to light it</span>
          <span className="ml-auto">XV40 illustrated by STXNCED</span>
        </div>
      </div>
    </section>
  );
}
