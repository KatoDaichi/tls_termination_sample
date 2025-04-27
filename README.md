# TLS終端サンプル

## 環境構築

> [!NOTE] 本資料記載時の実行環境は`mac OS Sequoia 15.3.2`

```sh
# Homebrewインストール（macのパッケージ管理ツール）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# curlインストール（コマンドラインのHTTPクライアント）
brew install curl

# nvmインストール（node.jsバージョン管理ツール）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# node.jsをインストール（.nvmrc記載のバージョンがインストールされる）
nvm install

# 使用するnode.jsのバージョンを決定
nvm use
```
