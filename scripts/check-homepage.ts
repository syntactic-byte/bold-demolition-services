import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const { default: config } = await import(path.join(__dirname, '..', 'src', 'payload.config.ts'))

async function checkHomePage() {
  const payload = await getPayload({ config })

  const locales = ['nl', 'en', 'fr', 'de', 'ar']

  for (const locale of locales) {
    console.log(`\n=== ${locale.toUpperCase()} ===`)
    const data = await payload.findGlobal({
      slug: 'home-page',
      locale: locale as any,
    })

    console.log('aboutPreview:', {
      title: data?.aboutPreview?.title,
      description: data?.aboutPreview?.description?.substring(0, 50) + '...',
      highlightsCount: data?.aboutPreview?.highlights?.length,
      highlights: data?.aboutPreview?.highlights?.map((h: any) => h.text),
    })
  }

  process.exit(0)
}

checkHomePage()
