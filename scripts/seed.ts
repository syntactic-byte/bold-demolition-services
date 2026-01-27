import { getPayload } from 'payload'
import config from '../src/payload.config'

const seed = async () => {
  const payload = await getPayload({ config })

  try {
    console.log('🌱 Seeding Services...')
    
    const services = [
      {
        title: 'Gebouwen Sloop',
        description: 'Complete sloop van woningen, kantoren en commerciële gebouwen. Van monumentale panden tot moderne kantoorgebouwen - wij zorgen voor een veilige en efficiënte afbraak.',
        icon: 'Building2',
        featured: true,
      },
      {
        title: 'Industriële Demontage',
        description: 'Specialistische demontage van fabrieken, opslagloodsen en industriële installaties. Wij hebben ervaring met complexe industriële omgevingen.',
        icon: 'Factory',
        featured: true,
      },
      {
        title: 'Asbest Sanering',
        description: 'Gecertificeerde verwijdering van asbesthoudende materialen volgens SC-530. Veilig voor mens en milieu, conform alle wettelijke eisen.',
        icon: 'Trash2',
        featured: true,
      },
      {
        title: 'Recycling & Afvoer',
        description: 'Duurzame verwerking en recycling van sloopafval. Wij scheiden en verwerken alle materialen milieuvriendelijk met een recyclingpercentage van 98%.',
        icon: 'Recycle',
        featured: true,
      },
    ]

    for (const service of services) {
      await payload.create({
        collection: 'services',
        data: service,
      })
    }

    console.log('✅ Services seeded')

    console.log('🌱 Seeding Projects...')

    const projects = [
      {
        title: 'Oude Fabriek Rotterdam',
        description: 'Complete demontage van een voormalige staalfabriek van 15.000m² inclusief asbestsanering en grondwerk.',
        category: 'demolition' as const,
        completed: new Date('2024-06-15').toISOString(),
        featured: true,
      },
      {
        title: 'Kantoorcomplex Zuidas',
        description: 'Gecontroleerde sloop van een 12-verdiepingen kantoorgebouw in stedelijk gebied met minimale overlast.',
        category: 'demolition' as const,
        completed: new Date('2024-03-20').toISOString(),
        featured: true,
      },
      {
        title: 'Winkelcentrum Renovatie',
        description: 'Selectieve strip-out van 15.000m² winkelruimte voor herontwikkeling tot mixed-use complex.',
        category: 'renovation' as const,
        completed: new Date('2023-11-10').toISOString(),
        featured: true,
      },
      {
        title: 'Haventerrein Demontage',
        description: 'Demontage van havenkranen, silo\'s en opslagloodsen op een voormalig haventerrein.',
        category: 'demolition' as const,
        completed: new Date('2023-09-05').toISOString(),
        featured: true,
      },
      {
        title: 'Woningbouwproject Den Haag',
        description: 'Sloop van verouderde portiekflats om plaats te maken voor 200 nieuwe duurzame woningen.',
        category: 'demolition' as const,
        completed: new Date('2023-07-22').toISOString(),
        featured: true,
      },
      {
        title: 'Ziekenhuis Renovatie',
        description: 'Gefaseerde strip-out van ziekenhuisvleugels tijdens operationele bezetting van het gebouw.',
        category: 'renovation' as const,
        completed: new Date('2022-12-15').toISOString(),
        featured: true,
      },
    ]

    for (const project of projects) {
      await payload.create({
        collection: 'projects',
        data: project,
      })
    }

    console.log('✅ Projects seeded')

    console.log('🌱 Seeding Home Page...')

    await payload.create({
      collection: 'pages',
      data: {
        title: 'Home',
        slug: 'home',
        hero: {
          title: 'KRACHT IN',
          subtitle: 'SLOOPWERK',
          description: 'TitanBrekers is uw betrouwbare partner voor professioneel sloop- en demontagewerk. Met meer dan 25 jaar ervaring maken wij ruimte voor uw toekomst.',
          ctaButtons: [
            { text: 'Gratis Offerte', url: '/contact', style: 'primary' },
            { text: 'Bekijk Projecten', url: '/projecten', style: 'secondary' }
          ],
          stats: [
            { number: '25+', label: 'Jaar Ervaring' },
            { number: '500+', label: 'Projecten' },
            { number: '100%', label: 'Veilig' }
          ],
          features: [
            { icon: 'Clock', title: 'Snelle Respons', description: 'Binnen 24 uur reactie' },
            { icon: 'Shield', title: 'Volledig Verzekerd', description: 'Tot €5 miljoen dekking' },
            { icon: 'Award', title: 'VCA Gecertificeerd', description: 'Hoogste veiligheidsnormen' }
          ]
        },
      },
    })

    console.log('✅ Home page seeded')
    console.log('🎉 All data seeded successfully!')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

seed()
