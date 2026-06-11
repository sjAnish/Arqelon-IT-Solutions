# Arqelon IT Solutions — React Website

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```

3. Open [(https://arqelonitsolutions.vercel.app/)](https://arqelonitsolutions.vercel.app/)

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.jsx                  # Root layout
├── main.jsx                 # React entry point
├── index.css                # Global styles + CSS variables
└── components/
    ├── Navbar.jsx           # Sticky navigation with mobile drawer
    ├── Hero.jsx             # Hero with scanline animation + metrics
    ├── Services.jsx         # 6-card services grid
    ├── About.jsx            # About with terminal window
    ├── WhyUs.jsx            # 4 feature blocks
    ├── Process.jsx          # 5-step timeline
    ├── TechStack.jsx        # Scrolling tech marquee rows
    ├── Contact.jsx          # Contact form + info
    ├── MapSection.jsx       # Leaflet dark map (Ara, Bihar)
    └── Footer.jsx           # 3-column footer
```

## Tech Stack

- React 18 + Vite
- Framer Motion (scroll animations)
- Lucide React (icons)
- React-Leaflet (map)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono
