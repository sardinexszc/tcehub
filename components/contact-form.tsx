'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
const schema = z.object({
  name: z.string().trim().min(2, 'Enter your name.'),
  email: z.string().email('Enter a valid email.'),
  shop: z.string().trim().min(2, 'Enter the shop name.'),
  city: z.string().trim().min(2, 'Enter the city.'),
  message: z.string().trim().min(15, 'Please include at least 15 characters.'),
});
type Values = z.infer<typeof schema>;
const field =
  'w-full border-0 border-b border-foreground bg-transparent px-0 py-2 font-serif text-2xl tracking-[-0.02em] placeholder:text-muted/60 focus-visible:ring-0 focus-visible:ring-offset-0 aria-[invalid=true]:border-danger';
export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema) });
  return done ? (
    <div role="status" className="border-y border-foreground py-10">
      <h2 className="font-serif text-4xl tracking-[-0.03em]">
        (Thank you) — your form looks good.
      </h2>
      <p className="mt-3 text-[15px] text-muted">
        This preview validated the form locally. Nothing was sent or saved.
      </p>
      <button
        className="link-u mt-6 cursor-pointer text-[15px]"
        onClick={() => {
          setDone(false);
          reset();
        }}
      >
        Try another submission →
      </button>
    </div>
  ) : (
    <form
      noValidate
      onSubmit={handleSubmit(() => {
        setDone(
          true,
        ); /* TODO: replace with a server-side submission workflow. */
      })}
      className="grid gap-8"
    >
      {(
        [
          ['name', 'Your name'],
          ['email', 'Email address'],
          ['shop', 'Shop name'],
          ['city', 'City'],
        ] as const
      ).map(([key, label], i) => (
        <div key={key}>
          <label htmlFor={key} className="block text-[15px]">
            ({String(i + 1).padStart(2, '0')}) {label}
          </label>
          <input
            id={key}
            type={key === 'email' ? 'email' : 'text'}
            autoComplete={
              key === 'name' ? 'name' : key === 'email' ? 'email' : 'off'
            }
            className={field}
            {...register(key)}
            aria-invalid={!!errors[key]}
            aria-describedby={errors[key] ? `${key}-error` : undefined}
          />
          {errors[key] && (
            <p
              id={`${key}-error`}
              role="alert"
              className="mt-2 text-[15px] text-danger"
            >
              {errors[key]?.message}
            </p>
          )}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="block text-[15px]">
          (05) What should we know?
        </label>
        <textarea
          id="message"
          rows={4}
          className={`${field} resize-y`}
          {...register('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-2 text-[15px] text-danger"
          >
            {errors.message.message}
          </p>
        )}
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p className="meta max-w-xs text-muted">
          UI preview only — validated in your browser, not sent or saved
        </p>
        <button
          type="submit"
          className="cursor-pointer font-serif text-3xl tracking-[-0.03em] underline decoration-1 underline-offset-[0.14em] transition-opacity hover:opacity-60"
        >
          Send it →
        </button>
      </div>
    </form>
  );
}
