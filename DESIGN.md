---
name: Rural Modernist
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#414844'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#2c694e'
  on-secondary: '#ffffff'
  secondary-container: '#aeeecb'
  on-secondary-container: '#316e52'
  tertiary: '#3e1e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e3000'
  on-tertiary-container: '#f48c24'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#b1f0ce'
  secondary-fixed-dim: '#95d4b3'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#0e5138'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
This design system blends the organic tranquility of the Javanese countryside with a sophisticated, modernist digital aesthetic. The brand personality is grounded, welcoming, and progressive—aiming to elevate the identity of "Dusun Depok" from a traditional village to a vibrant, contemporary community.

The visual style is **Minimalist with Tactile Accents**. It prioritizes high-quality, full-bleed photography of natural landscapes to evoke an emotional connection to the land. This is balanced by a high-contrast typographic hierarchy and a structured use of white space, ensuring the information remains clear and professional. The result is a UI that feels airy and premium, yet remains deeply rooted in its geographical heritage.

## Colors
The palette is inspired by the lush vegetation and fertile earth of the village. 

- **Primary & Secondary Greens:** These deep forest tones provide the foundation for the brand, used for backgrounds, headers, and primary branding elements to convey stability and nature.
- **Crisp White:** Serves as the primary canvas color. It is used extensively to create "breathing room" between content blocks.
- **Earthy Accents:** The orange and brown tones are reserved strictly for high-visibility interactions—Primary Action buttons, status indicators, and subtle decorative highlights—to ensure they pop against the cool green and white background.

## Typography
The typography uses a high-contrast pairing to bridge the gap between tradition and technology.

- **Headlines:** `Bricolage Grotesque` provides a bold, contemporary character with its unique ink traps and expressive curves. It should be used for large titles to give the village a "modern destination" feel.
- **Body & Labels:** `Plus Jakarta Sans` offers excellent legibility and a friendly, soft aesthetic that complements the organic nature of the brand.
- **Scale:** Maintain a significant size difference between display headings and body text to emphasize the "Modern Bold" narrative. Use all-caps labels for small metadata or section overlines to add a touch of editorial sophistication.

## Layout & Spacing
This design system utilizes a **Fluid Grid with Fixed Max-Width**. The layout philosophy is built on "Generous Breathing Room."

- **Desktop:** A 12-column grid with 24px gutters. Use large margins (64px+) to center-align content and create a premium feel.
- **Sectioning:** Vertical gaps between major landing page sections should be aggressive (120px) to ensure each story (history, products, tourism) feels distinct.
- **Mobile:** Transition to a 4-column grid. The horizontal navigation should transform into a bottom-sheet menu or a clean full-screen overlay to maintain the "clean" aesthetic without cluttering the small screen header.

## Elevation & Depth
To maintain the clean, modernist aesthetic, the design system avoids heavy shadows. 

- **Tonal Layering:** Depth is primarily created through color blocking (e.g., a white card on a very subtle light-grey or cream background).
- **Subtle Shadows:** For interactive cards, use an **Ambient Shadow** style: a very soft, diffused blur with low opacity (e.g., `y: 4, blur: 20, color: rgba(27, 67, 50, 0.08)`). This keeps the UI feeling light rather than heavy.
- **Hero Depth:** Use subtle dark-to-transparent linear gradients on top of photography to ensure white text remains legible while maintaining the integrity of the image.

## Shapes
The shape language is **Soft and Balanced**. While the typography is bold and sharp, the containers use a medium radius (8px - 16px) to echo the organic curves found in nature. 

- **Buttons:** Use `rounded-lg` (16px) for a modern, approachable feel.
- **Cards & Images:** Use `rounded-lg` (16px) for main content containers.
- **Inputs:** Use `rounded-md` (8px) to provide a slightly more structured, functional appearance.

## Components

- **Buttons:** 
  - *Primary:* Earthy Orange (#D97706) background, White text. High-contrast, no shadow, slightly rounded.
  - *Secondary:* Deep Forest Green (#1B4332) border, Green text.
- **Cards:** White background with a 1px soft border or the defined ambient shadow. Used for village news, local products, or "points of interest."
- **Navigation:** Horizontal layout for desktop with "active" states indicated by a thick bottom-bar in the accent orange.
- **Hero Section:** Full-width or large-inset container with a high-resolution image background. Headlines should be placed in the center or bottom-left using `display-lg` typography.
- **Chips:** Small, rounded indicators for categories (e.g., "History," "Tourism," "Announcement") using desaturated versions of the secondary green.
- **Input Fields:** Minimalist design with a focus on the active state—use the secondary green for the border-color when focused.