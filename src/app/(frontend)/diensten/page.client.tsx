'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Building2, Factory, Trash2, Recycle, Shovel, Home, CheckCircle } from "lucide-react";

interface DienstenClientProps {
  pageData?: any;
}

const getIconComponent = (iconName: string) => {
  const icons: any = {
    Building2,
    Factory,
    Trash2,
    Recycle,
    Shovel,
    Home,
  }
  return icons[iconName] || Building2
}

export default function DienstenClient({ pageData }: DienstenClientProps) {
  const hero = pageData?.hero || {
    title: 'WAT WIJ DOEN',
    description: 'Van kleine stripwerken tot complete gebouwsloop - wij hebben de expertise, het materieel en de certificeringen voor elk sloop- en demontageproject.',
  }

  const serviceDetails = pageData?.serviceDetails || []
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Onze Diensten
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl mb-4">
              {hero.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{hero.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {serviceDetails.map((service: any, index: number) => {
              const Icon = getIconComponent(service.title.split(' ')[0]);
              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display text-4xl mb-4 text-foreground">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-8">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features?.map((feature: any) => (
                        <li key={feature.feature || feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature.feature || feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-[4/3] bg-card border border-border relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-32 h-32 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      {/* Decorative Element */}
                      <div className="absolute bottom-0 left-0 w-full h-2 warning-stripe" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
