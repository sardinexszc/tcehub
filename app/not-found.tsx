import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function NotFound() {
  return (
    <main id="main-content" className="container-shell py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="page-title mt-3">Page not found</h1>
      <p className="my-6 max-w-md text-muted">
        The link may be out of date, or the listing may have been removed.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/">Go to the home page</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/shops">Browse shops</Link>
        </Button>
      </div>
    </main>
  );
}
