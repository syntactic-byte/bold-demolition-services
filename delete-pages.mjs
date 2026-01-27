import { getPayload } from 'payload'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '.env') })

const { default: config } = await import(path.join(__dirname, 'src', 'payload.config.ts'))

const payload = await getPayload({ config })

await payload.db.deleteMany({ 
  collection: 'pages',
  req: {},
  where: {
    or: [
      { slug: { equals: 'privacy' }},
      { slug: { equals: 'voorwaarden' }},
    ]
  }
})

console.log('✅ Deleted privacy and voorwaarden pages')
process.exit(0)
