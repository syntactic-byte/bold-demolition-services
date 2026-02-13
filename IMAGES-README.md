# Image Guide for TitanBrekers - Hand Demolition Work

## Overview

This website represents TitanBrekers as a **manual/hand demolition company** specializing in indoor work with hammers and hand tools, NOT large machinery.

## Required Images

### 1. Hero Image (`hero-demolition.jpg`)

**Purpose:** Main banner on homepage
**Should Show:**

- Worker using hammer or hand tools for demolition
- Interior demolition setting (not heavy machinery)
- Professional, focused work

**Suggested Search Terms:**

- "interior demolition worker"
- "manual demolition hammer"
- "construction worker hand tools"

### 2. Project Images (`project-1.jpg`, `project-2.jpg`, `project-3.jpg`)

**Purpose:** Portfolio section showcasing work
**Should Show:**

- Interior room demolition (kitchens, bathrooms, offices)
- Workers removing tiles, walls, fixtures by hand
- Before/after renovation scenes
- Clean, organized work spaces

**Suggested Search Terms:**

- "kitchen demolition interior"
- "bathroom strip out renovation"
- "wall removal manual demolition"

### 3. Service Images (Optional Enhancement)

**Purpose:** Individual service pages
**Should Show:**

- Close-ups of hammer/chisel work
- Tile removal by hand
- Selective wall demolition
- Detail work preserving structures

## Where to Find Images

### Free Stock Photo Sites:

1. **Unsplash** (https://unsplash.com)
   - Search: "interior demolition", "construction hand tools", "renovation worker"
2. **Pexels** (https://www.pexels.com)
   - Search: "demolition interior", "construction worker tools", "renovation site"
3. **Pixabay** (https://pixabay.com)
   - Search: "manual demolition", "interior construction", "hammer worker"

### Recommended Specific Images:

**For Hero:**

- Worker in hard hat using sledgehammer on interior wall
- Close-up of hands with demolition tools
- Team doing selective demolition in existing building

**For Projects:**

- Kitchen being stripped (cabinets, tiles removed)
- Bathroom demolition (fixtures, tiles, plumbing)
- Office interior wall removal
- Floor tile removal by hand

**AVOID:**

- ❌ Heavy machinery (excavators, bulldozers)
- ❌ Outdoor demolition sites
- ❌ Large industrial equipment
- ❌ Crane shots or building implosions

## Download Script

Run this command to automatically download appropriate placeholder images:

```bash
pnpm download-images
```

This will download sample images to the `/public` folder. You can then replace them with your own professional photos.

## Custom Photography Tips

If taking your own photos:

1. **Show the Process:**
   - Workers using hammers, crowbars, chisels
   - Removing tiles by hand
   - Careful work around preserved structures
   - Clean, organized work sites

2. **Highlight Precision:**
   - Close-ups of hand tool work
   - Selective demolition (only removing what needs to go)
   - Care taken with existing structures

3. **Professional Setting:**
   - Workers in safety gear (hard hats, gloves)
   - Well-lit interior spaces
   - Residential and commercial interiors
   - Before/during/after renovation stages

## Current Placeholder Images

The download script fetches images from Unsplash showing:

- Construction workers with hand tools
- Interior renovation work
- Manual demolition scenes
- Professional construction settings

**Note:** These are placeholder images. For your production website, you should:

1. Hire a photographer to take photos of your actual team working
2. Document real projects you've completed
3. Show your actual hand demolition work
4. Feature your team members doing the work

## Alt Text Guidelines

When adding images to the CMS, use descriptive alt text:

- ✅ Good: "Worker carefully removing bathroom tiles by hand"
- ✅ Good: "Manual demolition of kitchen interior with hammers"
- ✅ Good: "Selective wall removal preserving existing structure"
- ❌ Bad: "Demolition equipment"
- ❌ Bad: "Machinery"

## Updating Existing Images

To update images in your CMS:

1. Go to Payload Admin: `http://localhost:3000/admin`
2. Navigate to **Media** collection
3. Upload new images
4. Update alt text for each image
5. Go to Services/Projects and assign new images

## Quick Start

```bash
# 1. Download placeholder images
pnpm download-images

# 2. Seed the database with updated content
pnpm seed:all

# 3. Start the dev server
pnpm dev
```

## Questions?

If you need help finding specific images or setting up custom photos, refer to:

- This README for guidelines
- The `download-images.mjs` script for automated downloads
- Free stock photo sites listed above
