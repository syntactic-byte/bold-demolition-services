import { getPayload } from 'payload'
import configPromise from '@payload-config'
import DienstenClient from './page.client'

export default async function Diensten() {
  let pageData: any = null
  
  try {
    const payload = await getPayload({ config: configPromise })
    pageData = await payload.findGlobal({
      slug: 'services-page',
    })
  } catch (error) {
    console.error('Error fetching services page data:', error)
  }

  return <DienstenClient pageData={pageData} />
}
