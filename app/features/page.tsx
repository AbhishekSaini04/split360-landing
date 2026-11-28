import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { AppButton, Footer, Header, Phone, Pill } from '@/components/Chrome';
import { JsonLd } from '@/components/JsonLd';
import { features } from '@/lib/content';
import { ICONS } from '@/lib/icons';
import { SITE_URL } from '@/lib/site';

const title = 'Features: expense tracker, bill splitting, UPI QR, udhaar, reminders and voice';
const description =
  'Everything Split360 does: daily expense tracking with charts, voice entry and questions, bill splitting (equal, exact, %, shares or item-wise), trip pool and summary, UPI and QR settle-up, udhaar, reminders, WhatsApp, Hindi and offline.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/features' },
  openGraph: { url: '/features', title, description, images: ['/og-image.png'] },
  twitter: { title, description, images: ['/og-image.png'] },
};

const details: Record<string, { points: string[]; screen: string; alt: string; how?: string }> = {
  'expense-tracker': {
    points: ['Category picked from your note (food, fuel, bills, groceries, stay…)', 'Week by week, then month by month (tap a bar to open that month)', '↑ / ↓ % against last month for every category'],
    screen: '/screens/chart.webp', alt: 'My spending: monthly total, week by week chart and categories', how: 'adding-expenses',
  },
  voice: {
    points: ['"Expense 20 chai, 30 milk yesterday, 50 petrol": three entries at once', '"2 10" or "two ten" is ₹210; misheard words like "expanse" still work', '"Is mahine chai pe kitna gaya?" answers right in the panel'],
    screen: '/screens/voice.webp', alt: 'Voice panel answering how much was spent on food this month', how: 'voice',
  },
  'split-bills': {
    points: ['Equal, exact amounts, percent, shares or item by item', 'Tax or tip on top is shared in the same proportion', 'More than one payer on the same bill'],
    screen: '/screens/items.webp', alt: 'Item-wise split: pizza for four, drinks for two', how: 'splitting',
  },
  'settle-up': {
    points: ['Fewest payments to clear the whole group', 'QR with the amount and your UPI ID, Split360 logo in the middle', 'Pay link that opens GPay / PhonePe / Paytm in one tap'],
    screen: '/screens/qr.webp', alt: 'Get paid by QR: ₹500 QR code with Send on WhatsApp', how: 'settle-up',
  },
  'trip-pool': {
    points: ['One person keeps the money; anyone can add more', 'Collected, spent and left, live; counted in the final settle-up', 'Trip summary card to share in the group'],
    screen: '/screens/summary.webp', alt: 'Trip summary: total, who paid, each share and top categories', how: 'trips',
  },
  udhaar: {
    points: ['"I gave Rahul" or "Rahul gave me", with a note', 'By voice: "Rahul ko 500 udhaar diye"', 'Shows in your balance with them; not counted as spending'],
    screen: '/screens/udhaar.webp', alt: 'Udhaar with Arjun: I gave Arjun ₹500 for rent', how: 'udhaar',
  },
  reminders: {
    points: ['"Remind me call Rahul at 6 pm", "kal subah 9 baje", "10 December", "friday ko"', 'Or by hand: Today, Tomorrow, In a week, or any date and time', 'Work done / remind me in 10 min, right from the notification'],
    screen: '/screens/reminders.webp', alt: 'Reminders page with active reminders and their buttons', how: 'reminders',
  },
  whatsapp: {
    points: ['Add a mobile number when you add a friend or member', 'Reminders, QR and pay links open in their own chat', 'Their own number (from their profile) always wins'],
    screen: '/screens/balances.webp', alt: 'Who pays whom with WhatsApp reminder and QR buttons', how: 'friends',
  },
  alerts: {
    points: ['Add, edit, delete, payment and join: in the bell list until read', 'Waits up to a week if your phone is offline', '9 pm summary of your day; a nudge for week-old dues'],
    screen: '/screens/home.webp', alt: 'Home screen with balance and the bell', how: 'notifications',
  },
  hindi: {
    points: ['Settings → Language → हिंदी', 'Menus, buttons and messages in Hindi', 'Voice understands Hinglish'],
    screen: '/screens/hindi.webp', alt: 'Split360 home screen in Hindi', how: 'settings',
  },
  offline: {
    points: ['Install to the home screen in one tap', 'Opens instantly with your last data', 'Entries made offline sync by themselves'],
    screen: '/screens/spending-list.webp', alt: 'Personal expense list', how: 'install',
  },
  private: {
    points: ['Personal expenses visible only to you', 'No ads and no selling data', 'Archive finished trips; they come back if anything new happens'],
    screen: '/screens/groups.webp', alt: 'Groups and friends list with an Archived section', how: 'groups',
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
                  {d.how && <Link href={`/guide#${d.how}`} className="mt-6 inline-block font-semibold text-accent underline-offset-4 hover:underline">How to use it →</Link>}
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
