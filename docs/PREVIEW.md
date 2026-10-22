# Preview the app without your own domain

[Japanese version](PREVIEW.ja.md)

There are two different ways to preview the code. The existing app is **a static, single-browser prototype**. A live multi-user chat server is not built yet.

## Option 1: GitHub Codespaces (best while editing)

1. Open the [repository](https://github.com/jndbekswj875-jpg/app-collaboration-).
2. Select **Code → Codespaces → Create codespace on main** (subject to your account's Codespaces availability).
3. Open the terminal and run `npm start`.
4. In the **PORTS** tab, open the forwarded **4173** port.
5. Append `/app/` to the preview URL to see the chat interface. Refresh it after editing the code.

The repository includes a devcontainer setup that forwards port 4173 automatically. Codespaces previews run while your Codespace is active and can have usage limits.

## Option 2: GitHub Pages (best for sharing a stable static preview)

The repository includes public HTML landing pages and the demo:
- English landing page: `/index.html`
- Japanese landing page: `/ja/index.html`
- Interactive static demo: `/app/index.html`

To publish them using **GitHub Pages** with no custom domain:

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then **Save**.
4. Wait for GitHub's Pages deployment to succeed and copy the published URL **shown in Settings → Pages**.

If Pages uses the normal project-site address, the paths will end in `/app-collaboration-/`, `/app-collaboration-/ja/`, and `/app-collaboration-/app/`. **Do not assume those URLs work until GitHub shows a successful deployment.**

GitHub Pages hosts static files; it does not add logins, databases, shared realtime messaging, private chat storage or hosted AI.

## Current limitations

- The demo saves data to your browser's localStorage only.
- It does not share messages with other people.
- The assistant drafts are simple keyword rules, not an API call to AI.
- Do not enter real confidential messages or personal information.
- Feedback forms open **public GitHub Issues**, which normally require login.

See [current status](CURRENT_STATUS.md) for the exact implemented capabilities.
