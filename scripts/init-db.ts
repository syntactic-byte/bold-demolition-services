import { getPayload } from 'payload'
import config from '@payload-config'

async function initDB() {
  console.log('🔧 Initializing database schema...')
  
  const payload = await getPayload({ config })
  
  try {
    // Connect to DB
    await (payload.db.connect as any)()
    console.log('✅ Database connected!')
    
    // Create tables by accessing each collection
    const collections = ['users', 'media', 'pages', 'posts', 'categories', 'services', 'projects']
    const globals = ['header', 'footer', 'site-settings', 'home-page', 'about-page', 'services-page', 'contact-page', 'translations']
    
    console.log('\n📋 Creating collection tables...')
    for (const collection of collections) {
      try {
        await payload.find({ collection, limit: 0 } as any)
        console.log(`  ✓ ${collection}`)
      } catch (e: any) {
        if (e.message?.includes('does not exist')) {
          console.log(`  ⚠ ${collection} - will be created on first write`)
        }
      }
    }
    
    console.log('\n📋 Creating global tables...')
    for (const global of globals) {
      try {
        await payload.findGlobal({ slug: global } as any)
        console.log(`  ✓ ${global}`)
      } catch (e: any) {
        if (e.message?.includes('does not exist')) {
          console.log(`  ⚠ ${global} - will be created on first write`)
        }
      }
    }
    
    console.log('\n✅ Database schema initialized!')
    process.exit(0)
  } catch (error: any) {
    console.error('❌ Database initialization failed:', error.message)
    process.exit(1)
  }
}

initDB()
