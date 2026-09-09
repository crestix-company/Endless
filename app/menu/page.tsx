import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SalonMenu } from '@/components/menu';
import { SiteShell, PageIntro } from '@/components/site-shell';
import { menuUrl, sitePath, pageUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'メニュー・料金｜カット倶楽部エンドレス',
  description: 'カット・シェービング・カラー・白髪ケアの料金をご案内。メンズ、レディース、ケアメニューからお選びいただけます。',
  alternates: { canonical: pageUrl('/menu/') },
  openGraph: { title: 'メニュー・料金｜カット倶楽部エンドレス', description: 'いつものカットも、ゆっくりお手入れしたい日も。メニューと料金のご案内。', url: pageUrl('/menu/'), type: 'website', locale: 'ja_JP' },
};
export default function MenuPage() {
  return <SiteShell active="menu">
    <PageIntro eyebrow="MENU & PRICE" title="メニュー・料金" description="いつものカットも、ゆっくりお手入れしたい日も。"/>
        <section id="menu" className="section menu-section" aria-labelledby="menu-heading">
          <div className="menu-heading" data-reveal><div className="section-heading"><p className="eyebrow">MENU & PRICE</p><h2 id="menu-heading">気軽に通える、<br/>いつものメニュー。</h2></div><p>いつものカットも、ゆっくりお手入れしたい日も。<br/>お好みやご予定に合わせてお選びください。</p></div>
          <div className="signature-menu" data-reveal><div className="signature-label"><span>STANDARD COURSE</span><p>髪も、顔まわりも整える。</p></div><div className="signature-main"><h3>メンズカット＋シェービング＋眉カット</h3><p>シャンプー・ブロー込み</p></div><p className="signature-price"><small>¥</small>2,800<span>税込</span></p></div>
          <SalonMenu/>
          <div className="menu-note"><p>お子さま・学生向けメニュー、初回限定コースもご用意しています。<br/>最新の料金・クーポン・適用条件は、予約ページをご確認ください。</p><a className="text-link" href={menuUrl} target="_blank" rel="noreferrer">全メニュー・クーポン <ArrowUpRight size={18}/></a></div>
        </section>


        <section className="grooming" aria-labelledby="grooming-heading">
          <div className="grooming-copy" data-reveal><p className="eyebrow">BARBER’S CARE</p><h2 id="grooming-heading">身だしなみの、<br/>その先の心地よさ。</h2><p>目を閉じて、ひと息。<br/>丁寧なシェービングで、顔まわりまですっきりと。</p><p>眉カット、白髪染め・白髪ぼかし、フェイシャルエステ。髪を整えるついでに、日頃のケアもお任せください。</p><a className="text-link" href="#menu">料金一覧に戻る <ArrowRight size={18}/></a></div>
          <div className="grooming-photo"><img src={sitePath('/images/shaving-restored.webp')} alt="理容師による丁寧なシェービングの施術" width="1454" height="1082" loading="lazy"/><span>THE BARBER’S TOUCH</span></div>
        </section>


  </SiteShell>;
}
