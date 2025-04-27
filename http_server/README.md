# HTTPサーバー

Node.js + TypeScriptのHTTPサーバー

## 環境構築

> [!NOTE]
本資料記載時の実行環境は`mac OS Sequoia 15.3.2`

### IDE

Cursor(VSCode)を使用します

[extensions.jsonc](./.vscode/extensions.jsonc)に記載の拡張機能を導入してください

### Node.js

```sh
# Homebrewインストール（macのパッケージ管理ツール）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# curlインストール（コマンドラインのHTTPクライアント）
brew install curl

# nvmインストール（node.jsバージョン管理ツール）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# nodeをインストール（.nvmrc記載のバージョンがインストールされる）
nvm install

# 使用するnodeのバージョンを決定
nvm use

# node環境の初期化
npm init -y
```

### TypeScript

```sh
# typescriptをinstall
npm install typescript --save-dev

# typescriptの設定の初期化
npx tsc --init
```

### リンタ・フォーマッタ

[Biome](https://biomejs.dev/ja/)を使用します

```sh
# biomeをインストール
npm install --save-dev @biomejs/biome

# biomeを初期化
npx biome init
```

## 実行

### サーバー起動

- tsファイルから直接起動する場合

```sh
# httpサーバーを起動
npx tsx src/server.ts
```

- jsにトランスパイルして、起動する場合

```sh
# ts -> js にトランスパイル
npm run build

# サーバーを起動
node ./dist/server.js
```

- dockerで起動する場合

```sh
# dockerイメージのビルド
docker build -t http-server .

# dockerコンテナの起動
docker run --name http-server -p 3000:3000 http-server
```

- 疎通確認方法

```sh
# curlで疎通確認
curl -X POST http://0.0.0.0:3000/echo -H "Content-Type: application/json" -d '{"text": "test"}'
```
