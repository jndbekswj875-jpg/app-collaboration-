# Current build status

**Status date:** 2026-10-22
**Current stage:** v0.1 — local demo prototype, not production.

[Japanese version](CURRENT_STATUS.ja.md)

## Working in code

| Capability | Current state | File |
| --- | --- | --- |
| Browser interface | Code added | app/index.html and app/styles.css |
| Group selection and demo group creation | Local browser demo | app/src/main.js |
| Chat composer and message history | Local browser demo, not real realtime | app/src/main.js |
| Persistence after browser refresh | localStorage only | app/src/main.js |
| Manual shared task board | Local browser demo | app/src/logic.js |
| Reviewable suggested board items | Keyword rules, NOT an AI model | app/src/logic.js |
| Demo event RSVP | Only this browser | app/src/main.js |
| Optional demo profile | Only this browser | app/src/main.js |
| Logic unit tests | Added | app/tests/logic.test.js |
| Pull-request checks | CI configuration added | .github/workflows/ci.yml |

## Not built yet

- Secure user accounts and server-side authentication.
- Actual invitation delivery and group membership enforcement.
- Server, shared database, and real-time messaging across different users.
- Server-persisted shared board, event attendance, and member profiles.
- OpenAI API, Claude API, or self-hosted AI integration.
- Group-level AI permission management, production moderation, retention policy.
- Payment provider and secure financial workflows.
- Production deployment or service uptime.

**Security boundary:** All current group content is sample/local browser content. Do not enter sensitive personal information into this prototype, and never describe it as a secure group chat service.

## New product direction, not yet implemented

The [central product blueprint](PRODUCT_BLUEPRINT.md) now also describes **ticket selling**, digital entry, a hosted-model-first **AI organizer and marketing assistant**, and possible later self-hosted/adjusted AI models. All of these remain **planned**:

- [ ] Public event pages with actual audience-facing publishing.
- [ ] Free registration and server-backed RSVP at real events.
- [ ] Ticket offers, accurate inventory, payment-provider checkout, confirmed issuance, and staff check-in.
- [ ] Payment refunds, seller policies, fees, compliance and financial reporting.
- [ ] Real OpenAI/Claude API integration and approved organizer/marketing drafts.
- [ ] Measured own-model or self-hosted AI evaluation.
- [ ] Real notification sending, external promotion or marketing automation.

**Reminder:** This repository's existing “AI” suggestions are keyword rules only; no provider keys, charging capabilities or real attendee data are included. See [detailed roadmap](APP_ROADMAP.md).


## Run it on your computer

From the project root, run:

    npm run check
    python3 -m http.server 4173

Then open http://localhost:4173/app/ in your browser. Python starts a small local static server; it is not a chat backend.

Try selecting a group, sending a message, adding a task, generating rule-based drafts, accepting a suggestion, refreshing, and resetting.

## Real chat acceptance criteria

To graduate to v0.2, two different authorized accounts must exchange messages live through separate browsers and see the same server-stored history after refresh. A non-member must be denied both read and write access through the backend. These conditions are not met in v0.1.

## Collaboration workflow

1. Choose one Issue from the public task backlog.
2. Create a feature branch or fork.
3. Modify the relevant app module and add tests.
4. Run npm run check and manually verify behavior.
5. Submit a pull request referencing the Issue, with screenshots and acceptance criteria.
6. Maintain one clear main branch: changes join the system only after review and passing checks.

See [development tasks](BUILD_PLAN.md), [developer guide](DEVELOPER_GUIDE.md), and [GitHub Issues](https://github.com/jndbekswj875-jpg/app-collaboration-/issues).

Public documentation is completely separate from private personal planning notes.