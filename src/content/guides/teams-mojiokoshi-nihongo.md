---
title: "Teamsの会議を文字起こしする方法（日本語）：標準機能でできること・できないこと"
description: "Teamsの会議を日本語で文字起こしする方法を、Microsoft公式サポートとLearnの2026年10月時点の記載で整理。ライブキャプションとトランスクリプトの違い、開始方法と保存先、必要なライセンス、管理者ポリシーで使えないとき、録画しかない・外部会議のときの選択肢まで。"
pillar: "ai-gijiroku"
query: "teams 文字起こし 日本語"
publishedAt: "2026-10-29"
affiliate: true
faq:
  - q: "Teamsの標準機能で、会議の文字起こしは日本語でできますか？"
    a: "Microsoft公式の記事では、ライブキャプションもトランスクリプトも、話し言葉の言語の一覧に「Japanese (Japan)」が載っています。開始時に確認される「会議で話す言語」を日本語にします。精度については、公式は話し言葉の設定を実際の言語に合わせるよう書いているだけで、日本語の精度の数字は出ていません。"
  - q: "無料版のTeamsでも、文字起こしはできますか？"
    a: "確認した公式の記事には、無料版Teamsでライブキャプションやトランスクリプトが使えるかの記載がありません。録画については、公式がOffice 365 EnterpriseやMicrosoft 365 Businessなどのライセンスを条件に挙げています。無料版で使えるかは、自分の画面にボタンが出るかで確かめるのが確実です。"
  - q: "会議の主催者が別の会社のとき、自分のTeamsで文字起こしできますか？"
    a: "公式の表では、別テナント（別の組織）の参加者は、文字起こしを開始・停止できず、会議後にトランスクリプトを見ることも保存することもできません。会議中のリアルタイム表示を見ることだけは「可」です。録画も、別の組織の人とゲストは開始できません。手元に残したいときは、主催者に依頼するか、自分で録音した音声を外部ツールで文字にします。"
---

Teamsの会議を文字にしたいとき、最初に分かれ目になるのは、会議の最中に字幕を見たいだけなのか、あとで全文を残したいのか、の2つです。Teamsではこの2つが別の機能になっていて、片方しか使えない状況も実際にあります。

手順・ライセンス・管理者設定は、Microsoft公式のサポート記事とMicrosoft Learnのページを開いて確認した内容だけで書きました。確認日は2026年10月です。画面名は公式の英語版の表記のままにしています。日本語表示のTeamsでは名称が違って見えることがあり、日本語版の画面の表記までは確認できていません。

## Teamsの会議を文字起こしする方法には、何がありますか？

**結論：標準機能は「ライブキャプション」と「トランスクリプト（文字起こし）」の2つです。字幕は保存されず、全文を残せるのはトランスクリプトのほうです。録画しか手元になく文字がないときは、外部の文字起こしツールに入れます。**

| 方法 | 使えるタイミング | 公式が示す条件 | 残るもの |
|---|---|---|---|
| ライブキャプション | 会議の最中 | 管理者のポリシーで許可されていること | 残らない（公式「Teams doesn't save captions」） |
| トランスクリプト | 会議の最中に開始し、会議のあとに見る | 主催者と開始する人の両方でポリシーがオン。デスクトップ版で開始 | 主催者のOneDriveに保存。.docxと.vttで保存できる |
| 録画＋外部ツール | 会議のあと | 録画できるのは、決められたライセンスをもつ同じ組織の人 | 録画ファイル（文字は、ファイルを取り込める外部ツールで作る） |

## ライブキャプションは、どう出しますか？

**結論：会議の「More actions」から「Captions」を選びます。言語は「Meeting spoken language」で日本語にします。**

公式の記事「Use live captions in Microsoft Teams meetings」の手順です。

1. 会議のコントロールで「More actions」を押す
2. 「Captions」を選ぶ
3. 言語を変えるときは、字幕のパネルにカーソルを合わせて「Open caption settings」を押す
4. 「Meeting spoken language」にカーソルを合わせ、みんなが話している言語を選んで「Update」を押す

話し言葉の言語は、実際に話している言語に合わせると字幕が正確になります。公式によると、違う言語で話していることをTeamsが検出すると、主催者・共同主催者・文字起こしを開始した人などに変更を促す表示が出ます。「Settings」を押せば手動で、「Yes, change it」を押せば検出された言語にすぐ変わります。

日本語は、この記事の話し言葉の一覧に「Japanese (Japan)」として載っています。

### ライブキャプションの注意点

- 字幕は保存されません。公式は「Caption data is permanently deleted after the meeting is over」と書いています。残したいなら、次のトランスクリプトを使います
- 管理者がポリシーで無効にしていると、字幕のボタンが出ません（後の節）
- 翻訳つきの字幕は、公式がTeams PremiumとMicrosoft Copilot（追加ライセンス）の範囲として書いています。日本語の字幕を出すだけなら翻訳は要りません
- 精度のためには、マイクに近づいて、ゆっくりはっきり話す、雑音を避ける、同時に複数人が話さない、と公式が書いています

