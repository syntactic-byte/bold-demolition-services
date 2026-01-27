import { getPayload } from 'payload'
import configPromise from '@payload-config'
import OverOnsClient from './page.client'

export default async function OverOns() {
  let pageData: any = null
  
  try {
    const payload = await getPayload({ config: configPromise })
    pageData = await payload.findGlobal({
      slug: 'about-page',
    })
  } catch (error) {
    console.error('Error fetching about page data:', error)
  }

  return <OverOnsClient pageData={pageData} />
}
