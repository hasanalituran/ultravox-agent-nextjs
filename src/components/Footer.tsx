'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-2 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} Fydback.com.au. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm text-center sm:text-right">
            Contact us: <a href="mailto:contact@fydback.com.au" className="text-purple-400 hover:text-purple-300 transition-colors">contact@fydback.com.au</a>
          </p>
        </div>
      </div>
    </footer>
  )
}