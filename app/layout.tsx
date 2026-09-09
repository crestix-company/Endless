import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import { siteUrl, sitePath } from '@/lib/site';
import './globals.css';
export const dynamic = 'force-static';
const bodyFont = Noto_Sans_JP({ variable: '--font-body', subsets: ['latin'], display: 'swap' });
const displayFont = Noto_Serif_JP({ variable: '--font-display', subsets: ['latin'], display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'カット倶楽部エンドレス｜亘理の一席だけの理容室',
  description: '宮城県亘理町で17年。カット倶楽部エンドレスは一席だけのマンツーマン理容室です。メンズカット・シェービング・白髪ケアに対応。亘理駅徒歩5分、駐車場3台。水曜は21時まで営業。',
  icons: { icon: sitePath('/favicon.svg') },
  alternates: { canonical: siteUrl },
  openGraph: { type: 'website', locale: 'ja_JP', title: 'カット倶楽部エンドレス', description: '亘理で17年。一席だけの、あなたの理容室。', url: siteUrl },
};
const salon = { '@context': 'https://schema.org', '@type': 'HairSalon', name: 'カット倶楽部エンドレス', url: siteUrl, telephone: '+81-223-32-2708', address: { '@type': 'PostalAddress', addressRegion: '宮城県', addressLocality: '亘理郡亘理町', streetAddress: '字新井町7-5', addressCountry: 'JP' }, hasMap: 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('カット倶楽部エンドレス 宮城県亘理郡亘理町新井町7-5') };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body className={bodyFont.variable+' '+displayFont.variable}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(salon).replace(/</g, '\\u003c') }}/>{children}</body></html>;
}
