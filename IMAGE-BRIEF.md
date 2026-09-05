# Image brief — SRI REAL TIME

Every slot below is **already wired up**. Drop the `.png` at the exact path and it appears; until
then the site renders generated SVG artwork instead, so nothing is ever broken while art is in
progress. No code changes needed.

## Art direction (applies to all)

- **Palette:** deep navy `#04070F` → `#0B1F4B`, signal blue `#4C7DF0`, brand red `#E02424`.
  Red is the accent — use it sparingly, as a highlight or core glow, never as a wash.
- **Ground:** transparent, or the same near-black as the site. Never white — every hero is dark.
- **Style:** premium 3D render / abstract light-form. Photoreal materials, soft volumetric glow,
  subtle depth of field. **No flat cartoon or clip-art illustration**, no stock-photo people,
  no visible text baked into the image.
- **Lighting:** single dominant light source, deep falloff into black. High contrast.

---

## 1. Landing hero — highest impact

- **Path:** `public/images/hero-visual.png`
- **Size:** 1400 × 1400 px, PNG, **transparent background**

> A sweeping abstract 3D ribbon of liquid chrome and glass, coiling into a torus-like orbit around
> a glowing crimson core. Deep navy and midnight-black material with iridescent blue edge-light and
> red internal glow bleeding through translucent surfaces. Volumetric light, soft caustics, fine
> surface noise, shallow depth of field. Fully transparent background, centred composition,
> dramatic studio lighting from the upper left. Octane render, 8k, cinematic, dark premium
> enterprise-tech aesthetic. No text, no logos, no people.

*Fallback:* the generated orbit diagram (ERP/CRM/SCM/MIS/AI/IoT orbiting the logo).

---

## 2. Inner page heroes — seven slots

All seven share the same specification:

- **Size:** 1200 × 970 px, PNG, **transparent background**
- **Where they land:** right-hand side of each inner page hero (hidden below 768px, so composition
  should read at roughly 550px wide)
- **Keep them a family.** Same material, same lighting angle, same level of detail across all
  seven — they should look like one commissioned set, not seven unrelated pictures.

| Page | Path |
| --- | --- |
| Services | `public/images/hero-services.png` |
| AI & Automation | `public/images/hero-ai.png` |
| Technology | `public/images/hero-technology.png` |
| Process | `public/images/hero-process.png` |
| Capabilities | `public/images/hero-work.png` |
| Estimator | `public/images/hero-estimator.png` |
| Contact | `public/images/hero-contact.png` |

**Services** — *fallback: three stacked module panels*
> Three floating translucent glass panels stacked in staggered perspective, each edge-lit in signal
> blue, one panel highlighted with a crimson accent bar. Deep navy void, volumetric glow beneath.
> Abstract enterprise software modules. Transparent background, octane render, 8k, cinematic.

**AI & Automation** — *fallback: a layered neural net*
> An abstract neural network of glowing glass nodes connected by fine luminous filaments, arranged
> in three depth layers, signal pulses travelling left to right. Blue nodes resolving into a
> crimson output node. Deep navy void, volumetric light, shallow depth of field. Transparent
> background, octane render, 8k.

**Technology** — *fallback: real tech logos in orbit*
> A constellation of floating chrome hexagonal tiles orbiting a bright core, arranged on two
> elliptical rings in perspective. Brushed metal and glass, blue rim-light, crimson core glow.
> Deep navy void. Transparent background, octane render, 8k. No logos or text on the tiles.

**Process** — *fallback: seven nodes along a path*
> A luminous ribbon path winding upward through space, punctuated by seven glowing waypoint nodes
> that grow brighter along its length, ending in a crimson node. Glass and light material, deep
> navy void, volumetric glow. Transparent background, octane render, 8k.

**Capabilities** — *fallback: isometric blocks*
> An isometric stack of translucent architectural blocks assembling into a tower, blue edge-light
> along every seam, one central block glowing crimson. Blueprint precision, glass and dark metal,
> deep navy void. Transparent background, octane render, 8k.

**Estimator** — *fallback: rising bars*
> Five translucent glass columns of ascending height floating above a luminous grid plane, the
> tallest glowing crimson, the rest deep blue. Soft volumetric haze, precise reflections, deep navy
> void. Abstract data visualisation. Transparent background, octane render, 8k.

**Contact** — *fallback: signal rings*
> Concentric rings of light radiating outward from a glowing crimson core, like a signal
> broadcasting. Fine glass ring geometry fading into darkness, blue outer rings, deep navy void,
> volumetric glow. Transparent background, octane render, 8k.

---

## 3 & 4. Product cards

- **Paths:** `public/images/product-pasumaivelanmai.png` and `public/images/product-pasumaitrade.png`
- **Size:** 1600 × 900 px (16:9), PNG

**Best option: real screenshots.** These are your live products — an actual UI screenshot is far
more persuasive than any render. Capture the dashboard at 1600×900, dark UI if available.

If you'd rather have a render:

> **Pasumaivelanmai (AgriTech):** A floating glass dashboard interface rendered in 3D, angled
> three-quarter view, showing abstract crop-yield charts and map tiles in blue and green data-viz
> accents. Deep navy background with a soft red rim-light from below. Frosted glass panels, depth
> of field. Cinematic premium SaaS product render, 8k. Illegible placeholder UI text only.

> **Pasumai Trade (marketplace):** A floating glass trading interface rendered in 3D, angled
> three-quarter view, showing abstract candlestick charts and an order book in blue and amber
> data-viz accents. Deep navy background with a soft red rim-light. Frosted glass panels,
> volumetric glow. Cinematic premium fintech render, 8k. Illegible placeholder UI text only.

*Fallback:* generated orbit-and-monogram panels (`PV` / `PT`).

---

## 5. Social share card — recommended

- **Path:** `public/images/og-cover.png`
- **Size:** 1200 × 630 px, PNG (fixed by Open Graph)

The share preview currently uses `logo.png`, which is 320 × 231 — it renders small and letterboxed.

> A dark premium tech banner, 1200×630. Deep navy-to-black gradient ground with a fine hairline
> grid, a crimson glow bloom on the right and a blue bloom on the left, and an abstract chrome
> orbit ribbon on the right third. Large clear negative space on the left for a headline.
> Cinematic, minimal, enterprise software brand aesthetic. No text.

**After adding it,** update these two lines in [index.html](index.html):

```html
<meta property="og:image" content="https://srirealtime.com/images/og-cover.png" />
<meta name="twitter:image" content="https://srirealtime.com/images/og-cover.png" />
```

---

## Housekeeping

`public/` still holds **5.4 MB of images from the old design** that nothing references any more
(`hero_left_sticker.png` alone is 1.7 MB). They ship on every deploy. Safe to delete — they're all
in git history — but I've left them in place since they're your assets:

```
ai_cyber_bg.png · ai_orb_bg.png · hero_left_sticker.{png,jpg} · hero_right_sticker.{png,jpg}
navbar_landscape_bg.png · sky_background.png · images/hero_ai_architecture.jpg · images/hero_apple_bg.jpg
```
