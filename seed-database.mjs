import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '.env') })

const { default: config } = await import(path.join(__dirname, 'src', 'payload.config.ts'))

async function seed() {
  console.log('🌱 Starting complete database seed...')

  const payload = await getPayload({ config })

  try {
    await payload.db.connect()
    console.log('✅ Connected to database')

    // Clear existing data
    console.log('\n🗑️  Clearing existing Services, Projects, and Posts...')
    await payload.db.deleteMany({ collection: 'services', req: {}, where: {} })
    await payload.db.deleteMany({ collection: 'projects', req: {}, where: {} })
    await payload.db.deleteMany({ collection: 'posts', req: {}, where: {} })
    console.log('✅ Cleared existing data')

    // Upload Images
    console.log('\n📸 Uploading images...')

    const uploadImage = async (filename, alt) => {
      const filePath = path.join(__dirname, 'public', filename)
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

    const [
      heroImage,
      aboutTeamImage,
      project1Image,
      project2Image,
      project3Image,
      project4Image,
      project5Image,
      project6Image,
      blogImage1,
      blogImage2,
      blogImage3,
      blogImage4,
      blogImage5,
      blogImage6,
      serviceImage1,
      serviceImage2,
      serviceImage3,
      serviceImage4,
      serviceImage5,
      serviceImage6,
    ] = await Promise.all([
      uploadImage('hero-demolition.webp', 'TitanBrekers demolition equipment'),
      uploadImage('about-team.webp', 'TitanBreakers team'),
      uploadImage('project-1.webp', 'Demolition project 1'),
      uploadImage('project-2.webp', 'Demolition project 2'),
      uploadImage('project-3.webp', 'Demolition project 3'),
      uploadImage('project-4.webp', 'Demolition project 4'),
      uploadImage('project-5.webp', 'Demolition project 5'),
      uploadImage('project-6.webp', 'Demolition project 6'),
      uploadImage('blog-manual-demo.webp', 'Blog: Manual Demolition'),
      uploadImage('blog-asbestos-safety.webp', 'Blog: Asbestos Safety'),
      uploadImage('blog-kitchen-prep.webp', 'Blog: Kitchen Preparation'),
      uploadImage('blog-bathroom-tips.webp', 'Blog: Bathroom Tips'),
      uploadImage('blog-anniversary.webp', 'Blog: Anniversary'),
      uploadImage('blog-sustainable.webp', 'Blog: Sustainable Demolition'),
      uploadImage('service-asbestos.webp', 'Service: Asbestos'),
      uploadImage('service-property-clearing.webp', 'Service: Property Clearing'),
      uploadImage('service-manual.webp', 'Service: Manual Demolition'),
      uploadImage('service-selective.webp', 'Service: Selective Demolition'),
      uploadImage('service-kitchen-bathroom.webp', 'Service: Kitchen & Bathroom'),
      uploadImage('service-interior.webp', 'Service: Interior Demolition'),
    ])

    console.log('✅ Images uploaded')

    // Seed Categories
    console.log('\n📦 Seeding Categories...')
    const categories = ['Demolition', 'Asbestos', 'Renovation', 'Environmental', 'News', 'Updates']

    for (const category of categories) {
      try {
        await payload.create({
          collection: 'categories',
          data: { title: category, slug: category.toLowerCase() },
        })
        console.log(`  ✓ Created: ${category}`)
      } catch (e) {
        console.log(`  ↻ Exists: ${category}`)
      }
    }
    console.log('✅ Categories seeded')

    // Seed Services with correct images
    console.log('\n📦 Seeding Services...')
    const services = [
      {
        title: 'Handmatige Sloop',
        description:
          'Voorzichtige en nauwkeurige handmatige sloopwerkzaamheden voor binnenprojecten.',
        icon: 'Hammer',
        featured: true,
        image: serviceImage3?.id, // service-manual.webp
      },
      {
        title: 'Selective Sloop',
        description: 'Selectief slopen met oog voor hergebruik van materialen.',
        icon: 'Scissors',
        featured: true,
        image: serviceImage4?.id, // service-selective.webp
      },
      {
        title: 'Asbest Sanering',
        description: 'Veilige en gecertificeerde asbestverwijdering.',
        icon: 'Shield',
        featured: true,
        image: serviceImage1?.id, // service-asbestos.webp
      },
      {
        title: 'Woning Ontruiming',
        description: 'Complete woningontruiming en opruiming van verontreinigde panden.',
        icon: 'Trash2',
        featured: true,
        image: serviceImage2?.id, // service-property-clearing.webp
      },
      {
        title: 'Keuken en Badkamer Sloop',
        description: 'Professionele keuken- en badkamersloop voor renovatieprojecten.',
        icon: 'Home',
        featured: false,
        image: serviceImage5?.id, // service-kitchen-bathroom.webp
      },
      {
        title: 'Interieur Sloop',
        description: 'Strip-out werkzaamheden en selectieve sloop van interieurs.',
        icon: 'Building2',
        featured: false,
        image: serviceImage6?.id, // service-interior.webp
      },
    ]

    for (const service of services) {
      await payload.create({ collection: 'services', data: service })
      console.log(`  ✓ ${service.title}`)
    }
    console.log('✅ Services seeded')

    // Seed Projects - Interior Demolition focused
    console.log('\n📦 Seeding Projects...')
    const projects = [
      {
        title: 'Winkelruimte Stripping',
        description: 'Complete strip-out van winkelruimte voor herontwikkeling.',
        category: 'renovation',
        completed: new Date('2024-06-15').toISOString(),
        featured: true,
        image: project6Image?.id, // was interieur renovatie
      },
      {
        title: 'Appartement Renovatie Den Haag',
        description: 'Volledige renovatie van een appartement in Den Haag.',
        category: 'renovation',
        completed: new Date('2024-03-20').toISOString(),
        featured: true,
        image: project4Image?.id, // was keuken renovatie
      },
      {
        title: 'Woning Ontruiming Eindhoven',
        description: 'Complete ontruiming van een woning in Eindhoven.',
        category: 'demolition',
        completed: new Date('2023-11-10').toISOString(),
        featured: true,
        image: project5Image?.id, // was badkamer verbouwing
      },
      {
        title: 'Keuken Renovatie Amsterdam',
        description: 'Strip-out van keuken voor complete renovatie.',
        category: 'renovation',
        completed: new Date('2023-09-05').toISOString(),
        featured: true,
        image: project1Image?.id, // was winkelruimte stripping
      },
      {
        title: 'Badkamer Verbouwing Rotterdam',
        description: 'Sloop en renovatie van badkamer in Rotterdam.',
        category: 'renovation',
        completed: new Date('2023-07-22').toISOString(),
        featured: true,
        image: project2Image?.id, // was appartement renovatie
      },
      {
        title: 'Interieur Renovatie Utrecht',
        description: 'Complete interieur renovatie van woning in Utrecht.',
        category: 'renovation',
        completed: new Date('2022-12-15').toISOString(),
        featured: true,
        image: project3Image?.id, // was woning ontruiming
      },
    ]

    for (const project of projects) {
      await payload.create({ collection: 'projects', data: project })
      console.log(`  ✓ ${project.title}`)
    }
    console.log('✅ Projects seeded')

    // Seed Blog Posts
    console.log('\n📦 Seeding Blog Posts...')

    const post1 = await payload.create({
      collection: 'posts',
      data: {
        title: '25 Jaar TitanBrekers: Ons Jubilee',
        slug: '25-jaar-titanbrekers',
        _status: 'published',
        publishedAt: new Date('2024-01-15').toISOString(),
        populatedAuthors: [],
        heroImage: blogImage5?.id, // blog-anniversary.webp
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'TitanBrekers bestaat 25 jaar! Een kwart eeuw van professionele sloopwerkzaamheden. Wij danken al onze klanten en partners.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
      context: { disableRevalidate: true },
    })
    console.log(`  ✓ ${post1.title}`)

    const post2 = await payload.create({
      collection: 'posts',
      data: {
        title: 'Badkamer Sloop: Best Practices',
        slug: 'badkamer-sloop-best-practices',
        _status: 'published',
        publishedAt: new Date('2024-01-08').toISOString(),
        populatedAuthors: [],
        heroImage: blogImage4?.id, // blog-bathroom-tips.webp
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Ontdek de beste methoden voor het slopen van een badkamer. Van het verwijderen van tegels tot het afvoeren van sanitair.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
      context: { disableRevalidate: true },
    })
    console.log(`  ✓ ${post2.title}`)

    const post3 = await payload.create({
      collection: 'posts',
      data: {
        title: 'Handmatige vs Mechanische Sloop',
        slug: 'handmatige-vs-mechanische-sloop',
        _status: 'published',
        publishedAt: new Date('2023-12-20').toISOString(),
        populatedAuthors: [],
        heroImage: blogImage1?.id, // blog-manual-demo.webp
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Wanneer kies je voor handmatige sloop en wanneer voor mechanische sloop? Ontdek de voor- en nadelen van beide methoden.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
      context: { disableRevalidate: true },
    })
    console.log(`  ✓ ${post3.title}`)

    const post4 = await payload.create({
      collection: 'posts',
      data: {
        title: 'Voorbereiding Voor Sloopwerkzaamheden',
        slug: 'voorbereiding-sloopwerkzaamheden',
        _status: 'published',
        publishedAt: new Date('2023-11-15').toISOString(),
        populatedAuthors: [],
        heroImage: blogImage3?.id, // blog-kitchen-prep.webp
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Goede voorbereiding is essentieel voor een succesvol sloopproject. Ontdek waar u op moet letten voordat de sloop begint.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
      context: { disableRevalidate: true },
    })
    console.log(`  ✓ ${post4.title}`)

    const post5 = await payload.create({
      collection: 'posts',
      data: {
        title: 'Asbest Verwijdering: Protocollen',
        slug: 'asbest-verwijdering-protocollen',
        _status: 'published',
        publishedAt: new Date('2023-10-20').toISOString(),
        populatedAuthors: [],
        heroImage: blogImage2?.id, // blog-asbestos-safety.webp
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Asbest verwijdering vereist strikte protocollen. Ontdek hoe TitanBrekers veilig en gecertificeerd asbest verwijdert.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
      context: { disableRevalidate: true },
    })
    console.log(`  ✓ ${post5.title}`)

    const post6 = await payload.create({
      collection: 'posts',
      data: {
        title: 'Duurzaam Slopen: Onze Visie',
        slug: 'duurzaam-slopen-visie',
        _status: 'published',
        publishedAt: new Date('2023-09-10').toISOString(),
        populatedAuthors: [],
        heroImage: blogImage6?.id, // blog-sustainable.webp
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Duurzaamheid is een kernwaarde bij TitanBrekers. Wij zorgen voor 98% recycling van alle sloopmaterialen.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
      },
      context: { disableRevalidate: true },
    })
    console.log(`  ✓ ${post6.title}`)

    console.log('✅ Blog posts seeded')

    // Seed Contact Form
    console.log('\n📦 Creating Contact Form...')
    const contactForm = await payload.create({
      collection: 'forms',
      data: {
        title: 'Contact Form',
        submitButtonLabel: 'Verzenden',
        confirmationType: 'message',
        confirmationMessage: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Bedankt! Wij nemen binnen 24 uur contact met u op.',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        fields: [
          { name: 'name', blockType: 'text', label: 'Naam', required: true, width: 50 },
          { name: 'email', blockType: 'email', label: 'E-mail', required: true, width: 50 },
          { name: 'phone', blockType: 'text', label: 'Telefoon', required: false, width: 50 },
          {
            name: 'subject',
            blockType: 'select',
            label: 'Onderwerp',
            required: true,
            width: 50,
            options: [
              { label: 'Offerte', value: 'offerte' },
              { label: 'Informatie', value: 'informatie' },
              { label: 'Anders', value: 'anders' },
            ],
          },
          { name: 'message', blockType: 'textarea', label: 'Bericht', required: true, width: 100 },
        ],
      },
      context: { disableRevalidate: true },
    })
    console.log(`✅ Contact Form created`)

    // Seed Pages
    console.log('\n📦 Seeding Pages...')

    // Check if privacy page exists
    const existingPrivacy = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'privacy' } },
      limit: 1,
    })

    if (existingPrivacy.docs.length === 0) {
      await payload.create({
        collection: 'pages',
        data: {
          title: 'Privacybeleid',
          slug: 'privacy',
          _status: 'published',
          hero: {
            type: 'lowImpact',
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    tag: 'h1',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Privacybeleid',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
          layout: [
            {
              blockType: 'content',
              columns: [
                {
                  size: 'full',
                  richText: {
                    root: {
                      type: 'root',
                      children: [
                        {
                          type: 'heading',
                          tag: 'h2',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'Gebruik van persoonlijke gegevens',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'TitanBrekers respecteert uw privacy en zorgt ervoor dat persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. Wij gebruiken uw gegevens uitsluitend voor het leveren van onze diensten en het beantwoorden van uw vragen.',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'heading',
                          tag: 'h2',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'Beveiliging',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'Wij nemen de bescherming van uw gegevens serieus en hebben passende technische en organisatorische maatregelen genomen tegen verlies en onrechtmatig gebruik van uw persoonlijke gegevens.',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'heading',
                          tag: 'h2',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'Cookies',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'Onze website maakt gebruik van functionele cookies die noodzakelijk zijn voor de werking van de website. Deze cookies verzamelen geen persoonlijke gegevens.',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      version: 1,
                    },
                  },
                },
              ],
            },
          ],
        },
        context: { disableRevalidate: true },
      })
      console.log('  ✓ Privacy Policy')
    } else {
      console.log('  ↻ Privacy Policy already exists')
    }

    const existingTerms = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'voorwaarden' } },
      limit: 1,
    })

    if (existingTerms.docs.length === 0) {
      await payload.create({
        collection: 'pages',
        data: {
          title: 'Algemene Voorwaarden',
          slug: 'voorwaarden',
          _status: 'published',
          hero: {
            type: 'lowImpact',
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    tag: 'h1',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Algemene Voorwaarden',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
          layout: [
            {
              blockType: 'content',
              columns: [
                {
                  size: 'full',
                  richText: {
                    root: {
                      type: 'root',
                      children: [
                        {
                          type: 'heading',
                          tag: 'h2',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'Toepasselijkheid',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten tussen TitanBrekers en de opdrachtgever. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'heading',
                          tag: 'h2',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'Offertes en uitvoering',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'Alle offertes zijn vrijblijvend en geldig voor 30 dagen. Werkzaamheden worden uitgevoerd conform de overeengekomen specificaties en volgens de geldende veiligheidsvoorschriften en wet- en regelgeving.',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'heading',
                          tag: 'h2',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'Aansprakelijkheid',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                        {
                          type: 'paragraph',
                          children: [
                            {
                              type: 'text',
                              detail: 0,
                              format: 0,
                              mode: 'normal',
                              style: '',
                              text: 'TitanBrekers is volledig verzekerd en werkt volgens alle geldende veiligheidsvoorschriften. Onze aansprakelijkheid is beperkt tot het bedrag dat in het kader van de opdracht in rekening wordt gebracht.',
                              version: 1,
                            },
                          ],
                          direction: 'ltr',
                          format: '',
                          indent: 0,
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      format: '',
                      indent: 0,
                      version: 1,
                    },
                  },
                },
              ],
            },
          ],
        },
        context: { disableRevalidate: true },
      })
      console.log('  ✓ Algemene Voorwaarden')
    } else {
      console.log('  ↻ Algemene Voorwaarden already exists')
    }

    console.log('✅ Pages checked/seeded')

    // Update all globals
    console.log('\n📦 Updating Globals...')

    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        companyName: 'TitanBrekers',
        tagline: 'Professioneel Sloopwerk met Kracht en Precisie',
        logo: { letter: 'T' },
        contact: {
          phone: '06-12345678',
          email: 'info@titanbrekers.nl',
          address: 'Industrieweg 45\n1234 AB Rotterdam',
          hours: 'Maandag - Vrijdag: 07:00 - 18:00\nZaterdag: Op afspraak',
        },
        certifications: [
          { name: 'VCA**' },
          { name: 'SC-530' },
          { name: 'ISO 9001' },
          { name: 'ISO 14001' },
        ],
      },
      context: { disableRevalidate: true },
    })
    console.log('  ✓ Site Settings')

    await payload.updateGlobal({
      slug: 'home-page',
      data: {
        hero: {
          title: 'KRACHT IN',
          subtitle: 'SLOOPWERK',
          description:
            'TitanBrekers is uw betrouwbare partner voor professioneel sloop- en demontagewerk. Met meer dan 25 jaar ervaring maken wij ruimte voor uw toekomst.',
          backgroundImage: heroImage?.id,
          ctaButtons: [
            { text: 'Gratis Offerte', url: '/contact', style: 'primary' },
            { text: 'Bekijk Projecten', url: '/projecten', style: 'secondary' },
          ],
          stats: [
            { number: '25+', label: 'Jaar Ervaring' },
            { number: '500+', label: 'Projecten' },
            { number: '100%', label: 'Veilig' },
          ],
          features: [
            { icon: 'Clock', title: 'Snelle Respons', description: 'Binnen 24 uur reactie' },
            { icon: 'Shield', title: 'Volledig Verzekerd', description: 'Tot €5 miljoen dekking' },
            {
              icon: 'Award',
              title: 'VCA Gecertificeerd',
              description: 'Hoogste veiligheidsnormen',
            },
          ],
        },
        aboutPreview: {
          title: 'OVER TITANBREKERS',
          description:
            'Met meer dan 25 jaar ervaring is TitanBrekers uitgegroeid tot een van de meest gerespecteerde sloopbedrijven van Nederland.',
          highlights: [
            { text: 'VCA** gecertificeerd en volledig verzekerd' },
            { text: 'Modern machinepark en ervaren vakmensen' },
            { text: '98% recycling van alle sloopafval' },
            { text: 'Landelijke dekking met lokale service' },
          ],
        },
      },
      context: { disableRevalidate: true },
    })
    console.log('  ✓ Home Page')

    await payload.updateGlobal({
      slug: 'about-page',
      data: {
        hero: {
          title: 'WIE ZIJN WIJ',
          description:
            'Al meer dan 25 jaar is TitanBrekers dé specialist in professioneel sloopwerk.',
          image: aboutTeamImage?.id,
        },
        story: {
          title: 'ONS VERHAAL',
          paragraphs: [
            {
              text: 'TitanBrekers werd in 1999 opgericht met de missie professioneel sloopwerk te leveren.',
            },
            {
              text: 'Wat begon als klein familiebedrijf is uitgegroeid tot een gerespecteerd sloopbedrijf.',
            },
            { text: 'Onze kracht zit in ons team van ervaren vakmensen.' },
          ],
        },
        stats: [
          { number: '25+', label: 'Jaar Ervaring' },
          { number: '500+', label: 'Projecten' },
          { number: '50+', label: 'Medewerkers' },
          { number: '98%', label: 'Recycling' },
        ],
        values: [
          { icon: 'Shield', title: 'Veiligheid', description: 'Veiligheid staat altijd voorop.' },
          {
            icon: 'Target',
            title: 'Kwaliteit',
            description: 'Kwaliteitswerk, op tijd en binnen budget.',
          },
          { icon: 'Heart', title: 'Duurzaamheid', description: '98% recycling van sloopafval.' },
          {
            icon: 'Users',
            title: 'Vakmanschap',
            description: 'Ervaren vakmensen, trots op hun werk.',
          },
        ],
        timeline: [
          { year: '1999', title: 'Oprichting', description: 'TitanBrekers wordt opgericht' },
          { year: '2005', title: 'VCA Certificering', description: 'Behalen VCA**' },
          { year: '2010', title: 'SC-530', description: 'Erkenning asbestverwijdering' },
          { year: '2015', title: 'Landelijk', description: 'Uitbreiding heel Nederland' },
          { year: '2020', title: '50 Mensen', description: 'Groei naar 50+ vakmensen' },
          { year: '2024', title: '500+ Projecten', description: 'Mijlpaal bereikt' },
        ],
      },
      context: { disableRevalidate: true },
    })
    console.log('  ✓ About Page')

    await payload.updateGlobal({
      slug: 'services-page',
      data: {
        hero: {
          title: 'WAT WIJ DOEN',
          description: 'Van kleine stripwerken tot complete gebouwsloop - wij hebben de expertise.',
        },
        serviceDetails: [
          {
            title: 'Gebouwen Sloop',
            description: 'Complete sloop van gebouwen',
            features: [{ feature: 'Woningen' }, { feature: 'Kantoren' }, { feature: 'Monumenten' }],
          },
        ],
      },
      context: { disableRevalidate: true },
    })
    console.log('  ✓ Services Page')

    await payload.updateGlobal({
      slug: 'contact-page',
      data: {
        hero: {
          title: 'NEEM CONTACT OP',
          description: 'Neem vrijblijvend contact op voor een offerte.',
        },
        formSettings: {
          title: 'STUUR EEN BERICHT',
          subjects: [
            { value: 'offerte', label: 'Offerte' },
            { value: 'info', label: 'Informatie' },
          ],
        },
      },
      context: { disableRevalidate: true },
    })
    console.log('  ✓ Contact Page')

    await payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          { link: { type: 'custom', label: 'Home', url: '/' } },
          { link: { type: 'custom', label: 'Diensten', url: '/diensten' } },
          { link: { type: 'custom', label: 'Projecten', url: '/projecten' } },
          { link: { type: 'custom', label: 'Over Ons', url: '/over-ons' } },
          { link: { type: 'custom', label: 'Contact', url: '/contact' } },
          { link: { type: 'custom', label: 'News', url: '/posts' } },
        ],
      },
      context: { disableRevalidate: true },
    })
    console.log('  ✓ Header')

    await payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          { link: { type: 'custom', label: 'Privacy', url: '/privacy' } },
          { link: { type: 'custom', label: 'Voorwaarden', url: '/voorwaarden' } },
        ],
      },
      context: { disableRevalidate: true },
    })
    console.log('  ✓ Footer')

    console.log('✅ All globals updated')

    console.log('\n🎉 Database fully seeded!')
    console.log('\n📋 Seeded:')
    console.log('  ✅ 4 Images')
    console.log('  ✅ 6 Categories')
    console.log('  ✅ 6 Services (with images)')
    console.log('  ✅ 6 Projects (with images)')
    console.log('  ✅ 6 Blog Posts')
    console.log('  ✅ 2 Pages (Privacy, Terms)')
    console.log('  ✅ 1 Contact Form')
    console.log('  ✅ 7 Globals (Home, About, Services, Contact, Site Settings, Header, Footer)')

    console.log('\n🌐 Admin Panel: http://localhost:3000/admin')

    process.exit(0)
  } catch (error) {
    console.error('\n❌ Error:', error)
    process.exit(1)
  }
}

seed()
