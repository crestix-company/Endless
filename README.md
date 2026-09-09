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

店舗案内の犬の写真は、2026-09-09に追加支給された原本へ差し替え。配信画像は `public/images/dog-20260909.jpg`（1108 × 1477）で、AI加工や切り抜きを行わず、元の縦横比で全体を表示する。「看板犬」「同伴可能」など、確認できていない営業上の情報は記載しない。

## 開発・公開

- `npm run dev -- --port 3001`
- `npm run build`
- `npx tsc --noEmit`

Vinext / React / Cloudflare Workers。Sitesの公開設定は `.openai/hosting.json` に保持する。PARADISE8とは別プロジェクトであり、同リポジトリには変更を加えない。

### GitHub Pages

- リポジトリ： https://github.com/crestix-company/Endless
- 公開先： https://crestix-company.github.io/Endless/
- GitHubのSettings → PagesでSourceを「GitHub Actions」に設定する。
- `main` へのpushで `.github/workflows/deploy-pages.yml` が起動する。
- `npm run build:pages` で静的HTMLを生成・検証し、`dist/client` の公開ファイルだけを配信する。Worker出力は配信しない。
- ビルド時に `/Endless` を画像・CSS・JavaScript・ページリンクへ適用。各ページのcanonicalも公開先に切り替える。
- ローカルとSitesは従来の `npm run dev` / `npm run build` を利用する。
- トップの旧 `#menu` / `#access` リンクは、それぞれ新しいページへ案内する。

### Cloudflare Pages

GitHub Pagesとは配信するURLの階層が異なるため、専用ビルドを使用する。

- プロジェクト： `endless`
- 公開先： https://endless-633.pages.dev/
- Gitリポジトリ： `crestix-company/Endless`、本番ブランチ： `main`
- フレームワークプリセット： `None`
- ビルドコマンド： `npm run build:cloudflare-pages`
- ビルド出力ディレクトリ： `dist/client`
- ルートディレクトリ： 空欄（リポジトリ直下）

上記をCloudflareのSettings → Buildsで設定し、最新のコミットを再デプロイする。ソース直下・`public`・`dist/server` は公開フォルダに指定しない。通常の `npm run build` はSites用Workerビルドのため、Cloudflare Pagesには使用しない。

専用ビルドはルート、`/menu/`、`/salon/` のHTMLを生成する。画像とJS/CSSはルート起点になり、GitHub専用の `/Endless` を含めない。公開前に全3ページ、写真、書体、canonical、開発用ファイルの混入を検査し、欠落があればビルドを失敗させる。
