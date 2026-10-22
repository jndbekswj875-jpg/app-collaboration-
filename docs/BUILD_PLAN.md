# Development Task Plan

**Japanese version:** [Japanese version](BUILD_PLAN.ja.md)  
**Purpose:** Help volunteers choose a clearly scoped contribution. Tasks are proposals, not assignments, paid positions, or scheduled commitments.

## First milestone: chat before everything else

Two invited users can join a private group, send messages in real time in separate browsers, and maintain one shared task board. Uninvited people cannot read the group. Next, test a consent-based AI assistant that proposes board items for human review.

## Workstream 0: understand users and agree on scope

| ID | Task | Definition of done |
| --- | --- | --- |
| P-01 | Talk with a real event organizer about their last event and what was difficult. | An anonymized workflow and one repeated pain point |
| P-02 | Design mobile-first Group → Chat → Board screens. | Three or four connected sketches showing membership and AI consent |
| P-03 | Compare simple hosting, database, authentication, and realtime options. | One architecture note with security, cost and maintenance tradeoffs |

## Workstream 1: private real-time chat

| ID | Task | Definition of done |
| --- | --- | --- |
| C-01 | Build responsive group, invitation, and login screens. | Works on phone and desktop with clear errors |
| C-02 | Implement secure authentication, invitations, membership and roles. | Server rejects unauthorized group access |
| C-03 | Store group messages and broadcast real-time updates. | Two browsers sync and refresh restores history |
| C-04 | Build message list, composer, timestamps, loading and error handling. | Usable interface connected to live backend |
| C-05 | Test access isolation, rate limits, bad inputs and mobile behavior. | Documented tests with no known private-group exposure |

## Workstream 2: shared board

| ID | Task | Definition of done |
| --- | --- | --- |
| B-01 | Build task, decision, and open-question board cards. | Authorized members create and update shared records |
| B-02 | Separate suggested, disputed, and confirmed states clearly. | Drafts cannot be mistaken for accepted decisions |
| B-03 | Test simultaneous edits, history, member permissions. | Expected conflict and access behavior is documented |

## Workstream: event promotion and direct attendee communication

These features expand the **chat-first workspace**, before any AI assistant or third-party integration is required.

| ID | Task | Definition of done |
| --- | --- | --- |
| H-01 | Event create/edit page: title, description, date/time, place, organizer, optional capacity | Authorized organizer can publish a saved event page; changes are persisted |
| H-02 | Public event link and visibility controls | Public event summary is shareable, while invite-only details and private chat are server-protected |
| H-03 | Event-scoped attendee questions and organizer answers | Authorized attendee and organizer communicate in the same workspace across devices |
| H-04 | Real-time event announcements and confirmed-detail updates | Attendees see newest confirmed information, with timestamps and safe reconnect handling |
| H-05 | RSVP, membership and relevant event dashboard | Organizer sees accurate counts and attendee progress only as permitted |
| H-06 | Optional notification preferences and delivery | Attendees opt in/out; delivery status, abuse controls and failure behavior are testable |
| H-07 | Organizer-to-attendee feedback and moderation | Questions, reports, and announcements obey group permissions and privacy controls |
| H-08 | Integration feasibility for calls, outgoing email or external promotion | Do not implement until user needs, provider costs and consent boundaries are assessed |

**Ordering:** C-02/C-03 secure groups and messaging → H-01/H-02 event page and visibility → H-03/H-04 direct communication and updates → H-05 attendance → optional H-06/H-08 notifications or external integration → A-01 onward AI assistance.

**AI integration after this foundation:** Summarize permitted attendee questions, prepare a frequently asked questions draft from confirmed event facts, suggest responses and announcements, and let the organizer approve all outgoing communication.

[Event hub concept](EVENT_HUB_CONCEPT.md). This is a roadmap, not a claim that these capabilities are already live.

## Workstream 3: first AI experiment

| ID | Task | Definition of done |
| --- | --- | --- |
| A-01 | Add a server-side adapter for OpenAI API or Claude API. | Provider is configurable; API keys remain secret |
| A-02 | Request permission and show the exact message range to process. | User can decline without losing normal chat access |
| A-03 | Produce validated task/decision/question suggestions as drafts. | Review, edit, approve and reject all work |
| A-04 | Evaluate 10–20 synthetic or permissioned event chats. | Record accuracy, hallucinations, review time, language quality and cost |
| A-05 | Add quotas, cost logs, rate limits and reliable errors. | AI stops safely at limits while group chat still works |

## Workstream 4: event and community features

| ID | Task | Definition of done |
| --- | --- | --- |
| E-01 | Event information and Yes/Maybe/No RSVP. | Each user can update their answer; counts remain correct |
| E-02 | Optional member profiles and privacy-controlled social links. | Non-consented contact details stay hidden |
| E-03 | Expense/contribution records without real payment processing. | Totals and verification status are accurate |
| E-04 | Stories, posts and recurring activities. | Build only after evidence members actually want them |

## Workstream 5: compare local AI later

| ID | Task | Definition of done |
| --- | --- | --- |
| L-01 | Measure real API usage and cost per useful reviewed summary. | Verified token and spending baseline |
| L-02 | Benchmark a licensed self-hosted model on matching safe examples. | Document quality, latency, hosting and maintenance |
| L-03 | Decide hosted, local or hybrid using quality-adjusted total cost. | Written decision supported by real evidence |

## Suggested dependency order

```text
P-01, P-02, P-03
       |
C-01 + C-02 → C-03 → C-04 → C-05
       |
B-01 → B-02 → B-03
       |
A-01 + A-02 → A-03 → A-04 + A-05
       |
E-01 ... E-04, based on actual need
       |
L-01 → L-02 → L-03, if costs justify it
```

Frontend mockups can be created while backend access controls are being developed. Do not introduce private real-user data before access-control tests.

## How to pick a task

Choose **one ID** and open a [GitHub Issue](https://github.com/jndbekswj875-jpg/app-collaboration-/issues) describing your proposed contribution, deliverable, and questions. Agree on scope, review process, code license, and ownership before major work. Use invented or permissioned test data and never publish secrets or private messages.

**First acceptance checkpoint:** Two authorized test users chat privately and see the same task board from separate browsers; an outsider is blocked. The optional AI action only prepares an editable draft.

**Related:** [System design](SYSTEM_DESIGN.md) · [Marketing validation](MARKETING_VALIDATION.md) · [Contributing](../CONTRIBUTING.md).

## What the AI event organizer should automate *after* the chat works

The first AI release should focus on repetitive tasks rather than replacing organizers:

| Task ID | User-facing outcome | Verification |
| --- | --- | --- |
| A-06 | Catch-up summary and what changed since the last review | Only permitted messages are included; proposed vs confirmed details are distinguished |
| A-07 | Missing-information checklist and draft task owners | Unanswered questions and unaccepted volunteers stay unconfirmed |
| A-08 | Event FAQ and reminder drafts from the confirmed event record | Drafts require human approval; no unsolicited outgoing messages |
| A-09 | Japanese/English support and correction workflow | Human testers can fix errors; meaning is not silently changed |

**Integration order:** Persisted group chat and permission checks → manual board and confirmed event details → consented assistant read action → structured drafts → human-approved changes. AI must never be a prerequisite for basic chat, event viewing or board editing. Details: [Chat first, AI second roadmap](APP_ROADMAP.md).
