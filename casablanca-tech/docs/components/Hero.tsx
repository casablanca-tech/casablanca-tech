'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('hero')

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 bg-gray-50/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${mounted ? 'animate-slideUp' : 'opacity-0'}`}>
            {/* Main Mission Statement */}
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase" style={{backgroundColor: '#e6f7ff', color: '#0693e3'}}>
                Global Technology Bridge
              </span>
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t('title')} {t('subtitle')}
                <span className="block mt-2" style={{color: '#0693e3'}}>
                  {t('tagline')}
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t('description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="#contact" className="btn-primary">
                {t('startProject')}
              </Link>
              <Link href="#services" className="btn-secondary">
                {t('exploreServices')}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section - Similar to System Metrix selling points */}
        <div className={`mt-20 ${mounted ? 'animate-slideUp delay-300' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{color: '#0693e3'}}>50+</div>
              <div className="text-gray-600 text-sm font-medium">{t('stats.projects')}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{color: '#0693e3'}}>15+</div>
              <div className="text-gray-600 text-sm font-medium">{t('stats.clients')}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{color: '#0693e3'}}>99%</div>
              <div className="text-gray-600 text-sm font-medium">{t('stats.satisfaction')}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2" style={{color: '#0693e3'}}>5+</div>
              <div className="text-gray-600 text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Technology Stack Icons */}
        <div className={`mt-16 ${mounted ? 'animate-slideUp delay-450' : 'opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Powered by Modern Technology</h3>
            <p className="text-gray-600">Our trusted technology stack</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
              <span className="text-2xl">⚛️</span>
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
              <span className="text-2xl">💎</span>
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}