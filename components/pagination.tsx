'use client';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export function Pagination({
  page,
  total,
  onChange,
}: {
  page: number;
  total: number;
  onChange: (page: number) => void;
}) {
  if (total < 2) return null;
  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-center gap-2"
    >
      <Button
        variant="outline"
        size="icon"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <ChevronLeft size={16} />
      </Button>
      {Array.from({ length: total }, (_, i) => (
        <Button
          key={i}
          variant={page === i + 1 ? 'default' : 'outline'}
          size="icon"
          aria-label={`Page ${i + 1}`}
          aria-current={page === i + 1 ? 'page' : undefined}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        aria-label="Next page"
        disabled={page === total}
        onClick={() => onChange(page + 1)}
      >
        <ChevronRight size={16} />
      </Button>
    </nav>
  );
}
