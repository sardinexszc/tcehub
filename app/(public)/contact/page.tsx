import { SEO } from '@/components/seo';
import { ContactForm } from '@/components/contact-form';
export const metadata = SEO(
  'Contact & submit a shop',
  'Help grow the Camry directory or get in touch with TCEHub.',
  '/contact',
);
export default function Contact() {
  return (
    <div className="container-shell section-space">
      <p className="eyebrow mb-5">Let’s build a better directory</p>
      <h1 className="page-title">
        Good recommendations
        <br />
        start with you.
      </h1>
      <div className="mt-12 grid gap-14 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Get in touch</h2>
          <p className="max-w-md leading-8 text-muted">
            Have a story idea, a question, or a shop worth sharing? Use the
            preview form to see what a submission will look like.
          </p>
          <p className="mt-6 text-sm text-muted">
            Community contact details will be added before launch.
          </p>
        </div>
        <section
          id="submit-shop"
          className="scroll-mt-28 rounded-xl border bg-surface p-6 md:p-8"
        >
          <h2 className="mb-6 text-2xl font-semibold">Submit a Shop</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
