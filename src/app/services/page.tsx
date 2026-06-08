import Link from 'next/link'
import { Shield, Users, TrendingUp, BookOpen, ArrowRight } from 'lucide-react'

export const metadata = { title: 'Services | Integrain Foundation' }

const services = [
  {
    icon: Shield,
    title: 'Advocacy & Representation',
    slug: 'advocacy-and-representation',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    desc: 'Protect consumer rights, promote fair practices, and address issues of fraud and exploitation. We stand up for those who cannot stand up for themselves.',
    servicesLink: '/advocacy-and-representation-services',
  },
  {
    icon: Users,
    title: 'Community Development',
    slug: 'community-development',
    color: 'text-brand-green',
    bg: 'bg-green-50',
    desc: 'Strengthen communities through infrastructure projects, social services, and local leadership support. Building stronger communities for better futures.',
    servicesLink: '/community-development-services',
  },
  {
    icon: TrendingUp,
    title: 'Economic Empowerment',
    slug: 'economic-empowerment',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    desc: 'Provide financial literacy, resources, and opportunities to help individuals achieve financial independence for themselves and their families.',
    servicesLink: '/economic-empowerment-services',
  },
  {
    icon: BookOpen,
    title: 'Educational Initiatives',
    slug: 'educational-initiatives',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    desc: 'Offer educational programs, scholarships, and training to improve access to quality learning for all individuals regardless of background.',
    servicesLink: '/educational-initiatives-services',
  },
]

export default function Services() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Our Services</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Help us help your communities. Reach out and find out how you can get involved in empowering change.</p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(svc => (
            <div key={svc.title} className={`rounded-xl p-8 ${svc.bg} border border-gray-100`}>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
                  <svc.icon size={24} className={svc.color} />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mt-2">{svc.title}</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
              <div className="flex gap-3">
                <Link href={`/${svc.slug}`} className="btn-primary text-sm py-2 px-4">
                  Learn More
                </Link>
                <Link href={svc.servicesLink} className="btn-secondary text-sm py-2 px-4 flex items-center gap-1">
                  All Services <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Ready to Get Involved?</h2>
          <p className="text-gray-500 mb-8">Contact us today to learn how you can participate in empowering your community.</p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
