import { ArrowDown, ArrowUpRight, ArrowRight, Phone, MapPin, Clock3, CarFront } from 'lucide-react';
import { SalonMenu } from '@/components/menu';
import { SiteMotion } from '@/components/site-motion';

const booking = 'https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000784909';
const menuUrl = 'https://beauty.hotpepper.jp/slnH000784909/coupon/';
const mapUrl = 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('カット倶楽部エンドレス 宮城県亘理郡亘理町新井町7-5');

export default function Home() {
  return (
    <>
      <SiteMotion/>
      <a className="skip-link" href="#main">本文へ移動</a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="カット倶楽部エンドレス トップ"><span>CUT CLUB</span><strong>ENDLESS<span className="brand-dot">.</span></strong><small>カット倶楽部エンドレス</small></a>
        <nav aria-label="メインナビゲーション"><a href="#about">エンドレスについて</a><a href="#menu">メニュー</a><a href="#access">店舗・アクセス</a></nav>
        <a className="header-book" href={booking} target="_blank" rel="noreferrer">ネット予約 <ArrowUpRight size={19}/></a>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span/>WATARI, MIYAGI · PRIVATE BARBER</p>
            <h1 id="hero-title"><span>髪を整え、</span><span>気分も、整う。</span></h1>
            <p className="hero-intro">いつものカットに、ほっとするひとときを。<br/>亘理で17年。一席だけの、あなたの理容室。</p>
            <a className="button button-light" href={booking} target="_blank" rel="noreferrer">空席確認・ネット予約 <ArrowUpRight size={20}/></a>
            <a className="hero-phone" href="tel:0223322708"><Phone size={16}/> お電話でもお気軽に <span>0223-32-2708</span></a>
            <a className="scroll-cue" href="#about"><ArrowDown size={16}/> SCROLL TO DISCOVER</a>
          </div>
          <div className="hero-picture"><img src="/images/interior-restored.webp" alt="エンドレスの一席だけの理容椅子と落ち着いた店内" width="1454" height="1082" fetchPriority="high"/><div className="photo-caption"><span>ONE CHAIR. YOUR TIME.</span><span>一席を、ひとりのために。</span></div></div>
        </section>
        <div className="quick-info"><p><span>OPEN</span><strong>8:30–19:00</strong><small>水曜は21:00まで</small></p><p><span>ACCESS</span><strong>亘理駅 徒歩5分</strong><small>駐車場3台</small></p><p><span>SALON</span><strong>完全マンツーマン</strong><small>セット面1席の理容室</small></p></div>
        <section id="about" className="section about"><div className="section-heading"><p className="eyebrow">01 / ABOUT ENDLESS</p><h2>気負わず通える。<br/>きちんと、かっこよく。</h2></div><div className="about-copy"><p>髪を切る時間が、少し楽しみになるように。<br/>カット倶楽部エンドレスは、亘理の町に根ざした理容室です。</p><p>カウンセリングから仕上げまで、ひとりのスタイリストが担当。周りを気にせず、いつもの会話を楽しみながらお過ごしください。</p></div></section>
        <div className="promise-strip" data-reveal>
          <article><span className="promise-no">01</span><h3>あなたのための、一席。</h3><p>ご相談から仕上げまでマンツーマン。ゆったり過ごせるプライベートな空間です。</p></article>
          <article><span className="promise-no">02</span><h3>毎朝、扱いやすい髪へ。</h3><p>仕事の日も、休日も。清潔感があって、ご自宅でもセットしやすいスタイルをご提案。</p></article>
          <article><span className="promise-no">03</span><h3>髪も、顔まわりも。</h3><p>シェービングや眉のお手入れ、白髪ケアまで。理容室ならではの身だしなみを。</p></article>
        </div>

        <section id="style" className="style-section section" aria-labelledby="style-heading" data-reveal>
          <figure className="style-photo"><img src="/images/style-restored.webp" alt="自然な毛流れとすっきりした襟足に整えたメンズショート" width="1157" height="1359" loading="lazy"/><figcaption>HAIR DESIGN / ENDLESS</figcaption></figure>
          <div className="style-copy"><p className="eyebrow">02 / YOUR EVERYDAY STYLE</p><h2 id="style-heading">似合う髪を、<br/>いつもの毎日に。</h2><p>ビジネスシーンに馴染む清潔感。<br/>休日も自然体でいられる、ちょうどいい軽さ。</p><p>ショート、刈り上げ、フェードから、長さを活かしたスタイルまで。髪質や普段のお手入れに合わせて、一緒に考えます。</p><div className="style-tags"><span>メンズカット</span><span>ビジネススタイル</span><span>ショート・フェード</span></div><a className="text-link" href="#menu">メニュー・料金を見る <ArrowRight size={18}/></a></div>
        </section>

        <section className="grooming" aria-labelledby="grooming-heading">
          <div className="grooming-copy" data-reveal><p className="eyebrow">03 / BARBER’S CARE</p><h2 id="grooming-heading">身だしなみの、<br/>その先の心地よさ。</h2><p>目を閉じて、ひと息。<br/>丁寧なシェービングで、顔まわりまですっきりと。</p><p>眉カット、白髪染め・白髪ぼかし、フェイシャルエステ。髪を整えるついでに、日頃のケアもお任せください。</p><a className="text-link" href="#menu">ケアメニューを見る <ArrowRight size={18}/></a></div>
          <div className="grooming-photo"><img src="/images/shaving-restored.webp" alt="理容師による丁寧なシェービングの施術" width="1454" height="1082" loading="lazy"/><span>THE BARBER’S TOUCH</span></div>
        </section>

        <section id="menu" className="section menu-section" aria-labelledby="menu-heading">
          <div className="menu-heading" data-reveal><div className="section-heading"><p className="eyebrow">04 / MENU & PRICE</p><h2 id="menu-heading">気軽に通える、<br/>いつものメニュー。</h2></div><p>いつものカットも、ゆっくりお手入れしたい日も。<br/>お好みやご予定に合わせてお選びください。</p></div>
          <div className="signature-menu" data-reveal><div className="signature-label"><span>STANDARD COURSE</span><p>髪も、顔まわりも整える。</p></div><div className="signature-main"><h3>メンズカット＋シェービング＋眉カット</h3><p>シャンプー・ブロー込み</p></div><p className="signature-price"><small>¥</small>2,800<span>税込</span></p></div>
          <SalonMenu/>
          <div className="menu-note"><p>お子さま・学生向けメニュー、初回限定コースもご用意しています。<br/>最新の料金・クーポン・適用条件は、予約ページをご確認ください。</p><a className="text-link" href={menuUrl} target="_blank" rel="noreferrer">全メニュー・クーポン <ArrowUpRight size={18}/></a></div>
        </section>

        <section id="access" className="access-section" aria-labelledby="access-heading">
          <div className="section access-inner"><div className="access-visual" data-reveal><p className="eyebrow">05 / SALON & ACCESS</p><h2 id="access-heading">亘理の町で、<br/>お待ちしています。</h2><figure><img src="/images/exterior.webp" alt="木製のエンドレスの看板が目印の店舗入口" width="382" height="510" loading="lazy"/><figcaption>木の看板とサインポールが目印です。</figcaption></figure></div><div className="access-details" data-reveal><p className="salon-name-en">CUT CLUB ENDLESS</p><h3>カット倶楽部エンドレス</h3><dl className="shop-data"><div><dt><MapPin size={18}/>所在地</dt><dd>宮城県亘理郡亘理町字新井町7-5</dd></div><div><dt><Clock3 size={18}/>営業時間</dt><dd>8:30〜19:00<br/><strong>水曜日は21:00まで</strong><small>定休日：不定休</small></dd></div><div><dt><CarFront size={18}/>アクセス</dt><dd>JR亘理駅から徒歩5分<small>店舗駐車場3台</small></dd></div><div><dt><Phone size={18}/>電話番号</dt><dd><a href="tel:0223322708">0223-32-2708</a></dd></div><div><dt>お支払い</dt><dd>現金</dd></div></dl><p className="directions">亘理駅西口から県道122号を直進。最初の信号左側の建物1階です。ピンクの看板の「OHANA」さんと、緑の看板の「小さな天使」さんの間にあります。</p><a className="button button-outline" href={mapUrl} target="_blank" rel="noreferrer">Googleマップで道順を見る <ArrowUpRight size={20}/></a></div></div>
          <div className="map-frame"><iframe title="カット倶楽部エンドレスの地図" src={'https://www.google.com/maps?q='+encodeURIComponent('カット倶楽部エンドレス 宮城県亘理郡亘理町新井町7-5')+'&output=embed'} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><a href={mapUrl} target="_blank" rel="noreferrer">亘理駅から徒歩5分 <ArrowUpRight size={17}/></a></div>
        </section>

        <section id="reserve" className="reservation" aria-labelledby="reservation-heading"><div className="reservation-inner" data-reveal><p className="eyebrow">YOUR NEXT GOOD HAIR DAY.</p><h2 id="reservation-heading">次の「いつもの」を、<br className="mobile-break"/>エンドレスで。</h2><p>ご予約・ご相談、お気軽にどうぞ。</p><div className="reservation-actions"><a className="button button-light" href={booking} target="_blank" rel="noreferrer"><span><small>HOT PEPPER Beauty</small>空席確認・ネット予約</span><ArrowUpRight size={24}/></a><a className="reservation-phone" href="tel:0223322708"><span><Phone size={17}/>お電話でのご予約・お問い合わせ</span><strong>0223-32-2708</strong></a></div><div className="reservation-note"><p>ネット予約が「×」でも、お電話でご案内できる場合がございます。</p><p>ご予約時間に5分以上遅れる場合は、お電話でご連絡ください。</p></div></div></section>
        <div className="mobile-booking"><a href="tel:0223322708"><Phone size={18}/>電話で相談</a><a href={booking} target="_blank" rel="noreferrer">空席確認・ネット予約<ArrowUpRight size={19}/></a></div>
      </main>
      <footer className="site-footer"><a className="footer-brand" href="#">ENDLESS<span>.</span><small>カット倶楽部エンドレス</small></a><nav aria-label="フッターナビゲーション"><a href="#about">エンドレスについて</a><a href="#menu">メニュー</a><a href="#access">店舗・アクセス</a><a href="#reserve">ご予約</a></nav><div className="footer-bottom"><span>宮城県亘理郡亘理町字新井町7-5</span><small>© {new Date().getFullYear()} CUT CLUB ENDLESS</small><a href="#" aria-label="ページの先頭へ">BACK TO TOP ↑</a></div></footer>
    </>
  );
}
