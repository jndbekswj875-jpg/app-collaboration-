# Event Hub — Promote, Communicate and Organize in One Workspace

[Japanese version](EVENT_HUB_CONCEPT.ja.md) · [Project overview](../README.md) · [Chat-first roadmap](APP_ROADMAP.md)

## The problem

An organizer may have to use a social post or website to promote an event, email to invite someone, a separate chat app to answer questions, a spreadsheet for attendance, and calls or messages to announce urgent changes. Attendees can miss the latest information because it's scattered across tools and conversations.

**Our idea:** One free-to-use workspace that connects an event's public introduction, optional private invitation, direct attendee conversations, confirmed updates, and shared preparation.

This is a **proposed product experience**, not a working event-marketing service yet.

## The complete event journey

| Stage | Organizer experience | Attendee experience |
| --- | --- | --- |
| 1. Create | Set event title, description, date/time, location, participation rules, organizer and visibility | Understand who is organizing and what the event is about |
| 2. Share | Publish a stable link to an event information page; distribute it where the intended audience can see it | Open one link rather than search multiple apps |
| 3. Invite | Let guests request or receive access, subject to privacy and moderation controls | See participation requirements and respond to an invitation |
| 4. Connect | Manage event-scoped questions and discussion with authorized attendees | Ask the organizer or group a question inside the workspace |
| 5. Coordinate | Keep RSVPs, responsibilities, checklists, meeting details and unresolved questions together | See the confirmed plan and their own assigned tasks |
| 6. Update | Publish a clear announcement and change history when plans change | View the latest verified information; optionally receive authorized notifications |
| 7. Meet | Use one current event page to orient people on event day | Find the meeting time, location and important changes |
| 8. Improve | See aggregate feedback and what repeatedly caused confusion | Share a suggestion for the next event, without exposing private messages |

## Marketing means helping the right people discover an event

This workspace would also be a **promotion and communication tool**. For example, a local hobby meetup could have a shareable event page explaining what the group does, why the meetup is interesting, when it happens, and how someone can join or ask a question.

An event link may be shared through existing websites, communities, social media or personal networks. **Centralizing tools does not automatically create an audience**: people still need to choose where and how to introduce their event.

We should not promise automated advertising or cross-posting to third-party services. Those could be optional integrations after real user demand and permission/terms are understood.

## Real-time communication, not scattered announcements

A planned organizer dashboard could show:
- **Overview:** title, current date/time, location, event status and share link.
- **Attendees:** invitations, RSVPs and answers that are visible under the appropriate permissions.
- **Chat / Q&A:** direct organizer-attendee questions and group conversation, with moderation tools.
- **Updates:** a single source of confirmed announcements, timestamps and an accessible change history.
- **Tasks:** the preparation checklist, owners and unresolved decisions.
- **Later, AI organizer:** drafts of repeated answers, recaps, reminders and actions still needing human approval.

When a meeting point changes, the organizer should update the event record **once**. The current event page and authorized participants' views should reflect that change. Optional push or in-app notifications should respect user preferences and permission requirements. Actual push delivery is not implemented today.

**No mandatory phone or email switching** is the design goal. In-app chat and notices might replace many repetitive emails and calls, but emergency contact methods and the user's preferred communication channels must remain possible. Native voice calls, outbound email or SMS would be considered only if useful and technically appropriate.

## Public promotion versus private conversations

A public event page should expose only information the organizer intentionally publishes. Member lists, contact details, private messages, invitation tokens and private attendance reasons must remain protected.

Possible visibility modes:
- **Public event summary:** discoverable description and approved participation details, no private chat.
- **Invite-only event:** only people with verified invitations/membership can view sensitive details.
- **Private participant workspace:** chat, RSVP details, assigned tasks and restricted announcements according to roles.

Announcements, replies and joining a group require abuse controls, authentication or appropriate guest verification, reporting and moderation. Sharing a link alone must not grant access to confidential group messages.

## Where the AI assistant fits — after the basic workspace

After secure event pages, chat and shared updates are reliable, the **AI event-organizer assistant** can help:
1. Group repeated attendee questions into a proposed FAQ.
2. Draft answers from the event's *confirmed* time, location and participation instructions.
3. Explain what has changed since a participant's last visit.
4. Suggest a checklist and highlight missing RSVPs, unassigned tasks or unanswered questions.
5. Draft organizer announcements or reminders, for explicit review before sending.
6. Help communicate in English and Japanese while leaving meaning and approval to people.

It must not quietly read conversations without appropriate consent, infer agreement that did not happen, send mass messages or market events autonomously, or book/pay for things.

## Development order and clear boundaries

**Stage 1:** secure chat, group membership, shared event page and manual board.  
**Stage 1 expansion:** publish/shareable event info, direct attendee Q&A, RSVPs, confirmed announcements, optional notifications.  
**Stage 2:** permission-based AI summaries, FAQ proposals, task suggestions, drafts and human-controlled workflows.  
**Possible later integrations:** email delivery, calling, social cross-posting, calendar connections and campaign insights—only if evidence justifies them.

See [development tasks](BUILD_PLAN.md) for H-01 through H-08 and [AI development tasks](BUILD_PLAN.md#what-the-ai-event-organizer-should-automate-after-the-chat-works) for A-01 through A-09.

## What we'd love to hear from organizers and attendees

- Which apps do you switch between to create, announce and run an event?
- How do people discover your event and ask questions?
- Which information do you resend or explain repeatedly?
- Have people missed an important change because it appeared in a different chat or email?
- Would one event link with a chat, RSVP and updates help?
- What information should stay private, and when should a notification be sent?

[Share your experience in English](https://github.com/jndbekswj875-jpg/app-collaboration-/issues/new?template=feedback-en.yml). GitHub Issues are public; please do not submit private attendee messages, contact details or other personal information.

**Current status:** The repository has a single-browser local demo with messages, a task board and rule-based suggestions. It does not have public event publishing, real multi-user chat, attendee notifications, hosted AI, or cross-platform marketing integration.
