import { ArrowUpRight, Phone } from 'lucide-react';
import { SiteMotion } from '@/components/site-motion';
import { booking, sitePath } from '@/lib/site';

type Page = 'home' | 'menu' | 'salon';
const pages: { id: Page; href: string; label: string }[] = [
  { id: 'home', href: '/', label: 'トップ' },
  { id: 'menu', href: '/menu/', label: 'メニュー・料金' },
  { id: 'salon', href: '/salon/', label: '店舗案内' },
];

export function SiteShell({ active, children }: { active: Page; children: React.ReactNode }) {
  return <>
    <SiteMotion/>
    <a className="skip-link" href="#main">本文へ移動</a>
    <header className="site-header" id="top">
      <a className="wordmark" href={sitePath('/')} aria-label="カット倶楽部エンドレス トップ"><span>CUT CLUB</span><strong>ENDLESS<span className="brand-dot">.</span></strong><small>カット倶楽部エンドレス</small></a>
      <nav aria-label="メインナビゲーション">{pages.map(page => <a key={page.id} href={sitePath(page.href)} aria-current={active === page.id ? 'page' : undefined}>{page.label}</a>)}</nav>
      <a className="header-book" href={booking} target="_blank" rel="noreferrer">ネット予約 <ArrowUpRight size={19}/></a>
    </header>
    <main id="main">{children}
        <section id="reserve" className="reservation" aria-labelledby="reservation-heading"><div className="reservation-inner" data-reveal><p className="eyebrow">YOUR NEXT GOOD HAIR DAY.</p><h2 id="reservation-heading">次の「いつもの」を、<br className="mobile-break"/>エンドレスで。</h2><p>ご予約・ご相談、お気軽にどうぞ。</p><div className="reservation-actions"><a className="button button-light" href={booking} target="_blank" rel="noreferrer"><span><small>HOT PEPPER Beauty</small>空席確認・ネット予約</span><ArrowUpRight size={24}/></a><a className="reservation-phone" href="tel:0223322708"><span><Phone size={17}/>お電話でのご予約・お問い合わせ</span><strong>0223-32-2708</strong></a></div><div className="reservation-note"><p>ネット予約が「×」でも、お電話でご案内できる場合がございます。</p><p>ご予約時間に5分以上遅れる場合は、お電話でご連絡ください。</p></div></div></section>

    </main>
    <footer className="site-footer"><a className="footer-brand" href={sitePath('/')}>ENDLESS<span>.</span><small>カット倶楽部エンドレス</small></a><nav aria-label="フッターナビゲーション">{pages.map(page => <a key={page.id} href={sitePath(page.href)} aria-current={active === page.id ? 'page' : undefined}>{page.label}</a>)}<a href="#reserve">ご予約</a></nav><div className="footer-bottom"><span>宮城県亘理郡亘理町字新井町7-5</span><small>© {new Date().getFullYear()} CUT CLUB ENDLESS</small><a href="#top" aria-label="ページの先頭へ">BACK TO TOP ↑</a></div></footer>
    <div className="mobile-booking"><a href="tel:0223322708"><Phone size={18}/>電話で相談</a><a href={booking} target="_blank" rel="noreferrer">空席確認・ネット予約<ArrowUpRight size={19}/></a></div>
  </>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro section">
    <nav className="breadcrumbs" aria-label="パンくずリスト"><a href={sitePath('/')}>トップ</a><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
    <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-description">{description}</p>
  </section>;
}
