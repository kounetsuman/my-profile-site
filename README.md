This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# my-portfolio-blog
ブログ、自己紹介、自分の情報を集約するためのWebサイトを

Next.js + Typescript + AWSで構築可能なサービス

お勉強用のサンプルコードとして

改変して自分のポートフォリオとして

使ってみてください。

# Specification
- ブログポスト
    - 全件キーワード検索ができます。
    - タグ検索ができます。
- 以下MicroCMSで管理できます。
  - ブログポスト
  - お問合せフォームの受信内容
  - 自己紹介

## Technology
- Next.js
- Typescript
- React hook
- TailwindCSS
- Jest
- etc...(package.jsons参照)

## 3rd.Service
- Microcms
- AWS
- Github Action
- Slack

## Something else
- Google Litehouse 全項目95%以上
- レスポンシブ対応
- robots.txt/sitemap.xml
- セマンティックHTML
- 


## Comming soon
- AMP対応
- アクセシビリティ向上対応(WAI-ARIAなど)

# Environment
- 動作確認済環境
  - `node: v12.13.0`

# how to deploy

## 事前準備

```
yarn install
```

## A. ローカルからデプロイする場合

```
cd $ROOT
vi .env # 必要な環境変数を全量記載する
# cloudfrontを見てDisabledになっているか確認し次へ
# https://console.aws.amazon.com/cloudfront/home?region=ap-northeast-1#distributions:
yarn run deploy:prod
# 5~10分くらいたてば成功
```

## B. Microcmsの「更新」を契機にデプロイする場合

- github actionを用いて実現している
- 参考：https://kimulaco.com/post/microcms-webhook-to-github-actions/

# setting

設定が必須な環境変数は以下

| KEY                         | DESC                                                             |
| --------------------------- | ---------------------------------------------------------------- |
| AWS_ACCESS_KEY_ID           | 本サービスをデプロイする際のIAMのログインに必要、事前取得が必要  | 
| AWS_ACM                     | 本サービスのSSL対応の際の証明書arn、事前取得が必要               |
| AWS_CLOUDFRONT_NAME         | 本サービスのデプロイ先、任意でOK、既存と被らないこと             |
| AWS_LAMBDA_NAME             | 本サービスのデプロイ先、任意でOK、既存と被らないこと             |
| AWS_S3_NAME                 | 本サービスのデプロイ先、任意でOK、既存と被らないこと             |
| AWS_SECRET_ACCESS_KEY       | 本サービスをデプロイする際のIAMのログインに必要、事前取得が必要  |
| MICROCMS_ACCESS_KEY         | API認証に必要、Microcmsから発行される                            |
| MICROCMS_BASEURL            | API認証に必要、Microcmsから発行される                            |
| MICROCMS_WHITE_ACCESS_KEY   | API認証に必要、Microcmsから発行される                            |
| NEXT_PUBLIC_HANDLE_NAME     | SNSのリンクのパラメータとして利用する前提、画面にも表示される    |
| NEXT_PUBLIC_MYDOMAIN        | 事前に取得して公開設定等終わっていること、Route53推奨            |
| NEXT_PUBLIC_MY_FIRST_NAME   | 画面に表示するためのみに利用                                     |
| NEXT_PUBLIC_MY_LAST_NAME    | 画面に表示するためのみに利用                                     |
| NEXT_PUBLIC_SAUNNER_ID      | 任意のパラメータ(数値)                                           |
| SLACK_WEBHOOK               | Slackでデプロイ結果を通知したい場合に設定                        |


以上
