import { getPayload } from 'payload'
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const { default: config } = await import(path.join(__dirname, '..', 'src', 'payload.config.ts'))

async function clearHighlights() {
  const payload = await getPayload({ config })
  const locales = [
    'nl',
    'en',
    'fr',
    'de',
    'it',
    'es',
    'sv',
    'fi',
    'pl',
    'ar',
    'zh',
    'ja',
    'pt',
    'tr',
    'ru',
  ]

  for (const locale of locales) {
    console.log(`Clearing highlights for ${locale}...`)
    try {
      // Get current data
      const current = await payload.findGlobal({
        slug: 'home-page',
        locale: locale as any,
      })

      // Update with empty highlights
      await payload.updateGlobal({
        slug: 'home-page',
        locale: locale as any,
        data: {
          aboutPreview: {
            title: current?.aboutPreview?.title,
            description: current?.aboutPreview?.description,
            highlights: [], // Clear highlights
          },
        },
      })
      console.log(`  ✅ Cleared highlights for ${locale}`)
    } catch (error) {
      console.log(`  ⚠️  Error for ${locale}:`, error.message)
    }
  }

  console.log('\n✅ All highlights cleared!')
  process.exit(0)
}

clearHighlights()
