# TLSリバースプロキシサーバー

TLSリバースプロキシサーバーのサンプル

## 環境構築

### 証明書と秘密鍵を作成

```sh
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certs/server.key -out certs/server.crt -subj "/CN=localhost"
```
