import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { AppButton, Footer, Header, Phone, Pill } from '@/components/Chrome';
import { JsonLd } from '@/components/JsonLd';
import { features } from '@/lib/content';
import { ICONS } from '@/lib/icons';
import { SITE_URL } from '@/lib/site';

const title = 'Features: expense tracker, bill splitting, trip pool and UPI settle-up';
const description =
  'Everything Split360 does: daily expense tracking with auto categories, group bill splitting (equal, exact, % or shares), trip pool, UPI settle-up in the fewest payments, voice entry and privacy.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/features' },
  openGraph: { url: '/features', title, description, images: ['/og-image.png'] },
  twitter: { title, description, images: ['/og-image.png'] },
};

const details: Record<string, { points: string[]; screen: string; alt: string }> = {
  'expense-tracker': {
    points: ['Category picked from your note (food, fuel, bills, groceries, stay…)', 'Monthly total and category breakdown', 'Date and time on every entry'],
    screen: '/screens/spending.webp', alt: 'My spending: monthly total and spending by category',
  },
  'split-bills': {
    points: ['Equal, exact amounts, percentage or shares', 'More than one payer on the same bill', 'Add friends by name; they join later from a link'],
    screen: '/screens/group-list.webp', alt: 'Group expenses with who paid and your share',
  },
  'trip-pool': {
    points: ['One person keeps the money; anyone can add more', 'Collected, spent and left, live', 'Included automatically in the final settle-up'],
    screen: '/screens/pool.webp', alt: 'Trip pool with collected, spent and contributions per friend',
  },
  'settle-up': {
    points: ['Fewest payments to clear the whole group', 'Pay in any UPI app or record cash', 'One-tap WhatsApp reminder'],
    screen: '/screens/balances.webp', alt: 'Who pays whom with Record and reminder buttons',
  },
  voice: {
    points: ['"Expense 450 petrol yesterday by cash"', 'Understands amount, category, date and payment mode', 'Saved even if you close the app mid-sentence'],
    screen: '/screens/home.webp', alt: 'Home screen with the voice button',
  },
  private: {
    points: ['Personal expenses visible only to you', 'No ads and no selling data', 'Delete your account any time from Settings'],
    screen: '/screens/spending-list.webp', alt: 'Personal expense list',
  },
};

const breadcrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Features', item: `${SITE_URL}/features` },
  ],
};

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Header />
      <main>
        <section className="paper border-b-[1.5px] border-ink">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-24">
            <Pill tone="mint">Features</Pill>
            <h1 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.035em] md:text-6xl">Everything you need to keep money simple with friends</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{description}</p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5">
          {features.map((f, i) => {
            const Icon = ICONS[f.slug];
            const d = details[f.slug]!;
            return (
              <section key={f.slug} id={f.slug} aria-labelledby={`${f.slug}-h`}
                className="grid items-center gap-10 border-b border-line py-16 last:border-0 md:grid-cols-2 md:py-20">
                <div className={i % 2 ? 'md:order-2' : ''}>
                  <span className="grid size-11 place-items-center rounded-full bg-accent-soft text-accent"><Icon size={20} aria-hidden /></span>
                  <h2 id={`${f.slug}-h`} className="mt-4 text-3xl font-bold tracking-[-0.025em] md:text-4xl">{f.title}</h2>
                  <p className="mt-4 text-lg text-muted">{f.body}</p>
                  <ul className="mt-6 space-y-2">
                    {d.points.map((p) => <li key={p} className="flex gap-2 text-[15px]"><Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />{p}</li>)}
                  </ul>
                </div>
                <Phone src={d.screen} alt={d.alt} className="mx-auto w-[65%] max-w-[280px]" />
              </section>
            );
          })}
        </div>

        <section className="border-t-[1.5px] border-ink bg-hero text-center text-white">
          <div className="mx-auto max-w-3xl px-5 py-20">
            <h2 className="text-4xl font-bold tracking-[-0.03em]">Try it with your next trip</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-hero-muted">Free, no ads, works on any phone.</p>
            <div className="mt-8 flex justify-center"><AppButton dark>Start free with Google</AppButton></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
