# Community AI Workspace | コミュニティAIワークスペース

**A group chat with an AI assistant that turns conversations into shared event plans and tasks.**  
**グループチャットの会話をAIが整理し、イベントの予定・タスク・決定事項を共有できるWebアプリ。**

> 💬 **Ideas and collaborators welcome! / アイデア・共同開発メンバー募集中！**  
> This is a public project proposal, not a launched service. / 現在は構想を共有する段階で、サービスはまだ公開されていません。

**[🇬🇧 English](#english) · [🇯🇵 日本語](#日本語) · [System design / 仕組み](docs/SYSTEM_DESIGN.md) · [Build tasks / 開発タスク](docs/BUILD_PLAN.md) · [Marketing & validation / 検証](docs/MARKETING_VALIDATION.md) · [How to help / 参加方法](CONTRIBUTING.md)**

## English

### The problem
Friends and community organizers use separate group chats, notes, RSVP forms, spreadsheets, and payment messages. Decisions disappear in conversation history; no one knows which tasks are confirmed, who is coming, or what to do next.

### The solution
**Start with a real-time web chat workspace.** Members join a group, talk naturally, and ask an AI event assistant to **propose** a summary, decisions, tasks, questions, and updates on a shared board. People review and approve changes. Link a simple RSVP event page, then add member profiles, community posts and expense tracking when they prove useful.

### Example — organizing a BBQ

| Group chat / 会話 | Shared board / 共有ボード (AI proposal / AIの提案) |
| --- | --- |
| Mika: “Saturday afternoon?” | 📅 Proposed date: Saturday; exact time undecided |
| Ken: “I can bring drinks.” | 🥤 Suggested task: Ken to bring drinks; confirm |
| Aki: “Maybe ¥2,000 per person?” | 💴 Budget suggestion: ¥2,000; not yet agreed |
| Someone: “Where will we meet?” | ❓ Open question: location |

The AI is a **helper, not a decision maker**. It must not silently publish decisions, send messages, or charge members.

### How people would use it
1. **Join:** Accept a group invite; create an account and optional profile (name, interests, Instagram, contact preference with privacy controls).
2. **Chat:** Discuss an event in a browser, with live updates for group members.
3. **Ask AI:** Choose chat messages and request a summary or task suggestions (only with appropriate group consent).
4. **Confirm:** Review proposed board items, edit mistakes and approve confirmed details.
5. **Organize:** Share the event, manage Yes / Maybe / No RSVPs and agreed tasks; optionally record contribution status.
6. **Return:** Share stories or updates and organize the next event.

### System at a glance
```text
Web browser / mobile
  └── Group workspace (profile + invitation + LIVE CHAT)
         ├── Realtime backend + database + permissions
         ├── Shared board (reviewed tasks, decisions, questions)
         ├── Event page (invites / RSVP / optional expenses)
         └── AI assistant gateway
               ├── START: OpenAI API or Anthropic Claude API
               └── LATER: evaluate self-hosted/open-weight models
```
We would begin with a paid API to test whether AI summaries and task extraction help real users. A later self-hosted model **might** reduce some costs at sufficient usage, but only after comparing model quality, latency, hosting hardware, electricity, maintenance and privacy obligations. AI services must stay on the server with secure credentials, usage caps, logging and reviewable results. ChatGPT subscriptions do not include OpenAI API usage.

### How this could grow into a business
Our existing website can share an **original, useful project case study**, bring interested people to a feedback/interest form and invite them to a real-event pilot. We would measure genuine visitor interest and saved organizer time, then test whether organizers return or will pay.

**Two separate possibilities:** website content might eventually qualify for **AdSense after independent policy approval**; a validated app could later become a subscription/service. Neither income stream is currently confirmed or guaranteed. A private chat room by itself is **not** a substitute for helpful, indexable website content.

### Want to collaborate?
Start with the **[build plan](docs/BUILD_PLAN.md)** and its small, independently understandable tasks:
- **Design:** mobile-first layout for a group room, chat, and shared board.
- **Frontend:** message list, composer and board review states.
- **Backend:** accounts, group membership permissions, message storage and live delivery.
- **AI:** consent-based summarization, structured draft output and cost metrics.
- **Product / marketing:** talk to real organizers, define the pilot, measure usefulness and publish consented learnings.

You can help through design, research, testing, writing, or engineering. Open an [issue](https://github.com/jndbekswj875-jpg/app-collaboration-/issues) or read [CONTRIBUTING.md](CONTRIBUTING.md). We welcome practical critique before building complexity.

## 日本語

### 解決したい課題
イベントを企画すると、LINEなどのチャット、出欠確認、メモ、会費管理が別々になりがちです。会話の中に大切な決定事項が埋もれ、「誰が来るのか」「次に何をするのか」が分かりにくくなります。

### 作りたいサービス
**まずはリアルタイムで話せるWebチャット・ワークスペースを作ります。** メンバーがグループに参加して相談し、必要なタイミングでAIに会話の整理を依頼します。AIが予定・決定事項・未解決の質問・タスクを**提案**し、全員で確認・修正した内容を共有ボードに反映します。出欠確認やイベント情報も同じ場所で扱えるようにします。

### 利用イメージ
1. **参加:** 招待リンクからグループに参加。名前、自己紹介、興味、InstagramなどのSNS、連絡方法は任意で登録し、公開範囲を選べます。
2. **会話:** グループ専用チャットでイベントの相談をリアルタイムに行います。
3. **AIに整理を依頼:** メンバーの同意を前提に、対象のメッセージから要約やタスク候補を作ります。
4. **共有ボードで確認:** AIが提案した予定・タスク・予算案を人が確認・修正・承認します。
5. **イベント運営:** 参加・未定・不参加の出欠、担当タスク、必要に応じた会費の記録を管理します。
6. **次回へ:** イベントの思い出やお知らせを共有し、次のイベントにつなげます。

### AIの導入方法
**最初はOpenAI APIまたはClaude API**を利用して、要約やタスク抽出が本当に役立つかを検証します。APIの利用料金は使用量に応じて発生します。将来的には独自サーバーで動かせるオープンウェイトモデルも比較し、**品質・利用量・サーバー代・運用工数を含めた総コスト**で判断します。「自前AIなら必ず安い」とは限りません。

### Webサイト・マーケティングとの接続
既存サイトでは、開発アイデアや実際の利用課題を**オリジナルの役立つ記事・事例**として公開し、関心のある人にアンケートやテストへの参加を案内します。訪問や問い合わせ、試用、再利用のデータを基に価値を検証します。サイトの**Google AdSense収益**と将来の**アプリ提供による収益**は別々に検証します。広告収益にはGoogleの審査・規約遵守が必要で、閲覧数だけで収益は保証されません。

### 一緒に考えたり作ったりしませんか？
エンジニア、デザイナー、イベント主催者、テスターの方を歓迎します。技術スキルがなくても、普段のイベント運営で困っていることを共有していただくだけで助かります。

まずは **[開発タスク一覧](docs/BUILD_PLAN.md)**、[システム設計](docs/SYSTEM_DESIGN.md)、[参加方法](CONTRIBUTING.md)、[GitHub Issues](https://github.com/jndbekswj875-jpg/app-collaboration-/issues) をご覧ください。

---

**Status / 現状:** Concept and documentation are public. No production group chat, member database, real payment service or AI backend is deployed. / 企画書を公開中です。実運用のチャット・データベース・決済・AI機能は未実装です。
