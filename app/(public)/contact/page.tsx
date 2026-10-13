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
        kicker="Let’s build a better directory"
        title={
          <>
            Good recommendations
            <br />
            start with you.
          </>
        }
      />
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14">
        <div>
          <h2 className="text-2xl font-medium tracking-[-0.02em]">
            Get in touch
          </h2>
          <p className="mt-4 max-w-md leading-7 text-muted">
            Have a story idea, a question, or a shop worth sharing? Use the
            preview form to see what a submission will look like.
          </p>
          <p className="meta mt-8">
            Community contact details will be added before launch.
          </p>
        </div>
        <section
          id="submit-shop"
          aria-labelledby="submit-shop-title"
          className="scroll-mt-24 rounded-2xl border bg-surface p-5 sm:p-6 md:p-8"
        >
          <p className="eyebrow mb-4">Submission</p>
          <h2
            id="submit-shop-title"
            className="mb-7 text-2xl font-medium tracking-[-0.02em]"
          >
            Submit a Shop
          </h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
