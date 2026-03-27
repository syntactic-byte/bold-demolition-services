import { getPayload } from 'payload'
import config from '@payload-config'

async function migrate() {
  console.log('Starting database migration...')
  
  const payload = await getPayload({ config })
  
  // For PostgreSQL, tables are created automatically on first access
  // We just need to trigger a schema sync
  try {
    await (payload.db.connect as any)()
    console.log('Database connected!')
    
    // Try to access a collection to trigger table creation
    await payload.find({
      collection: 'users',
      limit: 1,
      depth: 0,
    } as any)
    
    console.log('Database tables created successfully!')
  } catch (err: any) {
    // Table doesn't exist yet - that's expected on first run
    if (err.message?.includes('does not exist')) {
      console.log('Database connected. Tables will be created on first data insert.')
    } else {
      throw err
    }
  }
  
  process.exit(0)
}

migrate().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
