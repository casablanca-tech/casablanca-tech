export type Locale = 'en' | 'ja'

export const locales: readonly Locale[] = ['en', 'ja'] as const

export const defaultLocale: Locale = 'en'