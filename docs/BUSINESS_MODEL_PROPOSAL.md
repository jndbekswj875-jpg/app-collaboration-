# Web-first Business Model — Proposal (not launched)

**Status:** Working hypothesis, 22 October 2026. This document proposes how the [Community AI Workspace](../README.md) *might* create customer value and eventually become sustainable. It is **not** a pricing announcement, commitment to paid features, confirmation of investor funding, or evidence of paid customers. The [product blueprint](PRODUCT_BLUEPRINT.md), [current implementation status](CURRENT_STATUS.md), and [marketing validation](MARKETING_VALIDATION.md) remain authoritative for features and released capabilities.

## One-sentence thesis

Help a small event organizer reduce the time and confusion of managing an event across chat, updates, RSVP and tasks, while keeping basic community participation free. **Sell an optional, verified organizer outcome—not chat access or hypothetical AI tokens.**

## Customer → problem → measurable result

| Element | First hypothesis | Evidence needed |
| --- | --- | --- |
| Initial buyer | Organizer of recurring small community events | A real person running an actual event |
| Users | Organizer, helpers and invited attendees | Willingness to use an accessible, privacy-respecting flow |
| Pain | Event decisions and updates scattered across messaging tools, spreadsheets and forms | Concrete recent examples and time/effort lost |
| First useful result | One place for confirmed details, attendee questions and a shared manual task board | Fewer repeated answers or corrections; measurable minutes saved |
| AI value (later) | Human-reviewable summaries, FAQ and bilingual announcement drafts grounded in authorized content | Accuracy, reduced editing time, transparent per-use cost |
| Reason to return | Repeat event workflow and participant trust | Voluntary reuse at another event |

**Competing alternative:** doing nothing new and continuing with LINE/WhatsApp plus a form and spreadsheet. A new interface is justified only when it clearly improves this existing workflow.

## Business model: free core, optional paid organizer value

1. **Free community core — intended commitment:** group participation, manual discussion and coordination are usable without an AI subscription. Current code is a *single-browser* demonstration only; production shared chat requires security, backend and testing.
2. **First revenue experiment — manual/concierge service:** for one willing organizer, offer to prepare an event communication plan, FAQ and checklist using facts they supply. Define agreed scope, delivery, revisions and a *price hypothesis* before taking any payment. Do not imply the software already delivers this service.
3. **Optional organizer upgrade (later):** pay for a bounded package of reviewable AI summaries, bilingual drafts, recurring-event templates or higher organizer capacity when a sufficient saving is demonstrated. Consider a pay-per-event or capped monthly model; test which aligns to actual use. Never put open-ended inference spend behind an unlimited free chat box.
4. **Ticket sales (separate and later):** optional transparent platform/service fee may be explored only after reliable event records, trusted payments, tax/refund compliance, clear participant prices and organizer consent. Ticket revenue belongs to event sellers; only an explicitly agreed earned platform fee would be our revenue. No live ticketing today.
5. **No ad-based funding assumption:** traffic and visitors are not proof of monetization.

An illustrative sales formula, **not a price forecast**:

`Monthly collected revenue = paying organizers × actually collected fee per organizer.`

`Contribution per paid organizer = collected fee − payment/provider fees − AI/API usage − allocated variable hosting/storage − direct human delivery/support cost.`

Monitor **cash collected**, not signups, expressions of interest or ticket gross merchandise value. Estimate founder time separately and subtract any fixed expenses/taxes before claiming net profit.

## Funding policy / cost containment

- **Before the first validated customer problem:** use the existing prototype, documentation, local tests and manual organizer workflow. Avoid recurring software subscriptions, paid AI usage, or purchasing capacity speculatively.
- **Hosting architecture:** GitHub is the code/version-review home, *not* a production AI backend. GitHub Pages is a static publishing option, but its terms prohibit using Pages as free hosting for commercial SaaS or transaction-focused business sites. Evaluate an eligible commercial hosting provider separately before any launch. Free tiers are quotas, not infinite capacity or an uptime guarantee.
- **First connected users:** deploy only after server-side authentication, access isolation, secure persisted chat, retention/deletion decisions and rate limiting are verified.
- **AI when justified:** add a server-only provider adapter, protect credentials, limit accessible message scope with informed consent, require organizer approval on drafts, add per-event/user usage caps and a global hard spending limit. A ChatGPT subscription is not a developer API budget.
- **Cost model:** measure actual monthly fixed burn and per-event variable cost. Approve spending explicitly before introducing recurring expenses, payment providers or AI model calls.
- **No self-hosted GPU assumption:** a local/open-weight model might cost less *only after* quality, privacy, compute, energy, maintenance and support are compared to real hosted-model consumption.

## Milestones, conditions and decisions

| Gate | Smallest useful action | Pass condition | Decision |
| --- | --- | --- | --- |
| G0 — Problem | Interview/observe one real organizer and one complete event workflow | Source-grounded repeated friction and time cost | Continue, narrow or stop |
| G1 — Manual result | Deliver a consented FAQ/update/task-board service with existing tools | Organizer confirms useful result and time/effort | Test commercial commitment |
| G2 — Real workspace | Build two-person secure shared chat + manual board | Separate browsers sync; nonmember read/write is denied | Invite limited beta users |
| G3 — Actual willingness to pay | Present a clearly scoped optional organizer service with terms | Genuine acceptance/paid pilot; tracked delivery cost | Keep, revise or stop offer |
| G4 — AI cost/quality | Benchmark permitted event summaries and drafts | Human-approved accuracy, time saved and observed unit cost | Decide API on/off and caps |
| G5 — Repeatability | Run further events with actual organizers | Repeat use and sustainable contribution | Only then invest in scaling |

Product dependencies and tests remain in [BUILD_PLAN.md](BUILD_PLAN.md). Funding and feature work must not overtake these evidence and security requirements.

## Simple scorecard (record only observed values)

- Organizer interviews / real pilots / repeat organizers
- Organizer minutes spent before and after an actual event
- Free group utility and permission/access failures
- Paid offers shown / accepted / fees **received** / refunds
- Human service hours and estimated effective hourly contribution
- AI cost per useful accepted output, error/correction rate, and cap breaches
- Retention and a continue / change / stop decision after each pilot

**Next checkpoint:** Identify the most expensive *actual* organizer communication failure from one recent event, then demonstrate a small manual improvement. No production AI, ticketing or payments should be represented as live before their real acceptance tests pass.

**Public/private boundary:** This is a public collaboration proposal. Private business finances, personal priorities, member data and customer conversations should never be copied into this repository.
