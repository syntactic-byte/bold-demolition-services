import { getPayload } from 'payload'
import config from '@payload-config'

async function seedTranslations() {
  console.log('🌱 Seeding translations...\n')
  
  const payload = await getPayload({ config })
  
  try {
    await (payload.db.connect as any)()
    
    // First, create the translations global with sample data to trigger table creation
    console.log('Creating translations tables...')
    try {
      await payload.updateGlobal({
        slug: 'translations',
        data: {
          translations: [
            { locale: 'nl', strings: { temp: 'temp' } }
          ]
        }
      } as any)
      
      // Clear the temp data
      await payload.updateGlobal({
        slug: 'translations',
        data: { translations: [] }
      } as any)
      
      console.log('✅ Tables created\n')
    } catch (e: any) {
      console.log('⚠️  Table creation skipped\n')
    }
    
    // Now run the actual seed
    const { default: translationsData } = await import('./seed/translations.mjs')
    
    await payload.updateGlobal({
      slug: 'translations',
      data: { translations: translationsData }
    } as any)
    
    console.log('✅ Translations seeded!')
    process.exit(0)
  } catch (error: any) {
    console.error('❌ Error seeding translations:', error.message)
    process.exit(1)
  }
}

seedTranslations()
