# カット倶楽部エンドレス

宮城県亘理町の理容室向けサイト。「トップ」「メニュー・料金」「店舗案内」の3ページ構成。

## 内容の出典

- ヒアリングシート： https://docs.google.com/spreadsheets/d/1w_J7VN_2-IEheO4tdrKvNhHDuOqsoaQRo2ArAmvhm8I/edit?gid=2131894989
- 指定参考サイト： https://www.cutinntanaka.com/
- 店舗情報： https://beauty.hotpepper.jp/slnH000784909/
- 料金確認（2026-09-09）： https://beauty.hotpepper.jp/slnH000784909/coupon/
- 支給写真： https://drive.google.com/drive/folders/1fOFAnFSuys29E0NJXau0q4hH9WRk20xY

通常メニュー22項目を、メンズ・レディース・カラー／ケアに分けて掲載。初回限定価格とは混在させない。定休日は不定休、水曜日は21時まで。予約は指定のHOT PEPPER Beautyへ、電話リンクは0223-32-2708へ接続する。問い合わせフォーム、SNS、代表者紹介はヒアリング回答に従い設けない。

## 写真

店内・シェービング・単独ヘアスタイルは支給写真を内蔵ImageGenで鮮明化。元写真の構図を保った編集画像であり、原寸の細部を完全に復元するものではない。配信用WebPは解像度を保持して圧縮している。外観は看板の表記を正確に保つため支給された元画像を使用。生成版の外観と6分割ヘアスタイルは細部の相違があるため不採用。

店舗案内には支給された犬の写真も掲載。内蔵ImageGenで元写真の犬・服・姿勢・構図を保ち、ぼけと圧縮ノイズを補正した。細部はAIによる補完を含む。配信画像は `public/images/dog-restored.webp`（971 × 1619）。「看板犬」「同伴可能」など、確認できていない営業上の情報は記載しない。

## 開発・公開

- `npm run dev -- --port 3001`
- `npm run build`
- `npx tsc --noEmit`

Vinext / React / Cloudflare Workers。Sitesの公開設定は `.openai/hosting.json` に保持する。PARADISE8とは別プロジェクトであり、同リポジトリには変更を加えない。

### GitHub Pages

- リポジトリ： https://github.com/Nishitasho/Endless
- 公開先： https://nishitasho.github.io/Endless/
- GitHubのSettings → PagesでSourceを「GitHub Actions」に設定する。
- `main` へのpushで `.github/workflows/deploy-pages.yml` が起動する。
- `npm run build:pages` で静的HTMLを生成・検証し、`dist/client` の公開ファイルだけを配信する。Worker出力は配信しない。
- ビルド時に `/Endless` を画像・CSS・JavaScript・ページリンクへ適用。各ページのcanonicalも公開先に切り替える。
- ローカルとSitesは従来の `npm run dev` / `npm run build` を利用する。
- トップの旧 `#menu` / `#access` リンクは、それぞれ新しいページへ案内する。