## トランスクリプト（文字起こし）は、どう始めて、どこに保存されますか？

**結論：デスクトップ版で「More actions」から「Transcribe」を選び、話す言語を確認して「Confirm」を押します。会議のあと、チャットの「Recap」タブから.docxか.vttで保存します。**

### 開始する手順

公式の記事「Start, stop, and download live transcripts in Microsoft Teams meetings」では、次の流れです。

1. 会議のコントロールで「More actions」を押す
2. 「Transcribe」を選ぶ
3. みんなが話している言語を確認する
4. 「Confirm」を押す

開始すると、参加者全員に「文字起こし中」の通知が出ます。公式は、録画を始めたときも文字起こしが自動で始まる、と書いています。ただ、録画の記事は録画の開始手順に文字起こしの自動開始を書いておらず、「文字起こしだけを止めても録画は続く」とだけ書いています。録画と文字起こしがセットで動くかは、短い会議で一度試して確かめてください。

別のページでは、メニューが「Record and transcribe」と書かれていて、Teamsのバージョンで表示が違う可能性があります。ボタンの名前が違って見えても、「文字起こしの項目を探す」で足ります。

### 止める人と、見られる人

- 文字起こしを止めたり再開したりできるのは、主催者・共同主催者・発表者です。全員が退出すると自動で止まります（公式の記載）
- ライブの文字起こしを見られるのは、デスクトップ版です。モバイルは、会議が終わってからチャット履歴で見ます（公式の記載）
- 電話で参加した人は、トランスクリプトを見られません（公式の記載）

### 保存先と保存のしかた

公式の記載です。

- 保存先：会議の主催者のOneDrive for Business。主催者が削除するまで、会議のチャットと「Recap」タブから開ける
- 保存の手順：「Chat」から過去の会議のチャットを開き、「Recap」、「Transcript」の順に進み、「Download」の横の矢印から形式を選ぶ
- 形式：.docxまたは.vtt
- 既定で保存できる人：主催者と共同主催者。ほかの人は、IT管理者のポリシーで保存できる場合がある。同じ組織の人は既定では保存できず、主催者がStreamで設定を変えられる

文字起こしには、話者名と時刻が付くと公式に書かれています（「includes each speaker's name and time stamp」）。参加者は、字幕と文字起こしで自分の名前を隠す設定にできます。

### 日本語にするには

開始時の言語の確認画面で、日本語にします。あとから変えるときは、「More actions」、「Transcribing」の横の矢印、「Show transcript」、「Language settings」、「Spoken language in this meeting」の順に進んで言語を選び、「Update」を押します。

この設定を変えると、文字起こしと字幕の言語が参加者全員で変わります。ほかの参加者がこの設定を開けるのは、文字起こしを止めているときだけです（公式の記載）。

## 必要なライセンスとプランは何ですか？

**結論：基本のトランスクリプトについて、公式の記事はライセンス名を挙げていません。録画は、決められたライセンスが条件です。翻訳つきの字幕と文字起こし、録画と文字起こしを許可する人の絞り込みは、Teams Premiumか Copilotの範囲です。**

確認できたことと、できなかったことを分けます。

**公式に書かれていたこと**

- 録画を始められる人の条件は、Office 365 Enterprise E1・E3・E5・F3・A1・A3・A5、Microsoft 365 Business、Business Premium、Business Essentialsのいずれかのライセンスをもち、管理者が録画を有効にしていて、ゲストでも別の組織の人でもないこと（録画の記事）
- 翻訳つきの文字起こしと字幕は、Teams Premium（Microsoft Copilotの追加ライセンスでも可）の範囲。主催者がそのライセンスをもっていれば、参加者はライセンスなしで使える（字幕の記事）
- 「誰が録画・文字起こしできるか」を会議ごとに絞る機能は、Teams PremiumかCopilotのライセンスが前提（録画の記事）。選べるのは、主催者と共同主催者／主催者・共同主催者・発表者／なし、の3つ
- Teams Premiumは、Teamsのライセンスの代わりではなく追加のライセンスです。TeamsとMicrosoft 365のライセンスに加えて必要になります（Learnのライセンス記事）

**公式に明記なし（確認した記事では）**

- 基本のトランスクリプトに必要なMicrosoft 365のプラン名
- 無料版Teamsで、ライブキャプションとトランスクリプトが使えるか
- 日本語の文字起こしの精度

**時期についての注意：**2026年4月1日から、これまでTeams Premiumだけだった一部の機能がTeams Enterpriseに含まれるようになった、とLearnに書かれています。どの機能が移ったかは、私が読んだページでは分からず、文字起こし関連が含まれるかも確認できませんでした。会社の契約が絡むので、不明なら情報システム部門に聞いてください。

