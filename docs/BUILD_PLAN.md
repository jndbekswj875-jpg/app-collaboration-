# Development Task Plan

**Japanese version:** [Japanese version](BUILD_PLAN.ja.md)  
**Purpose:** Track scoped features and acceptance criteria as separate parts of one integrated application. These are planned tasks, not claims that features are already implemented.

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

## Workstream: ticket selling and secure event entry (independent module)

Add a ticket-selling module **after** the core event hub works. Free events and manual planning must remain available without it.

| ID | Task | Definition of done |
| --- | --- | --- |
| T-01 | Free/paid ticket types, amounts, limits, event capacity, selling window | Organizer can configure ticket offers; server validates availability |
| T-02 | Buyer orders and safe inventory reservation | Parallel purchases cannot oversell; abandoned orders expire |
| T-03 | Payment-provider checkout and price disclosure | Test payment uses a provider, with totals and rules visible; no card data stored |
| T-04 | Verified webhook and idempotent payment/order reconciliation | Only authoritative confirmed payments trigger paid ticket issuance |
| T-05 | Digital ticket issuance and owner visibility | Unique QR or code with server-verifiable state |
| T-06 | Staff check-in and anti-reuse controls | Invalid, refunded and used tickets rejected appropriately |
| T-07 | Refund, cancellation, transfer policy and attendee support | Correct state transitions, clear policy and reconciliation |
| T-08 | Financial summaries, organizer payout considerations and applicable legal/policy review | Accurate restricted records and pre-launch approval |

**Dependency:** Secure users/groups (#6), messaging (#7), shared board (#8), event hub (#17). Coordinate ticket data and access rules before implementation. Do not introduce live charges until a payment provider and all required review steps are selected.

## Workstream: AI model strategy and marketing-agent safety

**Existing hosted model first:** A-01–A-09 cover consented assistant integration, accurate summaries, FAQ and reminder drafts. Expand evaluation to accurate promotional copy, bilingual event descriptions and approved replies, always grounded in confirmed data.

| ID | Task | Definition of done |
| --- | --- | --- |
| M-01 | Provider-neutral AI service interface | Hosted model can be switched without rewriting chat or payment modules |
| M-02 | Measure hosted API outputs in English and Japanese | Quality, false statements, approval effort, latency and unit cost documented |
| M-03 | Benchmark appropriately licensed self-hosted or adapted open-weight model | Same safe test cases, including full compute and maintenance cost |
| M-04 | Choose hosted, own-model or hybrid based on evidence | Documented go/no-go decision; quality and safety do not regress |
| M-05 | Control AI marketing actions | External publication, contact, discounts and financial changes require explicit authorization |

**No AI access to payment secrets** and no unapproved marketing spam. Treat attendee messages and purchase records as private and purpose-limited.

[Central product blueprint](PRODUCT_BLUEPRINT.md).


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
