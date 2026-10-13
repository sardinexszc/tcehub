import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PageIndex } from '@/components/page-index';
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-[70vh]">
        {children}
      </main>
      <Footer />
      <PageIndex />
    </>
  );
}
