# Community AI Workspace — AI-powered events, chat & collaboration
**コミュニティAIワークスペース：イベント・チャット・共同作業**

> **Status (October 2026): Public concept / feedback welcome. Low priority; not an active development commitment.**
>
> **開発状況：アイデア公開・フィードバック募集段階です。優先度は低く、現在は本格開発していません。**

## The idea / このプロジェクトについて

We want to make organizing real-world communities simpler and more welcoming. Instead of coordinating one event across LINE messages, spreadsheets, separate RSVP forms, payment records, and scattered notes, people would have **one shared online workspace** where an **AI event assistant** helps turn conversations into useful plans.

友人やコミュニティのイベント運営では、LINE・出欠確認・会費管理・メモなど、情報が複数の場所に分かれがちです。そこで、**一つの共有ワークスペース**に情報を集約し、**AIが会話からイベントの予定やタスクを整理する**サービスを考えています。

**Example:** Friends plan a weekend BBQ in a group chat. People suggest times, locations, budgets, and who will bring what. With permission, the AI summarizes the decisions on a shared board; everyone can review and correct them. A linked event page tracks RSVPs and contribution status, and the organizer can send an update without answering the same question repeatedly.

## Who it is for

- Friends organizing BBQs, parties, trips, reunions, and casual meetups.
- Clubs and recurring communities sharing updates, member interests, and events.
- Small organizers who currently juggle chat apps, spreadsheets, RSVP forms, and manual reminders.

## Proposed features — not yet built

| Area | Vision |
| --- | --- |
| Community profiles | Optional display name, short bio, interests, Instagram/other social links, and user-controlled contact visibility. |
| Groups & invitations | Create a private group, invite people by link, and give organizer/member roles. |
| Real-time group chat | Discuss plans, ask questions, share updates, and keep event conversations together. |
| AI organizer assistant | With group permission, summarize selected messages, extract proposed tasks/decisions, highlight missing answers, and draft updates. |
| Shared board | A reviewable source of truth for event plans, decisions, tasks, deadlines, costs, and changes; people can correct AI mistakes. |
| Event RSVP | Yes / Maybe / No, optional questions or reasons, capacity, guest list, and reminders. |
| Shared finances | Track estimated expenses, contributions owed/recorded, and event settlement; actual payment processing is a later integration. |
| Community memory | Preserve useful event decisions and community updates so they do not disappear in chat history. |
| Website integration | Eventually connect to an existing website so members can visit for future events and community information. |

### Sample user journey

1. Create or join a group.
2. Fill in an optional profile and choose what others can see.
3. Discuss an upcoming gathering in the group's chat room.
4. Ask AI to organize agreed details into a **proposed** shared event board.
5. People confirm/correct the proposal; the organizer publishes the event.
6. Members RSVP, review tasks and optional contribution details.
7. The group receives updates, attends the event, and leaves feedback for next time.

## What AI may and may not do

The goal is **an assistant for an event**, not an invisible bot controlling a community.

- AI should **suggest and draft** tasks, summaries, reminders, and board changes.
- People must be able to review or edit consequential AI-generated content.
- No auto-sending messages, charging money, making reservations, or sharing private contacts without appropriate authorization.
- Access to chat content must be explicit and limited to the groups/messages members agree to share with AI. Do **not** assume the app can read private LINE conversations or import historical LINE chats.
- Show what information AI used; allow correction and deletion where appropriate.
- Separate private member data from public project documentation.

## A small first test (when ready)

**Goal:** Try one real, small event using a simple event page and RSVP flow, with an organizer reviewing a manually or AI-generated summary.

**Success evidence to look for:** actual RSVPs, reduced organizer follow-up work, fewer missed decisions, users saying they want to use it again, and willingness of an organizer to keep using it.

This is a validation experiment—not a promise to deliver all features above. See [PRODUCT_VISION.md](docs/PRODUCT_VISION.md) for a phased concept and [CONTRIBUTING.md](CONTRIBUTING.md) for how to help.

## Want to help? / 一緒に作りませんか？

This project is public to invite **ideas, constructive criticism, design suggestions, and potential collaborators**. You don't need to be a developer to help: event organizers and people who use group chats are especially welcome.

アイデアへのご意見、デザイン・開発へのご協力、イベント運営の課題の共有などを歓迎します。エンジニア以外の方からのフィードバックも大歓迎です。

- 💬 [Open an Issue to share a suggestion](../../issues/new)
- 🧩 [Explore current discussions and tasks](../../issues)
- 📖 [Read the full concept](docs/PRODUCT_VISION.md)
- 🤝 [How to contribute](CONTRIBUTING.md)

**Current status:** No public production application, authenticated chat service, payment integration, or live AI assistant is claimed here. Future development and licensing decisions will be discussed with collaborators.

---

*Origin: “招待のアプリを作りたい” — I want to build an app for invitations. This repository expands that idea into an event-centered community workspace.*
