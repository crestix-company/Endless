export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cut-club-endless.s-nishita.chatgpt.site/';
export const sitePath = (path: string) => `${basePath}${path}`;
export const pageUrl = (path: string) => new URL(path.replace(/^\//, ''), siteUrl).href;
export const booking = 'https://beauty.hotpepper.jp/CSP/bt/reserve/?storeId=H000784909';
export const menuUrl = 'https://beauty.hotpepper.jp/slnH000784909/coupon/';
export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('カット倶楽部エンドレス 宮城県亘理郡亘理町新井町7-5');
