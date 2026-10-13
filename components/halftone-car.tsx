'use client';
import { useEffect, useRef } from 'react';
type Dot = { x: number; y: number; r: number };
/**
 * Renders a transparent cutout as a halftone dot field. Darker areas get bigger dots;
 * dots near the pointer swell, echoing the hero's point light.
 */
export function HalftoneCar({
  src,
  label,
  cell = 7,
  className,
}: {
  src: string;
  label: string;
  cell?: number;
  className?: string;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    const ctx = el.getContext('2d');
    if (!ctx) return;
    let dots: Dot[] = [];
    let pointer: { x: number; y: number } | null = null;
    let frame = 0;
    let cancelled = false;
    const ink =
      getComputedStyle(el).getPropertyValue('color') || 'rgb(21,23,26)';
    const img = new window.Image();
    img.decoding = 'async';
    img.src = src;
    const draw = () => {
      frame = 0;
      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, el.width, el.height);
      ctx.fillStyle = ink;
      for (const d of dots) {
        let r = d.r;
        if (pointer) {
          const dist = Math.hypot(d.x - pointer.x, d.y - pointer.y);
          const boost = Math.max(0, 1 - dist / 130);
          r = Math.min(cell * 0.62, r * (1 + boost * 1.4) + boost * 0.9);
        }
        if (r < 0.35) continue;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const sample = () => {
      if (!img.complete || !img.naturalWidth || cancelled) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      const dpr = window.devicePixelRatio || 1;
      el.width = Math.round(w * dpr);
      el.height = Math.round(h * dpr);
      const cols = Math.floor(w / cell);
      const rows = Math.floor(h / cell);
      const probe = document.createElement('canvas');
      probe.width = cols;
      probe.height = rows;
      const pctx = probe.getContext('2d', { willReadFrequently: true });
      if (!pctx) return;
      // object-fit: contain, anchored to the bottom
      const scale = Math.min(cols / img.naturalWidth, rows / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      pctx.drawImage(img, (cols - dw) / 2, rows - dh, dw, dh);
      const data = pctx.getImageData(0, 0, cols, rows).data;
      dots = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const a = data[i + 3] / 255;
          if (a < 0.08) continue;
          const lum =
            (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
          const dark = 1 - lum;
          dots.push({
            x: x * cell + cell / 2,
            y: y * cell + cell / 2,
            r: (cell / 2) * (0.12 + 0.88 * Math.pow(dark, 0.9)) * a,
          });
        }
      }
      schedule();
    };
    img.onload = sample;
    if (img.complete) sample();
    const ro = new ResizeObserver(sample);
    ro.observe(el);
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
      schedule();
    };
    const leave = () => {
      pointer = null;
      schedule();
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => {
      cancelled = true;
      ro.disconnect();
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  }, [src, cell]);
  return (
    <canvas ref={canvas} role="img" aria-label={label} className={className} />
  );
}
