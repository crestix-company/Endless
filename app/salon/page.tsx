import type { Metadata } from 'next';
import { ArrowUpRight, Phone, MapPin, Clock3, CarFront } from 'lucide-react';
import { SiteShell, PageIntro } from '@/components/site-shell';
import { mapUrl, sitePath, pageUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: '店舗案内・アクセス｜カット倶楽部エンドレス',
  description: '亘理駅から徒歩5分、駐車場3台。一席だけのプライベート理容室、カット倶楽部エンドレスの営業時間・アクセスをご案内します。',
  alternates: { canonical: pageUrl('/salon/') },
  openGraph: { title: '店舗案内｜カット倶楽部エンドレス', description: '亘理の町で、お待ちしています。営業時間とアクセスのご案内。', url: pageUrl('/salon/'), type: 'website', locale: 'ja_JP' },
};
export default function SalonPage() {
  return <SiteShell active="salon">
    <PageIntro eyebrow="SALON & ACCESS" title="店舗案内" description="亘理の町に根ざして17年。一席だけの、気負わず通える理容室。"/>
        <section id="access" className="access-section" aria-labelledby="access-heading">
          <div className="section access-inner"><div className="access-visual" data-reveal><p className="eyebrow">VISIT US</p><h2 id="access-heading">亘理の町で、<br/>お待ちしています。</h2><figure><img src={sitePath('/images/exterior.webp')} alt="木製のエンドレスの看板が目印の店舗入口" width="382" height="510" loading="lazy"/><figcaption>木の看板とサインポールが目印です。</figcaption></figure></div><div className="access-details" data-reveal><p className="salon-name-en">CUT CLUB ENDLESS</p><h3>カット倶楽部エンドレス</h3><dl className="shop-data"><div><dt><MapPin size={18}/>所在地</dt><dd>宮城県亘理郡亘理町字新井町7-5</dd></div><div><dt><Clock3 size={18}/>営業時間</dt><dd>8:30〜19:00<br/><strong>水曜日は21:00まで</strong><small>定休日：不定休</small></dd></div><div><dt><CarFront size={18}/>アクセス</dt><dd>JR亘理駅から徒歩5分<small>店舗駐車場3台</small></dd></div><div><dt><Phone size={18}/>電話番号</dt><dd><a href="tel:0223322708">0223-32-2708</a></dd></div><div><dt>お支払い</dt><dd>現金</dd></div></dl><p className="directions">亘理駅西口から県道122号を直進。最初の信号左側の建物1階です。ピンクの看板の「OHANA」さんと、緑の看板の「小さな天使」さんの間にあります。</p><a className="button button-outline" href={mapUrl} target="_blank" rel="noreferrer">Googleマップで道順を見る <ArrowUpRight size={20}/></a></div></div>
          <div className="map-frame"><iframe title="カット倶楽部エンドレスの地図" src={'https://www.google.com/maps?q='+encodeURIComponent('カット倶楽部エンドレス 宮城県亘理郡亘理町新井町7-5')+'&output=embed'} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><a href={mapUrl} target="_blank" rel="noreferrer">亘理駅から徒歩5分 <ArrowUpRight size={17}/></a></div>
        </section>


    <section className="section salon-moment" aria-labelledby="moment-heading" data-reveal>
      <div className="moment-copy"><p className="eyebrow">A LITTLE MOMENT AT ENDLESS</p><h2 id="moment-heading">ほっとする、<br/>いつもの場所。</h2><p>髪を切る時間が、少し楽しみになるように。</p><p>いつもの会話を楽しんだり、<br/>何も考えず、ひと息ついたり。<br/>肩の力を抜いて、お過ごしください。</p></div>
      <figure className="moment-photo"><img src={sitePath('/images/dog-restored.webp')} alt="店内の木の床に立つ、赤と黒の服を着た小さな白い犬" width="971" height="1619" loading="lazy"/><figcaption>お店の、もうひとつの表情。</figcaption></figure>
    </section>
  </SiteShell>;
}
