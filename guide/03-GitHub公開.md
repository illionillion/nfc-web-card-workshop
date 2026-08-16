# 03. GitHub公開

作った名刺は、**新しい公開リポジトリ** にこのフォルダ一式を上げます。
GitHub Pages は `docs/` だけを公開するので、`examples/` や手順書はサイトに出ません。

公開後のURLの形は次のとおりです。

```
https://<GitHubユーザー名>.github.io/nfc-web-card/
```

## 1. 新しいリポジトリを作る

1. GitHubにログインする
2. [New repository](https://github.com/new) を開く
3. Repository name は必ず `nfc-web-card` にする
4. 自分のアカウント直下に作る（Organization は使わない）
5. Public を選ぶ
6. `Add a README file` にはチェックを入れない
7. `Create repository` を押す

## 2. ファイルを上げる

解凍したフォルダの**中身**を上げます。外側のフォルダごとドラッグしないでください。
`nfc-web-card-workshop-main/` の中に全部入ると、公開に失敗します。

上げてよいものの例です。

- `starter/`
- `.github/`
- `guide/`
- `prompts/`
- `examples/`
- `README.md`

### 画面からアップロードする場合

1. 作ったリポジトリで `uploading an existing file` を選ぶ
2. 解凍したフォルダを開き、中のファイルとフォルダをまとめてドラッグする
3. `Commit changes` を押す

### git で上げる場合

解凍したフォルダの中で実行します。

```bash
git init
git add .
git commit -m "Add my web card"
git branch -M main
git remote add origin https://github.com/<ユーザー名>/nfc-web-card.git
git push -u origin main
```

## 3. GitHub Pages を有効にする

1. リポジトリの `Settings` を開く
2. 左メニューの `Pages` を開く
3. Build and deployment の Source を `Deploy from a branch` にする
4. Branch を `main` 、フォルダを `/docs` にする
5. `Save` を押す

公開されるのは `docs/` の中身だけです。名刺の編集は `starter/` 側で行い、GitHub Actions が `docs/` にコピーします。

## 4. Actions の実行を確認する

1. リポジトリの `Actions` タブを開く
2. `CD` が動いていることを確認する
3. 初めての場合は `I understand my workflows, go ahead and enable them` を押す
4. 緑のチェックが付くまで待つ

`starter/` を直して push するたびに、`docs/` が更新されます。`docs/` を直接編集する必要はありません。

2回目以降の `git push` が拒否されたら、CD が `docs/` を先にコミットしただけです。次を実行してから、もう一度 push してください。

```bash
git pull --rebase --autostash
git push
```

## 5. 公開URLを確認する

ブラウザで `https://<GitHubユーザー名>.github.io/nfc-web-card/` を開き、次を確認します。

- [ ] 自分の名刺が表示される
- [ ] `examples` や手順書のファイル一覧にはなっていない
- [ ] 写真が出る（使っている場合）
- [ ] リンクを押せる
- [ ] スマホのブラウザでも開く

URLは控えておいてください。次のNFC書き込みで使います。

## うまくいかないとき

| 症状 | 確認すること |
| --- | --- |
| 404 になる | Pages のフォルダが `/docs` か、Actions が成功しているか、数分待ったかを見る |
| 完成例やガイドが出る | Pages の公開元が `/ (root)` になっていないか見る。`/docs` にする |
| 古い名刺のまま | `starter/` は更新されているか、Actions の最新実行が成功しているかを見る |
| CSSや写真が出ない | `starter` 側のパスが `./style.css` や `./assets/photo.jpg` かを見る |
| Actions が灰色 | `Actions` タブでワークフローの実行を許可する |
| `git push` が拒否される | CD のコミットが先に乗っている。`git pull --rebase --autostash` のあと `git push` |

公開できたら [04-NFC書き込み.md](./04-NFC書き込み.md) へ進みます。
