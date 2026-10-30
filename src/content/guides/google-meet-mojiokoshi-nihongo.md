---
title: "Google Meetの会議を文字起こしする方法（日本語）：字幕・文字起こし・Geminiのメモの違い"
description: "Google Meetの会議を日本語で文字起こしする方法を、Google公式ヘルプの2026年10月時点の記載で整理。字幕と文字起こしの違い、開始方法と保存先、必要なWorkspaceのプラン、Geminiの「メモを取る」の位置づけ、管理者設定で使えないとき、録画しかない・外部会議のときの選択肢まで。"
pillar: "ai-gijiroku"
query: "google meet 文字起こし 日本語"
publishedAt: "2026-10-30"
affiliate: true
faq:
  - q: "Google Meetの標準機能で、会議の文字起こしは日本語でできますか？"
    a: "Google公式ヘルプでは、字幕の言語一覧にも、文字起こし（Transcripts）の対応言語にも日本語が載っています。字幕の一覧では日本語にベータの表記はありません。精度については、確認したページに日本語の数字は出ていません。"
  - q: "無料のGoogleアカウントでも、Meetの文字起こしはできますか？"
    a: "確認した公式ヘルプでは、文字起こしの対象はWorkspaceの一部のエディションとWorkspace Individualで、無料の個人アカウントは挙げられていません。「使える」とも「使えない」とも書かれていないので、自分の画面に「文字起こし」の項目が出るかで確かめてください。字幕は、公式が「All users can use captions in these languages」と書いています。"
  - q: "Geminiの「メモを取る」と文字起こしは、同じものですか？"
    a: "公式ヘルプでは別々の項目です。文字起こしは発言を文字にしたファイル、「メモを取る」はGeminiがまとめたメモの文書です。「メモを取る」は、Workspaceの対象エディションかGoogle AIのプランが条件で、どのプランが対象かは、確認したページには書かれていませんでした。"
---

Google Meetの会議を文字にしたいとき、最初に分けておくのは、会議の最中に字幕を見たいだけなのか、あとで全文を残したいのか、要約までほしいのか、の3つです。Meetではそれぞれ別の機能になっていて、使える条件も違います。

手順・プラン・言語・管理者設定は、Google公式のヘルプを開いて確認した内容だけで書きました。確認日は2026年10月です。画面名は、公式の日本語版ヘルプにある表記を使っています。日本語版の画面で実際にどう見えるかまでは確認できていません。

## Google Meetの会議を文字起こしする方法には、何がありますか？

**結論：標準機能は「字幕」「文字起こし（Transcripts）」「Geminiの『メモを取る』」の3つです。字幕は保存の記載がなく、全文を残すのは文字起こし、要約つきの文書はメモです。録画しか手元にないときは、外部の文字起こしツールに入れます。**

| 方法 | 使えるタイミング | 公式が示す条件 | 残るもの |
|---|---|---|---|
| 字幕 | 会議の最中 | 公式は「All users can use captions in these languages」と記載 | 保存の記載なし。録画時に「字幕を録画」で映像に埋め込める |
| 文字起こし（Transcripts） | 会議の最中に開始し、終わったあとに見る | Business Standard以上など、対象のWorkspaceエディション | 主催者のGoogleドライブに保存 |
| Geminiの「メモを取る」 | 会議の最中に開始し、終わったあとに見る | 対象のWorkspaceエディションかGoogle AIのプラン | 主催者のドライブに「Quick notes」「Full notes」の文書 |
| 録画＋外部ツール | 会議のあと | 録画できるプランと管理者の許可 | 録画ファイル（文字は外部ツールで作る） |

## 字幕は、どう出しますか？

**結論：パソコンで会議に入り、画面下の「字幕と翻訳」にカーソルを合わせて、字幕をオンにします。**

公式ヘルプ「Use live captions in Google Meet」の手順です。

1. meet.google.comで会議に参加する
2. 画面下部で「Captions and translation」にカーソルを合わせ、「Turn on captions」を選ぶ
3. 言語を変えるときは、字幕のトレイの左にあるドロップダウンから選ぶ

キーボードの「c」でも切り替えられます。

日本語は、公式の「All users can use captions in these languages」の一覧に「Japanese」として載っています。同じ一覧の多くの言語に「(beta)」が付いていますが、日本語には付いていません。

### 字幕の注意点

- 字幕は、オンにした人にだけ表示されます（公式の記載）
- 保存については、確認したページに記載がありません。公式が書いているのは、字幕をオンにしていれば会話の前の部分を見返せること、字幕を見られるのは自分が会議にいてオンにしていた部分だけ、という点です
- 録画するときに「字幕を録画」を選ぶと、字幕が録画に埋め込まれます（公式の録画ヘルプの記載。字幕のヘルプには書かれていません）
- 翻訳つきの字幕は別機能で、Business Standard、Business Plus、Enterprise Standard、Enterprise Plus、Google AI Pro for Educationの会議が対象と公式に書かれています（Enterprise Starterは「2025年6月30日まで」と期限付きの記載）。日本語の字幕を出すだけなら、翻訳は要りません

