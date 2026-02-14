import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'
import fs from 'fs'

// Import translations and blog content
import { locales, serviceTranslations, projectTranslations } from './translations.mjs'
import { blogPosts } from './blog-content.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '../..', '.env') })

const { default: config } = await import(path.join(__dirname, '../..', 'src', 'payload.config.ts'))

// Image configuration
const imageFiles = [
  { filename: 'hero-demolition.webp', alt: 'TitanBreakers demolition equipment' },
  { filename: 'about-team.webp', alt: 'TitanBreakers team' },
  { filename: 'project-1.webp', alt: 'Demolition project 1' },
  { filename: 'project-2.webp', alt: 'Demolition project 2' },
  { filename: 'project-3.webp', alt: 'Demolition project 3' },
  { filename: 'project-4.webp', alt: 'Demolition project 4' },
  { filename: 'project-5.webp', alt: 'Demolition project 5' },
  { filename: 'project-6.webp', alt: 'Demolition project 6' },
  { filename: 'blog-manual-demo.webp', alt: 'Blog: Manual Demolition' },
  { filename: 'blog-asbestos-safety.webp', alt: 'Blog: Asbestos Safety' },
  { filename: 'blog-kitchen-prep.webp', alt: 'Blog: Kitchen Preparation' },
  { filename: 'blog-bathroom-tips.webp', alt: 'Blog: Bathroom Tips' },
  { filename: 'blog-anniversary.webp', alt: 'Blog: Anniversary' },
  { filename: 'blog-sustainable.webp', alt: 'Blog: Sustainable Demolition' },
  { filename: 'service-asbestos.webp', alt: 'Service: Asbestos' },
  { filename: 'service-property-clearing.webp', alt: 'Service: Property Clearing' },
  { filename: 'service-manual.webp', alt: 'Service: Manual Demolition' },
  { filename: 'service-selective.webp', alt: 'Service: Selective Demolition' },
  { filename: 'service-kitchen-bathroom.webp', alt: 'Service: Kitchen & Bathroom' },
  { filename: 'service-interior.webp', alt: 'Service: Interior Demolition' },
]

