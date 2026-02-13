import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables FIRST
dotenv.config({ path: path.join(__dirname, '..', '.env') })

// Dynamically import config after env is loaded
const { default: config } = await import(path.join(__dirname, '..', 'src', 'payload.config.ts'))

async function clearDatabase() {
  console.log('🗑️  Clearing database content...')

  const payload = await getPayload({ config })

  try {
    // Clear Services
    console.log('\n🗑️  Clearing Services...')
    const services = await payload.find({
      collection: 'services',
      limit: 1000,
    })
    for (const service of services.docs) {
      try {
        await payload.delete({
          collection: 'services',
          id: service.id,
          context: { skipRevalidation: true },
        })
      } catch (e) {
        console.log(`  ⚠️  Skipped revalidation for service: ${service.title}`)
      }
    }
    console.log(`  ✓ Deleted ${services.docs.length} services`)

    // Clear Projects
    console.log('\n🗑️  Clearing Projects...')
    const projects = await payload.find({
      collection: 'projects',
      limit: 1000,
    })
    for (const project of projects.docs) {
      try {
        await payload.delete({
          collection: 'projects',
          id: project.id,
          context: { skipRevalidation: true },
        })
      } catch (e) {
        console.log(`  ⚠️  Skipped revalidation for project: ${project.title}`)
      }
    }
    console.log(`  ✓ Deleted ${projects.docs.length} projects`)

    // Clear Posts (optional)
    console.log('\n🗑️  Clearing Posts...')
    const posts = await payload.find({
      collection: 'posts',
      limit: 1000,
    })
    for (const post of posts.docs) {
      try {
        await payload.delete({
          collection: 'posts',
          id: post.id,
          context: { skipRevalidation: true },
        })
      } catch (e: any) {
        if (e.message?.includes('static generation store missing')) {
          console.log(`  ⚠️  Skipped revalidation for post: ${post.title} (deleted successfully)`)
        } else {
          throw e
        }
      }
    }
    console.log(`  ✓ Deleted ${posts.docs.length} posts`)

    console.log('\n✅ Database cleared successfully!')
    console.log('\n👉 Next step: Run `pnpm seed:all` to re-seed with fresh content')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error clearing database:', error)
    process.exit(1)
  }
}

clearDatabase()
