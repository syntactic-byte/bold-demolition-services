export const translations = {
  nl: {
    nav: {
      home: 'Home',
      services: 'Diensten',
      projects: 'Projecten',
      about: 'Over Ons',
      contact: 'Contact',
    },
    cta: {
      quote: 'Offerte Aanvragen',
      freeQuote: 'Gratis Offerte',
      viewProjects: 'Bekijk Projecten',
      moreInfo: 'Meer Info',
      viewAllServices: 'Alle Diensten Bekijken',
      viewAllProjects: 'Alle Projecten Bekijken',
      sendMessage: 'Verstuur Bericht',
    },
    hero: {
      stats: {
        years: 'Jaar Ervaring',
        projects: 'Projecten',
        safety: 'Veilig',
      },
      features: {
        fastResponse: 'Snelle Respons',
        insured: 'Volledig Verzekerd',
        certified: 'VCA Gecertificeerd',
      },
    },
    sections: {
      ourServices: 'Onze Diensten',
      ourProjects: 'Onze Projecten',
      aboutUs: 'Over Ons',
      aboutTitan: 'Over TitanBrekers',
      moreAbout: 'Meer Over Ons',
      activeYears: 'Jaar Actief',
      contact: 'Contact',
      services: 'Diensten',
    },
    footer: {
      services: 'Diensten',
      contact: 'Contact',
      navigation: 'Navigatie',
    },
    mobile: {
      language: 'Taal / Language',
    },
    general: {
      featured: 'Aanbevolen',
      submit: 'Versturen',
      sending: 'Versturen...',
      success: 'Bericht verzonden!',
      error: 'Er ging iets mis. Probeer het opnieuw.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About Us',
      contact: 'Contact',
    },
    cta: {
      quote: 'Request Quote',
      freeQuote: 'Free Quote',
      viewProjects: 'View Projects',
      moreInfo: 'More Info',
      viewAllServices: 'View All Services',
      viewAllProjects: 'View All Projects',
      sendMessage: 'Send Message',
    },
    hero: {
      stats: {
        years: 'Years Experience',
        projects: 'Projects',
        safety: 'Safe',
      },
      features: {
        fastResponse: 'Fast Response',
        insured: 'Fully Insured',
        certified: 'VCA Certified',
      },
    },
    sections: {
      ourServices: 'Our Services',
      ourProjects: 'Our Projects',
      aboutUs: 'About Us',
      aboutTitan: 'About TitanBrekers',
      moreAbout: 'More About Us',
      activeYears: 'Years Active',
      contact: 'Contact',
      services: 'Services',
    },
    footer: {
      services: 'Services',
      contact: 'Contact',
      navigation: 'Navigation',
    },
    mobile: {
      language: 'Language',
    },
    general: {
      featured: 'Featured',
      submit: 'Submit',
      sending: 'Sending...',
      success: 'Message sent!',
      error: 'Something went wrong. Please try again.',
    },
  },
} as const

export type Locale = 'nl' | 'en'

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: any = translations[locale]

  for (const k of keys) {
    value = value?.[k]
    if (!value) return key
  }

  return value || key
}
