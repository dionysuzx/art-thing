# Art Gallery Website

A modern, optimized art gallery website built with Astro, Tailwind CSS, and PhotoSwipe for image lightbox functionality.

## Features

- Fast & responsive design using Astro and Tailwind CSS
- Image optimization using Sharp
- Lightbox functionality with PhotoSwipe for full-screen image viewing
- Hover effects and smooth animations
- Easily deployable to Vercel

## Setup

1. Clone this repository
2. Install dependencies with pnpm:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

## Deployment to Vercel

This project is configured for easy deployment to Vercel. You can deploy it in a few simple steps:

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and create a new project
3. Connect your GitHub repository
4. Select 'pnpm' as the package manager
5. Deploy!

Alternatively, you can deploy directly from the CLI:

```bash
# Install Vercel CLI if you haven't already
pnpm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## Project Structure

- `src/pages/` - Contains Astro pages
- `src/components/` - Reusable components
- `src/layouts/` - Page layouts
- `src/data/` - Data files containing artwork information
- `src/scripts/` - Client-side JavaScript
- `public/images/` - All artwork images
- `public/` - Other static assets

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Customization

- To add or modify artwork, edit the data file at `src/data/artwork.js`
- To customize the gallery layout, modify `src/pages/index.astro`
- To change the styling, edit Tailwind classes or modify `tailwind.config.mjs`

## Technologies

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PhotoSwipe](https://photoswipe.com/)
- [Sharp](https://sharp.pixelplumbing.com/) for image optimization
- [Vercel](https://vercel.com/) for deployment
