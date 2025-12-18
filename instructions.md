# Starter Theme Instructions

## Theme Overview
Starter Theme is a WordPress theme built on TailPress with custom modifications. This theme serves as a starting point for new WordPress projects.

## Key Features
- Built on TailPress WordPress theme framework
- Custom header with logo and navigation
- Homepage carousel with Alpine.js
- Post cards with hover effects
- Traditional WordPress theme structure (not FSE)
- Custom color palette defined in theme.json

## Theme Structure
- `header.php` - Contains header HTML and homepage content
- `index.php` - Main template for blog posts
- `footer.php` - Site footer
- `functions.php` - Theme setup and enqueue scripts
- `theme.json` - WordPress color and typography settings
- `resources/js/app.js` - Alpine.js and navigation toggle
- `css/app.css` - Compiled Tailwind CSS

## Max Mega Menu Integration

### Max Mega Menu Pro Benefits
Max Mega Menu Pro provides advanced features perfect for this theme:

**Advanced Styling:**
- Custom Fonts integration with theme.json colors
- Custom Item Styling with CSS classes
- Image Swap features for rich menu content
- Custom Icons (SVG and Font Awesome)

**Enhanced Menu Types:**
- Accordion Menu for mobile-friendly desktop navigation
- Flyout Menus for classic dropdown patterns
- Advanced Mega Menu with multi-column layouts

**WordPress Integration:**
- Block Support - Display via `[maxmegamenu]` block
- Shortcode Integration - `[maxmegamenu]` for flexible placement
- Automatic Theme Integration with TailPress compatibility

### Theme Integration Notes
The theme is compatible with Max Mega Menu through:
- Traditional WordPress menu system (theme location: 'primary')
- Custom CSS classes accessible in TailPress
- Theme.json color palette available for menu styling
- Alpine.js navigation toggle that can coordinate with Max Mega Menu

### Recommended Setup
1. Install Max Mega Menu Pro
2. Go to Appearance > Max Mega Menu
3. Configure Menu Location Settings for 'Primary Menu'
4. Use theme.json colors in menu styling
5. Test compatibility with Alpine.js navigation toggle

## Color Palette (theme.json)
The theme includes a comprehensive color system:
- **Primary** - Primary brand color
- **Secondary** - Accent color
- **Surface Colors** - White backgrounds and variants
- **Dark Theme Variants** - Night mode color scheme
- **Text Colors** - On-surface, on-primary for proper contrast

## Development Notes
- Uses Laravel Mix for asset compilation (`npm run production`)
- Alpine.js for interactive components
- Tailwind CSS 4.0 for styling (uses new @import 'tailwindcss' syntax)
- WordPress coding standards compliance
- Traditional theme structure (not Full Site Editing)

**Important:** `tailwind.config.js` exists ONLY for the Tailwind Raw Reorder extension. Tailwind 4.0 does not use this file for configuration. NEVER write to or modify tailwind.config.js.

## Customization
- Header styling in `header.php`
- Homepage content can be modified in header.php is_front_page() section
- Colors and fonts defined in theme.json
- CSS compiled from resources/css/app.css

## Browser Support
Modern browsers with Alpine.js and Tailwind CSS support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

