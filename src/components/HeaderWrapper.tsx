import { getPayload } from 'payload'
import configPromise from '@payload-config'
import HeaderClient from './HeaderClient'
import type { SiteSetting } from '@/payload-types'

export default async function Header() {
  let siteSettings: SiteSetting | null = null

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
