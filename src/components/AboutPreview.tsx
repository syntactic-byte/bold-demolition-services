'use client'

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

interface AboutPreviewProps {
  data?: any;
}

const AboutPreview = ({ data }: AboutPreviewProps) => {
  const title = data?.title || 'OVER TITANBREKERS'
  const description = data?.description || 'Met meer dan 25 jaar ervaring is TitanBrekers uitgegroeid tot een van de meest gerespecteerde sloopbedrijven van Nederland. Wij combineren vakmanschap met moderne technieken voor elk type sloop- en demontageproject.'
  
  const highlights = data?.highlights || [
    { text: 'VCA** gecertificeerd en volledig verzekerd' },
    { text: 'Modern machinepark en ervaren vakmensen' },
    { text: '98% recycling van alle sloopafval' },
    { text: 'Landelijke dekking met lokale service' },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Over TitanBrekers
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              {title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{title.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {highlights.map((highlight: any, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>

            <Link href="/over-ons" className="btn-power inline-flex items-center gap-2">
              Meer Over Ons
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right - Stats Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-industrial p-8 text-center">
                <div className="font-display text-6xl text-primary mb-2">25+</div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">Jaar Actief</div>
              </div>
              <div className="card-industrial p-8 text-center mt-8">
                <div className="font-display text-6xl text-primary mb-2">500+</div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">Projecten</div>
              </div>
              <div className="card-industrial p-8 text-center">
                <div className="font-display text-6xl text-primary mb-2">50+</div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">Medewerkers</div>
              </div>
              <div className="card-industrial p-8 text-center mt-8">
                <div className="font-display text-6xl text-primary mb-2">98%</div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">Recycling</div>
              </div>
            </div>

            {/* Decorative Warning Stripe */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 warning-stripe opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
