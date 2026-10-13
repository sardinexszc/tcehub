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
            ? 'columns-1 gap-4 sm:columns-2 lg:columns-3'
            : 'grid grid-cols-1 gap-4 sm:grid-cols-3'
        }
      >
        {images.map((src, i) => (
          <button
            key={`${src}-${i}`}
            aria-label={`Open ${title} image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`group relative mb-4 block w-full cursor-zoom-in overflow-hidden rounded-xl bg-subtle ${masonry && i % 2 ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}
          >
            <Image
              src={src}
              alt={`${title}, illustrative image ${i + 1}`}
              fill
              sizes="(max-width:640px) 100vw,33vw"
              className="media-mono object-cover group-hover:scale-[1.03]"
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
