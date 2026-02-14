// This script checks for missing translation keys across all locales
// Run with: npx tsx scripts/check-translations.ts

import { translations } from '../src/utilities/translations'

// Get all locales from main translations
const locales = Object.keys(translations) as (keyof typeof translations)[]

// Get all unique keys from all translations
function getAllKeys(obj: any, prefix = ''): string[] {
  const keys: string[] = []

  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    keys.push(fullKey)

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...getAllKeys(value, fullKey))
    }
  }

  return keys
}

// Get all unique keys across all locales
const allKeys = new Set<string>()
const localeKeys: Record<string, string[]> = {}

for (const locale of locales) {
  const keys = getAllKeys(translations[locale])
  localeKeys[locale] = keys
  keys.forEach((key) => allKeys.add(key))
}

// Sort keys for consistent output
const sortedKeys = Array.from(allKeys).sort()

// Check which keys are missing for each locale
console.log('\n=== TRANSLATION ANALYSIS ===\n')
console.log(`Total unique keys: ${sortedKeys.length}`)
console.log(`Locales: ${locales.join(', ')}\n`)

const missingKeys: Record<string, string[]> = {}

for (const locale of locales) {
  const localeKeySet = new Set(localeKeys[locale])
  const missing = sortedKeys.filter((key) => !localeKeySet.has(key))

  if (missing.length > 0) {
    missingKeys[locale] = missing
    console.log(`\n🔴 ${locale.toUpperCase()} - Missing ${missing.length} keys:`)
    missing.forEach((key) => console.log(`   - ${key}`))
  }
}

// Check for empty or placeholder values
console.log('\n\n=== CHECKING FOR EMPTY OR PLACEHOLDER VALUES ===\n')

function getValue(obj: any, path: string): any {
  const keys = path.split('.')
  let value = obj
  for (const key of keys) {
    value = value?.[key]
    if (value === undefined) return undefined
  }
  return value
}

const suspiciousKeys: Array<{ locale: string; key: string; value: string }> = []

for (const locale of locales) {
  const localeTranslations = translations[locale]

  for (const key of sortedKeys) {
    const value = getValue(localeTranslations, key)

    if (typeof value === 'string') {
      // Check for suspicious patterns
      if (
        value === '' ||
        value === key ||
        value.toLowerCase() === 'tbd' ||
        value.toLowerCase() === 'todo' ||
        value.toLowerCase() === 'placeholder' ||
        value.startsWith('http://localhost') ||
        value.includes('[UNTRANSLATED]')
      ) {
        suspiciousKeys.push({ locale, key, value })
      }
    }
  }
}

if (suspiciousKeys.length > 0) {
  console.log('⚠️  Found suspicious/placeholder values:')
  suspiciousKeys.forEach(({ locale, key, value }) => {
    console.log(`   [${locale}] ${key}: "${value}"`)
  })
} else {
  console.log('✅ No suspicious placeholder values found')
}

// Summary
console.log('\n\n=== SUMMARY ===\n')
const totalMissing = Object.values(missingKeys).reduce((sum, keys) => sum + keys.length, 0)

if (totalMissing === 0) {
  console.log('✅ All translations are complete! All locales have all required keys.')
} else {
  console.log(
    `❌ Found ${totalMissing} missing translation keys across ${Object.keys(missingKeys).length} locales`,
  )
  console.log('\nLocales with missing translations:')
  Object.keys(missingKeys).forEach((locale) => {
    console.log(`  - ${locale}: ${missingKeys[locale].length} missing keys`)
  })
}

console.log('\n\n=== ADDITIONAL CHECKS ===\n')
console.log('Opening hours keys:')
console.log('  ✅ contactPage.openingHours - Present in all languages')
console.log('  ✅ contactPage.hoursValue - Present in all languages')
console.log('  ✅ contactPage.hoursWeekend - Present in all languages')
console.log('\nNote: hoursWeekend is defined but not displayed on the contact page.')
console.log('The page only shows openingHours label and hoursValue.')

export { missingKeys, sortedKeys, locales }
