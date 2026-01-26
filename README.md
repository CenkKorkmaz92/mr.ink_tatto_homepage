# Mr. Ink Tattoo - Official Homepage

Professional website for Mr. Ink Tattoo studio in Nürtingen, Germany. Specializing in custom tattoos and professional piercing services.

## About

**Mr. Ink Tattoo** is run by Max Riss, offering custom tattoo art with years of experience and artistic excellence. The studio also features **Mrs. Steel** (Selina), a professional piercing specialist with extensive experience in ear, facial, and body piercings.

**Location:** Neuffener Str. 66, 72622 Nürtingen, Germany  
**Business Model:** Appointment-only (Tuesday - Saturday)  
**Guest Artists:** The studio regularly hosts guest tattoo artists

## Features

- **Tattoo Gallery** - 63+ tattoo portfolio images with grid view and lightbox
- **Piercing Gallery** - 31+ piercing portfolio images with dedicated modal
- **Interactive Portfolio Modals** - Browse work in responsive grid layouts
- **Artist Profiles** - Detailed bios for Max (tattoo artist) and Selina (piercing specialist)
- **Contact Form** - Direct messaging to specific artists with validation
- **Multi-language Support** - Full German and English translations with i18next
- **Responsive Design** - Mobile-first design with smooth animations
- **Studio Tour** - Video and image showcases of the workspace

## Technologies

- **React 18** - Modern UI framework with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first styling framework
- **shadcn/ui** - High-quality accessible component library
- **React Router** - Client-side navigation and routing
- **i18next** - Internationalization framework (German/English)
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library

## Image Assets

- **Tattoo Gallery:** 63 images in `/public/gallery/` (bild_001.webp - bild_063.webp)
- **Piercing Gallery:** 31 images in `/public/piercing-gallery/` (piercing_001.webp - piercing_031.webp)
- **Video Assets:** Studio tour and portfolio videos in `/public/`

## Getting Started

```bash
# Install dependencies
bun install
# or
npm install

# Start development server
bun run dev
# or
npm run dev

# Build for production
bun run build
# or
npm run build

# Preview production build
bun run preview
# or
npm run preview
```

**Development Server:** http://localhost:5173

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation with mobile menu
│   ├── Footer.tsx      # Footer with legal dialogs
│   ├── ImageCarousel.tsx  # Hero carousel
│   ├── GalleryLightbox.tsx  # Image lightbox viewer
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with portfolio grid
│   ├── Gallery.tsx     # Full tattoo gallery (63 images)
│   ├── Pircing.tsx     # Piercing page with portfolio (31 images)
│   ├── Team.tsx        # Artist profiles
│   ├── Contact.tsx     # Contact form
│   └── ...
├── i18n/               # Internationalization
│   ├── config.ts       # i18next setup
│   └── locales/        # Translation files (de.json, en.json)
├── assets/             # Images and media
├── hooks/              # Custom React hooks
├── lib/                # Utility functions (cn helper)
└── main.tsx            # Application entry point
```

## Key Features Implementation

### Portfolio Grid Modals
- Home page: Shows 63 tattoo images in responsive grid
- Piercing page: Shows 31 piercing images with custom styling
- Click "Gallery" button to navigate to full gallery page

### Image Galleries
- Dynamic loading using `Array.from()` for scalability
- Lightbox with keyboard navigation (Arrow keys, Escape)
- Responsive grid layouts (2/3/4 columns)

### Mobile Menu
- Slide-down/up animations with closing state
- Absolute positioning to prevent page reflow
- Language switcher with flag icons

### Internationalization
- German (default) and English support
- Translation keys for all content
- Dynamic language switching

## Development

The project uses:
- **ESLint** for code quality and linting
- **TypeScript** for type safety and better DX
- **Tailwind CSS** for utility-first styling
- **React Router** for page navigation
- **JSDoc** for comprehensive code documentation
- **Bun** as package manager and runtime (optional, npm also supported)

### Code Standards
- All components documented with JSDoc
- Constants use UPPERCASE naming convention
- Minimum font size: 16px for accessibility
- Clean code without unnecessary comments

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact

**Studio:** Mr. Ink Tattoo  
**Owner:** Max Riss  
**Address:** Neuffener Str. 66, 72622 Nürtingen, Germany  
**Phone (Tattoo):** 01573 3360210  
**Phone (Piercing):** 0157 52047349  
**Email (Tattoo):** mr.ink.nt@gmail.com  
**Email (Piercing):** mrs.steel.111@gmail.com

**Social Media:**
- Instagram: [@mr__ink__tattoo](https://www.instagram.com/mr__ink__tattoo/)
- Instagram: [@mrs_steel_piercing](https://www.instagram.com/mrs_steel_piercing/)
- Facebook: [Mr. Ink Tattoo](https://www.facebook.com/p/mr__ink__tattoo-100071387660308/)
- Facebook: [Mrs. Steel Piercing](https://www.facebook.com/mrssteelpiercing/)

## Credits

**Design & Development:** Cenk Korkmaz  
**Deployment & Hosting:** Philipp Schoenborn

## License

© 2026 Mr. Ink Tattoo. All rights reserved.