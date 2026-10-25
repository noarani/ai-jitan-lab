---
title: "Zoomの会議を文字起こしする方法（日本語）：標準機能でできること・できないこと"
description: "Zoomの会議を日本語で文字起こしする方法を、Zoom公式サポートの2026年10月時点の記載で整理。会議中の自動字幕と全文の保存、クラウド録画の音声文字起こし、無料のBasicでできる範囲、ローカル録画しかないときの選択肢まで。"
pillar: "ai-gijiroku"
query: "zoom 文字起こし 日本語"
publishedAt: "2026-10-26"
affiliate: true
faq:
  - q: "Zoomの標準機能で、会議の文字起こしは日本語でできますか？"
    a: "会議中の自動字幕は、Zoom公式の設定記事の対応言語に日本語が含まれています。字幕は「Caption language」で選んだ言語で作られるため、日本語の会議なら言語を日本語にします。クラウド録画の音声文字起こしは、公式の2つの記事で言語の記載が食い違っています。"
  - q: "無料のBasicアカウントでも、Zoomで文字起こしできますか？"
    a: "Zoomの料金ページの比較表では、自動字幕はBasicでも「可」です。一方、クラウド録画の音声文字起こしは、設定の公式記事がPro・Business・Education・Enterpriseを条件にしています。Basicで録画できるのはパソコンへのローカル録画で、ローカル録画は音声文字起こしの対象外です。"
  - q: "ローカル録画しかない場合、文字起こしはどうしますか？"
    a: "ローカル録画で残るのはMP4（映像つき）とM4A（音声のみ）のファイルです。Zoom標準では文字にならないので、録画ファイルを取り込める文字起こしツールに入れます。取り込める形式や上限はツールごとに違うので、使うツールの公式表示で先に確認してください。"
---

Zoomの会議を文字にしたいとき、まず知りたいのは、いま使っているZoomのままでできるのかどうかだと思います。標準機能には、会議中に字幕を出して全文を保存する方法と、クラウド録画から文字起こしを作る方法の2つがあります。

手順・プラン・言語・制限は、Zoom公式のサポート記事と料金ページを開いて確認した内容だけで書きました。確認日は2026年10月時点です。画面名はZoom公式の英語版サポート記事の表記のままにしています。日本語表示のアプリでは名称が違って見えることがあります（公式の日本語版ページは、私の環境では取得できませんでした）。

## Zoomの会議を文字起こしする方法には、何がありますか？

**結論：標準機能は「会議中の自動字幕＋全文保存」と「クラウド録画の音声文字起こし」の2つです。録画ファイルしか手元にないなら、外部の文字起こしツールに取り込みます。**

| 方法 | 使えるタイミング | 公式が示す条件 | 残るもの |
|---|---|---|---|
| 自動字幕（Automated captions） | 会議の最中 | 設定は有料アカウントで既定オン。Basicは料金ページの比較表で「可」 | 全文を.TXTで保存できる |
| クラウド録画の音声文字起こし | 会議のあと | Pro・Business・Education・Enterprise。クラウド録画がオン | VTTファイル |
| ローカル録画＋外部ツール | 会議のあと | Basic（無料）でも録画できる | MP4／M4A（文字は外部ツールで作る） |

どれが自分に合うかは、会議の最中に字幕が要るのか、終わってから全文が要るのか、契約プランは何か、の3点で決まります。

## 会議中の自動字幕は、どう出して保存しますか？

**結論：管理者が「Automated captions」をオンにしておき、主催者がツールバーの「Show captions」を押します。全文は「View full transcript」から開いて「Save transcript」で保存します。**

### 先に必要な設定

Zoom公式の記事「Enabling or disabling automated captions」によると、有料のZoomアカウントでは「Automated captions」が既定で有効です。ただし一部のアカウントでは設定項目が出ないことがあり、その場合は担当の営業窓口に連絡するよう書かれています。

アカウント全体の設定は、アカウントオーナーか管理者がウェブポータルで行います。

1. 管理者としてZoomのウェブポータルにサインインする
2. 「Account Management」から「Account Settings」を開く
3. 「Meeting」タブの「In Meeting (Advanced)」で「Automated captions」のトグルを切り替える

自分用の設定は、プロフィールから「Settings」、「Meeting」タブの順に進んだ同じ場所です。グレーアウトしていたら、管理者が上位でロックしています。勤務先のアカウントなら、情報システム部門に頼むことになります。

### 会議中の操作

主催者向けの公式記事「Managing automated captions as the host of a meeting or webinar」では、次の流れです。

1. 会議を開始する
2. ツールバーの「Show captions」アイコンを押す。字幕が自動で作られる
3. アイコン横の上向き矢印を押し、「Captions and translation」の下にある「View full transcript」を押す
4. 開いた「Transcript」パネルの下部にある「Save transcript」を押す。全文が.TXTファイルでダウンロードされる

