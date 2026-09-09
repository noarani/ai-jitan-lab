export const SITE_TITLE = 'AI時短ラボ';
export const SITE_TAGLINE = 'AI副業・AI時短の実践ガイド';
export const SITE_DESCRIPTION =
  '会社員・個人事業主向けに、生成AIで業務文書を安全に下書きし、確認して時短する具体的な手順をまとめた実践ガイドです。';
// 本番URL（GitHub Pages プロジェクトサイト）
export const SITE_URL = 'https://noarani.github.io/ai-jitan-lab';
export const SITE_LOCALE = 'ja_JP';
export const PUBLISHER_NAME = 'AI時短ラボ';

// ハブ（ピラー）定義。keyword-research-2026-09-10.md の P1–P4 に対応。
export const PILLARS = [
  { slug: 'ai-fukugyo', title: 'AI副業の始め方', short: 'AI副業' },
  { slug: 'gyomu-jitan', title: 'ChatGPTで業務を時短する方法', short: '業務時短' },
  { slug: 'anzen-gyomu-bunsho', title: '生成AIで業務文書を安全に下書きする方法', short: '安全な業務文書' },
  { slug: 'ai-gijiroku', title: 'AI議事録の作り方', short: 'AI議事録' },
] as const;

// 収益導線（記事から張る文脈CTA先）
export const CTA = {
  freeNoteMail: 'https://note.com/noirai/n/nc7afa0da53ad',
  paidKit: 'https://note.com/noirai/n/nf9416642c2c3',
  noteGijiroku: 'https://note.com/noirai/n/n63fb0d51450a',
  noteSoshinmae: 'https://note.com/noirai/n/n684209d3a726',
  noteFusemoji: 'https://note.com/noirai/n/n02c641eeaa8e',
};
