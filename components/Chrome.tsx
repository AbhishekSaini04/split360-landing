import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 text-lg font-semibold tracking-tight ${className}`} aria-label="Split360 home">
      <span className="grid size-9 place-items-center rounded-[10px] border border-line bg-surface">
        <Image src="/logo.png" alt="" width={26} height={26} priority />
      </span>
      split360
    </Link>
  );
}

/** Primary call to action: opens the web app. */
export function AppButton({ children = 'Start free', dark = false }: { children?: React.ReactNode; dark?: boolean }) {
  return (
    <a href={site.links.login}
      className={`btn-shadow inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-semibold ${dark ? 'bg-lime text-ink' : 'bg-accent text-white'}`}>
      {children} <ArrowRight size={17} aria-hidden />
    </a>
  );
}

export function Pill({ children, tone = 'white' }: { children: React.ReactNode; tone?: 'white' | 'lime' | 'mint' }) {
  const bg = tone === 'lime' ? 'bg-lime' : tone === 'mint' ? 'bg-accent-soft' : 'bg-surface';
  return <span className={`pill inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${bg}`}>{children}</span>;
}

/** App screenshot in a simple phone frame. */
export function Phone({ src, alt, className = '', priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[34px] border-[7px] border-ink bg-ink shadow-[6px_6px_0_var(--color-ink)] ${className}`}>
      <Image src={src} alt={alt} width={780} height={1560} priority={priority} className="h-auto w-full rounded-[27px]" sizes="(min-width: 768px) 300px, 70vw" />
    </div>
  );
}

const nav = [
  { href: '/features', label: 'Features' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#faq', label: 'FAQ' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-[1.5px] border-ink bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
          {nav.map((n) => <Link key={n.href} href={n.href} className="hover:text-accent">{n.label}</Link>)}
        </nav>
        <a href={site.links.login} className="btn-shadow inline-flex h-10 items-center rounded-full bg-accent px-5 text-sm font-semibold text-white">
          Open app
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t-[1.5px] border-ink bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">Track your spending, split bills with friends and settle up over UPI. Free, no ads.</p>
        </div>
        <nav aria-label="Product" className="space-y-2 text-sm">
          <p className="font-semibold">Product</p>
          <Link href="/features" className="block text-muted hover:text-ink">Features</Link>
          <Link href="/#faq" className="block text-muted hover:text-ink">FAQ</Link>
          <a href={site.links.login} className="block text-muted hover:text-ink">Open the app</a>
        </nav>
        <nav aria-label="Legal" className="space-y-2 text-sm">
          <p className="font-semibold">Legal</p>
          <a href={site.links.privacy} className="block text-muted hover:text-ink">Privacy policy</a>
          <a href={site.links.terms} className="block text-muted hover:text-ink">Terms of use</a>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-sm text-muted sm:flex-row">
          <p>© Split360</p>
          <p className="text-center sm:text-right">
            A product of <b className="font-semibold text-ink">IndieSoft</b>
            <a href={site.company.url} target="_blank" rel="noopener" className="block font-semibold text-accent hover:underline">indiesoft.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
