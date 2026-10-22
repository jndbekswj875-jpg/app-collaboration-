# Community AI Workspace

**One place to chat, organize, promote and attend an event.**

We're designing a **free-to-use community and event workspace** for friends, clubs, local hosts and event organizers. Instead of switching between messages, event pages, RSVP forms and ticket sites, people could share opinions, find current information and coordinate in one chat-centered space.

**[Japanese edition](README.ja.md)** · **[Share your event-planning experience](https://github.com/jndbekswj875-jpg/app-collaboration-/issues/new?template=feedback-en.yml)**

> **Still in development.** A single-browser prototype exists. Real shared chat, live ticket sales, checkout and AI assistance have **not** launched.

## What we're building

**First, the community workspace:** secure group chat, event pages, shared tasks and decisions, direct organizer–attendee communication, RSVPs and real-time updates. Anyone should be able to organize a free community gathering without depending on AI.

**Then, optional ticket sales:** hosts could offer free registration or sell event tickets, manage availability and check-in, and keep each buyer's event details together. Payment processing would use a trusted provider, with clear prices, refund rules and privacy protections.

**Then, the AI organizer and marketing assistant:** AI could summarize chats, identify unanswered questions, propose preparation tasks, answer repeated event questions from confirmed details, draft event promotions and prepare reminders. People would review and approve important actions before anything is published or sent.

### A practical example

Imagine organizing a weekend community meetup. You create an event with a title, time and place, share a link, discuss the details, answer attendee questions, manage RSVPs and—if it's a paid meetup—offer a ticket. Later, the AI could show what remains unresolved and draft a clear event update, without sending it on its own.

## Our AI direction

We'll **test existing hosted AI models first**, using developer APIs such as OpenAI or Anthropic Claude through a secure backend. Then we'll measure quality and cost in English and Japanese. The longer-term goal is to evaluate a **self-hosted or specially adapted AI model** for event organizing and marketing tasks. We won't claim we have a custom-trained model yet.

**The core idea:** The chat workspace solves communication gaps. The event hub centralizes the work. The AI reduces repetitive organizing tasks.

## One product plan, two languages

The complete product concept, technical stages, ticketing requirements and AI model strategy are maintained in one central document per language:

**[Read the full English product blueprint](docs/PRODUCT_BLUEPRINT.md)**

For the prototype and development details, see [current status](docs/CURRENT_STATUS.md), [build tasks](docs/BUILD_PLAN.md), [event hub details](docs/EVENT_HUB_CONCEPT.md) and [preview instructions](docs/PREVIEW.md).

## Tell us what you need

What is hardest about organizing your last event? Which apps do you use to promote it, communicate, sell tickets, or send updates? Which task would you want the AI assistant to handle?

**[Share your ideas in English →](https://github.com/jndbekswj875-jpg/app-collaboration-/issues/new?template=feedback-en.yml)**

GitHub feedback is public and usually needs a GitHub account. Please don't share private conversations, attendee information, or payment details.

**Free-use goal:** We intend to keep core community organization free to use. An organizer may eventually sell **paid event tickets**; ticket prices and any payment/service fees would be clearly shown before checkout, but no rates or provider have been set.

*Developers can find the source in [app/](app/) and the optional [development guide](docs/DEVELOPER_GUIDE.md). This page is primarily for people who want to use the service and share feedback.*
