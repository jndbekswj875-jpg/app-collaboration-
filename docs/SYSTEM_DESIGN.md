# System design / システム設計
*A practical proposal for collaborators — not a deployed system / 共同開発メンバー向けの設計案です。実装済みではありません。*

## 1. Core architecture / 全体の仕組み

```text
MEMBERS / メンバー
  Phone / desktop browser
           │ HTTPS
           ▼
WEB CLIENT / Web画面
  - login, profile, group invitation / ログイン・プロフィール・招待
  - real-time chat / リアルタイムチャット
  - shared board / 共有ボード
  - event/RSVP / イベント・出欠
           │ authenticated API + realtime connection
           ▼
APPLICATION BACKEND / アプリのサーバー
  ├─ Auth & group permission checks / 認証・アクセス権
  ├─ Group/chat service / グループ・メッセージ
  ├─ Board/event/RSVP service / ボード・イベント・出欠
  ├─ Database / データベース
  ├─ Realtime events / リアルタイム配信
  └─ AI orchestration gateway / AI接続サーバー
       ├─ consent & data minimization / 同意・送信範囲
       ├─ API provider adapter / 外部AI API（初期）
       │    ├─ OpenAI API
       │    └─ Anthropic Claude API
       ├─ proposed structured output / 提案の構造化
       ├─ human review / 人による承認
       └─ optional local-model adapter / 自前モデル（将来候補）
```

**EN:** A browser chat message is authenticated, permission-checked, saved in a database, then broadcast only to authorized group members. A separate user-requested AI action sends permitted excerpts through the server to an AI provider. The response is saved as a **draft**; an authorized user approves edits to the board. No provider keys belong in client-side JavaScript.

**日本語:** チャット送信時に認証とグループ所属を確認し、データベースに保存してから、閲覧権限のあるメンバーにリアルタイム配信します。AIを使う場合は、許可された会話の一部だけをサーバー経由で送信し、まず**下書き**として保存します。承認後に共有ボードへ反映します。APIキーをブラウザ側のコードには置きません。

## 2. Product modules / 機能モジュール

| Component / 機能 | Behavior / 動作 | First version? / 初期版 |
|---|---|---|
| Login / ログイン | Secure email or social login; sessions / 安全なログイン・セッション | Yes / 必須 |
| Groups / グループ | Invite links, member/organizer role, access checks / 招待・権限 | Yes / 必須 |
| Chat / チャット | Message list, composer, live updates / 投稿・履歴・リアルタイム更新 | Yes / 必須 |
| Board / 共有ボード | Manual tasks, decisions, open questions, approval state / タスク・決定事項・未解決項目 | Yes / 必須 |
| AI assistant / AI | Selected-message summary → reviewable JSON proposals / 選択した会話→承認待ち提案 | First small pilot / 小規模テスト |
| Events + RSVP / イベント・出欠 | Create event; Yes / Maybe / No and edit own RSVP / イベント作成・出欠変更 | After chat core / チャット後 |
| Profiles / プロフィール | Optional bio, social links, visibility controls / 任意入力・公開範囲 | Minimal first / 最初は最小限 |
| Stories / 投稿 | Group updates and photos / 投稿・写真共有 | Later / 後から |
| Finances / 会費 | Estimated cost, amounts recorded, who confirmed payment / 見積・入金状況記録 | Later / 後から |
| Payment / 決済 | Provider-hosted secure checkout (no card storage) / 外部決済事業者 | Later / 後から |

## 3. Data model / データ設計案

- `users`: id, createdAt, auth identity / ユーザー情報
- `profiles`: userId, displayName, optional social links, contactPreference, visibility / 公開範囲付きプロフィール
- `groups`: id, ownerId, name, description / グループ
- `group_members`: groupId, userId, role, joinedAt / 所属・役割
- `group_invites`: groupId, tokenHash, expiry, permissions / 期限付き招待
- `messages`: id, groupId, authorId, body, createdAt, deletedAt / チャット履歴
- `board_items`: id, groupId, eventId?, type (task/decision/question), status (draft/confirmed), editor, sourceMessageIds? / 共有ボード項目
- `events`: id, groupId, title, time, location, capacity, status / イベント
- `rsvps`: eventId, userId, response, updatedAt, optionalPrivateAnswer / 出欠
- `ai_requests`: requester, groupId, scopedMessageIds, provider, model, tokenUsage, estimateCost, status / AI実行履歴
- `ai_suggestions`: requestId, draftItems, reviewer, decision, reviewedAt / 承認待ちAI提案

**EN:** Every read and mutation is authorized server-side; do not rely only on hiding UI buttons. Add indexes and per-group data isolation. Profiles/contact details and optional RSVP reasons require separate access policies.

**日本語:** ボタンの非表示だけで権限管理を行わず、**サーバー側で毎回確認**します。グループごとにデータを隔離し、連絡先や欠席理由などは別の公開ルールで保護します。

## 4. Chat → AI → board / 会話から共有ボードへ

