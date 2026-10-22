import { initialState, parseState, cleanText, id, addMessage, addBoardItem, toggleBoardItem, draftSuggestions, rsvpLabel } from "./logic.js";

const KEY = "commonroom-local-demo-v1";
const $ = (selector) => document.querySelector(selector);
let state = load();

function load() {
  try { return parseState(localStorage.getItem(KEY)); }
  catch { return initialState(); }
}

function persist() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); }
  catch { /* Demo works in memory if browser storage is disabled. */ }
}

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = String(text);
  return element;
}

function actionButton(label, action, itemId, className) {
  const button = node("button", className, label);
  button.type = "button";
  button.dataset.action = action;
  button.dataset.id = itemId;
  return button;
}

function group() { return state.groups.find((item) => item.id === state.activeGroupId); }
function groupMessages() { return state.messages.filter((item) => item.groupId === state.activeGroupId); }
function groupBoard() { return state.board.filter((item) => item.groupId === state.activeGroupId); }
function groupSuggestions() { return state.suggestions.filter((item) => item.groupId === state.activeGroupId); }

function renderGroups() {
  const nav = $("#groups-list");
  nav.replaceChildren();
  for (const item of state.groups) {
    const button = node("button", "group-button" + (item.id === state.activeGroupId ? " selected" : ""));
    button.type = "button";
    button.dataset.groupId = item.id;
    button.setAttribute("aria-current", item.id === state.activeGroupId ? "page" : "false");
    const icon = node("span", "group-avatar", item.name.slice(0, 1).toUpperCase());
    const info = node("span", "group-info");
    info.append(node("strong", "", item.name), node("small", "", item.description));
    button.append(icon, info);
    nav.append(button);
  }
  $("#group-count").textContent = String(state.groups.length);
}

function renderMessages() {
  const container = $("#messages");
  container.replaceChildren();
  for (const message of groupMessages()) {
    const own = message.author === state.profile.name;
    const wrapper = node("div", "message" + (own ? " own" : ""));
    const bubble = node("div", "message-bubble");
    const author = node("div", "message-author", message.author);
    const body = node("p", "message-body", message.body);
    const time = node("span", "message-time", new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    bubble.append(author, body, time);
    wrapper.append(bubble);
    container.append(wrapper);
  }
  if (!groupMessages().length) container.append(node("div", "empty", "No messages yet. Start the conversation."));
  container.scrollTop = container.scrollHeight;
}

function renderBoard() {
  const target = $("#board-list");
  target.replaceChildren();
  const items = groupBoard();
  $("#board-count").textContent = String(items.filter((item) => item.status !== "done").length);
  if (!items.length) target.append(node("p", "empty", "Your board is empty. Add the first step."));
  for (const item of items) {
    const entry = node("div", "board-item" + (item.status === "done" ? " completed" : ""));
    const check = actionButton(item.status === "done" ? "✓" : "○", "toggle-task", item.id, "check-button");
    check.setAttribute("aria-label", item.status === "done" ? "Mark as open" : "Mark as done");
    const details = node("div", "board-copy");
    details.append(node("span", "board-kind", item.kind === "question" ? "QUESTION" : "TASK"), node("p", "", item.text));
    entry.append(check, details);
    target.append(entry);
  }
}

function renderSuggestions() {
  const container = $("#suggestions");
  container.replaceChildren();
  for (const suggestion of groupSuggestions()) {
    const card = node("div", "suggestion");
    card.append(node("div", "suggestion-caption", "DRAFT · " + suggestion.kind.toUpperCase()));
    card.append(node("p", "", suggestion.text));
    const buttons = node("div", "suggestion-actions");
    buttons.append(actionButton("Add to board", "accept", suggestion.id, "accept-button"), actionButton("Dismiss", "dismiss", suggestion.id, "dismiss-button"));
    card.append(buttons);
    container.append(card);
  }
}

function render() {
  const selected = group();
  $("#current-group-name").textContent = selected.name;
  $("#current-group-description").textContent = selected.description;
  $("#event-title").textContent = selected.eventTitle;
  $("#rsvp-select").value = state.rsvps[selected.id] || "";
  $("#profile-name").textContent = state.profile.name;
  $(".avatar").textContent = state.profile.name.slice(0, 1).toUpperCase();
  renderGroups();
  renderMessages();
  renderBoard();
  renderSuggestions();
}

$("#groups-list").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-group-id]");
  if (!button) return;
  state.activeGroupId = button.dataset.groupId;
  persist();
  render();
});

$("#group-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = cleanText($("#group-name").value, 45);
  if (!name) return;
  const newGroup = { id: id(), name, description: "A new local demo group.", eventTitle: "First group event" };
  state.groups.push(newGroup);
  state.activeGroupId = newGroup.id;
  $("#group-form").reset();
  persist();
  render();
});

$("#chat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#chat-message");
  const updated = addMessage(state, state.activeGroupId, input.value);
  if (updated === state) return;
  state = updated;
  input.value = "";
  persist();
  render();
  input.focus();
});

$("#task-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#task-text");
  state = addBoardItem(state, state.activeGroupId, input.value);
  input.value = "";
  persist();
  render();
});

$("#board-list").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='toggle-task']");
  if (!button) return;
  if (!groupBoard().some((item) => item.id === button.dataset.id)) return;
  state = toggleBoardItem(state, button.dataset.id);
  persist();
  render();
});

$("#suggest-button").addEventListener("click", () => {
  state.suggestions = state.suggestions.filter((item) => item.groupId !== state.activeGroupId);
  for (const suggestion of draftSuggestions(groupMessages())) {
    state.suggestions.push({ ...suggestion, id: id(), groupId: state.activeGroupId });
  }
  persist();
  renderSuggestions();
  if (!groupMessages().length) $("#suggestions").append(node("p", "empty", "Write a chat message before requesting suggestions."));
});

$("#suggestions").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const suggestion = groupSuggestions().find((item) => item.id === button.dataset.id);
  if (!suggestion) return;
  if (button.dataset.action === "accept") {
    state.board.push({ id: id(), groupId: suggestion.groupId, text: suggestion.text, kind: suggestion.kind, status: "open" });
  }
  state.suggestions = state.suggestions.filter((item) => item.id !== suggestion.id);
  persist();
  renderBoard();
  renderSuggestions();
});

$("#rsvp-select").addEventListener("change", (event) => {
  const value = event.target.value;
  if (!["", "yes", "maybe", "no"].includes(value)) return;
  state.rsvps[state.activeGroupId] = value;
  event.target.setAttribute("aria-label", "Your RSVP: " + rsvpLabel(value));
  persist();
});

$("#profile-button").addEventListener("click", () => {
  $("#display-name").value = state.profile.name;
  $("#social-profile").value = state.profile.social;
  $("#profile-dialog").showModal();
});
$("#close-profile").addEventListener("click", () => $("#profile-dialog").close());
$("#cancel-profile").addEventListener("click", () => $("#profile-dialog").close());
$("#profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = cleanText($("#display-name").value, 40);
  if (!name) return;
  state.profile.name = name;
  state.profile.social = cleanText($("#social-profile").value, 140);
  persist();
  render();
  $("#profile-dialog").close();
});

$("#reset-button").addEventListener("click", () => {
  if (!window.confirm("Reset all local sample messages, groups, and tasks?")) return;
  state = initialState();
  persist();
  render();
});

render();
