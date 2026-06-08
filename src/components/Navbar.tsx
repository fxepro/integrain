'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'About', href: '/about-us' },
  {
    label: 'Services', href: '/services', children: [
      { label: 'Advocacy & Representation', href: '/advocacy-and-representation' },
      { label: 'Community Development', href: '/community-development' },
      { label: 'Economic Empowerment', href: '/economic-empowerment' },
      { label: 'Educational Initiatives', href: '/educational-initiatives' },
    ]
  },
  {
    label: 'Who We Serve', href: '/who-we-serve', children: [
      { label: 'Socially Underprivileged', href: '/who-we-serve#socially-underprivileged' },
      { label: 'Economically Underserved', href: '/who-we-serve#economically-underserved' },
      { label: 'Politically Underrepresented', href: '/who-we-serve#politically-underrepresented' },
    ]
  },
  { label: 'Research', href: '/research' },
  {
    label: 'World', href: '/world', children: [
      { label: 'World Overview', href: '/world' },
      { label: 'World Crises', href: '/world-crises' },
      { label: 'Disasters', href: '/disasters' },
    ]
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Engage', href: '/engage' },
  { label: 'Partner', href: '/partner' },
  { label: 'Volunteer', href: '/volunteer' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo — replace src with R2 URL once logo is uploaded */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">IF</span>
            </div>
            <span className="text-brand-green font-bold text-lg tracking-tight hidden sm:block">Integrain Foundation</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link href={item.href} className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-green transition-colors rounded-md hover:bg-gray-50">
                  {item.label}
                  {item.children && <ChevronDown size={14} className="mt-0.5" />}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
                    {item.children.map(child => (
                      <Link key={child.label} href={child.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-cream hover:text-brand-green">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-brand-green">Contact</Link>
            <Link href="/donate" className="btn-gold text-sm py-2 px-4">Donate</Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-1">
          {navItems.map(item => (
            <div key={item.label}>
              <Link href={item.href} className="block py-2 px-3 text-gray-700 font-medium hover:text-brand-green" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-6 space-y-1">
                  {item.children.map(child => (
                    <Link key={child.label} href={child.href} className="block py-1.5 px-3 text-sm text-gray-600 hover:text-brand-green" onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-gray-100 flex gap-3">
            <Link href="/contact" className="btn-secondary text-sm py-2 px-4" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link href="/donate" className="btn-gold text-sm py-2 px-4" onClick={() => setMobileOpen(false)}>Donate</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
