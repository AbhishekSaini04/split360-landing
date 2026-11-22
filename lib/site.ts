/** One place for URLs and names. Set NEXT_PUBLIC_SITE_URL / NEXT_PUBLIC_APP_URL in Netlify. */
const clean = (u: string) => u.replace(/\/+$/, '');

export const SITE_URL = clean(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://split360.indiesoft.in');
export const APP_URL = clean(process.env.NEXT_PUBLIC_APP_URL ?? 'https://split360app.indiesoft.in');

export const site = {
  name: 'Split360',
  title: 'Split360 — Track spending, split bills with friends, settle up over UPI',
  description:
    'Free expense tracker and bill splitter for India. Log daily spending, split trip and flat bills with friends, pool money for trips and settle up over UPI. No ads.',
  company: { name: 'IndieSoft.in', url: 'https://indiesoft.in' },
  maker: { name: 'Abhishek Saini', url: 'https://www.linkedin.com/in/abhisheksaini04' },
  links: {
    app: APP_URL,
    login: `${APP_URL}/login`,
    privacy: `${APP_URL}/privacy`,
    terms: `${APP_URL}/terms`,
  },
};
