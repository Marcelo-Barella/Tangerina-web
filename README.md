# Tangerina Web

Official website for Tangerina, a comprehensive Discord bot for music playback, voice commands, and intelligent assistance. This repository contains the frontend web application built with Nuxt.js.

## Overview

Tangerina Web is a modern, responsive web application showcasing the features and capabilities of the Tangerina Discord bot. The website is built with Nuxt.js 4.0 and features a dark-themed, animated interface designed to provide an engaging user experience.

## Features

### Music Playback
- Spotify integration
- YouTube support
- Playlist management
- Queue system
- Playback controls
- Intelligent music search

### Voice Commands & TTS
- Voice recognition
- Text-to-Speech (TTS) responses
- Voice channel integration
- Natural language understanding
- Voice commands for music control

### Intelligent Assistant
- Web search capabilities
- Information provisioning
- Natural language processing
- Quick and accurate responses

### Entertainment & Social
- Mini-games
- Social interaction systems
- Natural language entertainment

## Tech Stack

- **Framework**: Nuxt.js 4.0
- **Language**: TypeScript 5.6.0
- **UI Framework**: Vue 3 (via Nuxt)
- **Styling**: Tailwind CSS 4.1.12
- **State Management**: Pinia 2.2.0
- **Animations**: GSAP 3.14.2, @vueuse/motion 3.0.3
- **Icons**: @nuxt/icon 1.7.0
- **Utilities**: @vueuse/core 14.1.0, @vueuse/nuxt 14.1.0
- **Build Tool**: Vite (via Nuxt)

### Development Features

- Hot Module Replacement (HMR)
- TypeScript support with type checking
- Tailwind CSS with source maps
- Nuxt DevTools enabled

## Build

### Production Build

Build the application for production:

```bash
npm run build
```

The built files will be in the `.output` directory.

### Static Generation

Generate a static site:

```bash
npm run generate
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
Tangerina-web/
├── app/
│   ├── app.vue              # Root application component
│   ├── assets/
│   │   └── css/
│   │       └── main.css     # Global styles
│   ├── components/          # Vue components
│   │   ├── TangerinaNavbar.vue
│   │   ├── TangerinaHero.vue
│   │   ├── TangerinaFeatures.vue
│   │   ├── TangerinaHowItWorks.vue
│   │   ├── TangerinaTestimonials.vue
│   │   ├── TangerinaTrustBar.vue
│   │   ├── TangerinaCTA.vue
│   │   ├── TangerinaFooter.vue
│   │   └── ...              # Additional UI components
│   └── composables/         # Composition API utilities
│       └── useDiscordInvite.ts
├── nuxt.config.ts           # Nuxt configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Configuration

### Nuxt Configuration

The application is configured as a Single Page Application (SPA) with SSR disabled. Key configuration options:

- **SSR**: Disabled (`ssr: false`)
- **Language**: Portuguese (Brazil) (`pt-BR`)
- **Theme**: Dark mode
- **Compatibility Date**: 2024-12-26

### Runtime Configuration

The application uses Nuxt runtime configuration for public values:

- `discordClientId`: Discord OAuth2 client ID (public)

### Environment Variables

If using environment variables, create a `.env` file in the root directory:

```env
NUXT_PUBLIC_DISCORD_CLIENT_ID=your_client_id_here
```

Note: The Discord client ID is currently configured in `nuxt.config.ts` but can be moved to environment variables for better security.

## Styling

The application uses Tailwind CSS 4.1.12 with custom configuration. Custom CSS is located in `app/assets/css/main.css`.

### Typography

The application uses the following Google Fonts:
- Bricolage Grotesque
- Geist Mono
- Plus Jakarta Sans

## Component Architecture

The application follows Vue 3 Composition API patterns with TypeScript:

- Components are written in `<script setup lang="ts">` format
- State management uses Pinia (when needed)
- Composable functions for reusable logic
- Type-safe props and emits

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive Web App (PWA) capabilities (if configured)

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run postinstall` - Prepare Nuxt (runs automatically after install)

## License

This project is private. All rights reserved.

## Acknowledgments

- Nuxt.js team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- All contributors to the open-source dependencies used in this project
