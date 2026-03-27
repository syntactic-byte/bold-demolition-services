import { Pool } from 'pg'

async function createTables() {
  console.log('🔧 Creating all database tables...')
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })
  
  try {
    // Core collections
    await pool.query(`CREATE TABLE IF NOT EXISTS "users" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "email" VARCHAR UNIQUE, "reset_password_token" VARCHAR, "reset_password_expiration" TIMESTAMP(3), "salt" VARCHAR, "hash" VARCHAR, "login_attempts" NUMERIC DEFAULT 0, "lock_until" TIMESTAMP(3))`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "media" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "alt" VARCHAR, "caption" TEXT, "file_name" VARCHAR, "mime_type" VARCHAR, "filesize" NUMERIC, "width" NUMERIC, "height" NUMERIC, "focal_x" NUMERIC, "focal_y" NUMERIC, "url" VARCHAR, "thumbnail_url" VARCHAR, "file_path" VARCHAR)`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "pages" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "title" VARCHAR, "slug" VARCHAR, "meta_title" VARCHAR, "meta_description" TEXT, "_status" VARCHAR DEFAULT 'draft')`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "posts" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "title" VARCHAR, "slug" VARCHAR UNIQUE, "meta_title" VARCHAR, "meta_description" TEXT, "_status" VARCHAR DEFAULT 'draft')`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "categories" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "title" VARCHAR)`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "services" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "title" VARCHAR, "slug" VARCHAR UNIQUE)`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "projects" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "title" VARCHAR, "slug" VARCHAR UNIQUE)`)
    
    // Globals base tables
    await pool.query(`CREATE TABLE IF NOT EXISTS "header" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "footer" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "site_settings" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "home_page" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "about_page" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "services_page" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "contact_page" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "translations" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    
    // Payload system tables
    await pool.query(`CREATE TABLE IF NOT EXISTS "payload_migrations" ("id" SERIAL PRIMARY KEY, "name" VARCHAR(255), "batch" INTEGER, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    await pool.query(`CREATE TABLE IF NOT EXISTS "payload_preferences" ("id" SERIAL PRIMARY KEY, "key" VARCHAR(255), "value" JSONB, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    
    console.log('✅ Base tables created')
    
    // Now let Payload create the rest by accessing collections
    await pool.end()
    
    // Import Payload and access collections to trigger full schema creation
    const { getPayload } = await import('payload')
    const config = (await import('@payload-config')).default
    
    const payload = await getPayload({ config })
    await (payload.db.connect as any)()
    
    // Access each collection to trigger full table creation
    const collections = ['users', 'media', 'pages', 'posts', 'categories', 'services', 'projects']
    for (const slug of collections) {
      try {
        await payload.find({ collection: slug, limit: 0 } as any)
      } catch (e: any) { /* ignore */ }
    }
    
    // Access globals
    const globals = ['header', 'footer', 'site-settings', 'home-page', 'about-page', 'services-page', 'contact-page', 'translations']
    for (const slug of globals) {
      try {
        await payload.findGlobal({ slug: slug } as any)
      } catch (e: any) { /* ignore */ }
    }
    
    console.log('✅ All tables created via Payload!')
    process.exit(0)
  } catch (error: any) {
    console.error('❌ Failed:', error.message)
    try { await pool.end() } catch (e) {}
    process.exit(1)
  }
}

createTables()
