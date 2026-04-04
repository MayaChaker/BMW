# BMW Luxury Drive Studio (React + Vite)

A modern, responsive BMW luxury car showcase website built with React and Vite. It features a video-driven landing page, curated car collections, dynamic car details, and a concierge-style contact form.

> Disclaimer: This project is for educational/demo purposes. BMW and related marks are trademarks of Bayerische Motoren Werke AG.

## Screenshots

Place screenshots in `./assets/screenshots/` (repository root) and update the paths if you rename files.

| Home                                   | Cars                                   | Car Details                                          | Contact                                      |
| -------------------------------------- | -------------------------------------- | ---------------------------------------------------- | -------------------------------------------- |
| ![Home](./assets/screenshots/home.png) | ![Cars](./assets/screenshots/cars.png) | ![Car Details](./assets/screenshots/car-details.png) | ![Contact](./assets/screenshots/contact.png) |

## Project Overview

This website helps users:

- Discover BMW models through a curated browsing experience
- Explore sub-collections (New Models, Luxury Collection, Best-Selling Models)
- Open a dedicated details page for each model via dynamic routing
- Contact a concierge using a form that can prefill the selected model

## Features

- **Home page**
  - Hero section with background video
  - Heritage section with background image and animated Ken Burns effect
  - Highlights section using reusable card components
- **Cars listing**
  - Browse all cars in a unified grid
  - Filter by type (tabs-style UI)
  - Navigate to a specific model page
- **Cars subpages**
  - New Models
  - Luxury Collection
  - Best-Selling Models
  - BMW Series Table
- **Car details**
  - Dynamic route: `/cars/:carId`
  - “Get Buying Info” CTA that deep-links to Contact with query-string prefill
- **Contact**
  - Concierge form split into components and powered by a custom hook
  - Supports prefilled `model` + `notes` from URL params
- **Layout**
  - Persistent Navbar with Cars dropdown and CTA
  - Persistent Footer with external links

## Tech Stack

- **Frontend:** React 19, React Router DOM 7
- **Build tooling:** Vite 7
- **Styling:**
  - CSS Modules for Home (`src/styles/Home.module.css`) to avoid style collisions
  - Global CSS for shared UI and feature pages (`shared.css`, `car.css`, `contact.css`, `index.css`)
- **Icons:** inline SVG (no external icon library)
- **Media:** served from `public/assets/*` (video + images)

## Folder Structure

Key files and directories:

```text
src/
  components/
    Home/
      HeroSection.jsx
      HeritageSection.jsx
      HighlightsSection.jsx
      HighlightCard.jsx
      HeritageCard.jsx
    Navbar/
      Navbar.jsx
      CarsDropdown.jsx
      nav.constants.js
      nav.utils.js
    Contact/
      Contact.jsx
      ContactForm.jsx
      ContactFields.jsx
    Footer.jsx
  data/
    bmwCars.js
  hooks/
    useContactForm.js
  pages/
    Home.jsx
    Cars.jsx
    CarDetails.jsx
    NewModels.jsx
    LuxuryCollection.jsx
    BestSellingModels.jsx
    BmwSeriesTable.jsx
    Contact.jsx
  styles/
    Home.module.css
    shared.css
    index.css
    car.css
    contact.css
  utils/
    car.utils.js
  App.jsx
  main.jsx
public/
  assets/
    brand/
    cars/
    media/
```

## Routing

All routes are defined in [App.jsx](./src/App.jsx):

- `/` → Home
- `/cars` → Cars listing
- `/cars/new-models` → New Models
- `/cars/luxury-collection` → Luxury Collection
- `/cars/best-selling-models` → Best-Selling Models
- `/cars/bmw-series-table` → BMW Series Table
- `/cars/:carId` → Car Details (dynamic)
- `/contact` → Contact / concierge form

### Routing Example

```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cars" element={<Cars />} />
  <Route path="/cars/new-models" element={<NewModels />} />
  <Route path="/cars/luxury-collection" element={<LuxuryCollection />} />
  <Route path="/cars/best-selling-models" element={<BestSellingModels />} />
  <Route path="/cars/bmw-series-table" element={<BmwSeriesTable />} />
  <Route path="/cars/:carId" element={<CarDetails />} />
  <Route path="/contact" element={<Contact />} />
</Routes>;
```

