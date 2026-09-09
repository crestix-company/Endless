# カット倶楽部エンドレス

宮城県亘理町の理容室向け、店舗・メニュー・予約案内サイト。

## 内容の出典

- ヒアリングシート： https://docs.google.com/spreadsheets/d/1w_J7VN_2-IEheO4tdrKvNhHDuOqsoaQRo2ArAmvhm8I/edit?gid=2131894989
- 指定参考サイト： https://www.cutinntanaka.com/
- 店舗情報： https://beauty.hotpepper.jp/slnH000784909/
- 料金確認（2026-09-09）： https://beauty.hotpepper.jp/slnH000784909/coupon/
- 支給写真： https://drive.google.com/drive/folders/1fOFAnFSuys29E0NJXau0q4hH9WRk20xY

通常メニュー22項目を、メンズ・レディース・カラー／ケアに分けて掲載。初回限定価格とは混在させない。定休日は不定休、水曜日は21時まで。予約は指定のHOT PEPPER Beautyへ、電話リンクは0223-32-2708へ接続する。問い合わせフォーム、SNS、代表者紹介はヒアリング回答に従い設けない。

## 写真

店内・シェービング・単独ヘアスタイルは支給写真を内蔵ImageGenで鮮明化。元写真の構図を保った編集画像であり、原寸の細部を完全に復元するものではない。配信用WebPは解像度を保持して圧縮している。外観は看板の表記を正確に保つため支給された元画像を使用。生成版の外観と6分割ヘアスタイルは細部の相違があるため不採用。

## 開発・公開

- `npm run dev -- --port 3001`
- `npm run build`
- `npx tsc --noEmit`

Vinext / React / Cloudflare Workers。Sitesの公開設定は `.openai/hosting.json` に保持する。PARADISE8とは別プロジェクトであり、同リポジトリには変更を加えない。
