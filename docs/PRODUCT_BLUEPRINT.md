# Community AI Workspace — Product Blueprint

[Japanese edition](PRODUCT_BLUEPRINT.ja.md) · [Project homepage](../README.md) · [Development roadmap](APP_ROADMAP.md)

**Vision:** One chat-centered event workspace where people can discuss ideas, create and promote events, exchange timely information, manage attendees, and optionally sell tickets. An AI event organizer and marketing assistant will eventually reduce repetitive coordination work.

**This is a product plan, not a list of launched features.** The repository currently has a browser-local demo. Secure multi-user chat, checkout, actual ticket sales, and connected AI are not available.

## 1. The problem: organizing one event requires too many disconnected tools

A community host may need a social page for promotion, messaging apps to talk with attendees, email or calls for questions, spreadsheets for checklists and RSVP, a separate ticket site, and yet another system to announce last-minute changes. Information gets scattered, organizers repeat simple tasks, and attendees do not know which details are current.

**Our solution:** Make the event itself the central workspace and source of truth. Members communicate inside an event-centered chat. Confirmed information lives on a shared board and event page. The organizer can publish updates once for participants to see.

## 2. Who it is for

- **Community hosts:** Start with small free gatherings, local meetups, clubs, social events, and volunteer activities.
- **Attendees:** Discover or receive an event link; ask questions, share opinions, RSVP, find current information, and access a ticket if required.
- **Event organizers:** Coordinate staff or helpers, promote an event page, answer questions, check attendance, and optionally sell admissions.
- **Developers and testers:** Improve independently scoped modules through GitHub pull requests; development guidance stays separate from this user-facing explanation.

## 3. One connected event journey

| Step | Organizer | Attendee |
| --- | --- | --- |
| Create | Add title, description, date/time, location, visibility and capacity | Understand the event |
| Promote | Share one public event link and approved information | Learn about the event from a trusted link |
| Discuss | Open event chat or moderated Q&A; collect ideas | Ask questions and express opinions |
| Organize | Manage confirmed plans, roles, checklist, and changes | See the latest agreed information |
| Join | Offer free RSVP or a paid-ticket option when enabled | RSVP or purchase a ticket securely |
| Update | Post changes once; optionally notify opted-in attendees | See important updates without chasing multiple apps |
| Check in | Verify valid tickets or attendee status where appropriate | Enter with a valid ticket or registration |
| Follow up | Review feedback and publish a recap | Share feedback for future events |

**Public event promotion and private participant conversations are different data spaces.** A public link must not expose private chat, personal contact details, ticket-holder information, or internal organizer notes.

## 4. Main modules

### A. Chat-centered workspace — first priority

Start with a private group or event room. Users can communicate in real time, see saved history, and manually create/update a shared board of decisions, tasks, unanswered questions and event details. Members should be able to use the whole basic workspace even when AI is switched off.

**First real milestone:** Two invited, authenticated people use different browsers to exchange live messages and edit the same persisted group board. A nonmember cannot read or alter it.

### B. Event pages, promotion, and direct communication

A host creates a public or invite-only event page with a title, event description, date, time, venue, updates, and shareable link. Interested people can learn about the event, ask appropriate questions, and join the conversation without having to switch between separate event and chat platforms.

**Marketing role:** The event page is a destination that the organizer can promote through their own networks. A centralized hub does not automatically generate traffic, nor does it imply the app can post to external social channels today.

### C. Free registration and paid ticket sales — planned

A single event can offer **free RSVP**, a **free ticket**, or **paid ticket types** as the host chooses. The long-term checkout experience could include:

1. Host configures an event's ticket types, availability, sale window, capacity, and price in a specified currency.
2. Attendee sees the price and any applicable additional charges **before confirming** the order.
3. The application creates a server-side order and redirects to or embeds a **trusted payment provider checkout**.
4. The server verifies authoritative payment confirmation (including webhook signature and order state), updates ticket inventory safely, and issues a unique ticket or entry code.
5. The attendee finds their ticket and confirmed event details in the same workspace.
6. Staff validate/check in the ticket using secure, replay-resistant rules.
7. Hosts handle cancellations, refunds, transfers and attendee support according to explicit policies.

**Required controls:** inventory reservation/oversell protection, idempotent payments, fraud and chargeback handling, secure ticket verification, tax/fee and consumer disclosure where applicable, refunds, payouts, organizer identity checks when required, and payment-provider agreements. Do not store raw payment card information or promise a payout/fee structure that has not been chosen.

**Free-use intention remains:** People can use the planned basic community workspace without paying an app subscription. A **paid event ticket** is different from a fee for using the app. Any future payment processing fees, service fees and organizer terms must be communicated transparently before launch; none are set here.

