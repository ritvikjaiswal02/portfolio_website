# Next Steps - Portfolio Setup

## Immediate Actions Required

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including Astro and the font packages.

### 2. Start Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:4321`

### 3. Customize Your Content

Update these files with your actual information:

#### **src/content/projects.ts**
- Update GitHub links for SquadTalk and InkSync
- Add live demo URLs if available
- Modify project descriptions as needed

#### **src/components/Contact.astro** (Line 16)
- Replace `ritvik.jaiswal@example.com` with your real email
- Update GitHub URL: `https://github.com/YOUR_USERNAME`
- Update LinkedIn URL: `https://linkedin.com/in/YOUR_PROFILE`

### 4. Optional Customizations

#### Add Project Screenshots (Optional)
If you want to add project images:

1. Add images to `public/images/`
2. Update `src/components/Work.astro` to include image tags
3. Keep images optimized (WebP format, <200kb each)

#### Adjust Colors
Edit `src/styles/tokens.css`:
- `--color-accent` - Currently muted gold (#C9A962)
- `--color-bg` - Background color
- `--color-text-primary` - Main text color

#### Typography Tweaks
Edit `src/styles/tokens.css`:
- Adjust `--text-hero` size range
- Modify spacing scale if needed
- Change font families

### 5. Test Responsiveness

Test on different screen sizes:
- Desktop (1440px+)
- Laptop (1024px)
- Tablet (768px)
- Mobile (375px)

### 6. Run Production Build

```bash
npm run build
```

Check for any errors. The build should complete successfully.

### 7. Deploy

#### Option A: Vercel (Recommended)
1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy (auto-detected as Astro)

#### Option B: Netlify
1. Run `npm run build`
2. Drag `dist/` folder to Netlify
3. Configure custom domain if needed

## Quality Checklist

Before deploying, verify:

- [ ] All personal links are correct (email, GitHub, LinkedIn)
- [ ] Project descriptions are accurate
- [ ] Site looks good on mobile
- [ ] All links open correctly
- [ ] No console errors in browser
- [ ] Lighthouse score >90 (run in Chrome DevTools)

## Common Issues

### Fonts not loading?
- Check that `npm install` completed successfully
- Verify @fontsource packages are in `node_modules/`
- Check browser console for 404 errors

### Animations not working?
- Ensure you're scrolling the page
- Check if `prefers-reduced-motion` is enabled in your OS
- Open browser console for JavaScript errors

### Build fails?
- Run `npm install` again
- Check for TypeScript errors: `npm run astro check`
- Verify all imports are correct

## Performance Tips

To achieve Lighthouse >95:

1. **Keep fonts subset** - @fontsource packages are already optimized
2. **Lazy load images** - Use `loading="lazy"` on img tags
3. **Minimize JS** - Current setup is already minimal
4. **Test on slow 3G** - Use Chrome DevTools throttling

## Future Enhancements

Consider adding later:

- Blog section (Astro Content Collections)
- Dark/Light mode toggle
- More projects with case studies
- Animated cursor
- Contact form with backend
- Analytics (Plausible or Fathom)

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Type checking
npm run astro check

# Production build
npm run build

# Preview production build
npm run preview
```

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify Node.js version (v18+)
3. Clear node_modules and reinstall: `rm -rf node_modules && npm install`

Good luck with your portfolio! 🚀
