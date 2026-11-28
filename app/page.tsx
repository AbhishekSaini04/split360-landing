import Link from 'next/link';
import { ArrowRight, Check, Mic } from 'lucide-react';
import { ICONS } from '@/lib/icons';
import { AppButton, Footer, Header, Phone, Pill } from '@/components/Chrome';
import { JsonLd } from '@/components/JsonLd';
import { faqs, features, steps } from '@/lib/content';


const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

function Chip({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`pill absolute z-10 hidden rounded-full bg-surface px-3 py-1.5 text-xs font-semibold md:inline-flex ${className}`}>{children}</span>;
}

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd} />
      <Header />
      <main>
        {/* Hero */}
        <section className="paper overflow-hidden border-b-[1.5px] border-ink">
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 text-center md:pt-20">
            <h1 className="mx-auto max-w-4xl text-[44px] font-bold leading-[1.02] tracking-[-0.035em] md:text-[76px]">
              Split bills with friends.
              <span className="mt-3 block">
                <span className="pill inline-block rounded-2xl bg-lime px-4 pb-1 md:px-6">Settle up over UPI.</span>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl">
              Split360 is a free expense tracker and bill splitter. Log your spending by voice, share trip and flat expenses,
              track udhaar, set reminders, and settle up over UPI or a QR in the fewest payments. In English or Hindi.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <AppButton>Start free with Google</AppButton>
              <Link href="/guide" className="pill inline-flex h-12 items-center rounded-full bg-surface px-6 text-[15px] font-semibold">
                How to use it
              </Link>
            </div>

            <div className="relative mx-auto mt-16 flex max-w-4xl items-end justify-center gap-4 md:gap-8">
              <Phone src="/screens/spending.webp" alt="My spending screen with this month's total and categories" className="hidden w-[30%] -rotate-6 sm:block" />
              <Phone src="/screens/home.webp" alt="Split360 home screen showing total balance and recent expenses" className="z-[1] w-[70%] sm:w-[34%]" priority />
              <Phone src="/screens/pool.webp" alt="A trip group with a shared pool: collected, spent and left" className="hidden w-[30%] rotate-6 sm:block" />
              <Chip className="left-0 top-10 -rotate-3">Neha owes you <b className="ml-1 text-danger">₹450</b></Chip>
              <Chip className="right-0 top-24 rotate-3">Pool collected <b className="ml-1 text-accent">₹11,500</b></Chip>
              <Chip className="bottom-24 left-6 rotate-2"><Mic size={14} className="mr-1 text-accent" aria-hidden />&quot;Expense 200 for lunch&quot;</Chip>
            </div>
          </div>
          <div className="border-t-[1.5px] border-ink bg-surface">
            <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 text-sm font-semibold">
              {['Free forever', 'No ads, no daily limits', 'UPI-first', 'Works on any phone', 'Your data stays yours'].map((t) => (
                <li key={t} className="flex items-center gap-1.5"><Check size={16} className="text-accent" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="text-center">
            <Pill>Everything in one app</Pill>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.03em] md:text-5xl">Your own spending and your group money, together.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">Other apps do one or the other. Split360 shows your real spending: what you paid yourself plus your share of every group bill.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = ICONS[f.slug];
              return (
                <article key={f.slug} className="pill rounded-card bg-surface p-6">
                  <span className="grid size-11 place-items-center rounded-full bg-accent-soft text-accent"><Icon size={20} aria-hidden /></span>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-accent">{f.short}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.body}</p>
                </article>
              );
            })}
          </div>
          <p className="mt-10 text-center">
            <Link href="/features" className="font-semibold text-accent underline-offset-4 hover:underline">See every feature in detail →</Link>
          </p>
        </section>

        {/* Pool spotlight */}
        <section className="border-y-[1.5px] border-ink bg-hero text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-24">
            <div>
              <span className="pill inline-flex rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink">Trip pool</span>
              <h2 className="mt-5 text-4xl font-bold tracking-[-0.03em] md:text-5xl">Collect trip money up front. Settle only the difference.</h2>
              <p className="mt-5 text-lg text-hero-muted">
                Everyone gives ₹1,000 to one person before Goa, and anyone can top up on the way. Split360 tracks it all, so when the
                trip costs ₹1,200 each, everyone settles just ₹200.
              </p>
              <ul className="mt-6 space-y-2 text-[15px]">
                {['Any amount, any time, by cash or UPI', 'See collected, spent and left at a glance', 'Counted automatically in who-pays-whom'].map((t) => (
                  <li key={t} className="flex items-center gap-2"><Check size={18} className="text-lime" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>
            <Phone src="/screens/pool.webp" alt="Pool card: collected ₹11,500, spent ₹13,800, and what each friend put in" className="mx-auto w-[70%] max-w-[300px] border-ink" />
          </div>
        </section>

        {/* What's new */}
        <section id="new" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="text-center">
            <Pill tone="lime">New in Split360</Pill>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.03em] md:text-5xl">Less typing, faster paying.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">Each one takes a few seconds. The guide shows exactly how.</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { screen: '/screens/qr.webp', title: 'Get paid by QR', body: 'Type the amount, show the QR or send it on WhatsApp. Money goes straight to your UPI ID.', how: 'settle-up' },
              { screen: '/screens/voice.webp', title: 'Ask the mic', body: '"Is mahine chai pe kitna gaya?" The answer comes right away.', how: 'voice' },
              { screen: '/screens/udhaar.webp', title: 'Udhaar', body: '"Rahul ko 500 udhaar diye." Tracked with your friend, not counted as spending.', how: 'udhaar' },
              { screen: '/screens/hindi.webp', title: 'हिंदी में भी', body: 'Switch the whole app to Hindi from Settings, and back any time.', how: 'settings' },
              { screen: '/screens/items.webp', title: 'Split item by item', body: 'Pizza for three, drinks for two. Tax and tip shared fairly.', how: 'splitting' },
              { screen: '/screens/summary.webp', title: 'Trip summary', body: 'Total, who paid what, top categories. Share it in the group as an image.', how: 'trips' },
              { screen: '/screens/reminders.webp', title: 'Reminders that ring', body: '"Remind me rent 10 December 9 am." Work done or 10 min later, right on the notification.', how: 'reminders' },
              { screen: '/screens/chart.webp', title: 'See the trend', body: 'Week by week, month by month, and each category against last month.', how: 'adding-expenses' },
            ].map((n) => (
              <Link key={n.title} href={`/guide#${n.how}`} className="group block">
                <Phone src={n.screen} alt={n.title} className="mx-auto w-[70%] max-w-[220px] transition group-hover:-translate-y-1" />
                <h3 className="mt-5 text-lg font-semibold">{n.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{n.body}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent">How to use <ArrowRight size={14} aria-hidden /></span>
              </Link>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="paper border-b-[1.5px] border-ink">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <div className="text-center">
              <Pill>How it works</Pill>
              <h2 className="mt-5 text-4xl font-bold tracking-[-0.03em] md:text-5xl">Three steps. No spreadsheets.</h2>
            </div>
            <ol className="mt-14 grid gap-5 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="pill rounded-card bg-surface p-6">
                  <span className="pill grid size-10 place-items-center rounded-full bg-lime text-lg font-bold">{i + 1}</span>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
              <Phone src="/screens/balances.webp" alt="Who pays whom: the fewest payments to settle the group" className="mx-auto w-[70%] max-w-[300px]" />
              <div>
                <h3 className="text-3xl font-bold tracking-[-0.02em]">The fewest payments to clear a group</h3>
                <p className="mt-4 text-lg text-muted">
                  Ten expenses between five friends do not need ten payments. Split360 simplifies the debts, so most groups settle in
                  two or three UPI transfers. Tap the bell to remind a friend on WhatsApp, or show them a QR with the amount.
                </p>
                <Link href="/guide" className="mt-6 inline-flex items-center gap-1 font-semibold text-accent underline-offset-4 hover:underline">Full step-by-step guide <ArrowRight size={16} aria-hidden /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <div className="text-center">
            <Pill>FAQ</Pill>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.03em] md:text-5xl">Questions, answered</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="pill group rounded-card bg-surface p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold">
                  {f.q}
                  <span className="text-2xl leading-none text-accent transition group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t-[1.5px] border-ink bg-hero text-center text-white">
          <div className="mx-auto max-w-3xl px-5 py-20">
            <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-5xl">Stop chasing friends for money.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-hero-muted">Start your first group in under a minute. Free, no ads, works on any phone.</p>
            <div className="mt-8 flex justify-center"><AppButton dark>Start free with Google</AppButton></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
