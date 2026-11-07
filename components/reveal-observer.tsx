'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
/** Fades `[data-reveal]` elements in as they scroll into view. Mounted once per layout. */
export function RevealObserver() {
  const path = usePathname();
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)'),
    );
    // Anything already on screen shows immediately, so the first paint never flashes empty.
    for (const el of items) {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('is-in');
      }
    }
    document.documentElement.classList.add('reveal-ready');
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((el) => !el.classList.contains('is-in') && io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
