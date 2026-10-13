import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/** "repair and tuning" → "Repair and tuning" */
export function sentence(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-PH', {
    dateStyle: 'medium',
    timeZone: 'Asia/Manila',
  }).format(new Date(date));
}
