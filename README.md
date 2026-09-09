# AI時短ラボ（ai-jitan-lab）

「AI副業・AI時短の実践ガイド」を扱う静的サイト。Astro 製、GitHub Pages で公開。

- 公開URL: https://noarani.github.io/ai-jitan-lab/
- 設計・キーワード方針の正本は、非公開の運用リポジトリ側 `funnels/ai-seo-hub/` で管理。

## 開発

```bash
npm install
npm run dev      # http://localhost:4321/ai-jitan-lab
npm run build    # dist/ を生成（sitemap-index.xml も出力）
```

## 記事の追加

`src/content/guides/<slug>.md` に frontmatter 付きで追加する。

```yaml
---
title: "検索意図語を前方に置いたタイトル"
description: "120字前後の要約。"
pillar: "anzen-gyomu-bunsho" # ai-fukugyo | gyomu-jitan | anzen-gyomu-bunsho | ai-gijiroku
query: "狙う検索クエリ"
publishedAt: "2026-09-10"
faq:
  - q: "..."
    a: "..."
---
```

`main` へ push すると GitHub Actions が build して Pages へデプロイする。

## 方針

- 実在の顧客・案件・数値・体験談は書かない。例はすべて架空と明記。
- 「必ず稼げる」「絶対に安全」は使わない。各記事に「この記事では判断できないこと」を置く。
- ツールの仕様・料金は一次情報リンクと確認日を添える。
