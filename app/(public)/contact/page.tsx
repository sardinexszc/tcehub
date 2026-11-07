import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { ContactForm } from '@/components/contact-form';
export const metadata = SEO(
  'Contact & submit a shop',
  'Help grow the Camry directory or get in touch with TCEHub.',
  '/contact',
);
export default function Contact() {
  return (
    <div className="container-shell pb-16 pt-10 md:pt-14">
      <PageHeader
        title="Contact"
        description="Recommend a shop, pitch a build journal, or ask a question."
      />
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold">Recommending a shop</h2>
            <p className="mt-2 max-w-md leading-7 text-muted">
              Tell us the shop’s name and city, what they worked on, and which
              Camry you drive. One good experience is enough to start.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Everything else</h2>
            <p className="mt-2 max-w-md leading-7 text-muted">
              Story ideas, event listings, and corrections can go through the
              same form for now. A direct email address will be added before
              launch.
            </p>
          </div>
        </div>
        <section
          id="submit-shop"
          aria-labelledby="submit-shop-title"
          className="scroll-mt-24 border-t-2 border-foreground pt-6"
        >
          <h2
            id="submit-shop-title"
            className="section-title mb-6 text-2xl md:text-3xl"
          >
            Submit a shop
          </h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
