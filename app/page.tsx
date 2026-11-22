import Link from 'next/link';
import { Check, Mic } from 'lucide-react';
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
            <Pill tone="mint">Free · No ads · Made in India</Pill>
            <h1 className="mx-auto mt-6 max-w-4xl text-[44px] font-bold leading-[1.02] tracking-[-0.035em] md:text-[76px]">
              Split bills with friends.
              <span className="mt-3 block">
                <span className="pill inline-block rounded-2xl bg-lime px-4 pb-1 md:px-6">Settle up over UPI.</span>
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted md:text-xl">
              Split360 is a free expense tracker and bill splitter. Log your daily spending, share trip and flat expenses,
              pool money before a trip, and clear it all in the fewest payments.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <AppButton>Start free with Google</AppButton>
              <Link href="#how-it-works" className="pill inline-flex h-12 items-center rounded-full bg-surface px-6 text-[15px] font-semibold">
                See how it works
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
              <span className="pill inline-flex rounded-full bg-lime px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink">New · Trip pool</span>
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
                  two or three UPI transfers. Tap the bell to remind a friend on WhatsApp.
                </p>
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
