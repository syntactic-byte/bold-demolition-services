import { getPayload } from 'payload'
import configPromise from '@payload-config'
import HeaderClient from './HeaderClient'

export default async function Header() {
  let siteSettings: any = null
  
  try {
    const payload = await getPayload({ config: configPromise })
    siteSettings = await payload.findGlobal({
      slug: 'site-settings',
    })
  } catch (error) {
    console.error('Error fetching site settings:', error)
  }

  return <HeaderClient siteSettings={siteSettings} />
}
