import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ContactClient from './page.client'
import type { ContactPage, SiteSetting } from '@/payload-types'
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

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = supportedLocales.includes(lang as Locale) ? (lang as Locale) : 'nl'

  let pageData: ContactPage | null = null
  let siteSettings: SiteSetting | null = null

  try {
    const payload = await getPayload({ config: configPromise })

    pageData = await payload.findGlobal({
      slug: 'contact-page',
      locale: locale,
    })
    siteSettings = await payload.findGlobal({
      slug: 'site-settings',
      locale: locale,
    })
  } catch (error) {
    console.error('Error fetching contact page data:', error)
  }

  return <ContactClient pageData={pageData} siteSettings={siteSettings} />
}
