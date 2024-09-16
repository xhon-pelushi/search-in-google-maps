# Publishing to the Chrome Web Store

Steps to publish **Search in Google Maps** (or any Chrome extension) to the Chrome Web Store.

## 1. Developer account

1. Open the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).
2. Sign in with the Google account you want to use as the publisher.
3. Accept the Developer Agreement and pay the **one-time registration fee** (as of 2024, $5 USD).
4. Complete account setup (e.g. 2-step verification if prompted).

Use an email you check often; the Store sends policy and review emails there.

---

## 2. Prepare the extension

### Test locally

- Load the extension unpacked at `chrome://extensions/` and confirm:
  - Context menu appears when text is selected.
  - Clicking “Search in Google Maps” opens Google Maps with the selected text.

### Check the manifest

- **name**, **version**, **description** (≤ 132 characters), and **icons** (16, 48, 128) must be set.
- You cannot change these in the dashboard after upload; fix them in the manifest and re-zip if needed.
- Use a low initial version (e.g. `1.0` or `0.0.0.1`) so you can bump it for future updates.

### Create the upload ZIP

- Include **only** the files needed to run the extension (e.g. `manifest.json`, `background.js`, `icons/`).
- Put **manifest.json in the root** of the ZIP (not inside a subfolder).
- Do **not** include things like `.git`, `README.md`, `LICENSE`, or other repo-only files if you don’t want them in the package (optional: add a script or use `.zipignore`).

From the project root:

```bash
zip -r search-in-google-maps.zip manifest.json background.js icons/
```

(Adjust the `zip` command if your layout is different.)

---

## 3. Upload and fill in the dashboard

1. In the [Developer Dashboard](https://chrome.google.com/webstore/devconsole), click **Create new item** (or **Add new item**).
2. Click **Choose file**, select your ZIP, then **Upload**.
3. Complete the tabs in the left menu:

### Store listing

- **Short description** – From your manifest (or edit in dashboard if allowed).
- **Detailed description** – What the extension does and why it’s useful. Avoid keyword stuffing.
- **Category** – e.g. “Productivity” or “Search tools”.
- **Screenshots** – At least one **1280×800** image; up to 5. Show: select text → right‑click → “Search in Google Maps” → new tab with Maps.
- **Store icon** – **128×128** (you can use `icons/128.png` if it’s 128×128, or export a 128×128 from your design).
- **Small promo tile** – **440×280** (optional but recommended).
- **Marquee promo tile** – **1400×560** (optional).
- **Homepage URL** – e.g. your GitHub repo.
- **Support URL** – e.g. GitHub “Issues” or a contact page.

### Privacy

- **Single purpose** – e.g. “Allows users to search selected text in Google Maps from the context menu.”
- **Permissions** – Justify each permission (e.g. `contextMenus`: show menu on selection; `tabs`: open Maps in a new tab). Remove any permission you don’t use.
- **Remote code** – Select “No” if you don’t load or execute code from the network.
- **Data usage** – Declare what data you collect. For this extension, if you don’t collect any user data, state that and check the boxes that say you don’t collect sensitive data.
- **Privacy policy URL** – Required. Host a short page (e.g. on GitHub Pages or your site) that says you don’t collect user data, and what the extension does (opens Google Maps with selected text). Link that URL here.

### Distribution

- **Visibility** – Public (default) or unlisted.
- **Regions** – All countries or select specific ones.
- **Pricing** – Free.

### Test instructions (if asked)

- For a simple extension, you can write: “Load extension, select text on any page, right‑click, choose ‘Search in Google Maps’; a new tab should open with Google Maps and the selected text as the query.”

---

## 4. Submit for review

1. When all required fields are filled, click **Submit for review**.
2. Choose whether to **publish automatically** after approval or **defer** and publish manually later.
3. Submit. You’ll get an email when the item is approved (or if changes are requested).

Review can take from a few hours to a few days. Rejections usually include a reason and what to fix.

---

## 5. After approval

- The extension will appear on the Chrome Web Store (or stay staged if you chose deferred publish).
- For updates: change **version** in `manifest.json`, create a new ZIP, then in the dashboard open the item → **Package** → upload the new ZIP → **Submit for review**.

---

## Quick checklist

- [ ] Developer account created and fee paid  
- [ ] Extension tested locally  
- [ ] ZIP has manifest at root and only needed files  
- [ ] Store listing: description, category, at least one 1280×800 screenshot, 128×128 icon  
- [ ] Privacy: single purpose, permission justifications, “No” remote code, data use, privacy policy URL  
- [ ] Distribution and pricing set  
- [ ] Submit for review  

Official docs:

- [Publish in the Chrome Web Store](https://developer.chrome.com/docs/webstore/publish)
- [Prepare your extension](https://developer.chrome.com/docs/webstore/prepare)
- [Store listing](https://developer.chrome.com/docs/webstore/cws-dashboard-listing)
- [Privacy practices](https://developer.chrome.com/docs/webstore/cws-dashboard-privacy)
