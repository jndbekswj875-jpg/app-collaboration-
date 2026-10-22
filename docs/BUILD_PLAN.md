# Build plan / 開発タスク — Where collaborators can start
**A concrete task map for a chat-first Community AI Workspace / チャットから始めるコミュニティAIワークスペースの作業分担案**

> Tasks are **proposed collaboration options**, not assigned jobs or scheduled daily work. / ここに記載する作業は**参加できる作業案**であり、担当者や納期が決まっているわけではありません。

## Build the smallest complete experience first / 最小の完成体験から作る

**First proof / 最初の完成目標:** Two invited people can exchange real-time messages in a private web group, edit one shared task board, and (if enabled with permission) ask AI to draft a summary for review.

**最初の完成目標:** 招待した2人が同じ非公開ルームでリアルタイムチャットを行い、共有ボードのタスクを確認・更新できること。AIを使う場合は、許可を得て会話から提案を作り、承認できること。

## Stage 0 — Agree on a test case / テストする場面を決める
| ID | Who can help / 担当候補 | Task / 作業内容 | Done condition / 完了条件 |
|---|---|---|---|
| P-01 | Organizer, product / 主催者・企画 | Interview one real event organizer about chat/RSVP/coordination pains. / 実際のイベント主催者に困りごとを聞く。 | An anonymized last-event workflow and biggest repeated issue. / 個人情報を除いた運営手順と課題1つ |
| P-02 | UX/design / デザイン | Draw mobile-first **Group → Chat → Board** flow. / スマホ向け画面遷移の設計。 | 3–4 linked screen sketches and access/consent points. / 3〜4画面＋同意確認箇所 |
| P-03 | Developers / 開発 | Decide the smallest stack from technical alternatives. / 最小技術構成を比較。 | One short architecture decision describing data, auth, realtime and hosting tradeoffs. / 比較と選定理由のメモ |

## Stage 1 — Working group chat / グループチャットを動かす
| ID | Who / 担当候補 | Task / 作業内容 | Done condition / 完了条件 |
|---|---|---|---|
| C-01 | Frontend | Build responsive login/invitation/group shell. / ログイン・招待・グループ画面。 | Navigation works on phone and desktop with clear loading/errors. / スマホ・PCで操作可能 |
| C-02 | Backend | Secure auth, groups, membership roles and invite links. / 認証・グループ権限・招待。 | Unauthorized users cannot access private groups via API. / 未参加者の閲覧を拒否 |
| C-03 | Backend/realtime | Persist messages and broadcast group-only updates. / 保存・リアルタイム配信。 | Two test browsers see messages in order; refresh restores history. / 2画面で同期・再読み込み後も履歴保持 |
| C-04 | Frontend | Chat timeline, send form, timestamps and error states. / メッセージ表示・送信。 | Accessible readable chat works end-to-end with the backend. / 実データで送受信可能 |
| C-05 | QA/security | Test isolation, malformed inputs, spam limits and mobile usability. / 不正アクセス・入力・使いやすさを検証。 | Documented test results; no known open private-group exposure. / テスト結果を記録 |

## Stage 2 — Shared work board / 共有タスクボード
| ID | Who / 担当候補 | Task / 作業内容 | Done condition / 完了条件 |
|---|---|---|---|
| B-01 | Frontend/backend | Board cards: task, decision, question; create/edit/confirm states. / タスク・決定・質問カードの作成／更新。 | All authorized group members see updated confirmed states. / 確認済み状態が同期 |
| B-02 | Product/design | Design proposed versus confirmed distinction and source references. / AI提案と確定事項の区別。 | Nobody confuses a draft suggestion with an approved decision. / 下書きと確定が明確に違う |
| B-03 | QA | Test edits/concurrency and member role limits. / 同時編集・権限検証。 | Conflict behavior is defined and covered by a test. / 競合時の動作を確認 |

