import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '..', '.env') })

const { getPayload } = await import('payload')
const { default: config } = await import(path.join(__dirname, '..', 'src', 'payload.config.ts'))
const { translations } = await import(path.join(__dirname, '..', 'src', 'utilities', 'translations.ts'))

const locales = [
  'nl', 'en', 'fr', 'de', 'it', 'es', 'sv', 'fi', 'pl', 'ar', 'zh', 'ja', 'pt', 'tr', 'ru',
] as const

async function seedTranslations() {
  console.log('🌱 Seeding translations...\n')

  const payload = await getPayload({ config })

  try {
    const translationsArray = locales.map((locale) => ({
      locale,
      strings: translations[locale],
    }))

    await payload.updateGlobal({
      slug: 'translations',
      data: { translations: translationsArray },
      context: { disableRevalidate: true },
    } as any)

    console.log(`✅ Translations seeded for ${locales.length} locales`)
    process.exit(0)
  } catch (error: any) {
    console.error('❌ Error seeding translations:', error.message)
    process.exit(1)
  }
}

seedTranslations()
