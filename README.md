# BMW Luxury Drive Studio

A premium, responsive BMW showcase and ownership-planning experience built with React and Vite. The project combines an editorial model catalogue, interactive 3D viewing, finance estimates, and a private concierge journey.

> This is an educational portfolio project. BMW and related marks are trademarks of Bayerische Motoren Werke AG.

## Highlights

- Cinematic landing page with an upright vertical hero video
- Premium navigation, footer, contact experience, and responsive layouts
- Curated BMW catalogue with model and collection pages
- Interactive model spotlight and detailed vehicle pages
- 3D studio with full camera rotation and exterior colour controls
- Smart budget calculator for down payment, term, APR, and estimated monthly cost
- Filterable BMW Series comparison with a mobile card layout
- Editorial BMW Character and Century in Motion sections
- Optimized WebP imagery and higher-quality official vehicle assets
- Keyboard-friendly controls, semantic HTML, and accessible labels

## Main Routes

| Route | Experience |
| --- | --- |
| `/` | Premium home and model spotlight |
| `/cars` | Complete BMW catalogue |
| `/cars/new-models` | New models collection |
| `/cars/luxury-collection` | Luxury collection |
| `/cars/best-selling-models` | Best-selling models |
| `/cars/bmw-series-table` | Interactive BMW Series comparison |
| `/cars/:carId` | Individual vehicle details |
| `/studio` | 3D viewer and smart budget calculator |
| `/contact` | Private concierge request form |

## Technology

- React 19
- React Router 7
- Vite 7
- CSS Modules and responsive global CSS
- Sketchfab Viewer API for the interactive 3D experience
- Local WebP images and MP4 media

## Getting Started

Requirements: Node.js LTS and npm.

```bash
npm install
npm run dev
```

Production and quality checks:

```bash
npm run lint
npm run build
npm run preview
```

## Optional Media Configuration

```env
VITE_HERO_VIDEO_URL=/assets/media/hero.mp4
VITE_HERO_POSTER_URL=/assets/showcase/m8-premium.webp
```

The included video is displayed vertically with CSS rotation and `object-fit: contain`, preserving its original aspect ratio and quality.

## Project Structure

```text
src/
  components/
  data/
  hooks/
  pages/
  styles/
  utils/
public/assets/
scripts/
```

## Image Utilities

```bash
node scripts/optimize-images.mjs
node scripts/fetch-official-images.mjs
```

## Notes

- Finance calculations are illustrative and exclude taxes, fees, insurance, and final lender terms.
- The interactive 3D model is loaded from Sketchfab and requires an internet connection.
- Vehicle specifications and pricing are indicative and may vary by market and model year.
