# TLS終端リバースプロキシ構成のサンプル

「TLS終端リバースプロキシ + アプリケーションサーバー」のサンプルの実装サンプルです

## 起動

```sh
# 初期化処理を実行
sh init.sh

# TLS終端リバースプロキシ構成を起動
docker compose up --build

# 疎通確認
curl -k -X POST https://localhost/echo -H "Content-Type: application/json" -d '{"text": "test"}'
```
