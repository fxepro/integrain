import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-3">Integrain Foundation</h3>
          <p className="text-green-200 text-sm leading-relaxed">Rooted in Integrity, Enabling a Better Society.</p>
          <div className="mt-4 text-sm text-green-300 space-y-1">
            <p>📞 719-300-4045</p>
            <p>✉️ contact@integrainfoundation.org</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-green-100">Services</h4>
          <ul className="space-y-2 text-sm text-green-300">
            <li><Link href="/advocacy-and-representation" className="hover:text-white transition-colors">Advocacy & Representation</Link></li>
            <li><Link href="/community-development" className="hover:text-white transition-colors">Community Development</Link></li>
            <li><Link href="/economic-empowerment" className="hover:text-white transition-colors">Economic Empowerment</Link></li>
            <li><Link href="/educational-initiatives" className="hover:text-white transition-colors">Educational Initiatives</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-green-100">Get Involved</h4>
          <ul className="space-y-2 text-sm text-green-300">
            <li><Link href="/donate" className="hover:text-white transition-colors">Donate</Link></li>
            <li><Link href="/volunteer" className="hover:text-white transition-colors">Volunteer</Link></li>
            <li><Link href="/partner" className="hover:text-white transition-colors">Partner With Us</Link></li>
            <li><Link href="/engage" className="hover:text-white transition-colors">Engage</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-green-100">Organization</h4>
          <ul className="space-y-2 text-sm text-green-300">
            <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
            <li><Link href="/world" className="hover:text-white transition-colors">World Issues</Link></li>
            <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800 py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-green-400">
          <p>© {new Date().getFullYear()} Integrain Foundation. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
