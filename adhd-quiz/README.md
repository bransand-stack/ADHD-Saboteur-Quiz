# ADHD Saboteur Quiz — Deployment Guide
### Bransand Solutions & Services

This is your ADHD Saboteur Quiz built in React, ready to deploy on Vercel via GitHub.

---

## STEP 1 — Install Node.js (if you haven't already)

Go to https://nodejs.org and download the **LTS version**. Install it like any app.
To confirm it worked, open Terminal (Mac) or Command Prompt (Windows) and type:
```
node -v
```
You should see a version number like `v20.x.x`

---

## STEP 2 — Create a GitHub Account

Go to https://github.com and sign up for a free account if you don't have one.

---

## STEP 3 — Create a New GitHub Repository

1. Once logged in, click the **+** icon in the top right → **New repository**
2. Name it: `adhd-saboteur-quiz`
3. Set it to **Public** (required for free Vercel deploys)
4. Do NOT check "Add a README file"
5. Click **Create repository**
6. Copy the repository URL — it will look like:
   `https://github.com/YOURUSERNAME/adhd-saboteur-quiz.git`

---

## STEP 4 — Upload Your Files to GitHub

### Option A — Using GitHub's website (easiest, no Terminal needed)

1. On your new repository page, click **uploading an existing file**
2. Drag and drop ALL the files and folders from this project:
   - `src/` folder (entire folder)
   - `public/` folder (entire folder)
   - `package.json`
   - `.gitignore`
3. Scroll down, add a commit message like `Initial upload`
4. Click **Commit changes**

### Option B — Using Terminal

Open Terminal, navigate to this folder, and run:
```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/adhd-saboteur-quiz.git
git push -u origin main
```

---

## STEP 5 — Deploy on Vercel

1. Go to https://vercel.com and sign up with your GitHub account
2. Click **Add New → Project**
3. Find and select your `adhd-saboteur-quiz` repository
4. Vercel will auto-detect it as a React app — you don't need to change any settings
5. Click **Deploy**
6. Wait ~2 minutes — Vercel will give you a live URL like:
   `https://adhd-saboteur-quiz.vercel.app`

---

## STEP 6 — Add a Custom Domain (Optional)

If you want it to live at something like `quiz.bransandservices.com`:

1. In Vercel, go to your project → **Settings → Domains**
2. Add your custom domain
3. Vercel will give you DNS records to add in your domain provider (wherever you bought bransandservices.com)
4. Once DNS propagates (up to 24hrs), your quiz will be live on your domain

---

## STEP 7 — Embed on Squarespace

Once deployed, you can embed the quiz on any Squarespace page:

1. Copy your Vercel URL
2. In Squarespace, add an **Embed block** to any page
3. Paste this code:
```html
<iframe
  src="YOUR_VERCEL_URL"
  width="100%"
  height="800px"
  frameborder="0"
  style="border:none;"
></iframe>
```
4. Replace `YOUR_VERCEL_URL` with your actual Vercel link

---

## Making Updates Later

Whenever you want to change the quiz content (questions, descriptions, colours):
- Edit the file `src/data/quizData.js` for questions and results
- Edit `src/components/Intro.js` for the intro page text
- Push changes to GitHub — Vercel will automatically redeploy within minutes

---

## Need Help?

Contact: bransandservices.com
