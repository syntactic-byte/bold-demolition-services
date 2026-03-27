import { Pool } from 'pg'

async function createTables() {
  console.log('🔧 Creating all database tables...')
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })
  
  try {
    const tables = [
      `CREATE TABLE IF NOT EXISTS "users" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "email" VARCHAR UNIQUE, "reset_password_token" VARCHAR, "reset_password_expiration" TIMESTAMP(3), "salt" VARCHAR, "hash" VARCHAR, "login_attempts" NUMERIC DEFAULT 0, "lock_until" TIMESTAMP(3))`,
      `CREATE TABLE IF NOT EXISTS "media" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "alt" VARCHAR, "caption" TEXT, "file_name" VARCHAR, "mime_type" VARCHAR, "filesize" NUMERIC, "width" NUMERIC, "height" NUMERIC, "focal_x" NUMERIC, "focal_y" NUMERIC, "url" VARCHAR, "thumbnail_url" VARCHAR, "file_path" VARCHAR)`,
      `CREATE TABLE IF NOT EXISTS "pages" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "title" VARCHAR, "slug" VARCHAR, "meta_title" VARCHAR, "meta_description" TEXT, "_status" VARCHAR DEFAULT 'draft')`,
      `CREATE TABLE IF NOT EXISTS "posts" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "title" VARCHAR, "slug" VARCHAR UNIQUE, "meta_title" VARCHAR, "meta_description" TEXT, "_status" VARCHAR DEFAULT 'draft')`,
      `CREATE TABLE IF NOT EXISTS "categories" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "title" VARCHAR)`,
      `CREATE TABLE IF NOT EXISTS "services" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "title" VARCHAR, "slug" VARCHAR UNIQUE)`,
      `CREATE TABLE IF NOT EXISTS "projects" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW(), "title" VARCHAR, "slug" VARCHAR UNIQUE)`,
      `CREATE TABLE IF NOT EXISTS "payload_migrations" ("id" SERIAL PRIMARY KEY, "name" VARCHAR(255), "batch" INTEGER, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`,
      `CREATE TABLE IF NOT EXISTS "payload_preferences" ("id" SERIAL PRIMARY KEY, "key" VARCHAR(255), "value" JSONB, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`,
    ]
    
    for (const sql of tables) {
      await pool.query(sql)
    }
    
    console.log('✅ Core tables created')
    
    // Create globals
    const globals = ['header', 'footer', 'site_settings', 'home_page', 'about_page', 'services_page', 'contact_page', 'translations']
    for (const global of globals) {
      await pool.query(`CREATE TABLE IF NOT EXISTS "${global}" ("id" SERIAL PRIMARY KEY, "updated_at" TIMESTAMP(3) DEFAULT NOW(), "created_at" TIMESTAMP(3) DEFAULT NOW())`)
    }
    
    console.log('✅ Global tables created')
    console.log('✅ All database tables ready!')
    
    await pool.end()
    process.exit(0)
  } catch (error: any) {
    console.error('❌ Failed to create tables:', error.message)
    await pool.end()
    process.exit(1)
  }
}

createTables()
