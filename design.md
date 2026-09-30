# CN Design System — Style Guide & Architecture (`design.md`)

> **Source File:** [Figma: CN Design System](https://www.figma.com/design/1GkPo4rYklRXsakNrZv2Ws/CN-Design-System?node-id=33-3759)  
> **Brand / Ecosystem:** ConnectNigeria / Urgent.ng Marketplace  
> **Version:** 1.0.0  
> **Target Font:** `Archivo`  
> **Primary Identity:** `#93c700` (CN Green 500)  

---

## 1. Overview & Core Philosophy

The **CN Design System** is an enterprise-grade marketplace and business directory design system built for high utility, performance, and accessibility. It balances an energetic, trustworthy brand identity (anchored by **CN Green**) with neutral slate foundations, warm amber callouts, and clean card-based marketplace architectures.

### Key Tenets
1. **Utility-First Clarity:** High contrast ratios (WCAG AAA/AA compliant across swatches) ensure legibility across dense marketplace lists, price tags, and business details.
2. **Modular 4px Hierarchy:** Spacing, sizing, line-heights, and elevations operate on an incremental 4px scale for visual alignment.
3. **Marketplace-Optimized Organisms:** Custom listing cards (Grid & List), faceted filter sidebars, buyer-seller chat interfaces, image uploaders, and verified seller trust badges.
4. **Responsive Grid Foundation:** Calibrated for 4 core viewport breakpoints: Desktop (1440px), Desktop Narrow (1280px), Tablet (768px), and Mobile (390px).

---

## 2. Color Palette & Design Tokens

### 2.1 CN Green (Primary Brand Palette)
The core brand signature used for primary CTAs, active states, confirmation badges, and focus rings.

| Token Name | Hex Code | RGB | Typical Application |
| :--- | :--- | :--- | :--- |
| `cn-green-50` | `#f4fbe6` | `rgb(244, 251, 230)` | Subtle card backgrounds, badge backgrounds, tag fills |
| `cn-green-100` | `#e8f7cb` | `rgb(232, 247, 203)` | Hover backgrounds for light containers, incoming chat highlights |
| `cn-green-200` | `#d6f0a3` | `rgb(214, 240, 163)` | Active filter chips, outgoing message bubbles |
| `cn-green-300` | `#bbe770` | `rgb(187, 231, 112)` | Secondary accents, slider tracks |
| `cn-green-400` | `#acdc52` | `rgb(172, 220, 82)` | Highlights, icons on dark surfaces |
| `cn-green-500` | `#93c700` | `rgb(147, 199, 0)` | **Core Brand Primary**: Main CTA buttons, search buttons, active toggles |
| `cn-green-600` | `#80ad00` | `rgb(128, 173, 0)` | Primary button `:hover` state |
| `cn-green-700` | `#668a00` | `rgb(102, 138, 0)` | Primary button `:active` / pressed state |
| `cn-green-800` | `#526f00` | `rgb(82, 111, 0)` | Deep green borders, high-contrast accents |
| `cn-green-900` | `#3b5000` | `rgb(59, 80, 0)` | Dark green text on light green badges |

### 2.2 CN Yellow / Amber (Accent & Promotional Palette)
Used for special alerts, pending status indicators, star ratings, and promotional tags.

| Token Name | Hex Code | RGB | Typical Application |
| :--- | :--- | :--- | :--- |
| `cn-yellow-light` | `#fffbee` | `rgb(255, 251, 238)` | Warning banner background, pending badge fill |
| `cn-yellow-light-hover` | `#fef7db` | `rgb(254, 247, 219)` | Hover state for warning surfaces |
| `cn-yellow-light-active` | `#fcedbb` | `rgb(252, 237, 187)` | Active state for warning surfaces |
| `cn-yellow-normal` | `#e28a2a` | `rgb(226, 138, 42)` | Warning text, star rating fill, accent tags |
| `cn-yellow-normal-hover`| `#d07718` | `rgb(208, 119, 24)` | Hover on amber interactive elements |
| `cn-yellow-normal-active`| `#b96710` | `rgb(185, 103, 16)` | Active state on amber interactive elements |
| `cn-yellow-dark` | `#ab6216` | `rgb(171, 98, 22)` | High contrast amber text |
| `cn-yellow-dark-hover` | `#8f4f0e` | `rgb(143, 79, 14)` | Hover state on dark amber elements |
| `cn-yellow-dark-active` | `#743e09` | `rgb(116, 62, 9)` | Active state on dark amber elements |
| `cn-yellow-darker` | `#592e03` | `rgb(89, 46, 3)` | Maximum contrast amber text |

### 2.3 CN Blue / Slate (Neutral Foundation & Typography)
The foundational slate/blue grayscale providing depth, typography contrast, and structural outlines.

| Token Name | Hex Code | RGB | Typical Application |
| :--- | :--- | :--- | :--- |
| `cn-blue-50` | `#eff1f4` | `rgb(239, 241, 244)` | Page background tint, secondary button fill, disabled controls |
| `cn-blue-100` | `#e1e6ec` | `rgb(225, 230, 236)` | Standard component border (inputs, cards, dividers) |
| `cn-blue-200` | `#c5ced9` | `rgb(197, 206, 217)` | Hover borders, active separators |
| `cn-blue-300` | `#9baac0` | `rgb(155, 170, 192)` | Secondary icons, inactive pagination borders |
| `cn-blue-400` | `#657996` | `rgb(101, 121, 150)` | Placeholder text, tertiary metadata, timestamps |
| `cn-blue-500` | `#42526b` | `rgb(66, 82, 107)` | Secondary body copy, subtitle labels, button label / text color |
| `cn-blue-600` | `#2d394d` | `rgb(45, 57, 77)` | Dark buttons, table headers, emphasized metadata |
| `cn-blue-700` | `#1b2330` | `rgb(27, 35, 48)` | **Primary Text**: Headings, titles, prices, critical labels |
| `cn-blue-800` | `#10151f` | `rgb(16, 21, 31)` | Deep text, high-emphasis icons |
| `cn-blue-900` | `#0a0e14` | `rgb(10, 14, 20)` | Maximum contrast dark mode foundation |

### 2.4 CN White / Grayscale (Surfaces & Cards)

| Token Name | Hex Code | RGB | Typical Application |
| :--- | :--- | :--- | :--- |
| `cn-white` | `#ffffff` | `rgb(255, 255, 255)` | Pure white card surfaces, modals, popovers |
| `cn-white-50` | `#fbfbfb` | `rgb(251, 251, 251)` | Alternate row stripe, subtle background shift |
| `cn-white-100` | `#f7f7f7` | `rgb(247, 247, 247)` | Input field filled background |
| `cn-white-200` | `#f4f4f4` | `rgb(244, 244, 244)` | Inactive toggle background, secondary tags |
| `cn-white-300` | `#eeeeee` | `rgb(238, 238, 238)` | Light dividers |
| `cn-white-400` | `#e6e6e6` | `rgb(230, 230, 230)` | Subtle outlines |
| `cn-white-500` | `#dadada` | `rgb(218, 218, 218)` | Disabled borders |
| `cn-white-600` | `#cccccc` | `rgb(204, 204, 204)` | Muted icon fills |
| `cn-white-700` | `#a7a7a7` | `rgb(167, 167, 167)` | Inactive slider handles |
| `cn-white-800` | `#7b7b7b` | `rgb(123, 123, 123)` | Secondary disabled text |
| `cn-white-900` | `#434343` | `rgb(67, 67, 67)` | Deep neutral text |

### 2.5 Feedback & Semantic Status

| Status | Fill / Text Hex | Background Tint | Border Tint | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Success** | `#16a34a` (green-600) | `#f0fdf4` | `#bbf7d0` | Verified badge, success alerts, confirmed orders |
| **Error / Danger** | `#dc2626` (red-600) | `#fef2f2` | `#fecaca` | Destructive buttons, validation errors, failed status |
| **Warning** | `#e28a2a` (amber-500) | `#fffbee` | `#fcedbb` | Pending quotes, warning banners |
| **Info / Active** | `#2563eb` (blue-600) | `#eff6ff` | `#bfdbfe` | Informational callouts, active system notifications |

---

## 3. Typography Architecture

- **Primary Font Family:** `'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Font Variation Settings:** `'wdth' 100`
- **Standard Line Height:** `1.5` (or explicit pixel heights for tight UI elements)
- **Available Weights:** Regular (`400`), Medium (`500`), Bold (`700`)

### Typographic Scale

| Level | Size | Line Height | Weight | Typical Application |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | `61px` | `1.5` (~`92px`) | 400 / 700 | Hero landing page titles, marketplace headline |
| **H2** | `49px` | `1.5` (~`74px`) | 400 / 700 | Major category header, landing section titles |
| **H3** | `39px` | `1.5` (~`59px`) | 400 / 700 | Subsection headers, dashboard overview titles |
| **H4** | `31px` | `1.5` (~`47px`) | 400 / 700 | Modal titles, filter sidebar master headings |
| **H5** | `25px` | `1.5` (~`38px`) | 400 / 700 | Card titles, prominent product listing headers |
| **Title 1 / Title 3 Bold** | `20px` | `1.5` (`30px`) | 400 / 700 | Section titles, listing price displays |
| **Title 2 / Title 4 Bold** | `16px` | `1.5` (`24px`) | 400 / 700 | Standard card titles, tab labels, large buttons |
| **Body / Body Bold** | `13px` | `1.5` (~`20px`) | 400 / 700 | Default body text, form input text, card descriptions |
| **Caption / Caption Bold** | `10px` | `1.5` (`15px`) | 400 / 700 | Badges, timestamps, small tags, helper text |

---

## 4. Elevation & Shadow Scale

Standardized shadow effect styles derived directly from component usage across cards, overlays, and floating elements.

```css
/* Elevation Shadows */
--elevation-none: none;
--elevation-xs: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
--elevation-sm: 0px 2px 8px -2px rgba(0, 0, 0, 0.06);
--elevation-md: 0px 4px 12px -2px rgba(0, 0, 0, 0.10);
--elevation-lg: 0px 8px 24px -4px rgba(0, 0, 0, 0.12), 0px 0px 2px 0px rgba(0, 0, 0, 0.04);
--elevation-xl: 0px 8px 24px -4px rgba(0, 0, 0, 0.15);
```

### Elevation Mapping
- **`elevation-none`**: Flat surfaces, inline input controls, static dividers.
- **`elevation-xs`**: Toggle thumb, subtle interactive hover lifts.
- **`elevation-sm`**: Product listing cards, profile cards, quick action boxes.
- **`elevation-md`**: Toast notifications, dropdown menus, autocomplete popovers.
- **`elevation-lg`**: Modal dialogs, lightbox overlays, full-screen popups.
- **`elevation-xl`**: Floating chat widget (minimized & opened), floating action buttons (FAB).

---

## 5. Spacing Scale & Border Radius

### 5.1 Base-4 Spacing Scale
All margins, paddings, and flex/grid gaps must adhere strictly to the 4px baseline scale:

| Token | Size | Typical Usage |
| :--- | :--- | :--- |
| `spacing-2xs` | `4px` | Badge internal padding, micro icon spacing |
| `spacing-xs` | `8px` | Small gaps, input internal vertical padding, badge margins |
| `spacing-sm` | `12px` | Card internal content gap, button horizontal padding (small) |
| `spacing-md` | `16px` | Standard button padding, form field gap, card padding (compact) |
| `spacing-lg` | `20px` | Standard card internal padding, list item separation |
| `spacing-xl` | `24px` | Modal content padding, section spacing (compact) |
| `spacing-2xl` | `32px` | Grid column gutters (desktop), section separation |
| `spacing-3xl` | `40px` | Container margins, hero section padding |
| `spacing-4xl` | `48px` | Major component padding (text style containers, hero blocks) |
| `spacing-5xl` | `64px` | Section dividers, large feature section spacing |
| `spacing-6xl` | `80px` | Page outer margins (Desktop 1440px) |

### 5.2 Border Radius Standards
- **`radius-sm` (4px):** Checkboxes, status dots, small inline tags.
- **`radius-md` (8px):** Buttons, form inputs, dropdown selectors, alert banners.
- **`radius-lg` (12px):** Listing cards, color swatches, modal dialogs, message bubbles.
- **`radius-xl` (16px):** Large hero cards, floating chat container.
- **`radius-full` (9999px):** Badges, pill chips, toggle tracks & thumbs, avatar circles.

---

## 6. Layout Grids & Responsive Breakpoints

The CN marketplace uses a 4-breakpoint responsive grid architecture:

| Breakpoint | Viewport Width | Columns | Gutter | Margin | Content Max-Width |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Desktop (Primary)** | `1440px` | 12 | `32px` | `80px` | `1280px` |
| **Desktop Narrow** | `1280px` | 12 | `24px` | `40px` | `1200px` |
| **Tablet** | `768px` | 8 | `20px` | `32px` | `704px` |
| **Mobile** | `390px` | 4 | `16px` | `20px` | `350px` |

---

## 7. Component Specifications

### 7.1 Buttons
Buttons are available in 6 hierarchy styles and 3 standard sizes with full state variations (`Default`, `Hover`, `Active`, `Focus`, `Disabled`).

#### Button Sizes
- **Small (`sm`):** Height `32px`, font size `12px` / `13px`, padding `6px 12px`, radius `8px`.
- **Medium (`md`):** Height `40px`, font size `14px` / `16px`, padding `10px 16px`, radius `8px`.
- **Large (`lg`):** Height `48px`, font size `16px`, padding `12px 20px`, radius `8px`.

#### Button Hierarchies
1. **Primary:**
   - Background: `var(--cn-green-500)` (`#93c700`)
   - Text: `var(--cn-blue-500)` (`#42526b`), Bold (`700`)
   - Hover: `var(--cn-green-600)` (`#80ad00`)
   - Active: `var(--cn-green-700)` (`#668a00`)
   - Disabled: `opacity: 0.5`, `cursor: not-allowed`
2. **Secondary:**
   - Background: `var(--cn-blue-50)` (`#eff1f4`) or `var(--cn-white-200)`
   - Text: `var(--cn-blue-700)` (`#1b2330`)
   - Hover: `var(--cn-blue-100)` (`#e1e6ec`)
3. **Outline:**
   - Background: `transparent`
   - Border: `1.5px solid var(--cn-green-500)` (`#93c700`)
   - Text: `var(--cn-green-500)` (`#93c700`)
   - Hover: Background `var(--cn-green-50)` (`#f4fbe6`)
4. **Ghost:**
   - Background: `transparent`
   - Text: `var(--cn-blue-600)` (`#2d394d`)
   - Hover: Background `var(--cn-blue-50)`
5. **Dark:**
   - Background: `var(--cn-blue-700)` (`#1b2330`)
   - Text: `#ffffff`
   - Hover: `var(--cn-blue-800)` (`#10151f`)
6. **Destructive:**
   - Background: `var(--feedback-error)` (`#dc2626`)
   - Text: `#ffffff`
   - Hover: `#b91c1c`

---

### 7.2 Form Controls

#### Text Input & Select Dropdowns
- **Container Height:** `40px` (standard) / `48px` (large search)
- **Label:** `13px` / `14px`, weight `500`, color `var(--cn-blue-700)`
- **Border:** `1px solid var(--cn-blue-100)` (`#e1e6ec`), radius `8px`
- **Background:** `#ffffff`
- **Placeholder:** Color `var(--cn-blue-400)` (`#657996`)
- **Focus State:** Border `var(--cn-green-500)` (`#93c700`), ring `0 0 0 3px rgba(147, 199, 0, 0.20)`
- **Error State:** Border `var(--feedback-error)` (`#dc2626`), helper text `10px`/`12px` red: *"This field is required"*
- **Disabled State:** Background `var(--cn-blue-50)`, text `var(--cn-blue-300)`, border `var(--cn-white-400)`

#### Checkbox & Radio
- **Checkbox:** `16px x 16px`, border-radius `4px`, `1.5px` border. Checked: fill `var(--cn-green-500)`, white checkmark.
- **Radio:** `16px x 16px`, border-radius `50%`. Selected: white inner ring with `var(--cn-green-500)` center dot.

#### Toggle Switch
- **Track Dimensions:** `40px x 22px`, border-radius `9999px`
- **Thumb:** `18px x 18px` white circle with `var(--elevation-xs)`
- **States:**
  - Inactive: Track `var(--cn-white-400)` (`#e6e6e6`)
  - Active: Track `var(--cn-green-500)` (`#93c700`), thumb translates right `18px`

---

### 7.3 Feedback & Indicators

#### Badges
Pill-shaped badges, height `22px`, horizontal padding `8px`, radius `9999px`, font size `10px` bold:
- **Success / Confirmed:** Background `#f4fbe6`, dot `#93c700`, text `#3b5000`
- **Pending / Warning:** Background `#fffbee`, dot `#e28a2a`, text `#ab6216`
- **Failed / Error:** Background `#fef2f2`, dot `#dc2626`, text `#991b1b`
- **Active / Info:** Background `#eff6ff`, dot `#2563eb`, text `#1e40af`
- **Default / Neutral:** Background `#f4f4f4`, dot `#7b7b7b`, text `#434343`

#### Toast Notifications
- **Dimensions:** Width `272px` – `320px`, min-height `54px`, radius `8px`, elevation `var(--elevation-md)`
- **Structure:** White card with left vertical color accent bar (`4px` width), status icon, notification message (`13px`), and close dismiss button (`X`).

#### Modals & Dialogs
- **Widths:** Small (`400px`), Medium (`520px`), Large (`640px`)
- **Structure:** Header with title (`H4` / `H5`) + Close button; Body area with `20px` padding; Footer with secondary "Cancel" button + primary "Confirm" button (`var(--cn-green-500)`).
- **Backdrop:** `rgba(10, 14, 20, 0.45)` with `backdrop-filter: blur(4px)`.

---

## 8. Marketplace Organisms & Patterns

### 8.1 Product / Listing Card (Grid View)
- **Container:** Width `300px`, height `416px`, border `1px solid var(--cn-blue-100)`, radius `12px`, background `#ffffff`, shadow `var(--elevation-sm)`.
- **Image Area:** Height `200px`, width `100%`, `object-fit: cover`, top radius `11px`.
  - Floating Favorite Button (heart) & Share Button on top right/left with subtle translucent backdrop.
  - Carousel pagination indicators (dots) positioned along bottom edge of image.
- **Card Content Area:** Padding `16px 20px`:
  - Category Badge & Condition Tag (e.g. `Electronics`, `New`) in top row.
  - Product Title: `16px` Bold, 1-2 line clamp, color `var(--cn-blue-700)`.
  - Price: `18px` Bold (e.g. `₦45,900`), with strikethrough original price (e.g. `₦60,000` in `var(--cn-blue-400)`).
  - Location & Meta: Pin icon + `Ikeja, Lagos`, `13px`, color `var(--cn-blue-500)`.
  - Rating: Star icon + `4.8` `(124 reviews)`.
  - Action Button: Full-width `39px` Primary CTA ("View Details").

### 8.2 Product / Listing Card (List View)
- **Container:** Horizontal card, height `160px` – `180px`, width `100%`.
- **Image Area:** Left thumbnail `160px x 100%`, border-radius `12px 0 0 12px`.
- **Content:** Right-aligned info with title, tags, description snippet, price, and CTA.

### 8.3 Faceted Search & Filter Sidebar
- **Header:** "Filter Results" with "Clear All" text button.
- **Search & Filter Bar:** Full width `1440px` section with:
  - Global Search Input ("Search products, brands, or categories...")
  - Category Selector Dropdown ("All Categories")
  - Location Dropdown ("Any Location")
  - Primary Green Search Button
- **Filter Groups:**
  - Category (checkbox multi-select)
  - Condition (`New`, `Used - Like New`, `Used - Good`, `Refurbished`)
  - Dual-thumb Price Range Slider (Green active track between min and max)
  - Location Dropdowns (State + LGA)
  - Rating (5 Stars, 4 Stars & Up, 3 Stars & Up)
  - Business Type Pills (`All`, `Confirmed Only`, `New Listings`)
  - Full-Width Action: "Apply Filters" button (`var(--cn-green-500)`).
- **Active Filter Chips:** Pill tags with remove `×` button displayed at the top of results.

### 8.4 In-App Messaging & Floating Chat
- **Thread Architecture:**
  - **Buyer Messages (Outgoing):** Background `var(--cn-green-200)` (`#d6f0a3`) or `#e8f7cb`, text `var(--cn-blue-800)`, aligned right, radius `12px 12px 2px 12px`.
  - **Seller / Agent Messages (Incoming):** Background `#ffffff`, border `1px solid var(--cn-blue-100)`, text `var(--cn-blue-800)`, aligned left, radius `12px 12px 12px 2px`.
  - Timestamp: `10px` gray under bubble.
- **Quick Reply Chips:** Pre-built action pills above chat input (e.g. *"Yes, available"*, *"Can we chat?"*, *"What's your best price?"*).
- **Seller Profile Header:** Mini-avatar, Seller Name, Verified Badge, Rating, with "Call Seller" CTA.
- **Floating Chat Widget:** Minimized pill/circular FAB with green notification badge; expands into full chat dialog with `elevation-xl`.

### 8.5 Drag & Drop Image Uploader
- **Dropzone:** Dashed border `2px dashed var(--cn-green-500)`, background `var(--cn-green-50)`, radius `12px`, upload cloud icon, helper text (*"Drag & Drop images or click to browse - Max 10MB each - Up to 12 images"*).
- **Preview Queue:** List of uploaded cards showing thumbnail, filename, file size, green progress bar (`100%`), and remove `×` button.

---

## 9. Ready-to-Use CSS Tokens (`tokens.css`)

Copy and paste the following CSS variable definitions into your root stylesheet (`index.css` / `tokens.css`):

```css
:root {
  /* ============================================================
     CN GREEN (PRIMARY BRAND)
     ============================================================ */
  --cn-green-50: #f4fbe6;
  --cn-green-100: #e8f7cb;
  --cn-green-200: #d6f0a3;
  --cn-green-300: #bbe770;
  --cn-green-400: #acdc52;
  --cn-green-500: #93c700; /* Primary Brand Accent */
  --cn-green-600: #80ad00; /* Primary Hover */
  --cn-green-700: #668a00; /* Primary Active */
  --cn-green-800: #526f00;
  --cn-green-900: #3b5000;

  /* ============================================================
     CN YELLOW / AMBER (PROMOTIONAL & WARNING)
     ============================================================ */
  --cn-yellow-light: #fffbee;
  --cn-yellow-light-hover: #fef7db;
  --cn-yellow-light-active: #fcedbb;
  --cn-yellow-normal: #e28a2a;
  --cn-yellow-normal-hover: #d07718;
  --cn-yellow-normal-active: #b96710;
  --cn-yellow-dark: #ab6216;
  --cn-yellow-dark-hover: #8f4f0e;
  --cn-yellow-dark-active: #743e09;
  --cn-yellow-darker: #592e03;

  /* ============================================================
     CN BLUE / SLATE (NEUTRALS & TYPOGRAPHY)
     ============================================================ */
  --cn-blue-50: #eff1f4;
  --cn-blue-100: #e1e6ec; /* Default Border */
  --cn-blue-200: #c5ced9;
  --cn-blue-300: #9baac0;
  --cn-blue-400: #657996; /* Muted Text / Placeholder */
  --cn-blue-500: #42526b; /* Secondary Body Text & Primary Button Label */
  --cn-blue-600: #2d394d;
  --cn-blue-700: #1b2330; /* Primary Text & Headings */
  --cn-blue-800: #10151f;
  --cn-blue-900: #0a0e14;

  /* ============================================================
     CN WHITE / NEUTRAL GRAYS
     ============================================================ */
  --cn-white: #ffffff;
  --cn-white-50: #fbfbfb;
  --cn-white-100: #f7f7f7;
  --cn-white-200: #f4f4f4;
  --cn-white-300: #eeeeee;
  --cn-white-400: #e6e6e6;
  --cn-white-500: #dadada;
  --cn-white-600: #cccccc;
  --cn-white-700: #a7a7a7;
  --cn-white-800: #7b7b7b;
  --cn-white-900: #434343;

  /* ============================================================
     SEMANTIC FEEDBACK
     ============================================================ */
  --feedback-success: #16a34a;
  --feedback-success-bg: #f0fdf4;
  --feedback-success-border: #bbf7d0;

  --feedback-error: #dc2626;
  --feedback-error-bg: #fef2f2;
  --feedback-error-border: #fecaca;

  --feedback-warning: #e28a2a;
  --feedback-warning-bg: #fffbee;
  --feedback-warning-border: #fcedbb;

  --feedback-info: #2563eb;
  --feedback-info-bg: #eff6ff;
  --feedback-info-border: #bfdbfe;

  /* ============================================================
     TYPOGRAPHY
     ============================================================ */
  --font-family-primary: 'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-variation-default: 'wdth' 100;

  /* ============================================================
     ELEVATION & SHADOWS
     ============================================================ */
  --elevation-none: none;
  --elevation-xs: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
  --elevation-sm: 0px 2px 8px -2px rgba(0, 0, 0, 0.06);
  --elevation-md: 0px 4px 12px -2px rgba(0, 0, 0, 0.10);
  --elevation-lg: 0px 8px 24px -4px rgba(0, 0, 0, 0.12), 0px 0px 2px 0px rgba(0, 0, 0, 0.04);
  --elevation-xl: 0px 8px 24px -4px rgba(0, 0, 0, 0.15);

  /* ============================================================
     SPACING (BASE 4PX)
     ============================================================ */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 20px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 40px;
  --space-4xl: 48px;
  --space-5xl: 64px;
  --space-6xl: 80px;

  /* ============================================================
     BORDER RADIUS
     ============================================================ */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* ============================================================
     TRANSITIONS
     ============================================================ */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 10. Summary Checklist for Implementations

When converting designs to code for this project:
- [ ] Ensure the **Archivo** Google font is imported in your HTML `<head>` (`@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap');`).
- [ ] Use `--cn-green-500` (`#93c700`) as the primary CTA color with white bold text.
- [ ] Use `--cn-blue-700` (`#1b2330`) for primary text and headings instead of generic black (`#000000`).
- [ ] Apply `border-radius: 8px` (`--radius-md`) to buttons and form fields; `12px` (`--radius-lg`) to cards and modals.
- [ ] For listing prices, format in Nigerian Naira: `₦[amount]` in `var(--cn-blue-700)` with `font-weight: 700`.
- [ ] For cards and raised components, use `box-shadow: var(--elevation-sm)` with a `1px solid var(--cn-blue-100)` subtle border.
- [ ] For buyer/seller messaging, use green tinted bubbles (`#d6f0a3` / `#e8f7cb`) for outgoing messages and white cards for incoming.
