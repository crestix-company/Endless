import { ArrowDown, ArrowUpRight, ArrowRight, Phone } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';
import { booking, sitePath } from '@/lib/site';

export default function Home() {
  return <SiteShell active="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span/>WATARI, MIYAGI · PRIVATE BARBER</p>
            <h1 id="hero-title"><span>髪を整え、</span><span>気分も、整う。</span></h1>
            <p className="hero-intro">いつものカットに、ほっとするひとときを。<br/>亘理で17年。一席だけの、あなたの理容室。</p>
            <a className="button button-light" href={booking} target="_blank" rel="noreferrer">空席確認・ネット予約 <ArrowUpRight size={20}/></a>
            <a className="hero-phone" href="tel:0223322708"><Phone size={16}/> お電話でもお気軽に <span>0223-32-2708</span></a>
            <a className="scroll-cue" href="#about"><ArrowDown size={16}/> SCROLL TO DISCOVER</a>
          </div>
          <div className="hero-picture"><img src={sitePath('/images/interior-restored.webp')} alt="エンドレスの一席だけの理容椅子と落ち着いた店内" width="1454" height="1082" fetchPriority="high"/><div className="photo-caption"><span>ONE CHAIR. YOUR TIME.</span><span>一席を、ひとりのために。</span></div></div>
        </section>
        <div className="quick-info"><p><span>OPEN</span><strong>8:30–19:00</strong><small>水曜は21:00まで</small></p><p><span>ACCESS</span><strong>亘理駅 徒歩5分</strong><small>駐車場3台</small></p><p><span>SALON</span><strong>完全マンツーマン</strong><small>セット面1席の理容室</small></p></div>
        <section id="about" className="section about"><div className="section-heading"><p className="eyebrow">01 / ABOUT ENDLESS</p><h2>気負わず通える。<br/>きちんと、かっこよく。</h2></div><div className="about-copy"><p>髪を切る時間が、少し楽しみになるように。<br/>カット倶楽部エンドレスは、亘理の町に根ざした理容室です。</p><p>カウンセリングから仕上げまで、ひとりのスタイリストが担当。周りを気にせず、いつもの会話を楽しみながらお過ごしください。</p></div></section>
        <div className="promise-strip" data-reveal>
          <article><span className="promise-no">01</span><h3>あなたのための、一席。</h3><p>ご相談から仕上げまでマンツーマン。ゆったり過ごせるプライベートな空間です。</p></article>
          <article><span className="promise-no">02</span><h3>毎朝、扱いやすい髪へ。</h3><p>仕事の日も、休日も。清潔感があって、ご自宅でもセットしやすいスタイルをご提案。</p></article>
          <article><span className="promise-no">03</span><h3>髪も、顔まわりも。</h3><p>シェービングや眉のお手入れ、白髪ケアまで。理容室ならではの身だしなみを。</p></article>
        </div>

        <section id="style" className="style-section section" aria-labelledby="style-heading" data-reveal>
          <figure className="style-photo"><img src={sitePath('/images/style-restored.webp')} alt="自然な毛流れとすっきりした襟足に整えたメンズショート" width="1157" height="1359" loading="lazy"/><figcaption>HAIR DESIGN / ENDLESS</figcaption></figure>
          <div className="style-copy"><p className="eyebrow">02 / YOUR EVERYDAY STYLE</p><h2 id="style-heading">似合う髪を、<br/>いつもの毎日に。</h2><p>ビジネスシーンに馴染む清潔感。<br/>休日も自然体でいられる、ちょうどいい軽さ。</p><p>ショート、刈り上げ、フェードから、長さを活かしたスタイルまで。髪質や普段のお手入れに合わせて、一緒に考えます。</p><div className="style-tags"><span>メンズカット</span><span>ビジネススタイル</span><span>ショート・フェード</span></div><a className="text-link" href={sitePath('/menu/')}>メニュー・料金を見る <ArrowRight size={18}/></a></div>
        </section>


    <section className="section explore-section" aria-label="メニューと店舗のご案内" data-reveal>
      <a className="explore-link" href={sitePath('/menu/')}><span className="eyebrow">MENU & PRICE</span><h2>メニュー・料金</h2><p>メンズカットからシェービング、カラーまで。<br/>その日の気分に合わせてお選びください。</p><span className="explore-bottom">メニューを見る <ArrowRight size={22}/></span></a>
      <a className="explore-link" href={sitePath('/salon/')}><span className="eyebrow">SALON & ACCESS</span><h2>店舗案内</h2><p>亘理駅から徒歩5分。<br/>お店の雰囲気と、ご来店までのご案内。</p><span className="explore-bottom">お店を知る <ArrowRight size={22}/></span></a>
    </section>
  </SiteShell>;
}
