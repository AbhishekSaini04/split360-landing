import Link from 'next/link';
import type { Metadata } from 'next';
import { Footer, Header } from '@/components/Chrome';

export const metadata: Metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="paper grid min-h-[60vh] place-items-center px-5 text-center">
        <div>
          <p className="text-sm text-muted">404</p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight">This page doesn&apos;t exist</h1>
          <Link href="/" className="mt-8 inline-flex h-11 items-center rounded-lg border border-line bg-surface px-5 font-medium">Back to home</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
