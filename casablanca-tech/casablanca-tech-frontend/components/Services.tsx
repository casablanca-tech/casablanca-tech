'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Custom Development',
    description: 'Full-stack development with Rails and Next.js, tailored to your unique business needs.',
    icon: '⚡',
    gradient: 'from-blue-500 to-indigo-600',
    features: ['Ruby on Rails API', 'Next.js Frontend', 'Database Design', 'System Architecture']
  },
  {
    title: 'Engineering Outsourcing',
    description: 'Augment your team with skilled engineers who understand both global and Japanese business contexts.',
    icon: '👥',
    gradient: 'from-purple-500 to-pink-600',
    features: ['Team Extension', 'Project-based Work', 'Flexible Engagement', 'Cultural Bridge']
  },
  {
    title: 'Technical Consulting',
    description: 'Strategic guidance to help you navigate technology decisions and digital transformation.',
    icon: '🎯',
    gradient: 'from-orange-500 to-red-600',
    features: ['Architecture Review', 'Tech Stack Selection', 'Performance Optimization', 'Best Practices']
  }
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>
            Our Services
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${isVisible ? 'animate-slideUp delay-150' : 'opacity-0'}`}>
            We combine technical excellence with deep understanding of Japanese business culture
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'animate-slideUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 2) * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-lg flex items-center justify-center" style={{backgroundColor: '#e6f7ff'}}>
                <span className="text-3xl">{service.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <div className="w-5 h-5 rounded-full mr-3 mt-0.5 flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#0693e3'}}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Solutions Section - Similar to System Metrix */}
        <div className={`mt-20 ${isVisible ? 'animate-slideUp delay-450' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions</h3>
            <p className="text-gray-600">Tailored technology solutions for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e6f7ff'}}>
                <span className="text-2xl">🏢</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise Solutions</h4>
              <p className="text-sm text-gray-600">Large-scale system development</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e6f7ff'}}>
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Startup Solutions</h4>
              <p className="text-sm text-gray-600">MVP and product development</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e6f7ff'}}>
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Integration Services</h4>
              <p className="text-sm text-gray-600">System integration & APIs</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#e6f7ff'}}>
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Mobile Solutions</h4>
              <p className="text-sm text-gray-600">iOS and Android development</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fadeIn delay-600' : 'opacity-0'}`}>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and learn how we can help bring your vision to life.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 text-white rounded transition font-semibold" style={{backgroundColor: '#0693e3'}} onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#0577c7')} onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#0693e3')}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}