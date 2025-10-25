# 🚀 LazyJobs_Web - GitHub Setup Guide

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name:** `LazyJobs_Web`
3. **Description:** "LazyJobs marketing website - Modern landing page built with React + Vite + TailwindCSS"
4. **Visibility:** Public (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

## Step 2: Push to GitHub

After creating the repo, run these commands:

```bash
cd /Users/mafr/Code/github/openlazyjobs/LazyJobs_Web

# Add GitHub remote (replace with your actual repo URL)
git remote add origin https://github.com/openlazyjobs/LazyJobs_Web.git

# Or if using SSH:
# git remote add origin git@github.com:openlazyjobs/LazyJobs_Web.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Netlify

### Option A: Netlify UI (Easiest)

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize
4. Select **`LazyJobs_Web`** repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**

### Option B: Netlify CLI

```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Follow prompts:
# - Create & configure a new site
# - Build command: npm run build
# - Publish directory: dist

# Deploy
netlify deploy --prod
```

## Step 4: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `lazyjobs.ink` or `www.lazyjobs.ink`)
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Netlify)

## Step 5: Environment Variables (If Needed)

If you add any environment variables later:

1. In Netlify: **Site settings** → **Environment variables**
2. Add variables (e.g., `VITE_API_URL`)
3. Redeploy site

## 📁 Repository Structure

```
LazyJobs_Web/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main app
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite config
├── tailwind.config.js  # Tailwind config
├── README.md           # Project docs
├── DEPLOYMENT.md       # Deployment guide
└── .gitignore          # Git ignore rules
```

## 🔗 Useful Links

- **GitHub Repo:** https://github.com/openlazyjobs/LazyJobs_Web
- **Netlify Dashboard:** https://app.netlify.com
- **Vite Docs:** https://vitejs.dev
- **TailwindCSS Docs:** https://tailwindcss.com

## ✅ Checklist

- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Deploy to Netlify
- [ ] Configure custom domain (optional)
- [ ] Test live site
- [ ] Update README with live URL

## 🎉 Done!

Your LazyJobs marketing site is now:
- ✅ Version controlled on GitHub
- ✅ Automatically deployed
- ✅ Live on the internet
- ✅ Ready for updates

**Next steps:**
- Share the live URL
- Add analytics (Google Analytics, Plausible, etc.)
- Set up continuous deployment (automatic on Netlify)
