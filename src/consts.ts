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
  { slug: 'ai-fukugyo', title: 'AI副業の始め方', short: 'AI副業', intro: [] as string[] },
  { slug: 'gyomu-jitan', title: 'ChatGPTで業務を時短する方法', short: '業務時短', intro: [] as string[] },
  {
    slug: 'anzen-gyomu-bunsho',
    title: '生成AIで業務文書を安全に下書きする方法',
    short: '安全な業務文書',
    intro: [
      '生成AIに社外メールや議事録の下書きを頼むと、最初の一文を書く時間は減ります。ただし、原文をそのまま貼ったり、AIが補った内容をそのまま採用したりすると、意図しない情報の扱いや事実と違う文面につながることがあります。',
      'このハブでは、入力する前に何を分けるか、伏せ字にする場合の手順、社外メールの下書きの作り方、送信前に何を確認するかを、作業の順番で整理しています。どの記事も、AIの出力を完成品として扱わず、人が原資料と照合してから送る・共有するという考え方を共通の軸にしています。',
      '個別の情報を入力してよいかどうかの判断や、契約・法令への適合は扱いません。勤務先の規程や利用サービスの設定を確認し、迷う場合は社内の責任者や専門家に確認してください。',
    ] as string[],
  },
  {
    slug: 'ai-gijiroku',
    title: 'AI議事録の作り方',
    short: 'AI議事録',
    intro: [
      '会議メモや文字起こしをAIに渡すと、議事録の下書きはすぐに出てきます。ただし、決定事項と継続検討が混ざったり、聞き取れなかった箇所を文脈から自然に補ってしまったりすると、共有した後に「言った・言わない」の認識違いにつながります。',
      'このハブでは、AIに議事録を作らせるときの分け方（決定事項・継続検討・アクション項目・未確定）と、文字起こし自体を確認するときに優先して見る箇所（人名・数字・日付、否定表現、聞き取り不能な箇所）を、作業の順番で整理しています。どちらの記事も、AIの出力を完成品ではなく下書きとして扱い、原音声や原メモと照合してから共有するという考え方を共通の軸にしています。',
      '発言者の特定や、記録の保存期間・取り扱いに関する判断は扱いません。勤務先のルールに従い、必要に応じて会議参加者や記録責任者に確認してください。',
    ] as string[],
  },
] as const;

// 収益導線（記事から張る文脈CTA先）
export const CTA = {
  freeNoteMail: 'https://note.com/noirai/n/nc7afa0da53ad',
  paidKit: 'https://note.com/noirai/n/nf9416642c2c3',
  noteGijiroku: 'https://note.com/noirai/n/n63fb0d51450a',
  noteSoshinmae: 'https://note.com/noirai/n/n684209d3a726',
  noteFusemoji: 'https://note.com/noirai/n/n02c641eeaa8e',
};
