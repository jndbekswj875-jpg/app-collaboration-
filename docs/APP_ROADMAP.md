# Community AI Workspace — Chat First, AI Organizer Second

[Japanese version](APP_ROADMAP.ja.md) · [Project overview](../README.md) · [Current implementation status](CURRENT_STATUS.md)

## The goal

Create a **free-to-use, chat-based workspace** where friends, personal-event groups, and local communities can discuss plans and keep everyone informed. After the workspace becomes useful by itself, integrate an **AI event-organizer assistant** to reduce repetitive administration and help people act on the shared conversation.

**We are not releasing the AI first.** A chatbot without reliable group messages, permissions and shared event information would not solve the main problem: everyone understanding the same plan.

## Step 0 — Understand the real information gap

Ask organizers and participants about one recent event. Which messages were missed? Who repeated explanations? What changed at the last minute? Which tools were used? Collect general descriptions rather than real private chats.

**Success:** A few concrete, repeated problems and a clear reason to build the smallest chat + shared-information tool.

## Stage 1 — Build the chat-based workspace (the first usable application)

**Goal:** Organize a real group event without relying on any AI feature.

| Capability | What people should be able to do | Priority |
| --- | --- | --- |
| Accounts & private groups | Sign in, join by invitation, control membership, keep other groups out | Must-have |
| Real-time group chat | Send and receive messages across devices; read history after refresh | Must-have |
| Event information | Maintain one shared location for event title, time, place, description and changes | Must-have |
| Shared planning board | Manually create/edit tasks, confirmed decisions and unresolved questions | Must-have |
| Attendance response | Say going/maybe/not going and correct one's own answer | After core chat |
| Notifications | See meaningful updates; choose what notifications to receive | After secure shared data |
| Accessible mobile interface | Join and participate easily on a phone, in English or Japanese | Must-have |

### The missing bridge: event promotion and direct attendee communication

Before adding AI, the chat workspace should also support the basic *event lifecycle*:

1. **Create:** Organizer enters the event title, summary, date, place and optional capacity.
2. **Share:** Generate a stable event link and choose between public information and invitation-only details.
3. **Invite and attract:** Let visitors understand the event and request or confirm participation. Share the link in existing channels where helpful; automatic cross-platform promotion is not assumed.
4. **Communicate:** Provide event-scoped chat or questions, organizer responses and an accessible information page.
5. **Announce:** Organizer posts a confirmed update (e.g., new meeting location); authorized attendees immediately see the latest version. Opt-in notifications can follow.
6. **Coordinate:** Keep RSVPs, a checklist, responsibilities, and a change history together.

**First additional acceptance test:** A person with the correct access can open an event link, see current details, ask or respond to a question and view an organizer's saved update. An outsider cannot see a private discussion. Public promotion content and private attendee messages must have distinct access rules.

After Stage 1 is working, the AI assistant can use authorized event context to prepare responses to common questions, draft changes and reminders, and identify incomplete tasks. It should never send messages automatically, nor invent confirmed event details.

**Potential later additions:** in-app calls, outbound email delivery and optional cross-posting to external platforms. These require separate integration work and must not be presented as built-in today.

[Detailed event hub experience and privacy boundaries](EVENT_HUB_CONCEPT.md)

### What success looks like

Two invited people on separate devices can log in securely, discuss an event, and see the **same saved messages and board state**. The organizer can change a plan and participants can find the latest confirmed version. Outsiders cannot access group data. All basic coordination still works when AI is disabled.

### Sample flow

1. Create a group: "Saturday picnic".
2. Invite friends to discuss the date and meeting place.
3. Add a proposed event time to the shared board.
4. Confirm the final date once the group agrees.
5. Assign "bring drinks" only after someone accepts responsibility.
6. Review the event details from one shared place.

**Current reality:** The existing v0.1 repository demo implements only a single-browser interface, local messages and local board state. Authentication, real-time multi-user sharing and backend storage are not finished.

## Stage 2 — Integrate the AI event-organizer assistant