1. **Talk / 会話する:** Members send normal real-time messages.
2. **Select & consent / 選択・同意:** An authorized member selects an event and a permitted message range. Explain what will be sent to a third-party provider. Group members must have an appropriate way to consent or opt out.
3. **Request / 依頼:** Server sends the minimum necessary selected messages with instructions to extract **proposals**, not assert consensus.
4. **Return structured draft / 下書き:** JSON-like output with `items[]`: `type`, `text`, `proposedAssignee`, `sourceMessageIds`, `confidenceOrUncertain`. Validate returned structure before storage.
5. **Human review / 人が確認:** Organizer or authorized participants edit/approve/reject. Conflicts and uncertainties stay visible.
6. **Board update / 反映:** Only approved items become confirmed tasks/decisions. Notification sending and external actions require separate authorization.
7. **Audit / 記録:** Track requester, scope, provider cost, approval time and revisions without making private content public.

**Example / 例:** “Saturday works for me” is an *availability signal*, not a confirmed date. 「土曜なら大丈夫」は参加可能性の情報であり、全員が承認した日程ではありません。

## 5. AI provider strategy / AIの段階的導入

### Step A — Hosted API first / 最初は外部API
**EN:** Use an OpenAI API **or** Claude API server adapter to prove a narrow task: can an AI find correct proposed decisions/tasks from a short permissioned group chat? Maintain an interchangeable interface, e.g. `summarizeEvent(messages, context)`, so experiments do not lock the chat application to one model.

**日本語:** 最初はOpenAI APIまたはClaude APIをサーバーから利用し、許可された短いチャットから正確な要約・タスク候補を作れるか検証します。モデル依存を減らすために共通の呼び出しインターフェースを使います。

**Controls / 費用・安全対策:** per-user/group request quota, short selected context, no unnecessary historical chat, token budgets, provider spend cap, caching of authorized repeated requests, server-side API keys, logged token/cost estimate, manual review.

### Step B — Compare local/open-weight AI / 自前モデルの比較
**EN:** Only after actual usage shows meaningful costs, benchmark a self-hosted open-weight model using the **same anonymized test cases**. Compare accuracy, false tasks/decisions, Japanese–English quality, latency, memory/GPU needs, hosting and electricity, model licenses, engineering maintenance, uptime, and privacy. Choose based on total monthly cost and quality, not just “free inference”.

**日本語:** 実際にAPI利用量が増えたら、同じ匿名化テストデータを使って自前で動かすオープンウェイトモデルと比較します。判断材料は要約の正確さ、日本語・英語の品質、応答速度、GPU/サーバー・電気代、モデルライセンス、保守時間、プライバシーなどです。**必ず安くなるとは限りません。**

**Possible hybrid / 併用案:** Small local model for simple tagging/summaries, hosted API for ambiguous or harder requests, with user-visible policy and cost reporting. / 簡単な分類はローカルモデル、難しい相談は外部APIという併用も検討できます。

**Important / 注意:** A ChatGPT subscription is separate from OpenAI API billing. / ChatGPTの月額契約とOpenAI APIの料金は別です。

## 6. Privacy, security and safety / プライバシー・安全

- Private groups and member-controlled profile fields by default / 非公開グループ・公開範囲の選択
- Roles, expiring invitations, rate limits, abuse reporting, block/remove workflows / 権限・招待期限・スパム対策
- Server-side access checks and secure credentials / サーバー認証・秘密情報の保護
- Explicit consent before third-party AI processes selected chat messages / 外部AIへ送信する前の明確な同意
- Data retention, export/deletion and logs appropriate to the use case / 保存期間・削除対応
- Manual approval before creating official tasks or sending messages / 正式な決定や送信前に人が承認
- No automated scraping/importing of historical private LINE or Instagram conversations / LINE・Instagramの私的履歴を勝手に取り込まない
- No processing payment card details or holding members' money ourselves / カード情報や預り金を自社保有しない

## 7. Suggested technology, not selected / 技術候補（未決定）

- **Frontend / 画面:** TypeScript web application, React/Next.js as one candidate.
- **Database & realtime / DB・配信:** PostgreSQL + managed realtime/auth (e.g. Supabase), or another stack collaborators can operate safely.
- **Server / バックエンド:** API routes/services enforcing roles and validating AI output.
- **AI / AI接続:** Swappable OpenAI/Anthropic adapter, later optional self-hosted inference server.
- **Deployment / 公開:** Test in a separate staging environment first; integrate with an existing owned website only after secure configuration and real user testing.

**EN:** This document describes behavior, not a mandate to install every technology. Build and test one working vertical slice before selecting a complex platform.

**日本語:** 全部の技術を最初から導入する必要はありません。小さく「動くチャット＋確認できるボード」を作り、試してから次を決めます。

## 8. Acceptance test for the first real prototype / 最初の完成条件

Two consenting test users can sign in, join the same private group, send and receive messages live from different browsers, and create/edit a shared board task; an outsider cannot read their messages. Optionally, with consent, one user runs an AI summary on selected messages and sees a reviewable **draft**, without sending external messages or changing the official board automatically.

同意した2人が別々のブラウザでログインし、同じ非公開グループに参加して、メッセージをリアルタイムに送受信できること。権限のない人が閲覧できないこと。共有ボードへタスクを作成・編集できること。AIテストでは承認前の**下書き**だけが表示され、自動で正式な決定にならないこと。