### D. AI event organizer assistant — after reliable chat

A member could ask:
- “What decisions have been confirmed since yesterday?”
- “What is still missing before Saturday's event?”
- “Who volunteered to bring equipment?”
- “Create a preparation checklist from the confirmed event plan.”
- “Draft a reminder to people who haven't answered the RSVP.”

The assistant prepares **reviewable, source-grounded drafts**. It must distinguish tentative discussion from actual agreement, avoid hallucinating attendee details, and never send messages, change prices or access other members' private data without appropriate authority and approval.

### E. AI marketing assistant — after event pages and permissions

Once the event information and attendee communication work, the assistant may help hosts:
- Draft a compelling, accurate event description, title alternatives and promotional copy.
- Prepare Japanese and English announcements suitable for human review.
- Group and answer common attendee questions using **confirmed event facts**.
- Suggest channels, timing and content for promoting the event based on information the organizer intentionally provides.
- Draft event updates and follow-ups for **opted-in** recipients.
- Summarize **aggregate** event results, such as page visits, RSVP conversion, ticket sales counts and frequent anonymous questions, if lawful and instrumented.

**Marketing agent means an assistant to the organizer, not autonomous advertising or mass messaging.** Publication, outreach, external posting, targeting, sending reminders, discount changes, and money-related actions require explicit controls and human authorization. No unauthorized personal profiling or scraping.

## 5. AI model strategy: integrate existing AI, then evaluate our own

**First AI experiment:** Use an existing hosted **OpenAI API or Anthropic Claude API** through a server-side adapter. These are developer APIs, not a consumer ChatGPT or Claude subscription. Build the assistant's tools, domain-specific prompts, structured event data, grounding, evaluation tests, privacy and approval flows around that interface.

**Next:** Evaluate performance on Japanese and English event conversations. Track correct summaries, missed information, false agreements, human edits, response time, total API spend, and cost per helpful approved output.

**Longer-term goal:** Reduce dependence on hosted inference by evaluating a properly licensed **self-hosted open-weight model**, or fine-tuning a suitable base model for organizer tasks where evidence warrants it. Compare accuracy, latency, GPU resources, infrastructure, power, engineering labor, upkeep, safety, and total cost. The AI integration must stay replaceable at the server adapter boundary.

**Important distinction:** “Our own AI model” is an eventual product and research goal. Training a new foundation model from scratch is **not** a prerequisite for the app, is not promised, and is not currently completed.

## 6. Build order and dependencies

| Milestone | Deliverable | Dependency |
| --- | --- | --- |
| M0 — Existing code | Local UI and rule-based draft demo | Available in repository, not deployed service |
| M1 — Community chat | Secure groups, authentication, saved real-time messages, shared manual board | Backend, database and permissions |
| M2 — Event hub | Event pages, links, direct attendee chat/Q&A, RSVPs, confirmed live updates | M1 |
| M3 — Ticketing | Ticket catalog, secure paid checkout, payment confirmation, issuance and check-in | M2; selected payment provider |
| M4 — Hosted AI assistant | Organizer summaries, FAQs, task/reminder drafts, marketing copy | M1–M2; consent, data protection and approval |
| M5 — Own-model evaluation | Benchmark self-hosted or tuned model against hosted provider; switch only if justified | Real M4 usage and proven quality |

**Parallel development:** Ticketing and AI can be developed as separately reviewable modules once M1–M2's data and permission contracts exist. Neither should block use of free events.

[Detailed implementation roadmap](APP_ROADMAP.md) · [Build tasks](BUILD_PLAN.md) · [Integration contracts](COMPONENT_CONTRACTS.md).

## 7. What we will not claim

- The public web app, secure multi-user messaging, ticket checkout, payments and AI marketing automation are **not yet launched**.
- Event promotion does not guarantee visitor traffic or ticket sales.
- The app does not currently replace email, phone, social media, external ad platforms or payment providers.
- The AI does not independently contact people, buy ads, move money or change ticket prices.
- Paid ticket proceeds, processor costs, refunds and compliance must be designed and validated before any ticket sales.

## 8. Questions for future users

Which tools do you use to invite, promote and coordinate your events? How do you currently sell tickets? What gets lost between messages, RSVP forms and payment confirmations? Would one event link help? Which manual task should AI handle first, and which actions must always need approval?

[Share your experience](https://github.com/jndbekswj875-jpg/app-collaboration-/issues/new?template=feedback-en.yml). GitHub Issues are public; never share actual private attendee data, contact details, ticket codes or payment information.
