# Seattle Content Studio

A professional content creation and AI consulting website built with React, TypeScript, and Tailwind CSS. This site showcases services for AI-driven content creation, technical documentation, automation, and app development.

## 🌐 Live Site

**Production URL:** https://frolicking-mandazi-75adbc.netlify.app

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Content Management](#content-management)
- [SEO & Performance](#seo--performance)
- [Contributing](#contributing)

## 🎯 Overview

Seattle Content Studio is a comprehensive business website for a content creation and AI consulting agency. The site features:

- **Professional Services Showcase**: 8 distinct service categories with dedicated pages
- **Content Marketing Hub**: Blog system with categorized posts and RSS feed
- **Lead Generation**: Contact forms and consultation booking
- **SEO Optimization**: Structured data, meta tags, and performance optimization
- **Responsive Design**: Mobile-first approach with modern UI/UX

## ✨ Features

### Core Functionality
- **Multi-page React Application** with client-side routing
- **Responsive Design** optimized for all device sizes
- **Blog System** with categories, filtering, and pagination
- **Contact Forms** with validation and user feedback
- **SEO Optimization** with structured data and meta tags
- **RSS Feed** for blog content syndication

### Service Pages
1. **AI-Driven Content** - AI-powered content creation services
2. **Technical Documentation** - Developer-focused documentation
3. **Whitepapers & Case Studies** - Research and analysis content
4. **Tech Event Coverage** - Event reporting and analysis
5. **AI Automation Services** - Business process automation
6. **App-Based Content & Sites** - Interactive applications
7. **Bookmaking Services** - Publishing and editing services
8. **WordPress Websites** - Custom website development

### Content Features
- **Blog Categories**: 8 distinct categories for content organization
- **Content Filtering**: Filter blog posts by category
- **Load More Functionality**: Progressive content loading
- **Related Articles**: Context-aware content recommendations
- **Author Profiles**: Professional author information and headshots

### User Experience
- **Smooth Scrolling Navigation** between page sections
- **Interactive Components**: Testimonial sliders, FAQ accordions
- **Form Validation**: Real-time validation with error handling
- **Loading States**: User feedback during form submissions
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠 Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe development
- **Vite 5.4.2** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React 0.344.0** - Modern icon library
- **Custom CSS** - Additional styling for animations and effects

### Routing & Navigation
- **React Router DOM 6.26.0** - Client-side routing
- **Smooth Scrolling** - Enhanced navigation experience

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

### Deployment
- **Netlify** - Static site hosting with continuous deployment
- **Vite Build** - Optimized production builds

## 📁 Project Structure

```
seattle-content-studio/
├── public/
│   ├── images/                    # Static images and assets
│   │   ├── joe-at-coffee.png     # About section image
│   │   ├── seattle-skyline.png   # Hero background
│   │   └── seattle_headshot_cropped.jpg # Author headshot
│   └── rss.xml                   # RSS feed for blog content
├── src/
│   ├── components/               # Reusable React components
│   │   ├── About.tsx            # About section component
│   │   ├── Blog.tsx             # Main blog page
│   │   ├── BlogPreview.tsx      # Homepage blog preview
│   │   ├── Contact.tsx          # Contact form and info
│   │   ├── FAQ.tsx              # Frequently asked questions
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Home.tsx             # Hero section
│   │   ├── Services.tsx         # Services overview
│   │   └── Testimonials.tsx     # Client testimonials
│   ├── pages/
│   │   ├── blog/
│   │   │   └── BlogPost.tsx     # Individual blog post page
│   │   ├── legal/
│   │   │   ├── PrivacyPolicy.tsx # Privacy policy page
│   │   │   └── TermsOfService.tsx # Terms of service page
│   │   ├── services/            # Individual service pages
│   │   │   ├── AIDrivenContent.tsx
│   │   │   ├── AIAutomationServices.tsx
│   │   │   ├── AppBasedContentAndSites.tsx
│   │   │   ├── BookmakingServices.tsx
│   │   │   ├── TechEventCoverage.tsx
│   │   │   ├── TechnicalDocumentation.tsx
│   │   │   ├── WhitepapersAndCaseStudies.tsx
│   │   │   └── WordPressWebsites.tsx
│   │   └── solutions/
│   │       └── APIReferenceDocumentation.tsx
│   ├── data/
│   │   └── blogPosts.ts         # Blog content data
│   ├── types/
│   │   └── blog.ts              # TypeScript type definitions
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template with SEO meta tags
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite build configuration
└── README.md                    # This documentation file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd seattle-content-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

## 💻 Development

### Adding New Blog Posts

Blog posts are managed in `src/data/blogPosts.ts`. To add a new post:

1. **Create new blog post object**:
   ```typescript
   {
     id: 23, // Increment from last ID
     slug: "your-post-slug",
     title: "Your Post Title",
     excerpt: "Brief description of the post content...",
     content: `Full post content in markdown-like format...`,
     date: "January 20, 2025",
     author: "Seattle Content Studio",
     categories: ["AI-Driven Content"], // Choose from available categories
     readTime: "5 min read",
     image: "https://images.pexels.com/photos/...", // Pexels image URL
     imageAlt: "Descriptive alt text for the image"
   }
   ```

2. **Available Categories**:
   - AI-Driven Content
   - Technical Documentation
   - Whitepapers & Case Studies
   - Tech Event Coverage
   - AI Automation Services
   - App-Based Content & Sites
   - Case Studies & Best Practices
   - Career Marketing

### Adding New Service Pages

To add a new service:

1. **Create service page** in `src/pages/services/`
2. **Add route** in `src/App.tsx`
3. **Update services array** in `src/components/Services.tsx`
4. **Update footer links** in `src/components/Footer.tsx`

### Styling Guidelines

- **Use Tailwind CSS classes** for all styling
- **Follow mobile-first approach** with responsive breakpoints
- **Maintain consistent spacing** using Tailwind's spacing scale
- **Use semantic color classes** (emerald for primary, gray for text)

### Component Structure

- **Functional components** with TypeScript
- **React hooks** for state management
- **Props interfaces** for type safety
- **Consistent naming conventions** (PascalCase for components)

## 🚀 Deployment

### Netlify Deployment

The site is configured for automatic deployment on Netlify:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Node Version**: 18+

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy dist/ folder to your hosting provider
```

### Environment Variables

No environment variables are required for basic functionality. All content is statically generated.

## 📝 Content Management

### Blog Content

- **Location**: `src/data/blogPosts.ts`
- **Format**: TypeScript objects with structured data
- **Images**: External Pexels URLs for performance
- **Categories**: Predefined categories for consistency

### Service Pages

- **Individual pages** for each service in `src/pages/services/`
- **Consistent structure** with hero, content, and sidebar
- **Related blog post links** for content cross-promotion

### Static Assets

- **Images**: Stored in `public/images/`
- **RSS Feed**: Static XML file in `public/rss.xml`
- **Favicons**: Standard favicon files in `public/`

## 🔍 SEO & Performance

### SEO Features

- **Structured Data**: JSON-LD schema markup in `index.html`
- **Meta Tags**: Comprehensive meta tags for social sharing
- **Canonical URLs**: Proper canonical link tags
- **RSS Feed**: XML feed for content syndication
- **Sitemap**: Generated automatically by build process

### Performance Optimizations

- **Vite Build**: Fast bundling and optimization
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: External CDN images (Pexels)
- **Lazy Loading**: Progressive content loading
- **Minification**: CSS and JavaScript minification

### Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color schemes

## 🤝 Contributing

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured for React and TypeScript
- **Prettier**: Code formatting (if configured)
- **Naming**: PascalCase for components, camelCase for functions

### Pull Request Process

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

### Testing

- **Manual testing** across different devices and browsers
- **Accessibility testing** with screen readers
- **Performance testing** with Lighthouse
- **SEO validation** with structured data testing tools

## 📞 Support

For questions or support regarding this website:

- **Email**: hello@seattlecontentstudio.com
- **Website**: https://frolicking-mandazi-75adbc.netlify.app
- **Documentation**: This README file

## 📄 License

This project is proprietary software owned by Seattle Content Studio. All rights reserved.

---

**Built with ❤️ by Seattle Content Studio**
