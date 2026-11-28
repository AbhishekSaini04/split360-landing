import type { Metadata } from 'next';
import Link from 'next/link';
import { Lightbulb, Mic } from 'lucide-react';
import { AppButton, Footer, Header, Phone, Pill } from '@/components/Chrome';
import { JsonLd } from '@/components/JsonLd';
import { guide, voiceExamples } from '@/lib/guide';
import { SITE_URL } from '@/lib/site';

const title = 'How to use Split360: step-by-step guide';
const description =
  'Install the app, add expenses by tap or voice, make groups, split bills (equal, exact, %, shares, items), trip pool, udhaar, settle up over UPI or QR, reminders and notifications.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guide' },
  openGraph: { url: '/guide', title, description, images: ['/og-image.png'] },
  twitter: { title, description, images: ['/og-image.png'] },
};

const howTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: guide.map((g, i) => ({ '@type': 'HowToSection', position: i + 1, name: g.title, url: `${SITE_URL}/guide#${g.id}`,
    itemListElement: g.steps.map((s, j) => ({ '@type': 'HowToStep', position: j + 1, text: s })) })),
};

export default function GuidePage() {
  return (
    <>
      <JsonLd data={howTo} />
      <Header />
      <main>
        <section className="paper border-b-[1.5px] border-ink">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
            <Pill tone="mint">Guide</Pill>
            <h1 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-[-0.035em] md:text-6xl">How to use Split360</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">Every feature, step by step. Jump to what you need.</p>
            <nav aria-label="Guide sections" className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
              {guide.map((g) => (
                <a key={g.id} href={`#${g.id}`} className="pill rounded-full bg-surface px-3 py-1.5 text-sm font-semibold hover:bg-accent-soft">{g.title}</a>
              ))}
              <a href="#voice-cheatsheet" className="pill rounded-full bg-lime px-3 py-1.5 text-sm font-semibold">Voice cheat sheet</a>
            </nav>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5">
          {guide.map((g, i) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-20 grid items-center gap-10 border-b border-line py-14 last:border-0 md:grid-cols-[1.3fr_1fr] md:py-16">
              <div className={g.screen && i % 2 ? 'md:order-2' : ''}>
                <span className="pill inline-grid size-9 place-items-center rounded-full bg-lime text-sm font-bold">{i + 1}</span>
                <h2 id={`${g.id}-h`} className="mt-4 text-3xl font-bold tracking-[-0.025em]">{g.title}</h2>
                <p className="mt-3 text-lg text-muted">{g.intro}</p>
                <ol className="mt-6 space-y-3">
                  {g.steps.map((s, j) => (
                    <li key={s} className="flex gap-3 text-[15px] leading-relaxed">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-bold text-accent">{j + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                {g.tip && (
                  <p className="mt-6 flex gap-2 rounded-card bg-accent-soft p-4 text-[15px]"><Lightbulb size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />{g.tip}</p>
                )}
              </div>
              {g.screen && <Phone src={g.screen} alt={g.alt ?? ''} className="mx-auto w-[62%] max-w-[260px]" />}
            </section>
          ))}
        </div>

        <section id="voice-cheatsheet" className="scroll-mt-20 border-y-[1.5px] border-ink bg-hero text-white">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-lime text-ink"><Mic size={20} aria-hidden /></span>
              <h2 className="text-3xl font-bold tracking-[-0.025em] md:text-4xl">Voice cheat sheet</h2>
            </div>
            <p className="mt-3 text-lg text-hero-muted">Tap the mic and say any of these. Your own words work too.</p>
            <div className="mt-8 overflow-hidden rounded-card border border-white/15">
              <table className="w-full text-left text-[15px]">
                <thead className="bg-white/10 text-sm text-hero-muted"><tr><th className="px-4 py-3 font-semibold">Say</th><th className="px-4 py-3 font-semibold">What happens</th></tr></thead>
                <tbody>
                  {voiceExamples.map(([say, does]) => (
                    <tr key={say} className="border-t border-white/10"><td className="px-4 py-3 font-semibold text-lime">&ldquo;{say}&rdquo;</td><td className="px-4 py-3 text-hero-muted">{does}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="mx-auto max-w-3xl px-5 py-20">
            <h2 className="text-4xl font-bold tracking-[-0.03em]">Ready to try?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">Free, no ads, works on any phone. Questions? <Link href="/#faq" className="font-semibold text-accent underline-offset-4 hover:underline">See the FAQ</Link>.</p>
            <div className="mt-8 flex justify-center"><AppButton>Start free with Google</AppButton></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
