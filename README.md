# Frontend Developer Portfolio

A modern, responsive portfolio website built with React and Vite, featuring glassmorphism design, smooth animations, and dark/light mode.

## ✨ Features

- ✅ Minimal clean layout (Netflix/Apple style)
- ✅ Subtle animations + micro-interactions (Framer Motion)
- ✅ Dark/light mode toggle
- ✅ Floating glass morphic cards
- ✅ Fully responsive (mobile first)
- ✅ Scroll-based fade-in animations
- ✅ Cursor hover effects (magnetic cursor, link hover glow)
- ✅ 3D animations in hero section
- ✅ GitHub stats integration (optional)

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## 🎨 Customization

### Update Personal Information

1. **GitHub Stats**: Edit `src/App.jsx` and update the `username` prop in `<GitHubStats />`
2. **Social Links**: Update links in `src/components/Hero.jsx` and `src/components/Footer.jsx`
3. **Projects**: Edit the projects array in `src/components/Projects.jsx`
4. **Contact Info**: Update contact details in `src/components/Contact.jsx`

### Theme Customization

Edit color variables in `src/index.css` to customize the theme colors.

## 📦 Dependencies

- React 19
- Framer Motion - Animations
- Lottie React - Optional animations
- React Icons - Icon library

## 🎯 Sections

- Hero with animated 3D elements
- About with glassmorphic cards
- Skills showcase
- Featured Projects
- GitHub Statistics (optional)
- Contact Form

## 📱 Responsive Design

Fully responsive design with mobile-first approach. Custom cursor effects are disabled on mobile devices.

## 🌙 Dark/Light Mode

Theme preference is saved to localStorage and persists across sessions.
