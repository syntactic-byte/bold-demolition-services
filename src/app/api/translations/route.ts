import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const locale = searchParams.get('locale') || 'nl'

  console.log(`[Translations API] Requested locale: ${locale}`)

  try {
    const payload = await getPayload({ config })

    const translations = await payload.findGlobal({
      slug: 'translations',
    })

    console.log(`[Translations API] Found translations global:`, translations ? 'YES' : 'NO')
    console.log(
      `[Translations API] Available locales:`,
      translations?.translations?.map((t: any) => t.locale),
    )

    const localeData = translations.translations?.find((t: any) => t.locale === locale)

    if (!localeData) {
      console.log(`[Translations API] Locale ${locale} not found, returning 404`)
      return NextResponse.json({ error: 'Translations not found for locale' }, { status: 404 })
    }

    console.log(`[Translations API] Returning strings for locale ${locale}`)
    return NextResponse.json(localeData.strings || {})
  } catch (error) {
    console.error('[Translations API] Error:', error)
    return NextResponse.json({ error: 'Failed to fetch translations' }, { status: 500 })
  }
}
