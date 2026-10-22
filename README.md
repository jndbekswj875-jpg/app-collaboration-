# Community AI Workspace

**Stay connected. Share the plan. Make things happen together.**

We are designing a **free-to-use, AI-assisted chat workspace** for friends, personal events, and local communities. The goal is simple: help everyone find the right information at the right time, even when conversations move quickly and people cannot always reply immediately.

**[Japanese version](README.ja.md)** · **[Tell us your event-planning problem](https://github.com/jndbekswj875-jpg/app-collaboration-/issues/new?template=feedback-en.yml)**

> **We're still building it.** A local browser demo exists, but real multi-person chat and the AI assistant are not available as an online service yet. We intend to make the service free for personal and community use. No payment, subscription, or live account is being offered here.

## When the information is there—but no one can find it

Have you ever organized a birthday, trip, club meetup, study group, volunteer activity, or local event?

Someone suggests a date in chat. Another person asks about the location. A third person joins late. Decisions get buried, people miss updates, and the organizer has to explain the same thing over and over.

**The problem is the gap between talking together and understanding the same plan.**

## What we want to build

A shared space that combines **group conversation + an organized board + an AI chatbot assistant**.

- **Talk together.** Discuss an event or community project in one group chat.
- **Find what matters.** Ask the AI assistant to summarize selected conversations so people can catch up faster.
- **Share one clear plan.** Keep meeting details, confirmed decisions, tasks and unanswered questions in one place.
- **Stay in sync.** Help people who join late or respond slowly understand what has changed.
- **Organize your way.** Add simple event invitations and attendance responses when those features are useful.

AI suggestions should remain drafts until people check and confirm them. Members should be able to control what private conversations the assistant may process.

## One event hub — not another app to juggle

**This is also a marketing and communication tool for event organizers.** An organizer shouldn't have to move between an event promotion page, group chat, email, phone calls, RSVP spreadsheets, and separate update tools just to hold one gathering.

The vision is **one event workspace** for the event's entire journey:

1. **Create the event.** Give it a title, description, date, location, and optional public or invite-only page.
2. **Promote and invite.** Share a single event link that explains what the event is about and how to join. Event discovery or promotion can happen from that page; we won't claim the app can automatically advertise on third-party platforms.
3. **Connect directly with attendees.** Let people ask the organizer questions and communicate inside the same event space, rather than being forced to move to email or another messenger.
4. **Keep everyone up to date.** Post one important announcement—such as a new meeting point or schedule change—and make it visible immediately to authorized attendees, with optional notifications.
5. **Manage preparation.** Track RSVPs, responsibilities, unanswered questions and the latest confirmed event information.
6. **Later, let AI help.** The event-organizer chatbot could turn repeated attendee questions into draft FAQs, summarize changes, suggest tasks, and prepare update messages for the organizer to approve.

**For attendees:** One link to see the latest plan, respond, ask a question and find updates.  
**For organizers:** One place to introduce the event, communicate, answer questions and manage preparations.

The goal is to **reduce the need to switch between platforms**, not to claim that existing email, phone, or external social platforms are already integrated. Built-in voice calls, third-party posting and outbound email delivery are *possible later features*, not current capabilities.

[Explore the event hub and communication concept](docs/EVENT_HUB_CONCEPT.md).

## Our roadmap: build the workspace first, then add the AI organizer

### Stage 1 — A useful chat-based workspace, without AI

Start with a simple place people genuinely want to use for organizing a gathering.

- **Private group chat:** Invite friends, talk in real time, and find the conversation again later.
- **One event space:** Keep the event's date, meeting point, description, and updates together.
- **Shared information board:** Show decisions, undecided questions, a checklist, and who's responsible.
- **Attendance and progress:** Members can respond to invitations and see which preparations are complete.
- **Works even without AI:** People can enter, edit, confirm, and share details themselves.

**First major milestone:** Two invited members can sign in from different browsers, exchange messages, and see the same saved group plan securely. This is **not yet complete**.

### Stage 2 — Add an AI event-organizer assistant to reduce repetitive work

Once the chat and shared information work, introduce an **AI chatbot inside the workspace** to help an organizer with simple, time-consuming tasks:

| Repetitive organizing task | What the AI assistant could help with |
| --- | --- |
| Re-reading hundreds of messages | Summarize updates and explain what's changed |
| Repeating the same answers | Draft a concise event-information FAQ from confirmed details |
| Finding out who is doing what | Suggest a checklist and possible task owners for review |
| Chasing unanswered questions | Highlight missing RSVPs, missing details, or open decisions |
| Writing reminders and announcements | Prepare a message for the organizer to approve and send |
| Figuring out what needs attention next | Suggest the next small organizing step, with context |

Example questions you could ask: **“What's left to organize?”**, **“What did I miss?”**, **“Which decisions are still open?”**, and **“Prepare a reminder for everyone who hasn't replied.”**

**People stay in control.** The AI must not invent confirmed decisions, read messages without appropriate consent, send reminders automatically without permission, book venues, or spend money on its own.

For the first real AI version, we can integrate and evaluate an existing hosted AI model through a secure server connection. Later, we may improve a specialized event-organizer assistant or compare self-hosted models based on actual user needs and cost. **No custom-trained AI model exists in the project yet.**

[See the step-by-step product roadmap](docs/APP_ROADMAP.md).

## For example: organizing a weekend gathering

| Group conversation | What the workspace could show |
| --- | --- |
| “How about Saturday afternoon?” | Possible date — awaiting agreement |
| “I can bring drinks!” | Suggested responsibility — needs confirmation |
| “Where are we meeting?” | Open question — meeting place |
| “Sorry, I missed the messages.” | A quick recap of what was decided and what's still open |

**The goal is not to replace chats or friendships. It is to close the information gap that makes organizing together harder than it needs to be.**

## We'd love to hear from you

You don't need to know anything about programming. We want to understand **how you personally organize events and what frustrates you**.

1. What kinds of events or group activities do you organize or join?
2. Which apps do you use to communicate, invite people, and share plans?
3. What information is often missed, repeated, or hard to find?
4. What would you want an AI chat workspace to do for you?
5. Would you be interested in trying a free early version when it's ready?

**[Share your experience or request a feature →](https://github.com/jndbekswj875-jpg/app-collaboration-/issues/new?template=feedback-en.yml)**

GitHub feedback posts are public and usually require a GitHub account. Please describe your experience in general terms; **do not post real private chats, addresses, phone numbers, or other people's personal information.**

## Want to see the idea in action?

There is a small **single-browser interface demo** with sample conversations, a board, and rule-based draft suggestions. It is **not yet connected to a real AI model** and does not synchronize between people.

- [See current development status](docs/CURRENT_STATUS.md)
- [Open the demo source code](app/)
- [Preview the demo in GitHub Codespaces](docs/PREVIEW.md)
- [Detailed product idea](docs/PRODUCT_VISION.md)

### Free for personal and community use

Our aim is to build something people can use without paying to organize their everyday gatherings. Right now we are learning what would genuinely help and testing a prototype—not asking anyone to buy anything.

*The project also has a public developer workspace for people who want to explore the code: [developer guide](docs/DEVELOPER_GUIDE.md). That is separate from this user-feedback invitation.*
