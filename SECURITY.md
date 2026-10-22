# Security policy

This repository currently holds a browser-local demo, **not** a secure authenticated messaging service. Do not put sensitive private communications or payment data into shared demonstrations. Browser localStorage is visible to anyone using the same browser profile.

Never commit API keys, production credentials, private messages or payment records. The .gitignore file excludes .env files by default.

Before a real launch, the system needs secure authentication, server-side authorization for every group read and write, revocable invite links, moderation, abuse prevention, chat retention/deletion controls, consent for AI processing, provider spending limits, and security testing.

Do not publish vulnerability details containing real personal data or credentials in public Issues. Contact the repository owner privately using their GitHub profile before disclosing a sensitive exploit.
