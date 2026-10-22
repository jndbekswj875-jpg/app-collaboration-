/**
 * Dependency-free domain functions. This is intentionally a single-browser demo.
 * Auth, multi-user realtime and paid AI providers are NOT implemented here.
 */

export const MAX_MESSAGE_LENGTH = 1200;
export const MAX_TASK_LENGTH = 140;

const DEMO_GROUPS = [
  { id: "social", name: "Saturday Social", description: "Plan a relaxed weekend meetup together.", eventTitle: "Weekend get-together" },
  { id: "reading", name: "Reading Circle", description: "Share books, stories, and ideas.", eventTitle: "Next reading session" }
];

const DEMO_MESSAGES = [
  { id: "welcome1", groupId: "social", author: "Mika (sample)", body: "Could Saturday afternoon work for everyone?", createdAt: "2026-10-21T10:00:00.000Z" },
  { id: "welcome2", groupId: "social", author: "Ken (sample)", body: "I can bring drinks. What about a meeting place?", createdAt: "2026-10-21T10:04:00.000Z" },
  { id: "welcome3", groupId: "social", author: "Aki (sample)", body: "Maybe a budget of ¥2,000 each? We can decide together.", createdAt: "2026-10-21T10:08:00.000Z" },
  { id: "welcome4", groupId: "reading", author: "Mika (sample)", body: "What should we read next month?", createdAt: "2026-10-21T11:00:00.000Z" }
];

export function initialState() {
  return {
    schemaVersion: 1,
    activeGroupId: "social",
    profile: { name: "You", social: "" },
    groups: DEMO_GROUPS.map((group) => ({ ...group })),
    messages: DEMO_MESSAGES.map((message) => ({ ...message })),
    board: [{ id: "task1", groupId: "social", text: "Choose a meeting place", status: "open", kind: "task" }],
    suggestions: [],
    rsvps: {}
  };
}

export function cleanText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

export function id() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return "demo-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
}

export function addMessage(state, groupId, body, messageId = id()) {
  const text = cleanText(body, MAX_MESSAGE_LENGTH);
  if (!text || !state.groups.some((group) => group.id === groupId)) return state;
  return {
    ...state,
    messages: [...state.messages, { id: messageId, groupId, author: state.profile.name, body: text, createdAt: new Date().toISOString() }]
  };
}

export function addBoardItem(state, groupId, text, itemId = id()) {
  const trimmed = cleanText(text, MAX_TASK_LENGTH);
  if (!trimmed || !state.groups.some((group) => group.id === groupId)) return state;
  return { ...state, board: [...state.board, { id: itemId, groupId, text: trimmed, kind: "task", status: "open" }] };
}

export function toggleBoardItem(state, itemId) {
  return { ...state, board: state.board.map((item) => item.id === itemId ? { ...item, status: item.status === "done" ? "open" : "done" } : item) };
}

export function rsvpLabel(value) {
  return { yes: "Going", maybe: "Maybe", no: "Can't go" }[value] || "Not answered";
}

/**
 * A tiny rule-based demonstration; it does NOT invoke an LLM or claim to
 * understand agreement. All results remain drafts until manually accepted.
 */
export function draftSuggestions(messages) {
  const rules = [
    { pattern: /\bsaturday\b|土曜/i, kind: "question", text: "Confirm whether Saturday works for the group" },
    { pattern: /drinks?|飲み物/i, kind: "task", text: "Confirm who will bring drinks" },
    { pattern: /meeting place|where|location|集合|場所/i, kind: "question", text: "Choose and confirm the meeting location" },
    { pattern: /budget|¥|yen|円/i, kind: "question", text: "Discuss and agree on a budget" }
  ];
  const results = [];
  for (const rule of rules) {
    const source = messages.find((msg) => rule.pattern.test(msg.body));
    if (source) results.push({ kind: rule.kind, text: rule.text, sourceMessageId: source.id });
  }
  if (results.length === 0 && messages.length) {
    results.push({ kind: "question", text: "Review the conversation and confirm the group's next action", sourceMessageId: messages[messages.length - 1].id });
  }
  return results;
}

export function parseState(raw) {
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.schemaVersion !== 1) return initialState();
    if (!Array.isArray(parsed.groups) || !Array.isArray(parsed.messages) || !Array.isArray(parsed.board) || !Array.isArray(parsed.suggestions)) return initialState();
    if (!parsed.profile || typeof parsed.profile.name !== "string") return initialState();
    if (!parsed.groups.some((g) => g.id === parsed.activeGroupId)) return initialState();
    return parsed;
  } catch {
    return initialState();
  }
}
