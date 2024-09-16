# Publish to GitHub and Chrome Web Store

## 1. Publish to GitHub

1. **Create a new repo on GitHub**
   - Go to [github.com/new](https://github.com/new).
   - Name it (e.g. `search-in-google-maps`).
   - Do **not** add a README, .gitignore, or license (this repo already has them).
   - Create the repository.

2. **Push this folder**
   From the project folder (where `manifest.json` is):

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

   If GitHub shows a different repo URL (SSH or HTTPS), use that. Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

3. **Set your name/email for commits (if needed)**
   ```bash
   git config user.name "Your Name"
   git config user.email "you@example.com"
   ```
   Future commits will use these. Existing history keeps the dates from Dec 2025–Mar 2026.

---

## 2. Publish to Chrome Web Store

After the repo is on GitHub:

1. **Create a ZIP with only the extension files**
   ```bash
   zip -r search-in-google-maps.zip manifest.json background.js icons/
   ```

2. **Follow the full steps** in [PUBLISHING.md](PUBLISHING.md):
   - Chrome Web Store Developer account (one-time $5).
   - Upload the ZIP in the [Developer Dashboard](https://chrome.google.com/webstore/devconsole).
   - Fill Store listing, Privacy, Distribution.
   - Submit for review.

3. **Store listing**
   - **Homepage URL**: your GitHub repo URL (e.g. `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`).
   - **Support URL**: GitHub Issues or your contact page.

---

## Quick checklist

- [ ] GitHub repo created and code pushed
- [ ] Chrome Web Store developer account and fee paid
- [ ] ZIP built with `manifest.json`, `background.js`, `icons/` only
- [ ] Store listing, privacy, and distribution filled in [PUBLISHING.md](PUBLISHING.md)
- [ ] Submitted for review
