# LazyJobs_Web Deployment Guide

## 🚀 Deploy to Vercel

### Step 1: Install Dependencies

```bash
cd /Users/mafr/Code/github/openlazyjobs/LazyJobs_Web
npm install
```

### Step 2: Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to preview the site.

### Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: LazyJobs_Web marketing site"
git branch -M main
git remote add origin https://github.com/magnusfroste/LazyJobs_Web.git
git push -u origin main
```

### Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import `LazyJobs_Web` repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

### Step 5: Configure Domain

1. In Vercel project settings, go to "Domains"
2. Add custom domain: `www.lazyjobs.ink`
3. Add redirect: `lazyjobs.ink` → `www.lazyjobs.ink`
4. Update DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Step 6: Verify Deployment

- **Marketing Site**: https://www.lazyjobs.ink
- **App**: https://app.lazyjobs.ink (separate deployment)
- **OpenJobs**: https://openjobs.froste.eu

## 🔧 Configuration

### vercel.json

Already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing: All routes → `index.html`
- Asset caching: 1 year for `/assets/*`

### Environment Variables

None required for marketing site.

## 📊 Post-Deployment Checklist

- [ ] Site loads at www.lazyjobs.ink
- [ ] All CTAs link to app.lazyjobs.ink
- [ ] OpenJobs links work (openjobs.froste.eu)
- [ ] Mobile responsive
- [ ] Navigation smooth scrolling works
- [ ] All sections render correctly
- [ ] Footer links work
- [ ] SEO meta tags present

## 🎯 Analytics (Optional)

Add analytics to track conversions:

1. **Plausible** (Privacy-friendly)
   ```html
   <!-- Add to index.html -->
   <script defer data-domain="lazyjobs.ink" src="https://plausible.io/js/script.js"></script>
   ```

2. **PostHog** (Product analytics)
   ```bash
   npm install posthog-js
   ```

3. **Google Analytics** (Traditional)
   ```html
   <!-- Add to index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS Not Loading

- Check Tailwind config includes all source files
- Verify PostCSS config is correct
- Run `npm run build` to test production build

### Routes Not Working

- Ensure `vercel.json` has SPA rewrite rule
- Check React Router is properly configured

## 🔄 Updates

To update the site:

```bash
# Make changes
git add .
git commit -m "Update: description of changes"
git push

# Vercel auto-deploys on push to main
```

## 📈 Performance

Expected Lighthouse scores:
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🎨 Customization

### Update Content

Edit components in `/src/components/`:
- `Hero.jsx` - Main headline and CTA
- `Features.jsx` - Feature list
- `Testimonials.jsx` - User quotes
- `OpenJobsPromo.jsx` - OpenJobs section

### Update Styling

Edit `/src/index.css` or `/tailwind.config.js`

### Update Links

Search and replace:
- `app.lazyjobs.ink` - App URL
- `openjobs.froste.eu` - OpenJobs URL
- `hello@lazyjobs.ink` - Contact email

## 🚀 Go Live!

Once deployed:
1. Test all functionality
2. Share on social media
3. Update LazyJobs app to link back to www.lazyjobs.ink
4. Monitor analytics for conversions
5. Iterate based on user feedback

---

**Ready to deploy?** Run `npm install && npm run dev` to start! 🎉
