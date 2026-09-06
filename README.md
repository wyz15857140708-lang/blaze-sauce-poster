# Blaze House Pepper Sauce

A bold, scroll-driven product website for a fictional small-batch pepper sauce brand. The experience combines a tightly structured poster grid with playful color, oversized typography, and one continuous bottle journey from the opening frame to the final call to action.

> An independent front-end design study. Blaze House is a fictional demo brand and is not affiliated with Peppa Sauce.

## Highlights

- Scroll-linked bottle movement with a continuous spline trajectory
- Natural wheel inertia powered by Lenis
- Responsive editorial layouts for desktop and mobile
- Custom SVG bottle, label, food icons, medallions, and illustrations
- Animated marquees, parallax details, and magnetic call-to-action behavior
- Layered poster borders, subtle print texture, and accessible focus states
- Reduced-motion support for users who prefer fewer animations

## Built With

- React
- TypeScript
- Vite
- Lenis
- Custom CSS and inline SVG artwork
- Playwright-based visual regression checks

## Run Locally

Make sure the terminal is inside the project folder before running npm commands.

```bash
cd path/to/sauce
npm install
npm run dev
```

Then open [http://127.0.0.1:5173](http://127.0.0.1:5173).

## Commands

```bash
# Start the development server
npm run dev

# Type-check and create a production build
npm run build

# Preview the production build locally
npm run preview

# Run desktop and mobile visual checks while the dev server is running
python3 scripts/visual_test.py
```

## Project Structure

```text
src/
├── App.tsx          # Page structure, SVG artwork, and scroll behavior
├── main.tsx         # React entry point
└── styles.css       # Layout, color system, responsive rules, and motion

scripts/
└── visual_test.py   # Playwright visual and overflow checks
```

## Design Notes

The layout uses a recurring 97 × 54 poster frame and a symmetrical 22 / 47 / 22 desktop grid. A single sticky bottle travels across the page and naturally joins the final purchase frame instead of switching to a second visible asset. Its horizontal position and rotation are interpolated on one continuous curve so it retains momentum while crossing the center line and only slows at genuine direction changes.

The current palette intentionally favors the project’s own orange, cream, navy, yellow, blue, pink, and acid-green rhythm rather than reproducing another site color-for-color.

## Status

The current build passes TypeScript compilation and desktop/mobile visual checks without horizontal overflow or browser console errors.
