# Product vision: Community AI Workspace

**Document status / 状況:** Public product idea for discussion and collaboration; features below are proposals, not a launched service. / 意見交換・共同開発のために公開した構想です。記載機能は未完成です。

## 1. The problem

When people organize events and communities, information gets lost across chat conversations, spreadsheets, RSVP lists, social media, and payment apps. One person often spends considerable unpaid time replying to questions, updating lists, reconciling money, or reminding people of plans.

**Hypothesis, not validated fact:** A permission-based shared workspace + an AI event assistant could reduce coordination effort and help participants return between events.

## 2. Product promise

**One community, one workspace, with AI that helps people turn conversations into organized, agreed actions.**

The product should help with both **an individual event** (a specific meetup) and **the community between events** (members, relationships, stories, new ideas, updates). It should not turn friendships into an intrusive data-collection exercise.

## 3. Two user experiences

### Member experience
- Join an invited group and control the visibility of their own profile.
- Optionally add a name/nickname, bio, interests, Instagram/social profile URL, and contact preference.
- Chat in real time with community members; send comments and share event stories.
- See shared event decisions, upcoming plans, RSVP questions, and their own contribution status.
- Check an AI-created board summary and correct anything incorrect.
- Discover upcoming events and see relevant community posts, subject to permissions.

### Organizer experience
- Create events, invite a group, assign organizer/moderator roles, and manage RSVP/capacity.
- View attendance as attending, maybe, declined, pending; reasons should be optional and not broadly disclosed.
- Assign preparation tasks and track who volunteered.
- Record estimated expenses and contribution/payment **status** (not store actual money).
- Review AI-proposed summaries, to-dos, decisions, unanswered questions, and reminder messages.
- Approve communications and changes; archive decisions and learn for the next event.

## 4. Proposed core objects (conceptual data model)

- **User**: identity/authentication and preferences.
- **Member profile**: chosen public name, bio, interests, optional socials and opt-in contact fields.
- **Group**: membership, roles, invitations, privacy settings.
- **Message**: group conversation, timestamps, author, media/access settings.
- **Event**: group, title, date/time, location, capacity, description and status.
- **RSVP**: event/member, answer, optional question responses, modification history.
- **Task**: description, assignee, status, deadline, event/group.
- **Decision / board item**: source and author, proposed/confirmed state, edits.
- **Contribution / expense**: amount/currency, payer or participant reference, verification state.
- **AI suggestion**: consent scope, related source messages, generated text, reviewer and approval state.
- **Activity / feedback**: community stories, event retrospectives, privacy controls.

## 5. AI assistant workflow

1. Members discuss an event normally.
2. A group moderator or member invokes **Summarize / Suggest board updates**.
3. The server checks who is allowed to expose the selected messages to AI, according to clear, previously disclosed settings.
4. AI proposes structured items: date options, venue ideas, unresolved questions, proposed tasks, costs, or RSVP reminders.
5. Members or moderators review the proposed summary, identify mistakes, and approve changes before the board becomes authoritative.
6. The event board links back to permitted source context when possible; people can correct/delete their information as appropriate.

**Illustration**

Chat: “Saturday works for me.” / “Can someone bring ice?” / “I can bring it.”

AI **drafts**:
- Date: Saturday (confirmation still needed)
- Open question: exact time?
- Volunteer task: bring ice — proposed assignee, confirm before assigning

AI must not treat suggestions as unanimous consent, invent attendance, or assert financial settlement without records.

## 6. Product phases / 開発の進め方

### Phase 0 — Understand one real event / 実際のイベントを理解する
- Follow one real event and document how people communicate, decide tasks and track attendees. / 一つのイベントの連絡・役割分担・出欠管理を観察。
- Test which repeated step is most difficult. / 繰り返し発生する課題を確認。

### Phase 1 — Group + realtime chat / グループ・リアルタイムチャット
- Secure login, invitations, membership roles and private groups. / 認証・招待・参加権限。
- Persistent live chat, responsive interface and access checks. / 履歴が残るリアルタイムチャット。
- Manual shared board for tasks, decisions and open questions. / 最初は手動の共有タスクボード。

### Phase 2 — First AI API experiment / 外部AI APIで小さく検証
- Server-side OpenAI API **or** Anthropic Claude API integration. / APIキーをサーバーに保管して接続。
- Selected consented messages → structured drafts → review and approval. / 許可された会話→構造化された下書き→人が承認。
- Evaluate accuracy, Japanese and English handling, latency, review effort and actual cost. / 精度・日英対応・時間・費用を計測。

