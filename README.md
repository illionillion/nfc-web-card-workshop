# NFC Web名刺ワークショップ

AIで自己紹介サイトを作り、GitHub Pagesで公開し、NFCカードにURLを書き込んで持ち帰ります。

スマートフォンをカードにタッチすると、あなたのWeb名刺が開きます。

## 完成イメージ

[examples/sample-card](./examples/sample-card/index.html) をブラウザで開くと、完成例を確認できます。

今日の成果物は次の4つです。

- 自分で作った自己紹介サイト
- 公開URL（GitHub Pages）
- NFCカード1枚
- URLを書き込んだ状態のカード

## 今日やること

上から順に進めてください。各ステップの詳細は `guide/` にあります。

1. [事前準備](./guide/01-事前準備.md) — ZIPで入手、VS Code、NFCアプリ
2. [サイト制作](./guide/02-サイト制作.md) — `/web-card` で要件を固めて `starter/` を実装
3. [GitHub公開](./guide/03-GitHub公開.md) — 新しい公開リポジトリを作り、Pages で公開
4. [NFC書き込み](./guide/04-NFC書き込み.md) — 公開URLをカードに書き込む

詰まったら近くのサポートに声をかけてください。細かい見た目の崩れは、あとから自分で直して大丈夫です。

## フォルダ構成

```
nfc-web-card-workshop/
├── README.md                 ← いま読んでいるファイル
├── starter/                  ← ここを編集して自分の名刺にする
├── docs/                     ← 公開用。CI が starter からコピーする
├── guide/                    ← 手順書
├── prompts/                  ← Copilot 以外のAIに貼るプロンプト
├── examples/                 ← 完成例（公開されない）
└── .github/                  ← Copilot Skill と公開用CI
```

作業するのは `starter/` の3ファイル（と写真）だけです。`docs/` は自分で編集しません。

## 最短ルート

1. このリポジトリを ZIP でダウンロードして解凍する
2. VS Code でそのフォルダを開く
3. `starter/index.html` をブラウザで開いて、初期状態を確認する
4. Copilot チャット（Agent）で `/web-card` と打つ

   質問に答えて要件を固める。おまかせでよい項目は「それで」と返せば進む。
   確認が取れるまで実装は始まらない。

5. 公開と書き込みは [guide/03-GitHub公開.md](./guide/03-GitHub公開.md) と [guide/04-NFC書き込み.md](./guide/04-NFC書き込み.md) へ

公開すると、GitHub Actions が `starter/` を `docs/` にコピーします。GitHub Pages は `docs/` だけを出すので、完成例や手順書はサイトに含まれません。

## 必要なもの

| 持ち物 | 用途 |
| --- | --- |
| PC | サイト制作 |
| GitHubアカウント | 公開 |
| VS Code | 編集 |
| GitHub Copilot など、使えるAI | 要件定義と実装 |
| NFC書き込みアプリ | カードへの書き込み |
| 配布されたNFCカード | 持ち帰り用 |

## 主催者向け

参加者が最初にやることは ZIP ダウンロードです。フォークは使いません。公開のときだけ、各自が `nfc-web-card` という公開リポジトリを作ります。案内URLはデフォルトブランチ（`main`）のトップにしてください。

自分の名刺は `reference` ブランチで作ります。このリポジトリの Pages は `reference` / `docs` にします。`reference` を `main` にマージしないでください。ガイドや CI の修正は `main` で行います。

- 完成品のプレビュー: `examples/sample-card/`（本番URLは Pages の `reference`）
- Copilot Skill: `.github/skills/web-card/`（`/web-card`。自動起動はしない）
- Copilot 以外向けプロンプト: `prompts/`
- 進行用テキスト: `guide/`
- 公開用コピー: `.github/workflows/cd.yml`（`main` と `reference` の両方）