## 文字起こし（Transcripts）は、どう始めて、どこに保存されますか？

**結論：パソコンかAndroidで「会議ツール」から「文字起こし」を選んで開始します。終わると、主催者のGoogleドライブの「Google Meet」フォルダに保存されます。**

### 開始する手順

公式ヘルプ「Use Transcripts with Google Meet」のパソコン版の手順です。

1. 会議に参加するか、会議を始める
2. 右下の「Meeting tools」を押し、「Transcribe」を選ぶ
3. 「Start transcription」を押し、ポップアップで「Start」を押す

開始すると、会議の全員の画面に文字起こしのアイコンが出ます。止めるときは、「Meeting tools」から「Transcribing」、「Stop transcription」の順に進みます。全員が退出すると自動で止まります。公式は「一時停止はできないが、止めて同じ会議で新しく始め直せる」と書いています。

使えるのは、パソコン、ノートPC、Androidです。公式は「You can only use the Transcripts feature on a computer, laptop, or Android device」と書いていて、iPhoneとiPadは対象に挙がっていません。

### 保存先

公式ヘルプの記載です。

- 保存先：主催者のGoogleドライブの「Google Meet」フォルダ。会議ごとにサブフォルダができる
- 開始するたびに、別の文字起こしファイルができる
- 会議のあと、主催者と共同主催者、文字起こしをオンにした人に、リンクつきのメールが自動で届く
- Googleカレンダーの予定にも添付される。開けるのは、主催者の組織の招待者
- 主催者の組織の招待者が200人を超える会議では、主催者・共同主催者・オンにした人だけが見られる
- 主催者のドライブと、Workspace全体のドライブの両方に空き容量がないと、文字起こしは保存されない

食い違いが1つあります。ユーザー向けのヘルプは、ファイル形式がGoogleドキュメントかどうかを書いていません。管理者向けのヘルプは、文字起こしを「Google Docs file」として保存し、フォルダを「Meet Recordings」と書いています。ユーザー向けヘルプには、2026年7月から「Meet Recordings」が「Legacy Meet Recordings」に名前を変えて「Google Meet」フォルダの中に移る、と書かれています。管理者向けのほうが古い記載の可能性がありますが、どちらが現状かは公式の文面からは決められませんでした。実際の保存先とファイル形式は、一度短い会議で試して確かめてください。

### 日本語にするには

対応言語は、公式の「Meeting transcripts are available in:」に続く一覧に、英語、フランス語、ドイツ語、イタリア語、日本語、韓国語、ポルトガル語、スペイン語として載っています。開始画面で話す言語を選ぶ操作の記載は、確認したパソコン版の手順にありませんでした。日本語で話す会議なら、短く試して日本語で出るかを見てください。

公式が書いている制限は、文字になるのは話した言葉だけ、という点です。チャットの内容を残したいときは、会議を録画するよう案内されています。

## 必要なプランは何ですか？個人の無料アカウントで使えますか？

**結論：文字起こしの対象は、Business Standard以上などのWorkspaceエディションとWorkspace Individualです。無料の個人アカウントについて、確認した公式ヘルプに記載はありません。**

**公式に書かれていたこと**

- 文字起こしの対象：Business Standard、Business Plus、Enterprise Starter、Enterprise Standard、Enterprise Plus、Teaching and Learning Upgrade、Education Plus、Workspace Individual（ユーザー向けヘルプ）
- 既定の状態：「Meeting transcripts are on by default for all Workspace editions」。ただしWorkspace for Educationの生徒ライセンスでは既定でオフ
- 管理者向けヘルプの「This feature is on by default, but it's not automatic for each meeting」。オンになっていても、会議の中で誰かが開始しないと始まらない
- 録画の対象（公式の一覧の一部。全体は録画ヘルプで確認を）：Business Standard、Business Plus、Enterprise Standard、Enterprise Plus、Essentials、Education Plus（職員ライセンス）、Google One（2TB以上）、Workspace Individualなど。録画には、Workspace管理者が録画をオンにしている必要がある

**公式に明記なし（確認したページでは）**

- 無料の個人Googleアカウントで文字起こしが使えるか。対象の一覧に入っていないだけで、「使えない」と書いたページは見つかっていません
- 日本語の文字起こしの精度

会社や学校のアカウントなら、契約しているプランで決まるので、情報システム部門に聞くのが近道です。

## Geminiの「メモを取る」は、どう位置づけられますか？