## Stage 3 — AI API experiment / AI APIの検証
| ID | Who / 担当候補 | Task / 作業内容 | Done condition / 完了条件 |
|---|---|---|---|
| A-01 | AI/backend | Server-only adapter to either OpenAI **API** or Claude **API**. / サーバー内のAI接続。 | Configurable provider; no API keys in public source/client. / APIキー非公開 |
| A-02 | Product/privacy | Consent dialog, selected-message scope, retention design. / 同意・対象メッセージ指定。 | User can see what will be sent and decline. / 同意しなくても通常チャットを利用できる |
| A-03 | AI/frontend | Generate validated proposals (task/decision/question) **as drafts**. / 構造化提案の下書き。 | Human can approve, edit or reject; nothing auto-published. / 承認操作あり |
| A-04 | AI/QA | Evaluate 10–20 **synthetic or permissioned** event chats including mixed EN/JA and disagreements. / 日本語・英語を含む会話で評価。 | Record extraction correctness, invented facts, review time, latency and cost per summary. / 精度・捏造・時間・費用を記録 |
| A-05 | Backend | Limit requests, usage, token length, errors, spend and logs. / 呼び出し回数・費用上限。 | Test an exhausted quota without exposing messages or breaking basic chat. / 上限後もチャット継続 |

## Stage 4 — Event features and profiles / イベント機能
| ID | Who / 担当候補 | Task / 作業内容 | Done condition / 完了条件 |
|---|---|---|---|
| E-01 | Frontend/backend | Event detail page + Yes/Maybe/No RSVP. / イベントページ・出欠。 | User can change their own RSVP; organizer sees correct totals. / 出欠変更・集計可能 |
| E-02 | Frontend/backend | Optional member profile with social links and private contact controls. / プロフィール・SNSリンク。 | Only opted-in fields are visible to intended users. / 公開範囲が守られる |
| E-03 | Product | Try optional expense records; no live payment collection. / 会費記録を試す。 | Sum and status are clear; no real-money handling. / 集計ができる |
| E-04 | Product/UX | Stories and recurring event participation; test whether users want it. / 投稿・継続参加機能。 | Evidence of member demand before building. / 需要が確認された場合のみ |

## Stage 5 — Self-hosted AI benchmark / 自前AIの検討
| ID | Who / 担当候補 | Task / 作業内容 | Done condition / 完了条件 |
|---|---|---|---|
| L-01 | AI/infrastructure | Collect realistic aggregate request volume and **actual** hosted API cost. / API利用量・実費記録。 | Cost per useful reviewed summary and projected monthly spend are measured. / 1件・月額の実測 |
| L-02 | AI/infrastructure | Compare a licensed self-hosted open-weight model on the same safe test set. / 自前モデルで同条件比較。 | Quality, Japanese performance, hardware, maintenance and latency documented. / 精度・運用費用比較 |
| L-03 | Owner + team | Decide API, self-hosted or hybrid on quality-adjusted total cost. / 自前かAPIかを判断。 | Decision supported by usage + cost evidence, not assumption. / データに基づく決定 |

## Initial task dependencies / 作業の順番
```text
P-01 + P-02 + P-03
        ↓
C-01 + C-02 → C-03 → C-04 → C-05
        ↓
B-01 + B-02 → B-03
        ↓
A-01 + A-02 → A-03 → A-04 + A-05
        ↓
E-01 + E-02 (if users need them)
        ↓
L-01 → L-02 → L-03 (only if API costs warrant it)
```
**EN:** Frontend can mock the chat room while backend auth and realtime are developed. Do not invite real users until privacy and access tests pass. **日本語:** フロント画面の試作は先行できます。ただし認証と権限のテスト前に実ユーザーの情報を入れません。

## How friends can pick up work / 参加のしかた
1. Pick **one task ID** (such as C-04 or A-04). / 作業IDを一つ選びます。
2. Comment on an [Issue](https://github.com/jndbekswj875-jpg/app-collaboration-/issues) with the task ID, your idea and what you could contribute. / Issueで提案・担当できる内容を共有してください。
3. Before coding, agree on a small deliverable, tests, and code license/ownership with the repository owner. / 実装前に成果物・テスト・ライセンスを確認します。
4. Prototype in a branch; submit reviewable screenshots or pull request. Never upload credentials, actual private chat data or third-party material without permission. / ブランチで試作し、レビューを受けます。秘密情報・私的な会話は公開しません。

## Business validation checkpoint / ビジネス検証
After the first test: count invited people, consented test users, successful chats, organizer minutes saved, AI suggestions accepted/rejected, RSVP completion, repeat requests and **actual** spend. Feedback alone is not revenue; do not publish invented results.

最初のテスト後は、招待数、実際の利用者、チャットの成功、主催者が節約できた時間、AI提案の承認率、出欠回答、再利用希望、実費を記録します。**収益は実際の入金が確認されるまで計上しません。**

**Related / 関連:** [System design](SYSTEM_DESIGN.md) · [Marketing & validation](MARKETING_VALIDATION.md) · [Contributing](../CONTRIBUTING.md)
