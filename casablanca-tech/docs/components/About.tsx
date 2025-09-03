export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bridging Worlds Through Technology
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Founded by a former freelance backend developer, Casablanca Technology understands 
                the unique challenges of building software that works across cultures and continents.
              </p>
              <p className="text-lg">
                Based in the heart of Tokyo, we combine Japan's attention to detail and quality 
                with global technical expertise. Our team speaks the language of both business and 
                technology, ensuring seamless communication throughout your project.
              </p>
              <p className="text-lg">
                Whether you need a new system built from scratch or want to enhance your existing 
                team, we deliver solutions that respect your business culture while pushing 
                technological boundaries.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: '#0693e3'}}>5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: '#0693e3'}}>50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: '#0693e3'}}>100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <div className="text-xl font-semibold text-gray-700">Tokyo, Japan</div>
                  <div className="text-gray-600">Your Gateway to Japanese Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}