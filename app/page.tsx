import Link from 'next/link';
import { Check } from 'lucide-react';
import { AppButton, Footer, GhostButton, Header, Phone } from '@/components/Chrome';
import { JsonLd } from '@/components/JsonLd';
import { faqs, features, steps } from '@/lib/content';

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

/** Small note floating next to the phone, showing real app data. */
function Note({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`absolute z-10 hidden rounded-[10px] border border-line bg-surface px-3 py-2 text-sm shadow-sm lg:block ${className}`}>{children}</span>;
}

const H2 = 'text-[32px] font-medium leading-tight tracking-[-0.02em] md:text-[44px]';

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd} />
      <Header />
      <main>
        {/* Hero: words left, product right */}
        <section className="paper border-b border-line">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
            <div>
              <h1 className="text-[44px] font-medium leading-[1.04] tracking-[-0.03em] md:text-[64px]">
                Split bills with friends. Settle up over <span className="rounded-md bg-lime px-2">UPI.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
                Log your daily spending, share trip and flat expenses, collect money before a trip, and clear it all in the fewest payments.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <AppButton />
                <GhostButton href="#how-it-works">See how it works</GhostButton>
              </div>
              <p className="mt-6 text-sm text-muted">Free, no ads. Works in any phone browser.</p>
            </div>

            <div className="relative mx-auto w-full max-w-[320px]">
              <Phone src="/screens/home.webp" alt="Split360 home screen: total balance, who owes you, and this month's spending" priority />
              <Note className="-left-40 top-28">Neha owes you <b className="font-medium text-danger">₹450</b></Note>
              <Note className="-right-36 top-64">Goa pool <b className="font-medium text-accent">₹11,500</b> collected</Note>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <h2 className={H2}>Your own spending and your group money, in one place.</h2>
            <p className="mt-4 text-lg text-muted">Split360 shows your real spending: what you paid yourself plus your share of every group bill.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.slug} className="rounded-card border border-line bg-surface p-6">
                <h3 className="text-lg font-medium">{f.title}</h3>
                <p className="mt-1 text-sm text-muted">{f.short}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{f.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/features" className="tx font-medium text-accent underline-offset-4 hover:underline">See every feature in detail</Link>
          </p>
        </section>

        {/* The one bright moment: the trip pool, shown in the real app */}
        <section className="bg-hero text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <p className="text-sm font-medium text-lime">New: trip pool</p>
              <h2 className={`mt-3 ${H2}`}>Collect trip money up front. Settle only the difference.</h2>
              <p className="mt-5 text-lg text-hero-muted">
                Everyone gives ₹1,000 to one person before Goa, and anyone can top up on the way. Split360 tracks it all, so when the
                trip costs ₹1,200 each, everyone settles just ₹200.
              </p>
              <ul className="mt-8 space-y-3 text-[15px]">
                {['Any amount, any time, by cash or UPI', 'Collected, spent and left at a glance', 'Counted automatically in who pays whom'].map((t) => (
                  <li key={t} className="flex items-center gap-3"><Check size={18} className="text-lime" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>
            <Phone src="/screens/pool.webp" alt="Pool card: collected ₹11,500, spent ₹13,800, and what each friend put in" className="mx-auto w-[70%] max-w-[320px] border-[#0b2a31]" />
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <h2 className={`max-w-2xl ${H2}`}>Three steps. No spreadsheets.</h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="border-t border-line pt-6">
                  <span className="text-sm text-muted">Step {i + 1}</span>
                  <h3 className="mt-2 text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
            <div className="mt-24 grid items-center gap-12 md:grid-cols-2">
              <div className="md:order-2">
                <h3 className="text-[28px] font-medium leading-tight tracking-[-0.02em]">The fewest payments to clear a group</h3>
                <p className="mt-4 text-lg text-muted">
                  Ten expenses between five friends do not need ten payments. Split360 simplifies the debts, so most groups settle in
                  two or three UPI transfers. Tap the bell to remind a friend on WhatsApp.
                </p>
              </div>
              <Phone src="/screens/balances.webp" alt="Who pays whom: the fewest payments to settle the group" className="mx-auto w-[70%] max-w-[300px]" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
          <h2 className={H2}>Questions, answered</h2>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-medium">
                  {f.q}
                  <span className="tx text-xl leading-none text-muted group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Closing call to action, kept quiet */}
        <section className="border-t border-line bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
            <div>
              <h2 className="text-[28px] font-medium tracking-[-0.02em]">Stop chasing friends for money.</h2>
              <p className="mt-2 text-muted">Start your first group in under a minute.</p>
            </div>
            <AppButton />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