パネル上部の検索バーで、文字起こしの中を検索することもできます。

### 日本語にするには

字幕は、「Caption language」で選んだ言語の話し言葉として作られます。公式の記事「Viewing captions in a meeting or webinar」は、実際に話している言語と違う言語を選ぶと字幕は不正確になる、と書いています。日本語の会議なのに英語のままになっているときは、まずここを見てください。

日本語が対応言語に入っていることは、設定の記事と、この字幕の閲覧の記事の両方で確認できました。

### 注意点

- 手動字幕（人が字幕を入れる機能）が有効だと、その会議では自動字幕を使えません（公式の記載）
- 精度は、周囲の雑音や話者の声の大きさ・明瞭さで変わります。公式は、保証できる精度が必要な場面では、手動の字幕担当か外部サービスをすすめています
- 主催者は字幕を無効にできます。字幕が出ないときは、主催者に設定を確認してもらいます
- 保存した.TXTに話者名や時刻が入るかは、公式で確認できませんでした

## クラウド録画の音声文字起こしは、どう使いますか？

**結論：Pro以上でクラウド録画をオンにし、「Create audio transcript」を選んでおくと、会議のあとに文字起こしが録画に付きます。日本語で使えるかは、公式の2つの記事で記載が食い違っています。**

### 条件と設定

公式の記事「Enabling or disabling audio transcription for cloud recordings」では、条件は「Pro、Business、Education、Enterpriseのいずれかのアカウントで、クラウド録画が有効なこと」です。設定の場所は次のとおりです。

- アカウント全体（管理者）：「Admin Center」の「Settings」、「Recording & Transcript」にある「Advanced cloud recording settings」で「Create audio transcript」を選ぶ
- 自分だけ：プロフィールから「Settings」、「Recording」タブの同じ項目

会議や、ウェビナーの最中には、この設定を切り替えられません。会議の前に済ませます。

### 文字起こしを見る

公式の記事「Using audio transcription for cloud recordings」の手順です。

1. ウェブポータルで「Recordings & Transcripts」を開く
2. 「Cloud recordings」タブで、会議の名前を押す
3. 録画のサムネイルを押す。再生画面の右側に文字起こしが出る
4. 修正したい語句にカーソルを合わせ、鉛筆アイコンで直す

文字起こしは、初期状態では字幕として表示されません。再生画面の「CC」アイコンで映像の上に出せます。ファイルとしては、録画と別にVTTという形式のテキストが作られます。VTTはテキストエディタで開けますが、議事録に貼るなら整形が要ります。

### 日本語で使えるか

ここは公式の記載が割れています。

- 設定の記事：「Audio transcription only supports English.」と書かれていて、日本語には触れていません
- 利用の記事：対応言語の一覧に日本語があり、既定は英語、録画ごとに「Change Language」で言語を変えて作り直せる、と書かれています

どちらが現状に合っているかは、公式の文面からは決められませんでした。日本語の会議で使うなら、短い録画で一度試して、日本語の文字が出るかを見てから本番に使うのが確実です。

利用の記事には、ほかにも制限があります。文字起こしには大文字小文字や句読点が入らないので、直す必要があります。録画が見られる状態になってから、文字起こしの処理に追加で時間がかかることもあります。

## 無料（Basic）でできること・できないことは？

**結論：自動字幕は料金ページの比較表で「可」です。クラウド録画の音声文字起こしは、公式の設定記事の条件にBasicが入っていません。**

Zoomの料金ページ（Zoom Workplace）の比較表では、Basicは次のように書かれています。

- 自動字幕：可
- ミーティング1回あたりの時間：40分
- 録画：「ローカル」のみ（クラウドの記載なし）
- クラウド録画のトランスクリプト：Basicの欄に記載なし（Pro、Businessは「可」）

つまり、料金ページでは無料のBasicでも自動字幕は「可」とされています。ただし、全文を.TXTで保存できるかは、Basic向けには明記がありませんでした。ただし、先ほどの設定の記事が「有料アカウントで既定オン」と書いている点と、Basicで主催者が自分で設定できるかは、記事のうえでは結びつきませんでした。Basicで字幕のボタンが出ないときは、料金ページの表示と、画面上の設定の両方を確認してください。

会議のあとの文字起こしが標準機能で要るなら、Pro以上にするか、次の方法を使います。

## ローカル録画しかないときは、どうしますか？

**結論：録画ファイルを文字起こしツールに取り込みます。ローカル録画はZoomの音声文字起こしの対象外だからです。**