### Phase 3 — Event workflows and community / イベント運営・コミュニティ機能
- RSVP, event updates, optional profiles/social links, community posts and contribution records. / 出欠・予定・SNSプロフィール・投稿・会費記録。
- Add in order of demonstrated user demand, not all at once. / 必要性が確かめられた順に実装。

### Phase 4 — Local AI and commercial features / 自前AI・サービス化を評価
- Benchmark self-hosted licensed open-weight models versus paid APIs on quality-adjusted total cost. / 品質も含む総コストで自前モデルと比較。
- Payment-provider integration and organizer subscription only after repeat use/paid commitment. / 継続利用・支払い意思を確認後に決済・課金を検討。

These phases describe an **illustrative direction**, not promised release dates. / これは検討中の進行案であり、リリース日を約束するものではありません。

## 7. UX screens (concept only)

1. Community landing page / events.
2. Group invitation and optional member profile.
3. Group chat and story feed.
4. Shared event decision/task board.
5. Event page and RSVP.
6. Private organizer dashboard.
7. AI assistant review queue with clear source and approval actions.

## 8. Technology options for future discussion

For a small web-first experiment, a conventional frontend plus managed auth/database/realtime service may be sufficient (e.g. Next.js with Supabase). Start with a **real group chat** and manual board, then test a server-side **OpenAI API or Anthropic Claude API** for permissioned summarization and proposed tasks. Later consider a self-hosted open-weight model only if actual API usage justifies the hardware, hosting, security and maintenance. Payment processing should be delegated to an appropriate established provider.

**Technology is not selected.** Contributors should evaluate privacy, costs, accessibility, Japanese/English support, performance, portability, and ease of maintenance before deciding.

## 9. Privacy, trust and boundaries

- Profiles and social-media links are optional; users choose what other members can see.
- Groups and messages should be private by default; public pages must never accidentally expose member data.
- Explicit group-member consent and transparent scope are needed before AI processes group content.
- Role-based authorization is necessary for member/chat/RSVP/finance data; use server-side enforcement.
- Do not scrape Instagram or LINE chat histories; LINE-sharing integration is different from accessing private messages.
- Protect user uploads, authenticate actions, rate-limit invites and chats, and support member data deletion.
- Obtain adequate agreement before sharing sensitive RSVP answers or absence reasons; offer a way to omit them.
- AI summaries are drafts; users remain responsible for accepting decisions and payments.
- No automated booking or messaging to other people without appropriate authorization.

## 10. Evidence that would justify further development

Track real-world outcomes, not vanity features:
- RSVP completion rates and number of attendees who actually show up.
- Minutes organizers spend coordinating before/after a pilot.
- Missed questions, duplicate answers, and errors in AI-generated summaries.
- Whether members willingly return for the next event.
- Whether organizers request to use it again or are willing to pay.

## 11. Open questions for collaborators

- Which is the first specific group of users and event type?
- Is the biggest pain RSVP, scattered decisions, payment tracking, or missed communication?
- Should the shared board prioritize event details or long-running community projects?
- What level of chat privacy and AI participation will members actually accept?
- Should profiles and social contacts be visible only to a group or publicly?
- Can the first test live on an existing website rather than a separate app?

Use [GitHub Issues](https://github.com/jndbekswj875-jpg/app-collaboration-/issues) to discuss these without treating any option as a finalized decision.


## Detailed system and contributor work / システム設計・作業分担

- [Bilingual system design / システムの仕組み](SYSTEM_DESIGN.md)
- [Start with the task map / 具体的な開発タスク](BUILD_PLAN.md)
- [Website growth, AdSense boundary and product validation / 集客と検証](MARKETING_VALIDATION.md)

**日本語での概要:** このサービスの中心は**リアルタイムのグループチャットと共有タスクボード**です。グループ内で相談し、許可された会話をAIが整理して「予定・役割・未解決の質問」を提案します。人が内容を確認してから決定事項として共有します。最初はOpenAIまたはClaudeのAPIで動作を検証し、将来の利用量・費用・品質を見て自前AIを比較します。参加者のプロフィール、出欠、会費、ストーリー共有は必要性を確かめながら追加します。詳細は上記の日本語併記資料をご覧ください。
