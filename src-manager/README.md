# Content Manager

SERA Websiteのニュース等のコンテンツを管理する

## 使用言語、ライブラリー、フレームワーク、ツール

* JavaScript
* express
* htmx
* axios
* node npm
* sqlite

## 使用方法

```bash
cd src-manager/ # このディレクトリーに移動
npm install # 依存パッケージのインストール、まだ一度も実行していない場合
npm start # サーバーを起動、ブラウザで http://localhost:3001 に入る
npm run dev # JSファイル変更時に自動リロードが入る開発サーバーを起動する。同じく http://localhost:3001 でホストされる
```

## データベース

### ファイル： news.db / テーブル: news

* id - PRIMARY KEY - 整数
* date - Unix時間 - 整数
* entryType - 記事(0) か ツイート風(1) - 整数
* cardContent - ニュースリストで表示されるコンテンツ、Markdown可 - 文字列(Markdown)
* article - Markdownで書かれた記事 - 文字列(Markdown)
* linkPath - ニュースリストで表示されるリンク先 - 文字列
* coverImagePath - ニュースリストで表示される画像へのパス - 文字列

### ファイル: gallery.db / テーブル: gallery

* id - PRIMARY KEY - 整数
* imagePath - 画像へのパス - 文字列
* caption - 画像の説明文 - 文字列

## API(RESTful)

* `/api/news`
    * GET: Unix時間で特定されたニュースの情報を取得する - `?target=<Unix時間>`
    * POST: 新しいニュースを作成する
    * PUT: ニュースの内容を更新する
    * DELETE: Unix時間で特定されたニュースを削除する - `?target=<Unix時間>`
* `/api/news-list`
    * GET: 全ニュースの情報を取得する

* `/api/gallery-image`
    * GET(`/`): IDで指定された画像へのパスと説明文を取得する - `?target=<ID>`
    * GET(`/list`): 全画像の情報を取得する
    * POST: 新しい画像の情報を追加する
    * PUT: 画像の情報を更新する
    * DELETE: IDで指定された画像の情報を削除する - `?target=<ID>`