# Product vision: Community AI Workspace

**Document status:** Early ideas for discussion, not an approved implementation plan. **Priority: low / someday** (2026-10-22).

## 1. The problem

When people organize events and communities, information gets lost across chat conversations, spreadsheets, RSVP lists, social media, and payment apps. One person often spends considerable unpaid time replying to questions, updating lists, reconciling money, or reminding people of plans.

**Hypothesis, not validated fact:** A permission-based shared workspace + an AI event assistant could reduce coordination effort and help participants return between events.

## 2. Product promise

**One community, one workspace, with AI that helps people turn conversations into organized, agreed actions.**

The product should help with both **an individual event** (a specific meetup) and **the community between events** (members, relationships, stories, new ideas, updates). It should not turn friendships into an intrusive data-collection exercise.

## 3. Two user experiences

### Member experience
- Join an invited group and control the visibility of their own profile.
- Optionally add a name/nickname, bio, interests, Instagram/social profile URL, and contact preference.
- Chat in real time with community members; send comments and share event stories.
- See shared event decisions, upcoming plans, RSVP questions, and their own contribution status.
- Check an AI-created board summary and correct anything incorrect.
- Discover upcoming events and see relevant community posts, subject to permissions.

### Organizer experience
- Create events, invite a group, assign organizer/moderator roles, and manage RSVP/capacity.
- View attendance as attending, maybe, declined, pending; reasons should be optional and not broadly disclosed.
- Assign preparation tasks and track who volunteered.
- Record estimated expenses and contribution/payment **status** (not store actual money).
- Review AI-proposed summaries, to-dos, decisions, unanswered questions, and reminder messages.
- Approve communications and changes; archive decisions and learn for the next event.

## 4. Proposed core objects (conceptual data model)

- **User**: identity/authentication and preferences.
- **Member profile**: chosen public name, bio, interests, optional socials and opt-in contact fields.
- **Group**: membership, roles, invitations, privacy settings.
- **Message**: group conversation, timestamps, author, media/access settings.
- **Event**: group, title, date/time, location, capacity, description and status.
- **RSVP**: event/member, answer, optional question responses, modification history.
- **Task**: description, assignee, status, deadline, event/group.
- **Decision / board item**: source and author, proposed/confirmed state, edits.
- **Contribution / expense**: amount/currency, payer or participant reference, verification state.
- **AI suggestion**: consent scope, related source messages, generated text, reviewer and approval state.
- **Activity / feedback**: community stories, event retrospectives, privacy controls.

## 5. AI assistant workflow

1. Members discuss an event normally.
2. A group moderator or member invokes **Summarize / Suggest board updates**.
3. The server checks who is allowed to expose the selected messages to AI, according to clear, previously disclosed settings.
4. AI proposes structured items: date options, venue ideas, unresolved questions, proposed tasks, costs, or RSVP reminders.
5. Members or moderators review the proposed summary, identify mistakes, and approve changes before the board becomes authoritative.
6. The event board links back to permitted source context when possible; people can correct/delete their information as appropriate.

**Illustration**

Chat: “Saturday works for me.” / “Can someone bring ice?” / “I can bring it.”

AI **drafts**:
- Date: Saturday (confirmation still needed)
- Open question: exact time?
- Volunteer task: bring ice — proposed assignee, confirm before assigning

AI must not treat suggestions as unanimous consent, invent attendance, or assert financial settlement without records.

## 6. Product phases

### Phase 0 — Discover the real problem (next gate, when prioritized)
- Follow one real event and document the organizer's current process.
- Interview or observe recurring organizers; measure repetitive questions and minutes spent.
- Run a lightweight RSVP + manually curated update-board experiment.

### Phase 1 — Minimal event workspace (only after evidence)
- Branded event page, invitations by link, member or guest RSVP.
- Organizer dashboard for response changes and basic task board.
- Edit history and moderation; secure, shared data storage.
- No real-money handling, no private chat imports, no AI automation.

### Phase 2 — Community & collaboration
- Optional profiles, groups, invitation roles, real-time chat, shared stories/activity.
- Group moderation, blocking/reporting where relevant, access controls.
- Searchable shared boards.

### Phase 3 — Consent-based AI assistance
- On-demand summaries and action-item proposals with human review.
- Draft messages/reminders and flag unresolved questions.
- Usage controls, logging, retention rules and cost caps.

### Phase 4 — Verified advanced workflows
- Payment provider integration, settlements, check-in, recurrent events, external messaging integration.
- Build only features supported by repeated customer evidence and sustainable cost.

These phases describe a **possible** direction. There is no delivery date or budget commitment yet.

## 7. UX screens (concept only)

1. Community landing page / events.
2. Group invitation and optional member profile.
3. Group chat and story feed.
4. Shared event decision/task board.
5. Event page and RSVP.
6. Private organizer dashboard.
7. AI assistant review queue with clear source and approval actions.

## 8. Technology options for future discussion

For a small web-first experiment, a conventional frontend plus managed auth/database/realtime service may be sufficient (e.g. Next.js with Supabase). AI would run server-side with explicit scoping and approval. Payment processing should be delegated to a licensed provider, not custom storage of card information or user balances.

**Technology is not selected.** Contributors should evaluate privacy, costs, accessibility, Japanese/English support, performance, portability, and ease of maintenance before deciding.

## 9. Privacy, trust and boundaries

- Profiles and social-media links are optional; users choose what other members can see.
- Groups and messages should be private by default; public pages must never accidentally expose member data.
- Explicit group-member consent and transparent scope are needed before AI processes group content.
- Role-based authorization is necessary for member/chat/RSVP/finance data; use server-side enforcement.
- Do not scrape Instagram or LINE chat histories; LINE-sharing integration is different from accessing private messages.
- Protect user uploads, authenticate actions, rate-limit invites and chats, and support member data deletion.
- Obtain adequate agreement before sharing sensitive RSVP answers or absence reasons; offer a way to omit them.
- AI summaries are drafts; users remain responsible for accepting decisions and payments.
- No automated booking or messaging to other people without appropriate authorization.

## 10. Evidence that would justify further development

Track real-world outcomes, not vanity features:
- RSVP completion rates and number of attendees who actually show up.
- Minutes organizers spend coordinating before/after a pilot.
- Missed questions, duplicate answers, and errors in AI-generated summaries.
- Whether members willingly return for the next event.
- Whether organizers request to use it again or are willing to pay.

## 11. Open questions for collaborators

- Which is the first specific group of users and event type?
- Is the biggest pain RSVP, scattered decisions, payment tracking, or missed communication?
- Should the shared board prioritize event details or long-running community projects?
- What level of chat privacy and AI participation will members actually accept?
- Should profiles and social contacts be visible only to a group or publicly?
- Can the first test live on an existing website rather than a separate app?

Use [GitHub Issues](../../issues) to discuss these without treating any option as a finalized decision.
