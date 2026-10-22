# Developer guide

[Japanese version](DEVELOPER_GUIDE.ja.md)

## Project layout

- app/index.html — semantic HTML for the current demo.
- app/styles.css — responsive visual design.
- app/src/logic.js — dependency-free, testable state and draft helpers.
- app/src/main.js — DOM rendering, forms and localStorage integration.
- app/tests/logic.test.js — Node's built-in unit tests.
- docs/CURRENT_STATUS.md — honest capabilities and missing backend work.
- docs/BUILD_PLAN.md — milestone and contributor task IDs.
- .github/workflows/ci.yml — checks on pull requests.
- .github/pull_request_template.md — review requirements.

## Getting started

Prerequisites: Python 3 and Node.js 20 or newer. No npm packages are needed for the current demo.

1. Clone or fork the repository.
2. From repository root: npm run check
3. Start the static server: python3 -m http.server 4173
4. Open http://localhost:4173/app/
5. Open another browser profile if testing local behavior, but remember that **data does not synchronize between browsers**.

Do not open app/index.html via file://; browsers may block ES module imports. The local server is only for frontend testing.

## Engineering agreement

1. Work in one task-sized branch or fork; do not push directly to main when collaborating.
2. Link a GitHub Issue and write a clear definition of done before major work.
3. Put pure business logic in logic.js or later domain modules, and keep DOM operations in UI modules.
4. Prefer using textContent for user-submitted values. Do not interpolate chat messages into innerHTML.
5. Never put API tokens in frontend JavaScript or public commits.
6. Authentication and data permissions must be checked server-side before allowing group reads/writes.
7. Add or update tests; CI runs Node syntax and unit checks on pull requests.
8. Document changes to the capability status table truthfully.
9. Request review; only merge complete, reviewed work so independently built components fit one system.

## Planned service boundaries

Client UI → authenticated API → group/message service → database and realtime notifications → board/event service.

Later, AI requests go to a separate server adapter. Only selected, permissioned messages may be sent to a provider; proposed changes are drafts requiring human approval.

The public repository has no project-wide license selected. Discuss code ownership and license before significant outside contributions; GitHub visibility alone is not an open-source license.

## Security and privacy

See [SECURITY.md](../SECURITY.md). Use synthetic or explicitly permissioned test examples only. Do not publish private chat data, contact lists or secrets in Issues or pull requests.

## Edit in GitHub Codespaces (optional)

From the repository page, choose **Code → Codespaces → Create codespace on main** if your account has Codespaces access. The repository includes a devcontainer configuration with Node.js and Python support. In the Codespaces terminal run **npm run check**, then **npm start**; use the forwarded **port 4173** preview to open the app. Create a new branch for your change and open a pull request back to main. If Codespaces is not available, use a local clone following the setup steps above.

**For external collaborators:** A public repository can accept a fork and pull request without granting direct push access. The CODEOWNERS file requests owner review, but enforceable protected-branch rules must be configured in repository settings separately.
