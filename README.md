# Saffron Circle — Contemporary Authentic Indian Fine Dining

> **A contemporary dining experience rooted in the timeless flavours of India.**

Saffron Circle is a complete, production-quality, responsive restaurant web application inspired by the information architecture, conversion strategy, and menu presentation of the **Foodee** template, redesigned from the ground up using the visual identity, editorial palette, typography, and contemporary Indian dining aesthetic of **Saffron Circle**.

---

## 🎨 Visual Identity & Color System

The website features an airy, elegant, light editorial aesthetic built around Saffron Circle's signature palette:

- **Primary Forest Green** (`#173F36`) — 25% balance: Used for navbar accents, hero text, testimonial cards, footer, and principal branding.
- **Deep Navy** (`#102A43`) — 10% balance: Applied to high-conversion table reservation CTAs and experience highlights.
- **Warm Ivory** (`#F8F5EC`) — 55% balance: Primary page background creating a warm, spacious atmosphere.
- **Warm Sand** (`#E8E0CF`) — 7% balance: Soft neutral background for card containers, dividers, and alternating sections.
- **Muted Saffron** (`#C98B32`) — 3% accent: Subtle highlight tone for active tabs, badges, ticker strips, and icons.
- **Charcoal** (`#17201D`): Soft dark neutral body text avoiding harsh pure black.
- **Typography**: `Playfair Display` & `Cormorant Garamond` (editorial serifs for headings) paired with `Inter` (clean sans-serif for UI & body text).

---

## ✨ Features & Architecture

### Pages Included
- **Home (`/`)**: Dual-column editorial hero, rotating saffron badge, marquee ticker strip, brand story narrative, signature dishes, interactive menu preview, 2x2 value proposition grid, executive chef spotlight, dining experience showcase, masonry gallery preview, press & guest review slider, location hours, and table reservation booking engine.
- **About Our Story (`/about`)**: In-depth narrative on regional spice sourcing, wood-fired tandoor craft, executive chef spotlight, and culinary team bios.
- **Dining Menu (`/menu`)**: Interactive menu with category tabs (`APPETIZERS`, `TANDOOR`, `CURRIES`, `BIRYANI`, `VEGETARIAN`, `BREADS`, `DESSERTS`, `DRINKS`), search filter, vegetarian toggle, dietary allergen notices, and downloadable PDF menu action.
- **Photo Gallery (`/gallery`)**: Asymmetrical masonry gallery with category filters (`FOOD`, `AMBIENCE`, `CRAFT`, `DRINKS`) and full-screen lightbox image modal.
- **Table Reservations (`/reservations`)**: High-conversion booking form with date, time, party size, location picker, dietary notes, dining policies, and an interactive reservation confirmation modal.
- **Contact & Locations (`/contact`)**: Multi-location cards (San Francisco Flagship & Palo Alto), direct concierge inquiry form, opening hours, valet info, and Google Maps integration links.
- **404 Not Found (`*`)**: Custom-styled 404 page maintaining Saffron Circle brand aesthetics.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion v12](https://www.framer.com/motion/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: Schema.org `Restaurant` JSON-LD structured data + semantic HTML5 title/meta descriptors

---

## 📁 Project Directory Structure

```text
src/
├── components/
│   ├── Navbar.jsx           # Sticky responsive header with mobile drawer
│   ├── Footer.jsx           # Editorial deep-green footer
│   ├── Hero.jsx             # Split editorial hero & rotating saffron badge
│   ├── Marquee.jsx          # Seamless scrolling ticker strip
│   ├── StorySection.jsx     # Brand introduction narrative
│   ├── SignatureDishes.jsx  # Featured dish cards with zoom hover
│   ├── MenuSection.jsx      # Interactive filterable dining menu
│   ├── WhyUs.jsx            # 2x2 value proposition grid
│   ├── ChefSpotlight.jsx    # Executive Chef spotlight card
│   ├── ExperienceSection.jsx# Dine-in, takeout, events & catering showcase
│   ├── MasonryGallery.jsx   # Asymmetrical grid & lightbox preview
│   ├── LocationSection.jsx  # Hours, addresses & map integration
│   ├── Testimonials.jsx     # Guest review slider
│   ├── ReservationForm.jsx  # Table booking form & confirmation modal
│   └── ScrollToTop.jsx      # Automatic scroll reset on route changes
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Menu.jsx
│   ├── Gallery.jsx
│   ├── Reservations.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
│
├── data/
│   ├── menu.js              # Comprehensive Indian menu dataset
│   ├── chefs.js             # Culinary team & chef profile
│   ├── testimonials.js      # Press & guest reviews
│   ├── locations.js         # Restaurant locations & hours
│   └── gallery.js           # Categorized photo gallery dataset
│
├── App.jsx                  # Main app router layout
├── main.jsx                 # Vite application entry point
└── index.css                # Tailwind directives & design tokens
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` (v9.0 or higher)

### Installation & Local Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/pallav333/saffron-circle.git
   cd saffron-circle
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your web browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 📜 License

Created for **Saffron Circle Fine Dining**. All rights reserved.
