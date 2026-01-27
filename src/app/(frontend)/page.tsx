import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import AboutPreview from '@/components/AboutPreview'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default async function HomePage() {
  let homePageData: any = null
  let services: any[] = []
  let projects: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    
    // Get home page global data
    homePageData = await payload.findGlobal({
      slug: 'home-page',
    })

    // Get services
    const servicesData = await payload.find({
      collection: 'services',
      where: {
        featured: {
          equals: true
        }
      },
      sort: '-createdAt',
      depth: 1, // Populate image relationship
    })

    // Get projects
    const projectsData = await payload.find({
      collection: 'projects',
      where: {
        featured: {
          equals: true
        }
      },
      sort: '-completed',
      limit: 6,
      depth: 1, // Populate image relationship
    })

    services = servicesData.docs
    projects = projectsData.docs
  } catch (error) {
    console.error('Error fetching CMS data:', error)
    // Will use fallback data in components
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero data={homePageData?.hero} />
      <Services services={services} />
      <Projects projects={projects} />
      <AboutPreview data={homePageData?.aboutPreview} />
      <CTA />
      <Footer />
    </main>
  )
}
