import { getPayload } from 'payload'
import configPromise from '@payload-config'
import DienstenClient from './page.client'
import type { ServicesPage, Service } from '@/payload-types'
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

export default async function Diensten({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = supportedLocales.includes(lang as Locale) ? (lang as Locale) : 'nl'

  let pageData: ServicesPage | null = null
  let servicesData: Service[] = []

  try {
    const payload = await getPayload({ config: configPromise })

    // Fetch the services page global data with locale
    pageData = await payload.findGlobal({
      slug: 'services-page',
      locale,
    })

    // Fetch the actual services from the collection with locale
    const services = await payload.find({
      collection: 'services',
      sort: 'featured DESC, title ASC',
      depth: 1,
      locale,
    })

    servicesData = services.docs || []
  } catch (error) {
    console.error('Error fetching services data:', error)
  }

  return <DienstenClient pageData={pageData} services={servicesData} />
}