async function uploadImage(payload, filename, alt) {
  const filePath = path.join(__dirname, '../..', 'public', filename)
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  Image not found: ${filename}`)
    return null
  }

  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log(`  ↻ Already exists: ${filename}`)
    return existing.docs[0]
  }

  const fileBuffer = fs.readFileSync(filePath)
  const file = {
    name: filename,
    data: fileBuffer,
    mimetype: `image/${filename.split('.').pop()}`,
    size: fileBuffer.length,
  }

  const media = await payload.create({
    collection: 'media',
    data: { alt },
    file,
  })
  console.log(`  ✓ Uploaded: ${filename}`)
  return media
}

async function seedServices(payload, images) {
  console.log('\n📦 Seeding Services with translations...')

  const serviceImages = {
    manual: images[16]?.id,
    selective: images[17]?.id,
    asbestos: images[14]?.id,
    clearing: images[15]?.id,
    kitchen: images[18]?.id,
    interior: images[19]?.id,
  }

  const services = [
    { key: 'manual', icon: 'Hammer', featured: true },
    { key: 'selective', icon: 'Scissors', featured: true },
    { key: 'asbestos', icon: 'Shield', featured: true },
    { key: 'clearing', icon: 'Trash2', featured: true },
    { key: 'kitchen', icon: 'Home', featured: false },
    { key: 'interior', icon: 'Building2', featured: false },
  ]

  for (const service of services) {
    const serviceData = {
      icon: service.icon,
      featured: service.featured,
      image: serviceImages[service.key],
      title: serviceTranslations[service.key].nl.title,
      description: serviceTranslations[service.key].nl.description,
    }

    const created = await payload.create({
      collection: 'services',
      data: serviceData,
    })

    // Add translations for all locales
    for (const locale of locales.filter((l) => l !== 'nl')) {
      const translation = serviceTranslations[service.key][locale]
      if (translation) {
        await payload.update({
          collection: 'services',
          id: created.id,
          data: {
            title: translation.title,
            description: translation.description,
          },
          locale: locale,
          context: { disableRevalidate: true },
        })
      }
    }

    console.log(`  ✓ Service: ${serviceData.title}`)
  }
  console.log('✅ Services seeded with translations')
}

async function seedProjects(payload, images) {
  console.log('\n📦 Seeding Projects with translations...')

  const projectKeys = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6']
  const projectImages = [
    images[2]?.id,
    images[3]?.id,
    images[4]?.id,
    images[5]?.id,
    images[6]?.id,
    images[7]?.id,
  ]
  const projectDates = [
    new Date('2024-06-15').toISOString(),
    new Date('2024-03-20').toISOString(),
    new Date('2023-11-10').toISOString(),
    new Date('2023-09-05').toISOString(),
    new Date('2023-07-22').toISOString(),
    new Date('2022-12-15').toISOString(),
  ]
  const projectCategories = [
    'renovation',
    'renovation',
    'demolition',
    'renovation',
    'renovation',
    'renovation',
  ]

  for (let i = 0; i < projectKeys.length; i++) {
    const key = projectKeys[i]
    const projectData = {
      title: projectTranslations[key].nl.title,
      description: projectTranslations[key].nl.description,
      category: projectCategories[i],
      completed: projectDates[i],
      featured: true,
      image: projectImages[i],
    }

    const created = await payload.create({
      collection: 'projects',
      data: projectData,
    })

    // Add translations for all locales
    for (const locale of locales.filter((l) => l !== 'nl')) {
      const translation = projectTranslations[key][locale]
      if (translation) {
        await payload.update({
          collection: 'projects',
          id: created.id,
          data: {
            title: translation.title,
            description: translation.description,
          },
          locale: locale,
          context: { disableRevalidate: true },
        })
      }
    }

    console.log(`  ✓ Project: ${projectData.title}`)
  }
  console.log('✅ Projects seeded with translations')
}

async function seedCategories(payload) {
  console.log('\n📦 Seeding Categories...')
  const categories = ['Demolition', 'Asbestos', 'Renovation', 'Environmental', 'News', 'Updates']

  for (const category of categories) {
    try {
      await payload.create({
        collection: 'categories',
        data: { title: category, slug: category.toLowerCase() },
      })
      console.log(`  ✓ Category: ${category}`)
    } catch (e) {
      console.log(`  ↻ Category exists: ${category}`)
    }
  }
  console.log('✅ Categories seeded')
}

async function seedBlogPosts(payload, images) {
  console.log('\n📦 Seeding Blog Posts...')

  for (const post of blogPosts) {
    const defaultLocale = 'nl'
    const defaultData = post.translations[defaultLocale]

    if (!defaultData) {
      console.log(`  ⚠️  No default data for post: ${post.slug}`)
      continue
    }

    const created = await payload.create({
      collection: 'posts',
      data: {
        title: defaultData.title,
        slug: post.slug,
        _status: 'published',
        publishedAt: new Date(post.date).toISOString(),
        populatedAuthors: [],
        heroImage: images[post.imageIndex]?.id,
        content: defaultData.content,
        meta: {
          title: defaultData.title,
          description: defaultData.excerpt,
        },
      },
      context: { disableRevalidate: true },
    })

    // Add translations for other locales
    for (const [locale, translation] of Object.entries(post.translations)) {
      if (locale === defaultLocale) continue

      await payload.update({
        collection: 'posts',
        id: created.id,
        data: {
          title: translation.title,
          content: translation.content,
          meta: {
            title: translation.title,
            description: translation.excerpt,
          },
        },
        locale: locale,
        context: { disableRevalidate: true },
      })
    }

    console.log(`  ✓ Blog Post: ${defaultData.title}`)
  }
  console.log('✅ Blog posts seeded')
}

async function seed() {
  console.log('🌱 Starting complete database seed...')

  const payload = await getPayload({ config })

  try {
    await payload.db.connect()
    console.log('✅ Connected to database')

    // Clear existing data
    console.log('\n🗑️  Clearing existing data...')
    await payload.db.deleteMany({ collection: 'services', req: {}, where: {} })
    await payload.db.deleteMany({ collection: 'projects', req: {}, where: {} })
    await payload.db.deleteMany({ collection: 'posts', req: {}, where: {} })
    console.log('✅ Cleared existing data')

    // Upload Images
    console.log('\n📸 Uploading images...')
    const images = []
    for (const img of imageFiles) {
      const uploaded = await uploadImage(payload, img.filename, img.alt)
      images.push(uploaded)
    }
    console.log('✅ Images uploaded')

    // Seed all content
    await seedServices(payload, images)
    await seedProjects(payload, images)
    await seedCategories(payload)
    await seedBlogPosts(payload, images)

    console.log('\n🎉 Database fully seeded with translations!')
    console.log('\n📋 Seeded:')
    console.log('  ✅ Images uploaded')
    console.log('  ✅ 6 Services (all 15 locales)')
    console.log('  ✅ 6 Projects (all 15 locales)')
    console.log('  ✅ 6 Categories')
    console.log('  ✅ 6 Blog Posts (NL + EN)')

    process.exit(0)
  } catch (error) {
    console.error('\n❌ Error:', error)
    process.exit(1)
  }
}

seed()
