'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const groups = [
  { id: 'mens', label: 'メンズ', english: 'MEN’S MENU', items: [
    ['ドライカット', '2,280', 'カットのみで、すっきりと。'],
    ['カット＋シャンプー', '2,580', 'シャンプー・ブロー込み'],
    ['カット＋シェービング＋眉カット', '2,800', 'シャンプー・ブロー込み'],
    ['カット＋フェイシャルエステ', '4,000', 'シャンプー・ブロー・シェービング・眉カット込み'],
    ['カット＋白髪ぼかし', '4,200', 'シャンプー・ブロー・シェービング・眉カット込み'],
    ['カット＋カラー', '5,200', '白髪染めも対応。シャンプー・ブロー・シェービング・眉カット込み'],
    ['カット＋カラー＋フェイシャルエステ', '6,200', 'シャンプー・ブロー・シェービング・眉カット込み'],
  ] },
  { id: 'ladies', label: 'レディース', english: 'LADIES’ MENU', items: [
    ['ドライカット', '2,900', 'ロング料金別途'],
    ['カット＋シャンプー', '3,380', 'ブロー込み。ロング料金＋¥300〜'],
    ['カット＋シェービング＋眉カット', '3,600', 'シャンプー・ブロー込み。ロング料金＋¥300〜'],
    ['カット＋白髪ぼかし', '4,500', 'シャンプー・ブロー・シェービング・眉カット込み'],
    ['カット＋フェイシャルエステ', '4,600', 'シャンプー・ブロー・シェービング・眉カット込み。ロング料金＋¥300〜'],
    ['カット＋カラー', '6,200', '白髪染めも対応。シャンプー・ブロー・シェービング・眉カット込み。ロング料金＋¥300〜'],
    ['カット＋カラー＋フェイシャルエステ', '7,200', 'シャンプー・ブロー・シェービング・眉カット込み。ロング料金＋¥300〜'],
  ] },
  { id: 'care', label: 'カラー・ケアほか', english: 'COLOR & CARE', items: [
    ['メンズカラー', '3,700', 'カラー単品'],
    ['レディースカラー', '2,700〜', 'ロング料金別途'],
    ['レディース白髪ぼかし', '2,800', 'ロング料金別途'],
    ['カット＋パーマ', '6,200〜', 'シェービング・シャンプー・ブロー込み'],
    ['フェイシャルエステ', '2,500', 'フェイシャルエステ単品'],
    ['レディースシェービング', '2,700', 'マッサージ付き'],
    ['メンズシャンプー・ブロー', '2,000', 'シャンプー・ブローのみ'],
    ['レディースシャンプー・ブロー', '2,500〜', 'シャンプー・ブローのみ'],
  ] },
];

export function SalonMenu() {
  return <Tabs defaultValue="mens" className="salon-menu">
    <TabsList aria-label="メニューの種類" variant="line" className="menu-tabs">
      {groups.map(group => <TabsTrigger key={group.id} value={group.id} className="menu-tab">{group.label}</TabsTrigger>)}
    </TabsList>
    {groups.map(group => <TabsContent key={group.id} value={group.id} className="menu-panel">
      <p className="menu-category-label">{group.english}<span>表示価格はすべて税込</span></p>
      <dl className="price-list">
        {group.items.map(([name, price, detail]) => <div className="price-row" key={name}>
          <dt><span>{name}</span><small>{detail}</small></dt>
          <dd><span>¥</span>{price}</dd>
        </div>)}
      </dl>
    </TabsContent>)}
  </Tabs>;
}
