# 🚀 Professional Portfolio - Next.js

A modern, fully responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This project showcases a clean, professional design with smooth animations and excellent user experience.

## ✨ Features

- 🎨 **Modern Design** - Clean and professional UI with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Lightning Fast** - Optimized performance with Next.js 16 App Router
- 🎯 **TypeScript** - Fully typed for better development experience
- 💅 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🧩 **Reusable Components** - Modular component architecture
- 🔍 **SEO Optimized** - Built-in SEO best practices
- ♿ **Accessible** - WCAG compliant accessibility features

## 📁 Project Structure

```
app/
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Navigation header with mobile menu
│   │   └── Footer.tsx        # Footer with links and social media
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section for homepage
│   │   ├── Features.tsx      # Features showcase section
│   │   └── TechStack.tsx     # Technology stack display
│   └── ui/
│       ├── Button.tsx        # Reusable button component
│       ├── Card.tsx          # Card components with variants
│       └── Input.tsx         # Form input components
├── lib/
│   ├── utils.ts              # Utility functions
│   └── types.ts              # TypeScript type definitions
├── about/
│   └── page.tsx              # About page
├── projects/
│   └── page.tsx              # Projects showcase page
├── contact/
│   └── page.tsx              # Contact form page
├── layout.tsx                # Root layout with header/footer
├── page.tsx                  # Homepage
└── globals.css               # Global styles and animations
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Geist Sans & Geist Mono
- **Deployment:** Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd peoject-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Update Personal Information

1. **Homepage Hero Section:** Edit `app/components/sections/Hero.tsx`
2. **About Page:** Customize `app/about/page.tsx`
3. **Projects:** Modify the projects array in `app/projects/page.tsx`
4. **Contact Info:** Update `app/contact/page.tsx`

### Modify Branding

- **Site Name:** Update in `app/components/layout/Header.tsx` and `app/components/layout/Footer.tsx`
- **Metadata:** Edit `app/layout.tsx` for SEO information
- **Colors:** Modify Tailwind classes throughout components or extend `globals.css`

## 🎨 Components

### UI Components

- **Button** - Multiple variants (primary, secondary, outline, ghost) and sizes
- **Card** - Flexible card component with header, title, and content sections
- **Input & Textarea** - Form inputs with labels and error states

### Layout Components

- **Header** - Responsive navigation with mobile menu
- **Footer** - Footer with quick links and social media

### Section Components

- **Hero** - Eye-catching hero section with CTA buttons
- **Features** - Grid layout for showcasing features
- **TechStack** - Display of technologies and skills

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your site will be live in minutes!

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts by [Vercel](https://vercel.com/font)

---

Made with ❤️ and modern web technologies