公式の記事「Starting a computer recording」によると、ローカル録画はBasic（無料）のアカウントでも使えます。主催者が「Record」を押し、メニューが出たら「Record on this Computer」を選びます。会議が終わると、Zoomが変換して、保存先のフォルダを開きます。出てくるファイルは次の2つです。

- video[数字].mp4：映像と音声
- audio[数字].m4a：音声のみ

同じ記事に、ローカル録画は音声文字起こしに対応しない（「Doesn't support audio transcription」）と書かれています。ローカル録画はパソコンのデスクトップアプリで使うもので、iOSやAndroidでは使えません（「Enabling or disabling computer recording」の記載）。

取り込み型のツールの一例が、Nottaです。ファイルを入れて文字にするので、Zoomの契約プランに関係なく使えます。確認した範囲では、Nottaの無料プランは1回3分までの文字起こしで、実際の会議の長さには足りません。プレミアムは1回5時間まで、月1,800分までで、年払いなら月1,185円、月払いなら1,980円です（Notta公式、2026年10月確認）。取り込めるファイル形式と、無料のファイル取り込みにも1回3分の上限がかかるかは、私が確認した公式ページには明記がありませんでした。MP4とM4Aのどちらを入れるかも含めて、Nottaの公式表示を先に見てください。

<aside style="margin:32px 0;padding:16px 18px;border:1px solid var(--line,#d0d7de);border-radius:10px;">
<p style="margin:0 0 8px;font-size:0.95rem;font-weight:700;">PR：Notta</p>
<a href="https://px.a8.net/svt/ejp?a8mat=4BEIPA+3FU85E+5988+5YJRM" target="_blank" rel="sponsored noopener">Notta公式サイトで最新条件を確認する</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4BEIPA+3FU85E+5988+5YJRM" alt="">
</aside>

Zoom標準で足りる人は、標準で十分です。会議中に字幕を見ながら進めたい、終わったら全文の.TXTがあればいい、という使い方なら、自動字幕と「Save transcript」で済みます。有料アカウントでクラウド録画を使っていて、日本語でも文字が出るなら、外部ツールは要りません。外部ツールが要るのは、ローカル録画しかない人、要約までまとめて任せたい人、話者の区別など標準にない整理が欲しい人です。

取り込み型ツールを含めた比較は、[AI議事録ツールの選び方：会議の形・長さ・社内ルールから決める](/ai-jitan-lab/ai-gijiroku/ai-gijiroku-tool-erabikata/)で扱っています。

## 文字起こしのあと、議事録にするには？

文字起こしは、会議の発言をそのまま文字にしたものです。決定事項・担当・期限を拾って議事録の形にするのは、別の作業です。録音から確認・共有までの流れは、[AI議事録の作り方：録音から確認・共有までの4ステップ](/ai-jitan-lab/ai-gijiroku/ai-gijiroku-4step-nagare/)にまとめました。

## 録画・録音の前に確認することは？

ローカル録画を始めると、参加者の画面の左上に録画中の表示が出ます（公式の記載）。ただ、表示が出ることと、全員が同意したことは別です。同意が必要かどうかは、相手や勤務先のルール、地域の法令で変わるので、この記事では判断しません。

録音前に決めておくこと、AIに渡してよい範囲は、[オンライン会議の録音から議事録を作る前に決めること](/ai-jitan-lab/ai-gijiroku/online-kaigi-rokuon-gijiroku-mae-check/)の確認表を見てください。

## まとめ：会議中なら自動字幕、会議後ならクラウド録画、録画ファイルだけなら外部ツール

会議の最中に字幕と全文が要るなら、「Automated captions」をオンにして、「Show captions」から「Save transcript」で.TXTを保存します。会議のあとに作るなら、Pro以上のクラウド録画で「Create audio transcript」です。日本語で出るかは公式の記載が割れているので、短い録画で試してください。ローカル録画しかないなら、MP4かM4Aを文字起こしツールに入れます。

この記事の内容は、2026年10月時点のZoom公式の記載です。プランや画面は変わるので、設定する前に公式の最新の表示を確認してください。

## 出典（すべてZoom公式。2026年10月に確認）

- Enabling or disabling automated captions：https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0058810
- Managing automated captions as the host of a meeting or webinar：https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062813
- Viewing captions in a meeting or webinar：https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0059762
- Enabling or disabling audio transcription for cloud recordings：https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065911
- Using audio transcription for cloud recordings：https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064927
- Starting a computer recording：https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0076922
- Enabling or disabling computer recording：https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063640
- Understanding recording file formats：https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0064394
- Zoom Workplace 料金プラン：https://zoom.us/ja/pricing
- Notta料金プラン（Nottaの数字）：https://www.notta.ai/pricing
- Notta ヘルプセンター「Nottaの料金プランについて」（月払いの価格）：https://support.notta.ai/hc/ja/articles/55337007259035
