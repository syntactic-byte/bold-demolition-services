import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET(_request: Request) {
  try {
    const payload = await getPayload({ config: configPromise })

    // Get ALL services in both locales
    const nlServices = await payload.find({
      collection: 'services',
      locale: 'nl',
    })

    const enServices = await payload.find({
      collection: 'services',
      locale: 'en',
    })

    // Get featured services specifically
    const nlFeatured = await payload.find({
      collection: 'services',
      locale: 'nl',
      where: { featured: { equals: true } },
    })

    const enFeatured = await payload.find({
      collection: 'services',
      locale: 'en',
      where: { featured: { equals: true } },
    })

    return NextResponse.json({
      all_nl_count: nlServices.docs.length,
      all_en_count: enServices.docs.length,
      featured_nl_count: nlFeatured.docs.length,
      featured_en_count: enFeatured.docs.length,
      featured_nl: nlFeatured.docs.map((s) => s.title),
      featured_en: enFeatured.docs.map((s) => s.title),
      message: 'Check if featured services have translations',
    })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
