import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ContactClient from './page.client'

export default async function Contact() {
  let pageData: any = null
  let siteSettings: any = null
  
  try {
    const payload = await getPayload({ config: configPromise })
    pageData = await payload.findGlobal({
      slug: 'contact-page',
    })
    siteSettings = await payload.findGlobal({
      slug: 'site-settings',
    })
  } catch (error) {
    console.error('Error fetching contact page data:', error)
  }

  return <ContactClient pageData={pageData} siteSettings={siteSettings} />
}
