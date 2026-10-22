import test from "node:test";
import assert from "node:assert/strict";
import { initialState, cleanText, addMessage, addBoardItem, toggleBoardItem, draftSuggestions, parseState, rsvpLabel } from "../src/logic.js";

test("initial data includes independent demo groups", () => {
  const state = initialState();
  assert.equal(state.groups.length, 2);
  assert.ok(state.messages.every((message) => state.groups.some((group) => group.id === message.groupId)));
});

test("messages are trimmed, bounded and scoped to groups", () => {
  const state = initialState();
  const next = addMessage(state, "social", "   Hello    everyone   ", "test-msg");
  assert.equal(next.messages.at(-1).body, "Hello everyone");
  assert.equal(next.messages.at(-1).groupId, "social");
  assert.equal(state.messages.length + 1, next.messages.length);
  assert.strictEqual(addMessage(state, "other", "hello"), state);
  assert.strictEqual(addMessage(state, "social", "    "), state);
  assert.equal(cleanText("a".repeat(2000), 1200).length, 1200);
});

test("board items can be added and marked complete without changing original state", () => {
  const state = initialState();
  const next = addBoardItem(state, "social", "Confirm place", "task2");
  assert.equal(next.board.at(-1).status, "open");
  const done = toggleBoardItem(next, "task2");
  assert.equal(done.board.at(-1).status, "done");
  assert.equal(next.board.at(-1).status, "open");
});

test("rule-based suggestions remain proposals rather than confirmed records", () => {
  const messages = [
    { id: "one", body: "Saturday afternoon?" },
    { id: "two", body: "I can bring drinks" },
    { id: "three", body: "Where should we meet?" }
  ];
  const suggestions = draftSuggestions(messages);
  assert.equal(suggestions.length, 3);
  assert.ok(suggestions.every((item) => item.kind === "question" || item.kind === "task"));
  assert.ok(suggestions.every((item) => item.sourceMessageId));
  assert.deepEqual(draftSuggestions([]), []);
  assert.equal(draftSuggestions([{ id: "g", body: "Hello!" }]).length, 1);
});

test("invalid saved data resets to safe sample state", () => {
  assert.equal(parseState("{bad-json").schemaVersion, 1);
  assert.equal(parseState('{"schemaVersion":2}').activeGroupId, "social");
  assert.equal(rsvpLabel("maybe"), "Maybe");
  assert.equal(rsvpLabel("other"), "Not answered");
});