Copilotについて、Learnには次の記載があります。主催者が会議でCopilotを「Off」にすると、その会議では録画と文字起こしもオフになります。Copilotの利用そのものには、Microsoft Copilotの追加ライセンスが必要です。

## 管理者のポリシーで使えないときは、どうしますか？

**結論：ボタンが出ない・押せないときは、本人の操作では直りません。トランスクリプトは管理者の会議ポリシー、字幕は別のポリシー、さらに主催者の会議オプションが関わります。**

Learnの記事「Admins - Manage transcription and captions for Teams meetings」では、設定は次のとおりです。

- トランスクリプトは、主催者ごと・ユーザーごとのポリシーです。会議にトランスクリプトを付けるには主催者の設定がオンで、開始する人の設定もオンである必要があります
- 管理者は、Teams管理センターの「Meetings」、「Meeting policies」で「Transcription」を切り替えます。新しいポリシーでは既定でオンです（PowerShellでは`-AllowTranscription`）
- ライブキャプションは別のポリシー（`-LiveCaptionsEnabledType`）で、既定は「Not enabled, but users can enable」（字幕は最初オフだが、ユーザーがオンにできる）です。「Off」にされていると、ユーザーは字幕を使えません
- 録画だけオンで文字起こしがオフだと、録画の横に文字起こしのファイルが付かず、Streamの再生で字幕もオンにできません
- 主催者が会議オプションの「Who can record and transcribe」を「No one」にしている場合も、開始できません（Teams Premiumかライセンス前提の機能）
- 主催者がCopilotを「Off」にしている会議では、録画と文字起こしもオフです
- 暗号化された会議（end-to-end encryption）では、Copilotは使えません（Learnの記載）

管理者が確認する方法として、Microsoft 365管理センターに「Teams transcripts diagnostic」があります。利用者のメールアドレスと会議のURLを入れて、条件を満たしているかを調べます。ポリシーの変更が反映されるまでに時間がかかることもありますが、その時間の長さは、私が読んだ記事には書かれていませんでした。

使えないと分かったら、情報システム部門に「トランスクリプトのポリシー」と「録画のライセンス」のどちらが原因かを聞くのが近道です。

## 録画しかない・外部の会議のときは、どうしますか？

**結論：自分の組織の会議なら、主催者に文字起こしを付けてもらいます。外部の会議や、録画だけが手元にあるときは、録画か録音の音声を外部ツールに入れます。**

公式の記載から、状況別に整理します。

| 状況 | 公式の記載 | 選択肢 |
|---|---|---|
| 同じ組織の会議で、文字起こしを付け忘れた | 後から付ける方法は、読んだ記事に記載なし | 録画があれば、録画を外部ツールに入れる |
| 別の組織の主催者の会議 | 別テナントの人は開始できず、会議後に見ることも保存することもできない | 主催者に共有を頼む。自分の録音が許される場なら、音声を外部ツールに入れる |
| ゲストとして参加 | ゲストは録画できない。録画が見られるのは明示的に共有されたとき | 主催者に共有を頼む |
| 匿名で参加 | 文字起こしの開始・閲覧とも不可 | 主催者に頼む |
| 電話で参加 | トランスクリプトを見られない | 主催者に共有を頼む |

録画の保存先も公式に書かれています。主催者のOneDrive for Businessに保存され、会議のチャットか、チャンネル会議ならチャンネルの会話に出ます。ダウンロードの権限は、組織の設定に左右されます。

音声ファイルや録画ファイルを取り込んで文字にする外部ツールの一例が、Nottaです。確認した範囲では、無料プランは月120分で、1回の文字起こしは3分まで、ファイルの取り込みは月50個までです。プレミアムは1回5時間まで、月1,800分まで、ファイルの取り込みは月100個までで、料金は年払いなら月1,185円（総額14,220円を12か月分一括払い）、月払いなら月1,980円です（Notta公式の料金ページとヘルプ、価格は税込、2026年10月確認）。翻訳などのアドオンは別料金で、プラン料金とは別です。取り込めるファイル形式は確認できなかったので、録画のMP4をそのまま入れられるかも含めて、使う前に公式の表示を見てください。

<aside style="margin:32px 0;padding:16px 18px;border:1px solid var(--line,#d0d7de);border-radius:10px;">
<p style="margin:0 0 8px;font-size:0.95rem;font-weight:700;">PR：Notta</p>
<a href="https://px.a8.net/svt/ejp?a8mat=4BEIPA+3FU85E+5988+5YJRM" target="_blank" rel="sponsored noopener">Notta公式サイトで最新条件を確認する</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4BEIPA+3FU85E+5988+5YJRM" alt="">
</aside>

