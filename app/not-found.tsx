import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function NotFound() {
  return (
    <main id="main-content" className="container-shell py-28 text-center">
      <p className="eyebrow mb-5">404 / End of this road</p>
      <h1 className="text-4xl font-medium tracking-[-0.035em]">
        We couldn’t find that page.
      </h1>
      <p className="my-6 text-muted">
        The address may have changed. Let’s get you back to the hub.
      </p>
      <Button asChild>
        <Link href="/">Back to TCEHub</Link>
      </Button>
    </main>
  );
}
