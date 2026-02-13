import { cookies } from 'next/headers'

export const locales = ['nl', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'nl'

export async function getLocaleFromCookies(): Promise<Locale> {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('locale')

  // Debug logging
  console.log('All cookies:', cookieStore.toString())
  console.log('Locale cookie:', localeCookie)

  if (localeCookie?.value && locales.includes(localeCookie.value as Locale)) {
    console.log('Returning locale:', localeCookie.value)
    return localeCookie.value as Locale
  }

  console.log('Returning default locale: nl')
  return defaultLocale
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Don't add locale prefix for default locale
  if (locale === defaultLocale) {
    return path
  }

  // Remove leading slash if present and add locale prefix
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `/${locale}/${cleanPath}`
}

export function removeLocaleFromPath(path: string): { locale: Locale; path: string } {
  const segments = path.split('/').filter(Boolean)

  if (segments.length > 0 && isValidLocale(segments[0])) {
    return {
      locale: segments[0],
      path: '/' + segments.slice(1).join('/'),
    }
  }

  return { locale: defaultLocale, path }
}