**結論：文字起こしとは別の機能です。会議の内容をGeminiがまとめた文書を作ります。対象は、Workspaceの対象エディションかGoogle AIのプランです。**

公式ヘルプ「Take notes for me」の記載です。

- 条件：「This feature requires an eligible Google Workspace edition or Google AI plan」。どのエディションとプランが対象かは、確認したページに一覧がありません
- 開始：Googleカレンダーの予定で「ビデオ通話オプション」の「会議の記録」から「Take notes with Gemini」にチェックを入れるか、会議中に画面右上の「Take notes for me」を押す
- 言語：英語、フランス語、ドイツ語、イタリア語、日本語、韓国語、ポルトガル語、スペイン語。一度に1言語だけで、複数の言語が混ざる会議は対象外。30秒以上別の言語が話されると、言語を変えるかを聞かれる
- 保存：会議が終わってしばらくすると、主催者のドライブの「Google Meet」フォルダにメモの文書ができる。「Quick notes」と、要約・決定事項・アクション項目を含む「Full notes」の2つのタブがある
- 推奨：15分から最大8時間の会議
- 参加者への通知：全員に通知が出て、画面に鉛筆のアイコンが出る
- 条件の別の記載：個人の無料アカウントは、「職場や学校で設定したアカウント」か「対象のGoogle AIプラン」のどちらでもなければ、対象にならない書き方になっています

文字起こしとメモの関係（メモが文字起こしを元にするのか、文字起こしのファイルも別に残るのか）は、確認したページに書かれていませんでした。全文が要るなら、文字起こしを別に開始するほうが確実です。

## 管理者の設定で使えないときは、どうしますか？

**結論：ボタンが出ないときは、本人の操作では直りません。管理者の設定、ホスト管理、主催者のプランが関わります。**

公式ヘルプに書かれている条件です。

- 管理者は、管理コンソールの「アプリ」、「Google Workspace」、「Google Meet」、「Meet video settings」で「Meeting transcripts」を設定します。Business Standardでは、この機能を管理コンソールからオフにできません
- 「Host management」がオフなら、主催者のドメインの誰でも文字起こしを開始できます。オンなら、開始できるのは主催者と共同主催者だけです
- 会議を作るとき、主催者は「ビデオ通話オプション」の「会議の記録」から「会議を文字起こし」を選んで自動開始にできます。ただし、主催者か共同主催者がウェブで会議に入るまでは始まりません
- 管理者は、「メモを取る」、録画、文字起こしの前に、参加者の明示的な同意を求める設定にできます。既定はオフです
- 「メモを取る」のボタンが見当たらないときは、プランが対象か、管理者が機能を有効にしているかを、職場の管理者に確認してください
- 録画は、管理者がアカウントで録画をオンにしていないと使えません

使えないと分かったら、情報システム部門に「文字起こしの設定」「ホスト管理」「プラン」のどれが原因かを聞いてください。

## 録画しかない・外部の会議のときは、どうしますか？

**結論：自分の組織の会議なら、主催者に文字起こしを付けてもらいます。外部の会議や、録画だけが手元にあるときは、録画か録音の音声を外部ツールに入れます。**

公式の記載から、状況別に整理します。

| 状況 | 公式の記載 | 選択肢 |
|---|---|---|
| 自分が主催者ではなく、同じ組織の会議 | 文字起こしの開始は、ホスト管理がオフなら主催者のドメインの誰でも可 | 開始できるか画面で確認する。できなければ主催者に頼む |
| 外部の組織の主催者の会議 | 文字起こしを外部の参加者が開始できるかは、確認したページに記載なし。カレンダーの添付を開けるのは主催者の組織の招待者 | 主催者に共有を頼む。自分の録音が許される場なら、音声を外部ツールに入れる |
| 録画だけが手元にある | 録画は文字起こしを作るとは書かれていない。「字幕を録画」で埋め込んだ字幕だけが映像に入る | 録画ファイルを外部ツールに入れる |
| 外部の参加者が録画したい | 主催者の組織外の人は、共同主催者に昇格した場合だけ録画できる | 主催者に昇格か共有を頼む |

録画の保存先も公式に書かれています。主催者のGoogleドライブの「Google Meet」フォルダで、会議ごとにサブフォルダができます。

音声ファイルや録画ファイルを取り込んで文字にする外部ツールの一例が、Nottaです。確認した範囲では、無料プランは月120分で、1回の文字起こしは3分まで、ファイルの取り込みは月50個までです。プレミアムは1回5時間まで、月1,800分まで、ファイルの取り込みは月100個までで、料金は年払いなら月1,185円（総額14,220円を12か月分一括払い）、月払いなら月1,980円です（Notta公式の料金ページとヘルプ、価格は税込、2026年10月確認）。取り込めるファイル形式は、使う前に公式の表示を見てください。

