# 🚀 Deployment Guide - Portfolio Project

## How to Run Locally (Development)

### Option 1: Using npm
```bash
# Navigate to project folder
cd c:\wamp64\www\peoject-nextjs

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

### Option 2: Using yarn
```bash
cd c:\wamp64\www\peoject-nextjs
yarn install
yarn dev
```

### Option 3: Using pnpm
```bash
cd c:\wamp64\www\peoject-nextjs
pnpm install
pnpm dev
```

**Access your site at:** http://localhost:3000

---

## 🌐 Deploy to Production (Live)

### Method 1: Vercel (Easiest & Recommended) ⭐

**Step 1:** Push code to GitHub
```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Portfolio with iPilot project"

# Add GitHub repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

**Step 2:** Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

**Your site will be live in 2-3 minutes!** 🎉

**Live URL:** `https://your-project-name.vercel.app`

---

### Method 2: Netlify

**Step 1:** Build the project
```bash
npm run build
```

**Step 2:** Deploy
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop the `.next` folder
4. Or connect GitHub repo

**Live URL:** `https://your-site-name.netlify.app`

---

### Method 3: Local Network (For Testing on Other Devices)

**Step 1:** Find your local IP
```bash
ipconfig
```
Look for "IPv4 Address" (e.g., 192.168.1.100)

**Step 2:** Update next.config.ts
```typescript
const nextConfig = {
  // Add this
  async rewrites() {
    return [];
  },
};
```

**Step 3:** Run with custom host
```bash
npm run dev -- -H 0.0.0.0
```

**Access from other devices:** `http://192.168.1.100:3000`

---

## 📦 Build for Production

```bash
# Build optimized production version
npm run build

# Test production build locally
npm run start
```

---

## 🔧 Custom Domain Setup (After Deployment)

### On Vercel:
1. Go to project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., yourname.com)
4. Update DNS records as shown

### On Netlify:
1. Go to "Domain Settings"
2. Add custom domain
3. Follow DNS instructions

---

## 🌍 Environment Variables (For Production)

Create `.env.local` file:
```bash
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

Add these in Vercel/Netlify dashboard under "Environment Variables"

---

## 📱 Share Your Live Site

After deployment, you'll get a URL like:
- **Vercel:** `https://portfolio-abc123.vercel.app`
- **Netlify:** `https://portfolio-abc123.netlify.app`

Share this URL to show your portfolio live! 🎉

---

## 🔥 Quick Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Check code quality |
| `npm run type-check` | Check TypeScript errors |

---

## 🐛 Troubleshooting

**Problem:** Port 3000 already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

**Problem:** Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Problem:** Module not found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## 📞 Need Help?

1. Check Next.js docs: https://nextjs.org/docs
2. Vercel support: https://vercel.com/support
3. GitHub Issues: Create issue in your repo

---

**Made with ❤️ using Next.js 16**