## Components

### Navigation

- **Navbar**: [Navbar.jsx](./src/components/Navbar/Navbar.jsx)
  - Cars dropdown is extracted to [CarsDropdown.jsx](./src/components/Navbar/CarsDropdown.jsx)
  - Links and helpers are centralized in:
    - [nav.constants.js](./src/components/Navbar/nav.constants.js)
    - [nav.utils.js](./src/components/Navbar/nav.utils.js)

#### Navbar Example (Dropdown)

```jsx
import CarsDropdown from "./CarsDropdown";

<CarsDropdown
  dropdownRef={carsDropdownRef}
  isOpen={isCarsDropdownOpen}
  isActive={isCarsRouteActive}
  onToggle={toggleCarsDropdown}
  onClose={closeMenus}
  onKeyDown={handleCarsButtonKeyDown}
/>;
```

### Home (Reusable Sections)

- **HeroSection**: [HeroSection.jsx](./src/components/Home/HeroSection.jsx)
- **HeritageSection**: [HeritageSection.jsx](./src/components/Home/HeritageSection.jsx)
- **HighlightsSection**: [HighlightsSection.jsx](./src/components/Home/HighlightsSection.jsx)
- Reusable cards:
  - [HighlightCard.jsx](./src/components/Home/HighlightCard.jsx)
  - [HeritageCard.jsx](./src/components/Home/HeritageCard.jsx)

#### Home Example (Composed Sections)

```jsx
import styles from "../styles/Home.module.css";
import HeroSection from "../components/Home/HeroSection";
import HeritageSection from "../components/Home/HeritageSection";
import HighlightsSection from "../components/Home/HighlightsSection";

export default function Home() {
  return (
    <main>
      <HeroSection styles={styles} />
      <HeritageSection styles={styles} />
      <HighlightsSection styles={styles} />
    </main>
  );
}
```

### Contact (Form Split + Custom Hook)

- Page component: [Contact.jsx](./src/components/Contact/Contact.jsx)
- Form UI split into:
  - [ContactForm.jsx](./src/components/Contact/ContactForm.jsx)
  - [ContactFields.jsx](./src/components/Contact/ContactFields.jsx)
- State + submit logic:
  - [useContactForm.js](./src/hooks/useContactForm.js)

#### Contact Example (Custom Hook)

```jsx
import { useLocation } from "react-router-dom";
import { useContactForm } from "../../hooks/useContactForm";

const location = useLocation();
const { formData, isSubmitted, isSubmitting, handleChange, handleSubmit } =
  useContactForm({ search: location.search, modelOptions: MODEL_OPTIONS });
```

## Styling & Performance

- **Scoped styling:** Home uses CSS Modules to reduce global style conflicts.
- **Responsive design:** Layout and grids use CSS media queries (e.g., stacked layouts on smaller screens).
- **Media performance:**
  - Images use `loading="lazy"` where appropriate (e.g., heritage image).
  - `decoding="async"` is used on large images for smoother rendering.

## Accessibility

- **Semantic HTML:** uses `main`, `section`, `header`, lists, and buttons appropriately.
- **ARIA usage:** sections and lists use ARIA roles/labels, and icons are marked `aria-hidden`.
- **Keyboard navigation:**
  - Cars dropdown supports keyboard dismissal (Escape)
  - Menu state is reflected through `aria-expanded`

## Setup & Installation

Prerequisites:

- Node.js (LTS recommended)

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Usage

- Start on the **Home** page to view the hero video and highlight sections.
- Open **Cars** to browse the grid and filter by type.
- Click any model to open **Car Details** (`/cars/:carId`).
- Use **Get Buying Info** to jump to **Contact** with the model prefilled.
- Use the **Navbar** Cars dropdown to navigate between car collections.

## Future Improvements

- Add search and multi-filtering (price range, fuel type, drivetrain, year)
- Add pagination or infinite scroll for larger datasets
- Add image optimization (responsive `srcset`, AVIF/WebP fallbacks)
- Add unit/integration tests (React Testing Library + Vitest)
- Add analytics events for CTA clicks and form submissions
- Add CMS integration (content managed cars + collections)
