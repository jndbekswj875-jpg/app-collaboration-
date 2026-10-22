# Community AI Workspace

> **Code available:** v0.1 local browser demo. This is not real multi-user chat or a connected AI service.

**Start coding:** Run `npm run check`, then `python3 -m http.server 4173`; open http://localhost:4173/app/ .

**Project status:** [What currently works](docs/CURRENT_STATUS.md) · [Contributor setup](docs/DEVELOPER_GUIDE.md) · [Open tasks](https://github.com/jndbekswj875-jpg/app-collaboration-/issues) · [App code](app/).

---

**Turn group conversations into clear event plans, shared tasks, and useful community connections.**

> **Project concept — collaborators and feedback welcome.** The real-time service and AI assistant are not yet deployed.

**Read in Japanese:** [Japanese version](README.ja.md)  
**Explore:** [System design](docs/SYSTEM_DESIGN.md) · [Development tasks](docs/BUILD_PLAN.md) · [Business validation](docs/MARKETING_VALIDATION.md) · [Contributing](CONTRIBUTING.md)

## Why build this?

Organizing an event often means switching between group chats, RSVP forms, spreadsheets, personal messages, and payment tools. Decisions get buried in conversations. Organizers repeat the same answers, and participants do not know which plans are confirmed.

**Our idea:** Put a private real-time group chat and a shared planning board in one web application, then add an AI assistant that helps people organize information rather than replacing human decisions.

## How it could work

1. **Join a private group.** An organizer creates an invitation. Members can optionally set a profile with their display name, interests, Instagram or other social links, and privacy-controlled contact details.
2. **Talk in a live chat room.** Group members discuss event ideas, dates, locations, budgets, and responsibilities.
3. **Ask the AI assistant for help.** With appropriate member consent, select part of the discussion and request a structured summary.
4. **Review a shared board.** AI suggests decisions, tasks, unanswered questions, and a possible timeline. Members correct mistakes and approve what is actually decided.
5. **Run the event.** Add an event page, Yes/Maybe/No RSVP, preparation assignments, and optional expense/contribution records when the core workflow proves useful.
6. **Build a returning community.** Members can share event stories and updates, then plan the next gathering.

### Example: planning a BBQ

| Chat message | AI-proposed board item |
| --- | --- |
| “Is Saturday afternoon good?” | Possible date: Saturday; still needs confirmation |
| “I can bring drinks.” | Proposed task: confirm who is bringing drinks |
| “Maybe ¥2,000 per person.” | Budget suggestion only; not approved |
| “Where are we meeting?” | Open question: meeting location |

The AI must distinguish **suggestions** from **confirmed decisions**. It cannot silently publish tasks, send messages, book services, or charge participants.

## What we would build first

**First usable version:** Two invited members securely log in, exchange messages live across different browsers, and update a shared task/decision board. People outside the group cannot read private conversations. After that, test an on-demand AI summary that creates **draft suggestions** for human review.

The first AI experiment can use an **OpenAI API or Anthropic Claude API** on the backend. These are usage-billed developer APIs, separate from consumer chat subscriptions. If usage grows, we can compare self-hosted open-weight models against paid APIs on output quality, Japanese-language performance, latency, hosting, hardware, electricity, and maintenance. A local model is not automatically cheaper.

```text
Web chat and profiles
        |
Authentication, group permissions, message storage
        |
Real-time chat service <----> Shared event/task board
        |
AI gateway (only selected, permitted messages)
        |
Hosted model API -> structured drafts -> human review
        |
Later: evaluate self-hosted model if evidence supports it
```

**Detailed specifications:** [System design](docs/SYSTEM_DESIGN.md) and [build plan](docs/BUILD_PLAN.md).

## Website and business exploration

A useful, original article or project story on an existing website could introduce the problem, invite voluntary feedback, and lead to a small real-event test. We would measure the quality of visitor interest, organizer minutes saved, repeat use, AI errors, and operating cost.

Website advertising and a future paid event-organizer product are **different business models**. Advertising requires separate site approval and compliance; increased traffic does not guarantee approval or earnings. A paid product would require evidence that people repeatedly benefit and are willing to pay.

**Read more:** [Marketing and validation plan](docs/MARKETING_VALIDATION.md).

## Want to help build it?

We welcome event organizers, designers, frontend and backend developers, AI engineers, testers, and people with experience in online communities. You can contribute an example of a real coordination problem, a wireframe, a technical suggestion, or a small implementation.

- [Pick a development task](docs/BUILD_PLAN.md)
- [Share feedback or propose an idea in GitHub Issues](https://github.com/jndbekswj875-jpg/app-collaboration-/issues)
- [Read the contribution guide](CONTRIBUTING.md)

Please do not put personal attendee details, real private chats, credentials, or payment records into this public repository. No project-wide code license has been selected yet; discuss ownership and licensing before significant code contributions.

**Current state:** Public documentation and discussion only. The live group chat, AI backend, persistent member profiles, and payments have not been deployed.
