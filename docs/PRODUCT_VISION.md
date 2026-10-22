# The idea behind Community AI Workspace

[Japanese version](PRODUCT_VISION.ja.md) · [Return to the project overview](../README.md)

## Close the information gap between people

People have different schedules, respond at different speeds, and use different places to store information. In group chats, a message may arrive but the important details are still hard to find. Planning something together can become confusing even when everyone means well.

We want a **free-to-use chat-based workspace with an AI assistant** that helps communities share a clearer understanding of what's happening.

## A normal group experience

People join a group to discuss a personal event, hobby activity, trip, club, volunteer project, or neighborhood gathering. They can talk naturally, while the workspace offers one board for plans, confirmed decisions, responsibilities, and unanswered questions.

With appropriate consent, a person could ask an AI assistant questions such as:
- “What have we actually decided?”
- “What's still waiting for an answer?”
- “What changed since yesterday?”
- “Who volunteered to do what?”
- “Can you show the meeting details in one place?”

The AI should distinguish *suggestions* from *confirmed plans*, cite the relevant conversation context when possible, and allow members to review and correct every proposed update. It should not silently change plans or expose private messages.

## The event hub: promotion, communication and coordination in one place

The workspace should be useful not just for chatting about an event, but for **introducing the event to people, inviting attendees and staying connected with them directly**.

An organizer could create a titled event page with a description, date, location, updates and a participation link. A person receiving the link could learn what the event is about, RSVP where appropriate, ask questions inside the event workspace and see the latest confirmed information.

Instead of maintaining a separate promotion page, email thread, messaging app and attendance spreadsheet, organizers could work from one event dashboard. A public event information page would be separate from private attendee discussions: organizers choose what is public and who can view, post or receive notifications.

Important changes should be visible to members as soon as they're published. Delivery, opt-in notifications, accessibility, moderation and privacy controls need to be built and tested before this can be called real-time attendee communication.

**The AI event organizer comes afterwards** to draft FAQs based on confirmed information, identify repeated questions, summarize updates, suggest next actions and prepare organizer-approved announcements. The goal is reducing repetitive event administration and communication gaps—not autonomously marketing, contacting or charging people.

Call links, phone calls, outbound email, third-party advertising or automatic social posting would be optional future integrations. We do not yet offer them.

[Read the dedicated event hub concept](EVENT_HUB_CONCEPT.md).

## Two connected products, built in order

**First: the shared workspace.** A community needs a reliable place for the conversation before an AI assistant can organize it. A group creates a private room, invites its people, discusses an event, and maintains its own event page, confirmed facts, questions, tasks, attendance and updates. Members can edit the board manually and remain fully able to use the app when AI is turned off.

**Then: the AI organizer.** The assistant should act as a helpful co-organizer inside that existing room: recognize unanswered questions, draft checklists from discussions, suggest responsibilities, recap messages missed since the last visit, prepare clear announcements, and highlight what remains to be agreed. It should reduce clerical repetition, not make human decisions or replace relationships.

The AI would use only selected and authorized information, show where suggestions came from, mark uncertainty, and let people correct, approve or reject each draft. Reminders, invitations, external messages or any action affecting other people must be explicitly reviewed and authorized.

**Model approach:** An early prototype can integrate a hosted AI model through a secure backend and measure performance in Japanese and English. We can develop the organizer's prompts, tools and structured outputs without claiming to train a foundation model from scratch. A later self-hosted or customized model is an option if real usage, quality and maintenance costs justify it.

**Order matters:** Chat and event information → shared manual board → secure realtime access → permissioned AI summaries → reviewable task/reminder suggestions → optional, approved workflows. See the [detailed two-stage roadmap](APP_ROADMAP.md).

## Ticket sales and the AI marketing assistant

Some community events will remain free; others may charge admission. The planned ticket module should allow an organizer to offer free RSVP or paid ticket types, with inventory, trusted payment-provider checkout, verified payment confirmation, unique issuance and safe check-in. Clear prices, fees, refund policies and attendee privacy must be defined before ticketing launches.

This is distinct from charging people to use the basic community workspace: the aim remains free core planning and communication.

The eventual **AI marketing assistant** could help draft accurate promotional descriptions, suggest event announcements, summarize common questions, and explain aggregated event interest or ticket counts if appropriate tracking exists. The AI should work from confirmed event information and operate within explicit approval, consent and anti-spam boundaries. It should not autonomously contact attendees, buy ads, change prices or issue refunds.

**Development route:** secure shared chat → event hub → optional tickets → existing hosted model adapter for AI → quality/cost comparison and potential self-hosted or customized model. Ticketing and AI can become independent modules after their common foundations exist.

[Full product blueprint](PRODUCT_BLUEPRINT.md).


## What's important to us

- **Shared understanding:** Everyone can find the current plan even if they missed part of the chat.
- **Speed:** Faster catch-up without repeating the same explanations.
- **Human connection:** Less coordination friction means more time for the event and the people.
- **Privacy:** Members retain control over what may be shared and processed.
- **Access:** The intention is free personal/community use, without requiring people to pay to organize gatherings.
- **Feedback-led design:** Real problems from event participants determine which features are useful.

## What is available today?

A single-browser interface demo shows groups, example chat messages, a board and simulated suggestions. It isn't a hosted group chat or connected AI service. [See current status](CURRENT_STATUS.md).

## Help shape the product

**We want your experience, not your CV.** What kind of event is hard to organize? Which information gets lost? How might a chatbot or shared board help?

[Share your thoughts](https://github.com/jndbekswj875-jpg/app-collaboration-/issues/new?template=feedback-en.yml)
