# Ritvik Jaiswal - Portfolio Website

A high-end, editorial-style portfolio website built with Astro, showcasing clean architecture and sophisticated typography.

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Custom CSS with CSS Variables
- **Typography**: Instrument Serif, Inter, DM Sans (via @fontsource)
- **Animations**: CSS animations + Intersection Observer
- **TypeScript**: Strict mode for type safety

## Design Principles

- Editorial typography with generous spacing
- Dark theme with muted gold accents
- Restrained, subtle animations
- Performance-first (targeting Lighthouse >95)
- Responsive and accessible

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Astro 4.16.18
- @fontsource packages for self-hosted fonts
- TypeScript and type checking tools

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your portfolio.

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
rj_portfolio/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro       # Root layout with SEO
│   ├── components/
│   │   ├── Hero.astro             # Hero section
│   │   ├── Work.astro             # Selected projects
│   │   ├── Experience.astro       # Work experience
│   │   ├── Skills.astro           # Skills list
│   │   └── Contact.astro          # Contact section
│   ├── content/
│   │   ├── projects.ts            # Project data
│   │   ├── experience.ts          # Experience data
│   │   └── skills.ts              # Skills data
│   ├── styles/
│   │   ├── tokens.css             # Design system variables
│   │   ├── typography.css         # Typography system
│   │   ├── global.css             # Global styles
│   │   └── animations.css         # Scroll animations
│   └── pages/
│       └── index.astro            # Main landing page
├── public/
│   └── favicon.svg                # Site favicon
├── astro.config.mjs               # Astro configuration
├── tsconfig.json                  # TypeScript config
└── package.json                   # Dependencies
```

## Customization

### Update Content

Edit the following files to customize your content:

- **src/content/projects.ts** - Add or modify projects
- **src/content/experience.ts** - Update work experience
- **src/content/skills.ts** - Modify skills list
- **src/components/Contact.astro** - Update email and social links

### Design System

Customize colors, typography, and spacing in:

- **src/styles/tokens.css** - Design tokens (colors, fonts, spacing)
- **src/styles/typography.css** - Typography classes
- **src/styles/animations.css** - Animation effects

### SEO & Metadata

Update site title and description in:

- **src/layouts/BaseLayout.astro** - Meta tags and SEO
- **astro.config.mjs** - Site URL for production

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-detect Astro and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
```

Then drag the `dist/` folder to Netlify's deploy interface.

## Performance

This portfolio is optimized for:

- **Lighthouse Score**: Target >95
- **Bundle Size**: Minimal JavaScript (<50kb)
- **Font Loading**: Self-hosted with preloading
- **Animations**: CSS-based with reduced-motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Ritvik Jaiswal. All rights reserved.
