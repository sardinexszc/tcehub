export type Category =
  | 'parts'
  | 'repair'
  | 'tuning'
  | 'bodywork'
  | 'detailing'
  | 'tires'
  | 'electrical';
export type Shop = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: Category[];
  generations: string[];
  address: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  phone: string;
  email?: string;
  website?: string;
  hours: string;
  images: string[];
  rating?: number;
  featured: boolean;
};
export type Journal = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  tags: string[];
  content: string;
};
export type Event = {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  location: string;
  coverImage: string;
  type: 'meet' | 'show' | 'cruise' | 'track';
};
export type Gallery = {
  id: string;
  slug: string;
  title: string;
  coverImage: string;
  images: string[];
  date: string;
  tags: string[];
};
export type Guide = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  generation: string;
  category: string;
  content: string;
};
export const generations = [
  'XV10',
  'XV20',
  'XV30',
  'XV40',
  'XV50',
  'XV70',
  'XV80',
];
export const categories: Category[] = [
  'parts',
  'repair',
  'tuning',
  'bodywork',
  'detailing',
  'tires',
  'electrical',
];
export const demoToday = '2026-10-13T00:00:00+08:00';
// All names, ratings, venues, dates, and contact details below are fictional demo data.
// TODO: replace with Supabase query behind a server-only content repository.
const photos = [
  '/images/camry-studio.svg',
  '/images/camry-road.svg',
  '/images/camry-garage.svg',
];
const shopNames = [
  'Apex Toyota Specialists',
  'Southline Auto Works',
  'Precision Paint & Body',
  'Northside Parts Co.',
  'Detail District',
  'Grip Theory Tires',
  'Voltage Auto Electric',
  'Camry Care Garage',
];
const cities = [
  'Quezon City',
  'Muntinlupa',
  'Pasig',
  'San Fernando',
  'Makati',
  'Taguig',
  'Angeles',
  'Baguio',
];
const regions = [
  'Metro Manila',
  'Metro Manila',
  'Metro Manila',
  'Central Luzon',
  'Metro Manila',
  'Metro Manila',
  'Central Luzon',
  'Cordillera',
];
const shopCategories: Category[][] = [
  ['repair', 'tuning'],
  ['repair', 'parts'],
  ['bodywork'],
  ['parts'],
  ['detailing'],
  ['tires'],
  ['electrical'],
  ['repair', 'detailing'],
];
export const shops: Shop[] = shopNames.map((name, i) => ({
  id: `shop-${i + 1}`,
  slug: name.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-'),
  name,
  description: `${name} is a fictional independent workshop for Camry owners in ${cities[i]}. This sample listing showcases scheduled maintenance, careful inspections, and clear estimates. Ask about experience with your generation before booking.`,
  category: shopCategories[i],
  generations:
    i % 2 ? ['XV40', 'XV50', 'XV70'] : ['XV20', 'XV30', 'XV50', 'XV80'],
  address: `${20 + i * 7} Sample Avenue, ${cities[i]}`,
  city: cities[i],
  region: regions[i],
  lat: 14.55 + i * 0.03,
  lng: 121.01 + i * 0.01,
  phone: '+63 000 000 0000',
  email: 'demo@example.com',
  hours: 'Monday–Saturday, 8:00 AM–5:00 PM',
  images: [photos[i % 3], photos[(i + 1) % 3], photos[(i + 2) % 3]],
  rating: 4.5 + (i % 5) / 10,
  featured: i < 3,
}));
const journalTitles = [
  'A daily driver, thoughtfully rebuilt',
  'Finding the balance: our XV50 story',
  'An XV40 worth keeping',
  'Small details. A big difference.',
  'The long road to an OEM-plus XV70',
  'Keeping a classic XV20 on the road',
];
export const journals: Journal[] = journalTitles.map((title, i) => ({
  id: `journal-${i}`,
  slug: `build-story-${i + 1}`,
  title,
  excerpt:
    'The decisions, lessons, and little details behind a Camry built to be driven.',
  coverImage: photos[i % 3],
  author: ['Marco Reyes', 'TCEHub Editorial', 'Bea Santos'][i % 3],
  date: `2026-09-${String(26 - i * 3).padStart(2, '0')}T09:00:00+08:00`,
  tags: [generations[i + 1], i % 2 ? 'OEM-plus' : 'Daily driver'],
  content: `## The starting point
A dependable daily driver was the goal. Before changing the look, we documented service history, inspected the tires, and made a list of maintenance priorities.
## The build
Fresh fluids, a careful suspension inspection, and comfortable tires came first. Cosmetic choices followed the original lines of the car. Every change had to make sense on an everyday commute.
## Lessons from the road
Plan the work in stages and keep records. A realistic budget includes the unexpected. This is a fictional editorial example, not a technical service procedure.`,
}));
const eventTitles = [
  'Sunday Cars & Coffee',
  'Camry Nights: South Edition',
  'The Lakeside Cruise',
  'Elite Hub Year-End Meet',
  'Community Show & Shine',
  'Track Day Fundamentals',
  'September Coffee Run',
  'Northern Camry Gathering',
];
export const events: Event[] = eventTitles.map((title, i) => ({
  id: `event-${i}`,
  slug: `community-event-${i + 1}`,
  title,
  description:
    'A relaxed community gathering for Camry owners and enthusiasts. Enjoy the cars, exchange build stories, and meet the people behind them. Respect the venue, keep noise down, and drive responsibly. This event and venue are demo content; no registration is available.',
  date:
    [
      '2026-10-25',
      '2026-11-07',
      '2026-11-22',
      '2026-12-13',
      '2027-01-17',
      '2027-02-21',
      '2026-09-20',
      '2026-08-16',
    ][i] + 'T07:00:00+08:00',
  location: [
    'Sample Coffee Yard, Quezon City',
    'Demo Park, Alabang',
    'Sample Lakeside, Laguna',
  ][i % 3],
  coverImage: photos[i % 3],
  type: (['meet', 'show', 'cruise', 'track'] as const)[i % 4],
}));
export const galleries: Gallery[] = [
  'Morning light, good company',
  'After dark in the city',
  'Camrys by the coast',
  'The details collection',
  'Sunday at the garage',
  'From every generation',
].map((title, i) => ({
  id: `gallery-${i}`,
  slug: `album-${i + 1}`,
  title,
  coverImage: photos[i % 3],
  images: [...photos, ...photos],
  date: `2026-09-${String(24 - i * 2).padStart(2, '0')}T09:00:00+08:00`,
  tags: ['Community', generations[i]],
}));
const guideTitles = [
  'Buying your first XV50',
  'A smarter pre-purchase inspection',
  'Understanding the XV70 lineup',
  'Keeping an XV40 comfortable',
  'Wheels and tires: start here',
  'Building a maintenance record',
];
export const guides: Guide[] = guideTitles.map((title, i) => ({
  id: `guide-${i}`,
  slug: `ownership-guide-${i + 1}`,
  title,
  excerpt:
    'A clear starting point for informed ownership, from first inspection to everyday upkeep.',
  coverImage: photos[i % 3],
  generation: ['XV50', 'XV30', 'XV70', 'XV40', 'XV80', 'XV20'][i],
  category: i % 2 ? 'Maintenance' : 'Buying advice',
  content: `## Before you begin
Confirm the year, market specification, and maintenance records. Advice can differ between engines and regions. Use the owner’s manual for your specific car.
## What to look for
Record tire condition, warning lights, visible leaks, and service documents. Have a qualified independent mechanic inspect the car before you commit to a purchase.
## Your next steps
Build a prioritized maintenance plan with your mechanic and keep receipts. This demo guide provides general orientation; it is not a workshop manual or a substitute for an inspection.`,
}));
