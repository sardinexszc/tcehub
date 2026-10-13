import { SEO } from '@/components/seo';
import { PageIntro } from '@/components/page-intro';
import { ContactForm } from '@/components/contact-form';
export const metadata = SEO(
  'Contact & submit a shop',
  'Help grow the Camry directory or get in touch with TCEHub.',
  '/contact',
);
export default function Contact() {
  return (
    <div className="shell grid gap-3 md:gap-5">
      <PageIntro
        label="Contact"
        title="Know a shop that deserves to be here?"
        intro={
          <p>
            Recommendations from owners are how the directory grows. For
            anything else, community contact details arrive before launch.
          </p>
        }
      />
      <section
        id="submit-shop"
        aria-labelledby="submit-shop-title"
        className="panel grid scroll-mt-6 gap-10 p-6 md:p-12 lg:grid-cols-[1fr_1.6fr]"
      >
        <div>
          <h2
            id="submit-shop-title"
            className="text-[28px] font-medium tracking-[-0.03em]"
          >
            Recommend a shop
          </h2>
          <p className="mt-3 max-w-sm text-muted">
            Tell us who they are, where they are, and why you trust them with
            your Camry. We check every recommendation before it is listed.
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
