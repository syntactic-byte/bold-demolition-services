# Bold Demolition Services - CMS Setup

## Current Status

✅ Website is fully functional at http://localhost:3000
✅ Admin panel is working at http://localhost:3000/admin
✅ All pages are created and working:
- Home (/)
- Over Ons (/over-ons)
- Diensten (/diensten)
- Projecten (/projecten)
- Contact (/contact)

## Next Steps to Populate CMS with Content

### Step 1: Create First Admin User

1. Go to http://localhost:3000/admin/create-first-user
2. Create your admin user account
3. Log in to the admin panel

### Step 2: Add Services (Manual Entry)

Go to http://localhost:3000/admin/collections/services and add these services:

1. **Gebouwen Sloop**
   - Description: Complete sloop van woningen, kantoren en commerciële gebouwen
   - Icon: Building2
   - Featured: Yes

2. **Industriële Demontage**
   - Description: Specialistische demontage van fabrieken en industriële installaties
   - Icon: Factory
   - Featured: Yes

3. **Asbest Sanering**
   - Description: Gecertificeerde verwijdering van asbesthoudende materialen volgens SC-530
   - Icon: Trash2
   - Featured: Yes

4. **Recycling & Afvoer**
   - Description: Duurzame verwerking en recycling van sloopafval met 98% recyclingpercentage
   - Icon: Recycle
   - Featured: Yes

### Step 3: Add Projects (Manual Entry)

Go to http://localhost:3000/admin/collections/projects and add these projects:

1. **Oude Fabriek Rotterdam**
   - Description: Complete demontage van een voormalige staalfabriek van 15.000m²
   - Category: Demolition
   - Completed: June 2024
   - Featured: Yes

2. **Kantoorcomplex Zuidas**
   - Description: Gecontroleerde sloop van een 12-verdiepingen kantoorgebouw
   - Category: Demolition
   - Completed: March 2024
   - Featured: Yes

3. **Winkelcentrum Renovatie**
   - Description: Selectieve strip-out van 15.000m² winkelruimte
   - Category: Renovation
   - Completed: November 2023
   - Featured: Yes

4-6. (Additional projects from the data)

### Alternative: Automated Seeding (After Creating User)

After creating your first user and logging in, you can run:

```bash
cd /Users/simbaclaws/Projects/bold-demolition-services/cms
pnpm tsx scripts/seed-content.ts
```

This will automatically populate Services and Projects collections.

## Website Features

- Dark industrial theme with orange accents
- Responsive design
- All pages working with fallback data
- CMS-ready - content will update automatically once added to Payload
