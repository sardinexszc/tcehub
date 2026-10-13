'use client';
import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Expand } from 'lucide-react';
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), {
  ssr: false,
});
import 'yet-another-react-lightbox/styles.css';
export function ImageGallery({
  images,
  title,
  masonry = false,
}: {
  images: string[];
  title: string;
  masonry?: boolean;
}) {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <div
        className={
          masonry
            ? 'columns-1 gap-3 sm:columns-2 lg:columns-3'
            : 'grid grid-cols-1 gap-3 sm:grid-cols-3'
        }
      >
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            aria-label={`Open ${title} image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`group relative mb-3 block w-full cursor-zoom-in overflow-hidden rounded-media bg-night ${src.includes('wallpaper') ? 'aspect-[9/16]' : 'aspect-square'}`}
          >
            <Image
              src={src}
              alt={`${title}, illustrative image ${i + 1}`}
              fill
              sizes="(max-width:640px) 100vw,33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-surface opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              <Expand size={14} />
            </span>
          </button>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src, i) => ({
          src,
          alt: `${title} image ${i + 1}`,
        }))}
      />
    </>
  );
}
