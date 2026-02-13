import { getPayload } from 'payload'
import configPromise from '@payload-config'
import OverOnsClient from './page.client'

export const dynamic = 'force-dynamic'

export default async function OverOns({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const locale = lang === 'en' ? 'en' : 'nl'

  let pageData: any = null

  try {
    const payload = await getPayload({ config: configPromise })

    pageData = await payload.findGlobal({
      slug: 'about-page',
      locale: locale as any,
    })
  } catch (error) {
    console.error('Error fetching about page data:', error)
  }

  return <OverOnsClient pageData={pageData} />
}
