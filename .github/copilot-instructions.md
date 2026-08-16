# Copilot instructions

このリポジトリは、NFCカード用のWeb名刺を作るワークショップ用です。

名刺を作る作業は `.github/skills/web-card/SKILL.md` に従う。
チャットで `/web-card` と打たれたときだけ、そのスキルで要件ヒアリングから入る。
スキルを指定されていないときは、プレースホルダーのまま実装しない。先に `/web-card` を案内する。

## 編集してよい場所

- 名刺の実装は `starter/index.html` `starter/style.css` `starter/script.js` だけを更新する
- 写真は `starter/assets/` に置き、相対パスで読む。複数枚ならカルーセル可
- リンクは GitHub / X を優先して勧める
- 要件のメモは `starter/REQUIREMENTS.md` に書いてよい

## 編集しない場所

- `docs/` は GitHub Actions が `starter/` からコピーする公開用出力なので、直接編集しない
- `examples/` は完成例なので、参加者の個人情報で上書きしない
- `guide/` と `.github/workflows/` は主催者向けの手順とCIなので、名刺制作では触らない
