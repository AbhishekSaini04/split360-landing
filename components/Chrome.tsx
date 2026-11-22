import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { site } from '@/lib/site';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 text-lg font-medium tracking-tight ${className}`} aria-label="Split360 home">
      <span className="grid size-9 place-items-center rounded-[10px] border border-line bg-surface">
        <Image src="/logo.png" alt="" width={26} height={26} priority />
      </span>
      split360
    </Link>
  );
}

/** The one primary action on the page: open the web app. */
export function AppButton({ children = 'Start free with Google', onDark = false }: { children?: React.ReactNode; onDark?: boolean }) {
  return (
    <a href={site.links.login}
      className={`tx inline-flex h-12 items-center rounded-lg px-6 text-[15px] font-medium ${onDark ? 'bg-lime text-ink hover:bg-[#c6fa86]' : 'bg-accent text-white hover:bg-[#136a4e]'}`}>
      {children}
    </a>
  );
}

/** Quiet secondary action. */
export function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="tx inline-flex h-12 items-center rounded-lg border border-line bg-surface px-6 text-[15px] font-medium hover:border-ink/20">
      {children}
    </Link>
  );
}

/** App screenshot in a phone frame: the one "object" the page shows. */
export function Phone({ src, alt, className = '', priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[32px] border-[6px] border-ink bg-ink ${className}`}>
      <Image src={src} alt={alt} width={780} height={1560} priority={priority} className="h-auto w-full rounded-[26px]" sizes="(min-width: 768px) 320px, 70vw" />
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
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 text-[15px] text-muted md:flex">
          {nav.map((n) => <Link key={n.href} href={n.href} className="tx hover:text-ink">{n.label}</Link>)}
        </nav>
        <a href={site.links.login} className="tx inline-flex h-10 items-center rounded-lg border border-line bg-surface px-4 text-sm font-medium hover:border-ink/20">
          Open app
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">Track your spending, split bills with friends and settle up over UPI. Free, no ads.</p>
        </div>
        <nav aria-label="Product" className="space-y-2 text-sm">
          <p className="font-medium">Product</p>
          <Link href="/features" className="tx block text-muted hover:text-ink">Features</Link>
          <Link href="/#faq" className="tx block text-muted hover:text-ink">FAQ</Link>
          <a href={site.links.login} className="tx block text-muted hover:text-ink">Open the app</a>
        </nav>
        <nav aria-label="Legal" className="space-y-2 text-sm">
          <p className="font-medium">Legal</p>
          <a href={site.links.privacy} className="tx block text-muted hover:text-ink">Privacy policy</a>
          <a href={site.links.terms} className="tx block text-muted hover:text-ink">Terms of use</a>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-muted sm:flex-row">
          <p className="flex items-center gap-1.5">
            Made with <Heart size={14} className="fill-danger text-danger" aria-label="love" /> by
            <a href={site.maker.url} target="_blank" rel="noopener" className="font-medium text-accent hover:underline">{site.maker.name}</a>
          </p>
          <p>A product of <a href={site.company.url} target="_blank" rel="noopener" className="font-medium text-accent hover:underline">{site.company.name}</a></p>
        </div>
      </div>
    </footer>
  );
}
