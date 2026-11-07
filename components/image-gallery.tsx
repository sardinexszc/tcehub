'use client';
import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
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
            : 'grid grid-cols-2 gap-2 md:grid-cols-3 [&>*:first-child]:col-span-2 md:[&>*:first-child]:row-span-2'
        }
      >
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            aria-label={`Open ${title} image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`group relative block w-full cursor-zoom-in overflow-hidden bg-subtle ${masonry ? `mb-3 ${i % 2 ? 'aspect-[4/5]' : 'aspect-[4/3]'}` : i === 0 ? 'aspect-[4/3] md:aspect-auto' : 'aspect-[4/3]'}`}
          >
            <Image
              src={src}
              alt={`${title}, illustrative image ${i + 1}`}
              fill
              sizes={
                i === 0 && !masonry
                  ? '(max-width:768px) 100vw, 50vw'
                  : '(max-width:768px) 50vw, 33vw'
              }
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
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
