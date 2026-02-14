import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { I18nProvider } from '@/hooks/useTranslation'

export const Providers: React.FC<{
  children: React.ReactNode
  initialLocale?: string
}> = ({ children, initialLocale }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <I18nProvider initialLocale={initialLocale}>{children}</I18nProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
