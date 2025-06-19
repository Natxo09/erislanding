# Eris Landing Page 🪐

<div align="center">
  <img src="public/iconnobg.png" width="128" height="128" alt="Eris Icon">
  
  **Landing page for Eris - Private AI Chat for iPhone and iPad**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.3-black.svg)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)
</div>

## About

This is the landing page for [Eris](https://github.com/Natxo09/Eris.), a private AI chat application that runs entirely on-device using Apple's MLX framework. The landing page showcases the app's features, available models, and privacy-first approach.

## Features

- 🌑 **Dark Minimalist Design** - Clean, modern interface with monochromatic theme
- ⚡ **Lightning Fast** - Built with Next.js 15 and optimized for performance
- 📱 **Fully Responsive** - Looks great on all devices
- 🎨 **Smooth Animations** - Subtle animations with Framer Motion
- 🔗 **GitHub Integration** - Live star count from the main repository
- 📄 **Legal Pages** - Privacy Policy and Terms of Use included

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Font**: Geist (Next.js default)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Natxo09/ErisLanding.git
cd ErisLanding
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   ├── privacy/         # Privacy policy page
│   └── terms/           # Terms of use page
└── components/
    ├── Header.tsx        # Navigation header
    ├── Hero.tsx          # Hero section
    ├── Features.tsx      # Features grid
    ├── Models.tsx        # AI models showcase
    ├── Privacy.tsx       # Privacy section
    ├── Download.tsx      # Download CTA
    └── Footer.tsx        # Footer with links
```

## Deployment

The site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): Simply connect your GitHub repo
- **Netlify**: Use the Next.js build plugin
- **Self-hosted**: Build and run with Node.js

## Related Projects

- [Eris iOS App](https://github.com/Natxo09/Eris.) - The main iOS application
- [MLX](https://github.com/ml-explore/mlx) - Apple's machine learning framework

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- Created by Ignacio Palacio - [natxo.dev](https://natxo.dev)
- Inspired by privacy-first AI applications
- Built with amazing open-source tools

---

### Note About the iOS App

This is just the landing page. For the actual iOS app that runs AI models on-device, check out the [main Eris repository](https://github.com/Natxo09/Eris.).

The app features:
- 100% on-device AI processing
- Support for 12+ language models
- Complete offline functionality
- No data collection or tracking
- Open source transparency

Download on the App Store (coming soon) or build from source!
