'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import type { Locale } from '@/utilities/translations'

interface FooterClientProps {
  footerData?: any
}

const FooterClient = ({ footerData }: FooterClientProps) => {
  const [locale, setLocale] = useState<Locale>('nl')

  useEffect(() => {
    const storedLang = localStorage.getItem('locale') as Locale
    if (storedLang && (storedLang === 'nl' || storedLang === 'en')) {
      setLocale(storedLang)
    }
  }, [])

  const isEnglish = locale === 'en'

  // Translated navigation links
  const navLinks =
    footerData?.navItems?.length > 0
      ? footerData.navItems.map((item: any) => ({
          name: item.link?.label || item.label,
          path: item.link?.url || item.url || '/',
        }))
      : [
          { name: 'Home', path: '/' },
          {
            name: isEnglish ? 'Services' : 'Diensten',
            path: isEnglish ? '/en/services' : '/nl/diensten',
          },
          {
            name: isEnglish ? 'Projects' : 'Projecten',
            path: isEnglish ? '/en/projects' : '/nl/projecten',
          },
          { name: isEnglish ? 'Blog' : 'Nieuws', path: isEnglish ? '/en/blog' : '/nl/nieuws' },
          {
            name: isEnglish ? 'About Us' : 'Over Ons',
            path: isEnglish ? '/en/about' : '/nl/over-ons',
          },
          {
            name: isEnglish ? 'Contact' : 'Contact',
            path: isEnglish ? '/en/contact' : '/nl/contact',
          },
        ]

  const services = isEnglish
    ? [
        'Manual Demolition',
        'Interior Demolition',
        'Selective Demolition',
        'Kitchen & Bathroom',
        'Property Clearing',
        'Asbestos Removal',
      ]
    : [
        'Handmatige Sloop',
        'Interieur Sloop',
        'Selectieve Sloop',
        'Keuken & Badkamer',
        'Woning Ontruiming',
        'Asbest Sanering',
      ]

  return (
    <footer className="bg-card border-t border-border">
      {/* Warning Stripe */}
      <div className="h-2 warning-stripe" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="font-display text-2xl text-primary-foreground font-bold">T</span>
              </div>
              <span className="font-display text-2xl tracking-wider text-foreground">
                TITAN<span className="text-primary">BREAKERS</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              {isEnglish
                ? 'Manual demolition work with hammer and chisel. For more than 25 years your partner in indoor demolition and renovation.'
                : 'Handmatig sloopwerk met hamer en beitel. Al meer dan 25 jaar uw partner in binnensloop en renovatie.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6 text-foreground">
              {isEnglish ? 'Navigation' : 'Navigatie'}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link: any) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl mb-6 text-foreground">
              {isEnglish ? 'Services' : 'Diensten'}
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6 text-foreground">
              {isEnglish ? 'Contact' : 'Contact'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Industrieweg 45
                  <br />
                  1234 AB Rotterdam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+31612345678"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  06-12345678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@titanbrekers.nl"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@titanbrekers.nl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  {isEnglish ? 'Mon-Fri: 07:00 - 18:00' : 'Ma-Vr: 07:00 - 18:00'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              {isEnglish
                ? '© 2024 TitanBrekers. All rights reserved.'
                : '© 2024 TitanBrekers. Alle rechten voorbehouden.'}
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/voorwaarden"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {isEnglish ? 'Terms & Conditions' : 'Algemene Voorwaarden'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterClient
