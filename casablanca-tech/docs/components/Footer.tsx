export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Casablanca Technology</h3>
            <p className="text-gray-400 mb-4">
              Building bridges between global technology and Japanese business excellence 
              from our base in Tokyo.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition">Custom Development</a></li>
              <li><a href="#services" className="hover:text-white transition">Engineering Outsourcing</a></li>
              <li><a href="#services" className="hover:text-white transition">Technical Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Tokyo, Japan</li>
              <li><a href="mailto:info@casablanca-tech.com" className="hover:text-white transition">info@casablanca-tech.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Casablanca Technology Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}