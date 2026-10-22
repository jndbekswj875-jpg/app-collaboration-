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

## Two connected products, built in order

**First: the shared workspace.** A community needs a reliable place for the conversation before an AI assistant can organize it. A group creates a private room, invites its people, discusses an event, and maintains its own event page, confirmed facts, questions, tasks, attendance and updates. Members can edit the board manually and remain fully able to use the app when AI is turned off.

**Then: the AI organizer.** The assistant should act as a helpful co-organizer inside that existing room: recognize unanswered questions, draft checklists from discussions, suggest responsibilities, recap messages missed since the last visit, prepare clear announcements, and highlight what remains to be agreed. It should reduce clerical repetition, not make human decisions or replace relationships.

The AI would use only selected and authorized information, show where suggestions came from, mark uncertainty, and let people correct, approve or reject each draft. Reminders, invitations, external messages or any action affecting other people must be explicitly reviewed and authorized.

**Model approach:** An early prototype can integrate a hosted AI model through a secure backend and measure performance in Japanese and English. We can develop the organizer's prompts, tools and structured outputs without claiming to train a foundation model from scratch. A later self-hosted or customized model is an option if real usage, quality and maintenance costs justify it.

**Order matters:** Chat and event information → shared manual board → secure realtime access → permissioned AI summaries → reviewable task/reminder suggestions → optional, approved workflows. See the [detailed two-stage roadmap](APP_ROADMAP.md).

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