<aside style="margin:32px 0;padding:16px 18px;border:1px solid var(--line,#d0d7de);border-radius:10px;">
<p style="margin:0 0 8px;font-size:0.95rem;font-weight:700;">PR：Notta</p>
<a href="https://px.a8.net/svt/ejp?a8mat=4BEIPA+3FU85E+5988+5YJRM" target="_blank" rel="sponsored noopener">Notta公式サイトで最新条件を確認する</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4BEIPA+3FU85E+5988+5YJRM" alt="">
</aside>

Meet標準で足りる人は、標準で十分です。自分の組織の会議で、文字起こしを開始してドライブに残せば足りるなら、外部ツールは要りません。外部ツールが要るのは、対象のプランに入っていない、外部の会議で自分では開始できない、録画しか手元にない、のいずれかのときです。

取り込み型ツールを含めた比較は、[AI議事録ツールの選び方：会議の形・長さ・社内ルールから決める](/ai-jitan-lab/ai-gijiroku/ai-gijiroku-tool-erabikata/)で扱っています。Nottaの使い方は、[Nottaで議事録を作る手順と、無料プランでできること・有料にする判断](/ai-jitan-lab/ai-gijiroku/notta-gijiroku-tsukaikata/)にあります。

## 文字起こしのあと、議事録にするには？

文字起こしは、会議の発言をそのまま文字にしたものです。決定事項・担当・期限を拾って議事録の形にするのは、別の作業です。録音から確認・共有までの流れは、[AI議事録の作り方：録音から確認・共有までの4ステップ](/ai-jitan-lab/ai-gijiroku/ai-gijiroku-4step-nagare/)にまとめました。文字起こしの人名・数字・否定の見落としは、[AI議事録の文字起こしを確認する方法：人名・数字・否定を見落とさない](/ai-jitan-lab/ai-gijiroku/ai-gijiroku-mojiokoshi-kakunin/)を見てください。

同じ作業をZoomでやる場合は、[Zoomの会議を文字起こしする方法（日本語）：標準機能でできること・できないこと](/ai-jitan-lab/ai-gijiroku/zoom-mojiokoshi-yarikata/)に、Teamsでやる場合は、[Teamsの会議を文字起こしする方法（日本語）：標準機能でできること・できないこと](/ai-jitan-lab/ai-gijiroku/teams-mojiokoshi-nihongo/)にまとめています。

## 録音・外部ツールの前に確認することは？

文字起こしや「メモを取る」を始めると、Meetは参加者に通知を出します（公式の記載）。ただ、通知が出ることと、全員が同意したことは別です。同意が必要かどうかは、相手や勤務先のルール、地域の法令で変わるので、この記事では判断しません。

個人情報や社外秘の内容を含む会議の音声・文字起こしを、AIや外部のツールに入れる前に、会社の規程を確認してください。会社が許可しているツールかどうかも、ここで見ます。

録音前に決めておくこと、AIに渡してよい範囲は、[オンライン会議の録音から議事録を作る前に決めること](/ai-jitan-lab/ai-gijiroku/online-kaigi-rokuon-gijiroku-mae-check/)の確認表を見てください。

## まとめ：字幕だけなら字幕、全文なら文字起こし、要約ならメモ、手元に文字がないなら外部ツール

会議の最中に字幕だけ見たいなら、「字幕と翻訳」から字幕をオンにします。保存の記載はありません。全文を残すなら、パソコンかAndroidで「会議ツール」から文字起こしを開始し、終わったあと主催者のドライブを見ます。要約まで欲しければ、対象のプランで「メモを取る」です。ボタンが出ないときは、プランか管理者の設定が原因なので、情報システム部門に聞きます。外部の会議や録画だけのときは、外部ツールに音声を入れます。

この記事の内容は、2026年10月時点のGoogle公式の記載です。プランや画面は変わるので、設定する前に公式の最新の表示を確認してください。

## 出典（すべてGoogle公式とNotta公式。2026年10月に確認）

- Use Transcripts with Google Meet：https://support.google.com/meet/answer/12849897
- Use live captions in Google Meet：https://support.google.com/meet/answer/15077804
- Use translated captions in Google Meet：https://support.google.com/meet/answer/9300310
- Use "Take notes for me" in Google Meet：https://support.google.com/meet/answer/14754931
- Record a video meeting：https://support.google.com/meet/answer/9308681
- Turn meeting transcription on or off（管理者向け）：https://knowledge.workspace.google.com/admin/meet/turn-meeting-transcription-on-or-off
- Notta料金プラン（Nottaの数字）：https://www.notta.ai/pricing
- Nottaヘルプ「Nottaの料金プランについて」（月払いの価格）：https://support.notta.ai/hc/ja/articles/55337007259035
