'use client';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
/** Demo-only signup: validates locally and says plainly that nothing was stored. */
export function NewsletterForm() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <p
        role="status"
        className="flex items-center gap-3 rounded-full border border-background/15 px-5 py-3.5 text-sm"
      >
        <Check size={16} aria-hidden="true" className="text-accent" />
        Thanks! Demo only, so nothing was sent or saved.
      </p>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex w-full max-w-md items-center gap-1.5 rounded-full border border-background/15 bg-background/[0.04] p-1.5 focus-within:border-background/40"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@example.com"
        className="h-11 w-full min-w-0 flex-1 bg-transparent px-4 text-sm text-background placeholder:text-background/40 focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex h-11 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
      >
        Subscribe
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </form>
  );
}
