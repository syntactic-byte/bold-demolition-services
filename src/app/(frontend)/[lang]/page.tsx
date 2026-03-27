import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import AboutPreview from '@/components/AboutPreview'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { HomePage, Service, Project } from '@/payload-types'
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

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = supportedLocales.includes(lang as Locale) ? (lang as Locale) : 'nl'

  let homePageData: HomePage | null = null
  let services: Service[] = []
  let projects: Project[] = []

  try {
    const payload = await getPayload({ config: configPromise })

    // Get featured services with explicit locale
    const servicesData = await payload.find({
      collection: 'services',
      where: {
        featured: {
          equals: true,
        },
      },
      sort: '-createdAt',
      depth: 1,
      locale,
    })

    services = servicesData.docs

    // Get projects
    const projectsData = await payload.find({
      collection: 'projects',
      where: {
        featured: {
          equals: true,
        },
      },
      sort: '-completed',
      limit: 6,
      depth: 1,
      locale,
    })

    projects = projectsData.docs

    // Get home page global data
    homePageData = await payload.findGlobal({
      slug: 'home-page',
      locale,
    })
  } catch (error) {
    console.error('Error fetching CMS data:', error)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero data={homePageData?.hero as any} />
      <Services services={services} />
      <Projects projects={projects} />
      <AboutPreview data={homePageData?.aboutPreview as any} />
      <CTA />
      <Footer />
    </main>
  )
}
