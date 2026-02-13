'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import type { Locale } from '@/utilities/translations'

const CTA = () => {
  const [locale, setLocale] = useState<Locale>('nl')

  useEffect(() => {
    const storedLang = localStorage.getItem('locale') as Locale
    if (storedLang && (storedLang === 'nl' || storedLang === 'en')) {
      setLocale(storedLang)
    }
  }, [])

  const isEnglish = locale === 'en'

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full warning-stripe" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-6">
            {isEnglish ? 'READY TO START?' : 'KLAAR OM TE STARTEN?'}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            {isEnglish
              ? 'Contact us today for a free quote. We respond to your request within 24 hours.'
              : 'Neem vandaag nog contact met ons op voor een vrijblijvende offerte. Wij reageren binnen 24 uur op uw aanvraag.'}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-background text-foreground font-bold uppercase tracking-wider px-8 py-4 transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              {isEnglish ? 'Request Quote' : 'Offerte Aanvragen'}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+31612345678"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary-foreground text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="w-5 h-5" />
              {isEnglish ? 'Call Direct: 06-12345678' : 'Bel Direct: 06-12345678'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
