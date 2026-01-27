# CMS Content Management Guide

## What's Currently Editable in the CMS

### ✅ Fully Editable Collections:

#### 1. **Services** (http://localhost:3000/admin/collections/services)
You can add, edit, and delete services. Each service has:
- Title
- Description
- Icon (Lucide icon name like: Building2, Factory, Trash2, Recycle, Shovel, Home)
- Featured checkbox (shows on home page if checked)
- Image (optional)

**Currently seeded with 6 services** - edit them or add more!

#### 2. **Projects** (http://localhost:3000/admin/collections/projects)
You can add, edit, and delete projects. Each project has:
- Title
- Description
- Image (upload your project photos)
- Category (Demolition, Asbestos, Renovation, Environmental)
- Completion date
- Featured checkbox (shows on home page if checked)

**Currently seeded with 6 projects** - edit them or add more!

#### 3. **Site Settings** (http://localhost:3000/admin/globals/site-settings)
Global settings for your entire site:
- Company Name (default: "TitanBrekers")
- Tagline
- Logo (letter "T" and optional logo image)
- Contact Info:
  - Phone: 06-12345678
  - Email: info@titanbrekers.nl
  - Address: Industrieweg 45, 1234 AB Rotterdam
  - Business Hours
- Social Media Links (Facebook, LinkedIn, Instagram)
- Certifications (VCA**, SC-530, ISO 9001, ISO 14001)

**All editable - change anytime!**

#### 4. **Media** (http://localhost:3000/admin/collections/media)
Upload and manage all your images:
- Project photos
- Service images
- Hero backgrounds
- Logo files

### 📄 Pages (Partially Editable)

The cms template already has a "home" page you can edit at:
http://localhost:3000/admin/collections/pages

However, our custom pages (over-ons, diensten, projecten, contact) currently have **hardcoded content** in the React components.

## What's Hardcoded (For Now)

These elements are currently in the code and not editable through CMS:

### Header Navigation Links
- Located in: `/src/components/Header.tsx`
- Links: Home, Diensten, Projecten, Over Ons, Contact
- **To change**: Edit the `navLinks` array in Header.tsx

### Footer Content
- Located in: `/src/components/Footer.tsx`  
- Company description text
- Navigation links
- **To change**: Edit Footer.tsx directly

### Page-Specific Content:

**Over Ons page** (`/src/app/(frontend)/over-ons/page.tsx`):
- Company values
- Timeline/history
- Stats (25+ years, 500+ projects, etc.)

**Diensten page** (`/src/app/(frontend)/diensten/page.tsx`):
- Service descriptions and features
- Service icons

**Projecten page** (`/src/app/(frontend)/projecten/page.tsx`):
- Pulls from Projects collection (✅ fully editable!)

**Contact page** (`/src/app/(frontend)/contact/page.tsx`):
- Contact form
- Office hours
- Contact info

## How to Make More Content Editable

If you want to make the hardcoded content editable, I can:

1. **Create additional page fields** - Add specific fields to Pages collection for each page type
2. **Create more globals** - Create AboutPage global, ServicesPage global, etc.
3. **Use blocks system** - Convert pages to use Payload's block system (more flexible but more complex)

Would you like me to make specific content editable? Just let me know what you want to be able to edit through the CMS!

## Quick Start

1. **Create your admin user**: http://localhost:3000/admin/create-first-user
2. **Edit Site Settings**: Change company info, contact details, logo
3. **Manage Services**: Add/edit/delete services
4. **Manage Projects**: Add/edit/delete projects with images
5. **Upload Media**: Add your actual project photos and company images

Everything you add in the admin will automatically appear on the live website!
