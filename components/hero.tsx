import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0">
        <Image
          src="/images/camry-studio.svg"
          alt="Illustration of a silver sedan in a dark studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      </div>
      <div className="container-shell relative py-20 md:py-28">
        <div className="max-w-xl">
          <p className="eyebrow mb-6">For the love of the Camry</p>
          <h1 className="text-5xl font-semibold leading-[1.06] tracking-tight md:text-7xl">
            Every generation.
            <br />
            One <span className="text-accent">community.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-muted">
            Find your next trusted specialist. Get inspired by real-world
            builds. Make the next drive a little more memorable.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/shops">
                Explore the directory
                <ArrowUpRight size={17} />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/journals">
                Read the journals
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="mt-14 flex gap-8 border-t pt-6 text-xs text-muted">
            <span>
              <strong className="mb-1 block text-lg font-medium text-foreground">
                7
              </strong>
              Camry generations
            </span>
            <span>
              <strong className="mb-1 block text-lg font-medium text-foreground">
                Philippines
              </strong>
              Our roads. Our stories.
            </span>
          </div>
        </div>
      </div>
      <span className="absolute bottom-5 right-6 text-[9px] tracking-widest text-muted">
        ILLUSTRATIVE PREVIEW
      </span>
    </section>
  );
}