**Goal:** Make routine organizing work lighter once the basic chat and shared workspace are reliable.

The assistant is a helper inside the group workspace. A person can ask a question or explicitly request a suggestion. The assistant can read only authorized, consented context and should use the group's *confirmed* event records as the authoritative source for established facts.

| Organizer's repeated task | Intended assistant capability | Review required? |
| --- | --- | --- |
| Catch up after time away | Summarize selected messages and explain what changed | User chooses what to summarize |
| Answer the same event question | Draft an answer based on confirmed date, location and instructions | Yes before a public response |
| Make a preparation list | Propose tasks from an agreed event plan | Yes before creating shared tasks |
| Identify missing details | Highlight unanswered questions, unconfirmed dates, or missing roles | Yes before marking decisions |
| Check outstanding replies | Show who has not RSVP'd, subject to group permissions | Yes before contacting anyone |
| Write group announcements | Draft clear updates or reminders for review | Yes before sending |
| Coordinate the next step | Suggest what the organizer could do next, based on open items | Organizer chooses the action |
| Help bilingual groups | Draft or explain information in Japanese or English when requested | People check meaning |

### Example conversation

> **Organizer:** “What do I still need to do for Saturday?”
>
> **Assistant — proposed result:** “The meeting location is not confirmed, two people haven't responded to the RSVP, and the drinks assignment needs confirmation. Would you like a draft reminder?”
>
> **Organizer:** “Prepare a reminder about the location and responses.”
>
> **Assistant:** Creates a **draft message**, not an automatically sent notification.

The assistant should not invent decisions, silently add tasks, send unapproved messages, disclose participants' details, book venues, or make payments.

### How to build the AI layer

1. Establish safe data contracts for groups, messages, event details and confirmed tasks.
2. Add an explicit user action to request AI help, with visible scope and consent controls.
3. Connect a hosted model through a server-side provider adapter (for example, OpenAI API or Claude API); never store secrets in browser code.
4. Retrieve the minimum permitted context and ask for a structured result: summary, source-message references, tasks, unanswered questions and uncertainty.
5. Validate output and store it in a **draft / pending-review** state.
6. Let a person edit, approve or reject the recommendation before it affects shared event records or contacts others.
7. Test realistic, fictional or permissioned cases in **English and Japanese**. Track false decisions, organizer time saved, latency and cost.
8. Only after evidence supports it, evaluate a specialized tuned assistant or self-hosted open-weight model against the working hosted baseline.

**Building our own AI organizer** can mean building the workflow, tools, structured data, and behavior around an existing model. It does **not** require immediately training a new foundation model. No custom-trained model exists today.

## Safety principles from day one

- **Private groups:** Every message and board read/write needs server-side membership checks.
- **Explicit AI consent:** No silent background ingestion of conversations.
- **Uncertain vs confirmed:** A proposed date is never reported as an agreed date.
- **Human control:** Sending messages, reminders or invitations requires user approval and the correct permissions.
- **Data minimization:** Use only necessary context, respect removal and retention controls, avoid publishing private contact details.
- **Free-use intention:** This is being designed for personal and community use without charging users. The project is not a launched service yet.

## Open questions for future users

- Which event type would you try first: friends, clubs, travel, study groups, sports or local volunteering?
- What information is most often missed or misunderstood?
- Which small task takes the most organizer time?
- What would you trust an AI assistant to *suggest*, and what must remain in human hands?
- Would a shared board or a catch-up summary save you more time?
- Would you want reminders, and when should the app be allowed to send them?

[Share your experience or a feature idea](https://github.com/jndbekswj875-jpg/app-collaboration-/issues/new?template=feedback-en.yml)

## Implementation work

The public development backlog is documented separately in [BUILD_PLAN.md](BUILD_PLAN.md), with individual [GitHub Issues](https://github.com/jndbekswj875-jpg/app-collaboration-/issues). This roadmap explains **the user experience and sequence**, not a claim that all features are implemented.
