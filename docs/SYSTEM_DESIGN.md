# System Design: Community AI Workspace

**Language:** [Japanese version](SYSTEM_DESIGN.ja.md)  
**Status:** Proposed architecture for discussion. Nothing described here should be interpreted as deployed software.

## Architecture

```text
Mobile/desktop browser
   | 
   v
Web app: group invitation, profile, chat, board, event page
   |
   v
Backend: authentication + group permissions + API
   |---- Message database and group-scoped realtime delivery
   |---- Shared task/decision board and RSVP records
   |---- AI gateway: consent, selected messages, quotas, audit
              |
              |---- Hosted provider: OpenAI API or Anthropic Claude API
              |---- Possible later: self-hosted open-weight model
              |
              v
       Structured draft proposals -> human review -> confirmed board
```

## First usable version

Two invited test users sign in from separate browsers, exchange group-only live messages, refresh without losing history, and update one shared board. Uninvited users are denied access to messages. Then add an AI experiment generating draft proposals from selected, permitted messages.

### Functional modules

| Module | Responsibility | Build order |
| --- | --- | --- |
| Authentication | Secure sessions, sign-in, user identity | First |
| Group invitations | Invite links, expiration, member and moderator roles | First |
| Real-time chat | Composer, message history, live broadcast, delivery errors | First |
| Shared board | Tasks, proposed/confirmed decisions, unanswered questions | First |
| AI assistant | User-triggered summarization and structured suggestions | Next |
| RSVP | Yes/Maybe/No attendance and changes | After chat pilot |
| Member profiles | Optional bios, interests, social links and contact visibility | Limited first, expand later |
| Stories | Posts, updates, community memories | After demand |
| Expenses/payments | Contribution records first, processor-hosted payment later | After demand |

## Proposed records

- `users`: authentication reference and account creation.
- `profiles`: display name, optional bio, interests, social links, visibility controls.
- `groups`: group owner, name, description and privacy settings.
- `group_members`: member roles and permissions.
- `invitations`: group identifier, hashed token, expiry and usage rules.
- `messages`: group identifier, author, body, timestamps and deletion status.
- `board_items`: group/event, type (task/decision/question), status (draft/confirmed), proposed assignee and source references.
- `events`: group, title, time, venue, capacity and status.
- `rsvps`: event, participant, response, update time, private optional answers.
- `ai_requests`: requester, permitted message IDs, provider, model, usage and status.
- `ai_suggestions`: AI proposal, human reviewer and approval history.

Enforce authorization server-side on **every read and write**. Hide private group information from public pages, and restrict visibility of social contacts and RSVP absence reasons separately.

## Real-time message lifecycle

1. Authenticate the sender and verify group membership.
2. Validate content and enforce abuse/rate limits.
3. Store the message transactionally with server timestamp and group ID.
4. Publish a realtime event only to authorized group subscribers.
5. Recheck membership on subscriptions and reads; support reconnection and duplicate-delivery handling.
6. Let moderators manage group membership, reporting and removal.

## AI-to-board lifecycle

1. An authorized member requests a summary, selecting an event and message range.
2. The server checks group permissions and the agreed rules for sending those messages to the selected AI provider. Members must understand and be able to decline the AI processing scope.
3. Send only the minimum necessary permitted context from the backend.
4. Request structured proposals of tasks, decisions, open questions, suggested owners and source message IDs.
5. Validate the response schema; flag uncertain or conflicting statements.
6. Store suggestions as **drafts**, not confirmed decisions.
7. A human edits, accepts or rejects each suggestion.
8. Track usage, request costs and approval history in a protected audit log.

**Example:** “Saturday works for me” must not become “The event is confirmed for Saturday” without further agreement.

## AI cost strategy

**Initial provider:** Use a server-only adapter to OpenAI API or Anthropic Claude API. Keys live in server-side secrets management, never client code or public repositories. Limit prompt length, calls per member/group, total spending, and unnecessary historical context. Measure cost per **useful human-approved summary**, not merely cost per generated response.

**Later comparison:** After real usage is known, benchmark a self-hosted, properly licensed open-weight model on the **same synthetic or permissioned test cases**. Evaluate accuracy, false decisions, English and Japanese reliability, response latency, CPU/GPU and memory needs, hosting/electricity costs, updates, privacy, and engineering time.

**Decision:** Choose hosted, local, or hybrid based on measured total cost and service quality. Local inference is not inherently free.

## Candidate tools (not selected)

A TypeScript web client, a managed authentication/PostgreSQL/realtime backend, and a server-side AI adapter are plausible options. Examples include Next.js and Supabase, but contributors should evaluate maintenance, cost, portability, accessibility and actual security requirements rather than assuming these tools are mandatory.

## Planned ticketing and AI model service boundaries

The ticket module is separate from group chat and the AI assistant. Its proposed backend flow is:

```text
Event page + authenticated organizer
     |
Ticket offers / capacity
     |
Server order + limited inventory reservation
     |
Hosted payment processor checkout
     |
Verified payment webhook + idempotent reconciliation
     |
Issue unique ticket → attendee's event wallet → secure check-in
     |
Refund / cancellation / reconciliation, restricted to authorized staff
```

Never issue a paid ticket from a client-side “success” URL alone. Verify authoritative payment state server-side and prevent inventory oversells or duplicate tickets. Do not store raw card details. Use an established provider for payments and decide policies for fees, seller onboarding, payouts, refunds, taxes and access to transaction records before launch.

**Data additions to evaluate:** `ticket_types` (event, price, currency, quota, sale window), `inventory_reservations`, `orders`, `order_items`, `payment_events`, `issued_tickets`, `checkins`, `refunds` and access-controlled audit logs. Server-side authorization, atomic state transitions, webhook verification, idempotency and unique-code validation are essential.

The AI remains a **separate permissioned service** that reads selected or approved event context and returns structured drafts. Start with an existing OpenAI/Claude developer API through a server adapter; later compare self-hosted or tuned models. The model cannot be given payment-provider credentials or permission to initiate charges, refunds, ticket issuance, marketing outreach or changes to prices without a separate explicitly authorized and safely implemented workflow.

**System modules can be developed independently against shared contracts:** Chat/group service, event hub, ticket/order service, payment adapter, organizer/marketing assistant, and optional reporting. See [central product blueprint](PRODUCT_BLUEPRINT.md) and [integration contracts](COMPONENT_CONTRACTS.md).


## Privacy and security baseline

- Private groups by default, role-based access and revocable invites.
- Explicit data-sharing controls for each optional profile field.
- Consent and transparent retention/deletion for chat content processed by an AI provider.
- No scraping historical private LINE or Instagram messages.
- No unapproved AI messages, reservations, financial transfers or public disclosure of private information.
- Abuse reporting, message deletion, rate limiting and access-control tests.
- Established payment processors for future actual payments; no sensitive card storage.

## Prototype acceptance test

Two authorized browsers exchange live messages, refresh history and share a board task; an outsider is unable to read or mutate the data. With permission, an AI call creates reviewable drafts without changing official board data. Test both typical and adversarial authorization cases.

**Related:** [Development tasks](BUILD_PLAN.md) · [Product vision](PRODUCT_VISION.md).
