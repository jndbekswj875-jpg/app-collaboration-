# Product Vision: Community AI Workspace

**Japanese version:** [製品コンセプト](PRODUCT_VISION.ja.md)  
**Stage:** Public proposal for discussion. Features are not a claim of a launched application.

## The problem

A small real-world event may be organized across group chats, direct messages, spreadsheets, RSVP forms and payment apps. Decisions and context can become fragmented. Organizers may repeat answers about time, location, costs and attendance, while participants cannot tell what is agreed or still being discussed.

**Hypothesis:** A private shared workspace, enhanced with permission-based AI assistance, can reduce repetitive coordination and help communities organize future activities more easily. This is a hypothesis to test, not an established market result.

## The product

One place where a group can **talk, agree, organize and follow through**.

The app begins as a **real-time group chat plus shared task/decision board**. A small AI assistant reads only appropriately consented, selected conversation excerpts and proposes helpful board updates. Actual members, not the AI, approve decisions.

Over time the same group may manage invitations, events and RSVPs, optional profiles and social links, community updates or stories, and expense records.

## Two roles

### Members
- Join a private group by invitation and control their own profile.
- Optionally share a nickname, biography, interests, Instagram or other social profile links, and preferred contact method.
- Discuss plans in a real-time chat room.
- Review confirmed tasks and unresolved questions on a shared board.
- RSVP to a planned event and change their own answer.
- Correct AI mistakes and choose what personal details are visible.
- Share stories or updates if the group wants these features.

### Organizers and moderators
- Create groups and invitations, with appropriate role and membership management.
- Manage event information, response counts and capacity.
- See confirmed tasks and unanswered questions without reading every old message.
- Review AI-proposed summaries, assignments and announcement drafts.
- Record optional estimated costs and contribution status, with appropriate privacy controls.
- Communicate changes after human approval and follow up for future events.

## Core journey

```text
Invite members
      ↓
Private group chat
      ↓
Discuss an event
      ↓
Choose permitted messages and ask AI
      ↓
AI proposes draft tasks / decisions / questions
      ↓
People review, edit and confirm
      ↓
Shared board + event RSVPs
      ↓
Gather feedback, organize again
```

## First build and later phases

1. **Observe a real workflow.** Watch how a group already organizes an event and note one costly repeated task.
2. **Build private live chat.** Secure groups, invitations, member access and persistent messaging across browsers.
3. **Add a manual board.** Tasks, decisions, questions and clear draft-versus-confirmed states.
4. **Test hosted AI APIs.** Connect an OpenAI API or Anthropic Claude API through a secured backend. Summarize selected permitted content into draft proposals with human approval.
5. **Add proven event features.** RSVP, optional profiles/social links, stories, expense records or event updates when user evidence supports them.
6. **Evaluate self-hosted AI and monetization.** Compare local licensed open-weight models using real usage and total operating cost. Test a paid product only after repeat value and customer commitment.

The sequence can change based on findings; no production release date is promised.

## Data and access

The conceptual system contains users, optional profiles, groups, membership roles, invitations, messages, events, RSVP answers, board items, expenses, AI requests and review history. Each record needs group-scoped access rules. Members should never be required to make social or contact information public to attend an event.

## Trust principles

- Groups should be private by default, with server-enforced access.
- AI should process only information it is authorized to receive and the group has appropriately consented to share.
- A chat statement is not automatically an agreed event decision.
- AI-generated summaries remain drafts until people approve them.
- The system should allow correction, deletion and moderation within its clear retention and access rules.
- Do not import historical private LINE or Instagram messages without a lawful authorized integration and consent.
- Money movement must use an appropriate established payment provider; no invisible AI transfers or card storage.

## What evidence would matter?

An organizer and participants actually use the chat and board during a real event. The organizer spends less time on reminders, fewer event decisions are lost, AI drafts are correct enough to be worth reviewing, users want to repeat the experience, and possible costs can be sustained. Later, a paid commitment would be stronger evidence than general enthusiasm.

## What friends can contribute

Product interviews, mobile-first design, chat frontend, authentication and realtime backend, permissions/testing, AI evaluation, bilingual content, accessibility and usability feedback.

**Next:** [Detailed system design](SYSTEM_DESIGN.md) · [Task-by-task build plan](BUILD_PLAN.md) · [Marketing validation](MARKETING_VALIDATION.md) · [Project README](../README.md).
