import { getPayload } from 'payload'
import configPromise from '@payload-config'
import OverOnsClient from './page.client'
import type { AboutPage } from '@/payload-types'
import type { Locale } from '@/utilities/translations'

export const dynamic = 'force-dynamic'

// Supported locales
const supportedLocales: Locale[] = [
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

export default async function OverOns({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = supportedLocales.includes(lang as Locale) ? (lang as Locale) : 'nl'

  let pageData: AboutPage | null = null

  try {
    const payload = await getPayload({ config: configPromise })

    pageData = await payload.findGlobal({
      slug: 'about-page',
      locale,
    })
  } catch (error) {
    console.error('Error fetching about page data:', error)
  }

  return <OverOnsClient pageData={pageData} />
}
