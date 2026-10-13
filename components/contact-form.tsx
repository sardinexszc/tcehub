'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const schema = z.object({
  name: z.string().trim().min(2, 'Enter your name.'),
  email: z.string().email('Enter a valid email.'),
  shop: z.string().trim().min(2, 'Enter the shop name.'),
  city: z.string().trim().min(2, 'Enter the city.'),
  message: z.string().trim().min(15, 'Please include at least 15 characters.'),
});
type Values = z.infer<typeof schema>;
export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema) });
  return done ? (
    <div role="status" className="rounded-xl border bg-surface p-8">
      <h2 className="text-2xl font-medium tracking-[-0.02em]">
        Your form looks good.
      </h2>
      <p className="mt-3 leading-7 text-muted">
        This preview validated the form locally. Nothing was sent or saved.
      </p>
      <Button
        className="mt-6"
        variant="outline"
        onClick={() => {
          setDone(false);
          reset();
        }}
      >
        Try another submission
      </Button>
    </div>
  ) : (
    <form
      noValidate
      onSubmit={handleSubmit(() => {
        setDone(
          true,
        ); /* TODO: replace with a server-side submission workflow. */
      })}
      className="space-y-5"
    >
      {(
        [
          ['name', 'Your name'],
          ['email', 'Email address'],
          ['shop', 'Shop name'],
          ['city', 'City'],
        ] as const
      ).map(([key, label]) => (
        <div key={key}>
          <label htmlFor={key} className="mb-2 block text-sm font-medium">
            {label}
          </label>
          <Input
            id={key}
            type={key === 'email' ? 'email' : 'text'}
            autoComplete={
              key === 'name' ? 'name' : key === 'email' ? 'email' : 'off'
            }
            {...register(key)}
            aria-invalid={!!errors[key]}
            aria-describedby={errors[key] ? `${key}-error` : undefined}
          />
          {errors[key] && (
            <p
              id={`${key}-error`}
              role="alert"
              className="mt-2 text-sm text-danger"
            >
              {errors[key]?.message}
            </p>
          )}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          What should we know?
        </label>
        <textarea
          id="message"
          className="min-h-32 w-full rounded-md border bg-surface p-3 text-base transition-colors hover:border-foreground/30 aria-[invalid=true]:border-danger sm:text-sm"
          {...register('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-2 text-sm text-danger"
          >
            {errors.message.message}
          </p>
        )}
      </div>
      <p className="text-xs leading-5 text-muted">
        UI preview only. Submissions are validated in your browser and are not
        sent or saved.
      </p>
      <Button type="submit">Preview submission</Button>
    </form>
  );
}
