'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import {
  Building2,
  Factory,
  Trash2,
  Recycle,
  Shovel,
  Home,
  CheckCircle,
  LucideIcon,
} from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'
import type { ServicesPage } from '@/payload-types'

interface ServiceDetail {
  id?: string | null
  title?: string | null
  description?: string | null
  icon?: string | null
  featured?: boolean | null
  image?:
    | {
        url?: string | null
      }
    | string
    | null
  features?: { feature?: string | null; id?: string | null }[] | null
}

interface DienstenClientProps {
  pageData?: ServicesPage | null
  services?: ServiceDetail[]
}

const getIconComponent = (iconName: string): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    Building2,
    Factory,
    Trash2,
    Recycle,
    Shovel,
    Home,
  }
  return icons[iconName] || Building2
}

export default function DienstenClient({ pageData, services = [] }: DienstenClientProps) {
  const { t } = useTranslation() as any as any

  const hero = pageData?.hero || {
    title: t.servicesPage?.heroTitle || 'WAT WIJ DOEN',
    description:
      t.servicesPage?.heroDescription ||
      'Van kleine stripwerken tot complete gebouwsloop - wij hebben de expertise, het materieel en de certificeringen voor elk sloop- en demontageproject.',
  }

  // Use services from CMS if available, otherwise fallback to empty
  const serviceDetails = services.length > 0 ? services : []

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t.servicesPage?.ourServices || 'Onze Diensten'}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl mb-4">
              {hero.title.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gradient">{hero.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-muted-foreground text-lg">{hero.description}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {serviceDetails.map((service: ServiceDetail, index: number) => {
              // Get icon from CMS service data or fallback to first word of title
              const iconName = service.icon || (service.title || '').split(' ')[0]
              const Icon = getIconComponent(iconName)
              const serviceTitle = service.title || ''
              const imageUrl =
                typeof service.image === 'string' ? service.image : service.image?.url || undefined
              return (
                <div
                  key={service.id || serviceTitle}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display text-4xl mb-4 text-foreground">{serviceTitle}</h2>
                    <p className="text-muted-foreground text-lg mb-8">{service.description}</p>
                    {service.featured && (
                      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 mb-6">
                        <span className="text-sm font-medium text-primary">
                          {t.servicesPage?.featured || 'Aanbevolen'}
                        </span>
                      </div>
                    )}
                    {service.features && (
                      <ul className="space-y-3">
                        {service.features?.map(
                          (
                            feature: { feature?: string | null; id?: string | null },
                            idx: number,
                          ) => (
                            <li
                              key={feature.id || `feature-${idx}`}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-foreground">{feature.feature || ''}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-[4/3] bg-card border border-border relative overflow-hidden group">
                      {imageUrl ? (
                        <>
                          <img
                            src={imageUrl}
                            alt={serviceTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                        </>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="w-32 h-32 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                          </div>
                        </>
                      )}
                      {/* Decorative Element */}
                      <div className="absolute bottom-0 left-0 w-full h-2 warning-stripe" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