Teams標準で足りる人は、標準で十分です。自分の組織の会議で、トランスクリプトを付けて、あとで.docxを保存すれば足りるなら、外部ツールは要りません。外部ツールが必要になるのは、別の組織の会議、録画しか手元にない、無料版で標準機能が使えない、のいずれかのときです。

取り込み型ツールを含めた比較は、[AI議事録ツールの選び方：会議の形・長さ・社内ルールから決める](/ai-jitan-lab/ai-gijiroku/ai-gijiroku-tool-erabikata/)で扱っています。Nottaの使い方は、[Nottaで議事録を作る手順と、無料プランでできること・有料にする判断](/ai-jitan-lab/ai-gijiroku/notta-gijiroku-tsukaikata/)にあります。

## 文字起こしのあと、議事録にするには？

文字起こしは、会議の発言をそのまま文字にしたものです。決定事項・担当・期限を拾って議事録の形にするのは、別の作業です。録音から確認・共有までの流れは、[AI議事録の作り方：録音から確認・共有までの4ステップ](/ai-jitan-lab/ai-gijiroku/ai-gijiroku-4step-nagare/)にまとめました。文字起こしの人名・数字・否定の見落としは、[AI議事録の文字起こしを確認する方法：人名・数字・否定を見落とさない](/ai-jitan-lab/ai-gijiroku/ai-gijiroku-mojiokoshi-kakunin/)を見てください。

同じ作業をZoomでやる場合は、[Zoomの会議を文字起こしする方法（日本語）：標準機能でできること・できないこと](/ai-jitan-lab/ai-gijiroku/zoom-mojiokoshi-yarikata/)にまとめています。

## 録音・外部ツールの前に確認することは？

文字起こしを始めると、Teamsは参加者全員に通知を出します（公式の記載）。ただ、通知が出ることと、全員が同意したことは別です。同意が必要かどうかは、相手や勤務先のルール、地域の法令で変わるので、この記事では判断しません。

個人情報や社外秘の内容を含む会議の音声・文字起こしを、AIや外部のツールに入れる前に、会社の規程を確認してください。会社が許可しているツールかどうかも、ここで見ます。

録音前に決めておくこと、AIに渡してよい範囲は、[オンライン会議の録音から議事録を作る前に決めること](/ai-jitan-lab/ai-gijiroku/online-kaigi-rokuon-gijiroku-mae-check/)の確認表を見てください。

## まとめ：字幕だけならキャプション、全文を残すならトランスクリプト、手元に文字がないなら外部ツール

会議の最中に字幕だけ見たいなら、「More actions」から「Captions」です。字幕は保存されません。全文を残すなら、デスクトップ版で「Transcribe」を選び、言語を日本語にして、会議のあと「Recap」から.docxか.vttを保存します。ボタンが出ないときは、管理者のポリシーか主催者の会議オプションが原因なので、情報システム部門に聞きます。別の組織の会議や録画だけのときは、外部ツールに音声を入れます。

この記事の内容は、2026年10月時点のMicrosoft公式の記載です。ライセンスや画面は変わるので、設定する前に公式の最新の表示を確認してください。

## 出典（すべてMicrosoft公式とNotta公式。2026年10月に確認）

- Start, stop, and download live transcripts in Microsoft Teams meetings：https://support.microsoft.com/en-us/teams/meetings/start-stop-and-download-live-transcripts-in-microsoft-teams-meetings
- Use live captions in Microsoft Teams meetings：https://support.microsoft.com/en-us/teams/meetings/use-live-captions-in-microsoft-teams-meetings
- Start, stop, and find meeting recordings in Microsoft Teams：https://support.microsoft.com/en-us/teams/meetings/start-stop-and-find-meeting-recordings-in-microsoft-teams
- View live transcription in Microsoft Teams meetings：https://support.microsoft.com/en-us/office/view-live-transcription-in-a-teams-meeting-dc1a8f23-2e20-4684-885e-2152e06a4a8b
- Admins - Manage transcription and captions for Teams meetings（Microsoft Learn）：https://learn.microsoft.com/en-us/microsoftteams/meeting-transcription-captions
- Manage Microsoft Copilot in Teams meetings and events（Microsoft Learn）：https://learn.microsoft.com/en-us/microsoftteams/copilot-teams-transcription
- Microsoft Teams Premium - Overview for admins（Microsoft Learn）：https://learn.microsoft.com/en-us/microsoftteams/enhanced-teams-experience
- Microsoft Teams Premium licensing（Microsoft Learn）：https://learn.microsoft.com/en-us/microsoftteams/teams-add-on-licensing/licensing-enhance-teams
- Notta料金プラン（Nottaの数字）：https://www.notta.ai/pricing
- Nottaヘルプ「Nottaの料金プランについて」（月払いの価格）：https://support.notta.ai/hc/ja/articles/55337007259035
