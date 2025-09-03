'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: t('services') },
    { href: '#about', label: t('about') },
    { href: '#contact', label: t('contact') },
  ]

  const switchLanguage = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '')
    router.push(`/${newLocale}${currentPath}`)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md py-4' 
        : 'bg-white py-6'
    }`}>
      <nav className="container-custom">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/casatech_logo.png" 
              alt="Casablanca Technology Ltd" 
              className="h-24 w-auto max-w-md transform group-hover:scale-105 transition-transform mix-blend-multiply"
            />
          </Link>
          
          <button
            className="md:hidden relative w-10 h-10 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 flex flex-col space-y-1.5">
                <span className={`block h-0.5 w-full bg-current transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </div>
          </button>

          <div className={`${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} 
            fixed md:relative top-0 right-0 h-screen md:h-auto w-80 md:w-auto
            bg-white md:bg-transparent shadow-2xl md:shadow-none
            transition-transform duration-300 ease-in-out md:transition-none
            pt-20 md:pt-0 px-8 md:px-0
          `}>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 md:py-2 font-medium text-gray-700 transition-all duration-200"
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#0693e3')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '')}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 md:mt-0 md:ml-4 px-6 py-2 text-white rounded transition text-center"
                style={{backgroundColor: '#0693e3'}}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#0577c7')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#0693e3')}
              >
                {t('getStarted')}
              </Link>
              
              {/* Language Switcher */}
              <div className="flex items-center gap-1 mt-4 md:mt-0 md:ml-4 border border-gray-300 rounded">
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-3 py-1 text-sm font-medium transition-colors rounded-l ${
                    locale === 'en' 
                      ? 'text-white' 
                      : 'text-gray-700'
                  }`}
                  style={locale === 'en' ? {backgroundColor: '#0693e3'} : {}}
                  onMouseEnter={(e) => locale !== 'en' && ((e.target as HTMLElement).style.color = '#0693e3')}
                  onMouseLeave={(e) => locale !== 'en' && ((e.target as HTMLElement).style.color = '')}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLanguage('ja')}
                  className={`px-3 py-1 text-sm font-medium transition-colors rounded-r ${
                    locale === 'ja' 
                      ? 'text-white' 
                      : 'text-gray-700'
                  }`}
                  style={locale === 'ja' ? {backgroundColor: '#0693e3'} : {}}
                  onMouseEnter={(e) => locale !== 'ja' && ((e.target as HTMLElement).style.color = '#0693e3')}
                  onMouseLeave={(e) => locale !== 'ja' && ((e.target as HTMLElement).style.color = '')}
                >
                  JP
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-[-1] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </nav>
    </header>
  )
}