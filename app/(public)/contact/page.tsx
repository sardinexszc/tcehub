import { SEO } from '@/components/seo';
import { SplitPage } from '@/components/split-page';
import { ContactForm } from '@/components/contact-form';
export const metadata = SEO(
  'Contact & submit a shop',
  'Help grow the Camry directory or get in touch with TCEHub.',
  '/contact',
);
export default function Contact() {
  return (
    <SplitPage
      title="Say Hello"
      intro={
        <p>
          Have a story idea, a question, or a shop worth sharing? Good
          recommendations start with you. Community contact details will be
          added before launch.
        </p>
      }
    >
      <section
        id="submit-shop"
        aria-labelledby="submit-shop-title"
        className="scroll-mt-24"
      >
        <h2
          id="submit-shop-title"
          className="mb-10 text-5xl font-normal tracking-[-0.045em] md:text-7xl"
        >
          Submit a Shop <span aria-hidden="true">→</span>
        </h2>
        <ContactForm />
      </section>
    </SplitPage>
  );
}
