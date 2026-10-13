'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowDisc } from '@/components/ui/button';
const schema = z.object({
  name: z.string().trim().min(2, 'Enter your name.'),
  email: z.string().email('Enter an email address like name@example.com.'),
  shop: z.string().trim().min(2, 'Enter the shop’s name.'),
  city: z.string().trim().min(2, 'Enter the city the shop is in.'),
  message: z
    .string()
    .trim()
    .min(15, 'Tell us a little more, at least 15 characters.'),
});
type Values = z.infer<typeof schema>;
const field =
  'mt-2 w-full rounded-2xl bg-subtle px-5 py-3.5 text-[16px] placeholder:text-muted aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-tail';
export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema) });
  return done ? (
    <div role="status" className="rounded-[24px] bg-subtle p-8">
      <h3 className="text-[28px] font-medium tracking-[-0.03em]">
        Recommendation checked
      </h3>
      <p className="mt-2 text-muted">
        This preview checks the form in your browser only. Nothing was sent or
        saved.
      </p>
      <button
        className="link-u mt-6 cursor-pointer text-[15px] font-medium"
        onClick={() => {
          setDone(false);
          reset();
        }}
      >
        Recommend another shop
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
      className="grid gap-5 sm:grid-cols-2"
    >
      {(
        [
          ['name', 'Your name'],
          ['email', 'Your email'],
          ['shop', 'Shop name'],
          ['city', 'City'],
        ] as const
      ).map(([key, label]) => (
        <div key={key}>
          <label htmlFor={key} className="text-[15px] font-medium">
            {label}
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
              className="mt-2 text-[14px] text-tail"
            >
              {errors[key]?.message}
            </p>
          )}
        </div>
      ))}
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-[15px] font-medium">
          Why would you send a friend there?
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${field} resize-y`}
          {...register('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
        />
        {errors.message ? (
          <p
            id="message-error"
            role="alert"
            className="mt-2 text-[14px] text-tail"
          >
            {errors.message.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-2 text-[14px] text-muted">
            The work they did, the generation of your car, and how it went.
          </p>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 sm:col-span-2">
        <p className="text-[14px] text-muted">
          Preview only. Nothing is sent or saved yet.
        </p>
        <button
          type="submit"
          className="group inline-flex h-12 cursor-pointer items-center gap-4 rounded-full bg-foreground pl-6 pr-2 text-[15px] font-medium text-surface"
        >
          Send recommendation
          <ArrowDisc />
        </button>
      </div>
    </form>
  );
}
