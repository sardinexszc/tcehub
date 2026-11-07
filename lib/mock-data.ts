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
export const generationYears: Record<string, string> = {
  XV10: '1991 – 1996',
  XV20: '1996 – 2001',
  XV30: '2001 – 2006',
  XV40: '2006 – 2011',
  XV50: '2011 – 2017',
  XV70: '2017 – 2024',
  XV80: '2024 – present',
};
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
  '/images/scene-studio.svg',
  '/images/scene-dusk.svg',
  '/images/scene-garage.svg',
  '/images/scene-coast.svg',
  '/images/scene-night.svg',
  '/images/scene-highland.svg',
];
// Each content type starts at a different scene so neighbouring rows never repeat.
const photo = (i: number, offset = 0) => photos[(i + offset) % photos.length];
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
  images: [photo(i), photo(i, 1), photo(i, 2)],
  rating: 4.5 + (i % 5) / 10,
  featured: i < 3,
}));
const journalTitles = [
  'Rebuilding a 2004 XV30 as a daily driver',
  'Two years with an XV50 hybrid',
  'Why I kept my XV40 past 300,000 km',
  'Refreshing XV70 headlights at home',
  'The slow road to an OEM-plus XV70',
  'Keeping a 1998 XV20 on the road',
];
const journalExcerpts = [
  'New bushings, a timing-belt service, and a set of comfort tires turned a tired commuter into a car its owner trusts again.',
  'Real-world fuel figures, the one battery scare, and what the dealer service plan did and didn’t cover.',
  'A record of every repair since 2011, what each one cost, and why selling never made financial sense.',
  'Yellowed lenses, a weekend, and a polishing kit. What worked, what didn’t, and how long the finish lasted.',
  'Factory wheels from a higher trim, period-correct accessories, and nothing that can’t be undone.',
  'Sourcing parts for a 28-year-old sedan: surplus shops, owner groups, and one very patient mechanic.',
];
const journalTags = [
  ['XV30', 'Daily driver'],
  ['XV50', 'Ownership'],
  ['XV40', 'High mileage'],
  ['XV70', 'DIY'],
  ['XV70', 'OEM-plus'],
  ['XV20', 'Classic'],
];
export const journals: Journal[] = journalTitles.map((title, i) => ({
  id: `journal-${i}`,
  slug: `build-story-${i + 1}`,
  title,
  excerpt: journalExcerpts[i],
  coverImage: photo(i, 2),
  author: ['Marco Reyes', 'TCEHub Editorial', 'Bea Santos'][i % 3],
  date: `2026-09-${String(26 - i * 3).padStart(2, '0')}T09:00:00+08:00`,
  tags: journalTags[i],
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
const eventBlurbs = [
  'Monthly morning meet. Park by generation, grab a coffee, and be gone before the lunch crowd.',
  'Evening meet for south-side owners. Lit parking, food stalls nearby, and a short photo run after.',
  'A 60 km cruise with one regroup stop. Route notes go out the week before.',
  'End-of-year meet with a raffle for members and a group photo of every generation present.',
  'Bring the car clean. Owners vote on best in class for each generation.',
  'Classroom session in the morning, supervised laps in the afternoon. Helmets required.',
  'A short coffee run to close out the rainy season.',
  'Owners from Pampanga up to Baguio meet halfway for breakfast and a drive.',
];
export const events: Event[] = eventTitles.map((title, i) => ({
  id: `event-${i}`,
  slug: `community-event-${i + 1}`,
  title,
  description: `${eventBlurbs[i]} Respect the venue, keep noise down, and drive responsibly. This event and venue are demo content; registration isn’t available.`,
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
  coverImage: photo(i, 4),
  type: (['meet', 'show', 'cruise', 'track'] as const)[i % 4],
}));
export const galleries: Gallery[] = [
  'Morning light, good company',
  'After dark in the city',
  'Camrys by the coast',
  'The details collection',
  'Sunday at the garage',
  'From every generation',
].map((title, i) => {
  // Scene index per album, chosen to match each title (dusk, night, coast, studio, garage, highland).
  const cover = [1, 4, 3, 0, 2, 5][i];
  return {
    id: `gallery-${i}`,
    slug: `album-${i + 1}`,
    title,
    coverImage: photos[cover],
    images: [...photos.slice(cover), ...photos.slice(0, cover)],
    date: `2026-09-${String(24 - i * 2).padStart(2, '0')}T09:00:00+08:00`,
    tags: ['Community', generations[i]],
  };
});
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
  excerpt: [
    'Which years to look at, what a fair asking price covers, and the paperwork to check before you pay.',
    'A checklist you can bring to any seller, and when to hand the car to a mechanic instead.',
    'Engines, trims, and the differences between local and imported units.',
    'Suspension, cabin noise, and air-con: the three things that make an older Camry feel new again.',
    'Sizes, load ratings, and why the cheapest set often costs more over two years.',
    'How to keep receipts and service notes so the next owner, and your mechanic, can trust them.',
  ][i],
  coverImage: photo(i, 3),
  generation: ['XV50', 'XV30', 'XV70', 'XV40', 'XV80', 'XV20'][i],
  category: i % 2 ? 'Maintenance' : 'Buying advice',
  content: `## Before you begin
Confirm the year, market specification, and maintenance records. Advice can differ between engines and regions. Use the owner’s manual for your specific car.
## What to look for
Record tire condition, warning lights, visible leaks, and service documents. Have a qualified independent mechanic inspect the car before you commit to a purchase.
## Your next steps
Build a prioritized maintenance plan with your mechanic and keep receipts. This demo guide provides general orientation; it is not a workshop manual or a substitute for an inspection.`,
}));
