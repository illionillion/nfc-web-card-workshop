# NFC Web名刺ワークショップ

## 概要

AI駆動で自己紹介サイト作成と公開をして、NFCカードに書き込んで持ち帰れるイベント

## ターゲット

- NFC名刺を作ってイベントの交流で使いたいエンジニア
- 自分でカスタマイズしたNFC名刺を作りたいIT営業や経営の人

## 用意するもの

- NFCカード（10〜20枚）
- 配布するテキスト
- 完成品のサイト
- サイト要件定義用のプロンプト・Skills

## 参加者に必要なもの

- PC
- GitHubアカウント
- VS Codeなどのエディタ
- NFC書き込みのアプリ

## 内容

1. 導入
	- NFCの説明
	- カードの配布
	- 完成品のプレビュー
2. サイト作成ワークショップ
	- GitHubからコードかzipをダウンロード
	- Skillsで要件を固める
		- 載せる個人情報
		- 写真
		- 自己紹介文
		- アピールしたい実績
		- デザイントークンなど、どんな感じのサイトにしたいか
	- 要件を固めてそれを元に実装
		- 静的なHTML・CSS・JSでやらせる
		- 細かいバグや崩れは各自修正
			- 難しいものは自分がサポートに入る
	- GitHub Pagesで公開
		- Cloudflareなども考えたが、リポジトリの紐付けとかめんどくさそう
		- GitHubに上げずにCLIから直接アップロードの手もあるが、ローカルに入れさせるのも手間
3. 書き込み
	- 実際にアプリを使って書き込みする
		- Androidは自分のツールで https://web-nfc-app.illionillion.workers.dev/
		- iOSは何か大体ツールを見つけておく
	- 読み込んでみんなで自己紹介time？
- もくもく会の宣伝もして解散

### 成果物

- 自分で作った自己紹介Webサイト
- 公開URL
- NFCカード1枚
- NFCに自分のURLを書き込んだ状態
- AIを使ったWeb制作・GitHub Pages公開・NFC書き込みの体験

## 配布リポジトリ構成

```
nfc-web-card-workshop/
├── README.md
├── starter/                  ← 参加者が編集する名刺
├── docs/                     ← 公開用。CI が starter からコピー
├── guide/
│   ├── 01-事前準備.md
│   ├── 02-サイト制作.md
│   ├── 03-GitHub公開.md
│   └── 04-NFC書き込み.md
├── prompts/
├── examples/
└── .github/
    ├── copilot-instructions.md
    ├── skills/web-card/SKILL.md
    └── workflows/cd.yml
```

参加者は ZIP で入手し、公開時だけ `nfc-web-card` リポジトリを新しく作る。
GitHub Pages の公開元は `/docs`。

## MVPの成功条件

- 初心者がREADMEを上から読むだけで進められる
- AIを使って自分のWeb名刺を作れる
- GitHub Pagesで公開できる
- 公開URLをNFCカードに書き込める
- スマートフォンでカードをタッチしてサイトを開ける
- 参加者ごとに異なるWeb名刺を作れる
- 主催者が10人程度をサポートできる