# Integration contracts for contributors

[Japanese version](COMPONENT_CONTRACTS.ja.md)

**Status:** Proposed module boundaries for the next iteration. The contracts below are not implemented APIs yet.

## Why this document exists

Different friends can build the chat UI, shared board, backend and AI adapter in separate branches, but the pieces must share predictable inputs, outputs and permissions. Agree on the minimal interface in a GitHub Issue before introducing an incompatible server API.

## Client modules

- Group view consumes a list of groups with group id, name, description and the current user's role.
- Chat view consumes messages scoped to one group; every message has id, group id, author id, text, created-at timestamp and delivery status.
- Board view consumes items scoped to one group; each item has id, kind (task/decision/question), text, state (draft/open/done/confirmed) and source references if present.
- AI review view consumes suggestions with source message IDs and uncertain/proposed state; accepting a suggestion is a separate authorized operation.
- The event view consumes event id, group id, date/time, venue, capacity and each member's own RSVP.

## Proposed backend operations

| Operation | Input | Output / rule |
| --- | --- | --- |
| listGroups | authenticated session | only groups the caller belongs to |
| listMessages | group ID, cursor | paginated messages, group authorization required |
| postMessage | group ID, text, client request ID | validated, deduplicated saved message |
| subscribeGroup | group ID, last event cursor | scoped message/board updates with reconnect handling |
| listBoardItems | group ID | authorized current board items |
| updateBoardItem | group ID, item ID, state/version | authorized update, conflict handled |
| requestAiDraft | group ID, selected message IDs, consent evidence | draft only, provider quota and retention applied |
| reviewAiDraft | suggestion ID, approve/edit/reject | authorized review, separate from draft creation |
| updateRsvp | event ID, own RSVP | response changed for current authenticated user only |

## Data and safety rules

1. Never use a client-supplied user ID as proof of identity; obtain it from the authenticated session.
2. Every endpoint, subscription and mutation must check membership and role on the server.
3. Do not trust group IDs or source-message IDs from the UI without authorization.
4. Never expose private contact fields or optional absence reasons to unauthorized members.
5. AI requests must be limited to permissioned selected messages and cannot directly confirm tasks or send messages.
6. Support safe repeated requests, documented errors (unauthorized, forbidden, invalid data, conflict, rate limited), and migrations for storage changes.
7. Avoid embedding platform-specific SDK calls into every view. Keep the service adapter in one place.

## Merging independent work

Contributors should first agree on one operation, an example request/response, authorization behavior, and acceptance tests in the corresponding GitHub Issue. The implementation can then be submitted as a focused pull request. If the interface must change, update this contract and the dependent tasks in the same PR.

**Starting point:** [Current status](CURRENT_STATUS.md) · [Developer guide](DEVELOPER_GUIDE.md) · [Build plan](BUILD_PLAN.md) · [Open Issues](https://github.com/jndbekswj875-jpg/app-collaboration-/issues).