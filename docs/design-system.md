---
name: Scholarly Minimalist
colors:
  surface: '#f9faf6'
  surface-dim: '#d9dad7'
  surface-bright: '#f9faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f1'
  surface-container: '#edeeeb'
  surface-container-high: '#e7e8e5'
  surface-container-highest: '#e2e3e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#414944'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#f0f1ee'
  outline: '#717974'
  outline-variant: '#c0c8c2'
  surface-tint: '#3a6753'
  primary: '#134231'
  on-primary: '#ffffff'
  primary-container: '#2d5a47'
  on-primary-container: '#9fcfb7'
  inverse-primary: '#a1d1b9'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e5'
  on-secondary-container: '#626567'
  tertiary: '#5b2e2d'
  on-tertiary: '#ffffff'
  tertiary-container: '#764443'
  on-tertiary-container: '#f8b4b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcedd4'
  primary-fixed-dim: '#a1d1b9'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#214f3d'
  secondary-fixed: '#e1e3e5'
  secondary-fixed-dim: '#c5c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#f9b6b3'
  on-tertiary-fixed: '#340f10'
  on-tertiary-fixed-variant: '#693938'
  background: '#f9faf6'
  on-background: '#1a1c1a'
  surface-variant: '#e2e3e0'
  surface-cream: '#F9F8F6'
  surface-charcoal: '#121415'
  border-subtle: '#E2E4E6'
  brand-forest: '#2D5A47'
  ink-primary: '#1A1C1D'
  ink-secondary: '#5C6166'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  reader-content:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  sidebar-width: 260px
  container-max-width: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system embodies a **Reliable, Focused, and Scholarly** personality. It is built for the "Heavy Reader"—someone who values the sanctity of the text over the flashiness of the interface. The aesthetic is a blend of **Modern Minimalism** and **Corporate/Desktop Utility**, ensuring the tool feels like a permanent fixture of a professional digital workspace rather than a transient web app.

The primary emotional response should be one of "Deep Focus." To achieve this, the system uses:
- **Generous Whitespace:** Drawing focus to the book cover and the written word.
- **Clean Borders:** Providing structure without the weight of heavy shadows or gradients.
- **Desktop-Native Navigation:** Utilizing a persistent sidebar and standard Windows-inspired layouts to provide a sense of stability and institutional reliability.
- **Functional Clarity:** UI elements are precise and intentional, following a "content-first" hierarchy.

## Colors
The palette is neutral and sophisticated, designed to be easy on the eyes during long sessions of library management or reading.

- **Primary Action:** A subtle "Forest Green" (`#2D5A47`) is used for primary buttons, active states, and progress indicators. It evokes a sense of calm and traditional academia.
- **Neutrals:** The system relies on a range of "Deep Charcoals" and "Soft Whites." 
- **Light Mode:** Uses a "Surface Cream" (`#F9F8F6`) background to reduce harsh blue-light glare, paired with `#1A1C1D` for maximum text legibility.
- **Dark Mode:** Switches to a "Surface Charcoal" (`#121415`) background, utilizing muted grays for borders and secondary text to maintain a low-contrast, comfortable reading environment.
- **Borders:** A consistent, low-saturation border (`#E2E4E6` in light mode) defines the layout sections without creating visual noise.

## Typography
The system employs a dual-font strategy to distinguish between the **Tool** and the **Text**.

1.  **UI Content (Geist):** A technical, clean, and highly legible sans-serif used for all functional elements, metadata, navigation, and labels. It provides a modern, "Windows-native" feel that suggests precision.
2.  **Reading Content (Playfair Display):** A classic serif used for book titles and the actual reading experience. It provides the "scholarly" feel required for an immersive reading environment.

**Key Roles:**
- **Headline XL/LG:** Used for Library headers and Book titles in the detail view.
- **Body MD:** The workhorse for metadata, sidebar items, and settings.
- **Reader Content:** Specifically optimized for long-form reading with a generous 1.6 line height.
- **Label SM:** Used for "Caps-style" headers in the sidebar or metadata tags.

## Layout & Spacing
The design system uses a **Fixed Grid** for desktop to maintain a stable application feel, and a **Fluid Content Area** for the reader.

- **Desktop Layout:** A persistent left-hand sidebar (260px) houses the primary navigation (Home, All Books, Authors, etc.). The main content area uses a 12-column grid with a 24px gutter.
- **Mobile Layout:** A single-column fluid layout. Margins are reduced to 16px to maximize the space for book covers in the grid.
- **Reader Mode:** Uses "Progressive Disclosure." On desktop, text is centered with wide margins (max-width 800px) to prevent long line lengths. On mobile, the reader is edge-to-edge with a 20px safe area margin.
- **Spacing Rhythm:** Based on an 8px base unit. Metadata lists use `stack-sm` (8px), while sections in the book detail page use `stack-lg` (32px).

## Elevation & Depth
To maintain a minimalist and professional look, the design system avoids heavy drop shadows and instead uses **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Levels:** 
    - **Level 0 (Background):** The main application canvas (`surface-cream`).
    - **Level 1 (Sidebar/Cards):** Slightly differentiated surfaces or areas defined by `border-subtle`.
- **Shadows:** Only used for "floating" elements like context menus, dropdowns, or mobile bottom sheets. Use a very diffused, low-opacity shadow: `0 4px 20px rgba(0,0,0,0.08)`.
- **Interactive States:** Buttons and grid items do not "lift" on hover; instead, they use a subtle background color shift (e.g., Cream to a slightly darker Light Gray) or a 1px border weight increase.

## Shapes
The shape language is **Soft (0.25rem)**. This preserves the "Desktop Professional" aesthetic without feeling as aggressive as sharp 0px corners.

- **Buttons & Inputs:** 4px (0.25rem) corner radius.
- **Book Covers:** Should remain sharp (0px) or use a very minimal 2px radius to mimic the physical nature of a book.
- **Cards/Modals:** 8px (0.5rem) corner radius to differentiate larger structural containers from small UI components.
- **Selection Indicators:** Use pill-shapes (full rounding) only for "Status" chips or active navigation indicators in the sidebar to provide a clear visual contrast to the rectangular grid items.

## Components
- **Buttons:**
    - **Primary:** Solid `brand-forest` with white Geist text. No gradient.
    - **Secondary:** Transparent with `border-subtle` and `ink-primary` text.
- **Book Cards:** 
    - A vertical stack: Cover Image (top), Title (Title MD), Author (Body MD / `ink-secondary`). 
    - Hover state shows a subtle `border-subtle` outline.
- **Sidebar Items:** 
    - Text-only or Icon+Text. Active state uses a `brand-forest` left-border (4px) and a light tinted background.
- **Input Fields:** 
    - Minimalist design. 1px border (`border-subtle`). On focus, border changes to `brand-forest`. Labels sit above the field in `label-sm`.
- **Reader Controls:**
    - On mobile, these appear as semi-transparent overlays (Glassmorphism) at the top and bottom of the screen upon a single tap.
    - Icons are thin-stroke (1.5pt) to match the Geist font weight.
- **Chips/Tags:** 
    - Small, low-contrast background with `label-sm` text. Used for "Series" or "Tags" in the library view.