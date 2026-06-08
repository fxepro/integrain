import Link from 'next/link'

export const metadata = { title: 'Partner With Us | Integrain Foundation' }

const partnerTypes = [
  {
    title: 'Governments',
    tagline: 'Together, we build stronger, thriving communities.',
    areas: ['Public-Private Partnerships (PPPs)', 'Policy Development and Advocacy', 'Community Development Programs', 'Public Awareness Campaigns'],
    href: '/partner-connect-local-government',
    color: 'border-blue-500 bg-blue-50',
    titleColor: 'text-blue-800',
  },
  {
    title: 'Corporate Entities',
    tagline: 'Corporate Responsibility with Real Results – Align your brand with meaningful action.',
    areas: ['Corporate Social Responsibility', 'Employee Engagement Programs', 'In-Kind Donations', 'Cause Marketing'],
    href: '/partner-connect-corporate',
    color: 'border-brand-green bg-green-50',
    titleColor: 'text-brand-green-dark',
  },
  {
    title: 'Private Individuals',
    tagline: 'Empower Communities – Your partnership fuels change, one project at a time.',
    areas: ['Volunteering', 'Fundraising and Advocacy', 'Legacy Giving and Bequests', 'Mentorship and Advisory Roles'],
    href: '/partner-connect-individuals',
    color: 'border-yellow-500 bg-yellow-50',
    titleColor: 'text-yellow-800',
  },
  {
    title: 'Non-Profit Organizations',
    tagline: 'Non-Profit Synergy – Strength in unity, power in collaboration.',
    areas: ['Collaborative Projects', 'Resource and Knowledge Sharing', 'Joint Advocacy Campaigns', 'Capacity Building and Training'],
    href: '/partner-connect-non-profits',
    color: 'border-purple-500 bg-purple-50',
    titleColor: 'text-purple-800',
  },
]

export default function Partner() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Partner With Us</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Ready to Partner? Choose the ways you can partner and be the motive force in positive community change.</p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-5">Cultivating Goodness, Nurturing Communities</h2>
          <p className="text-gray-600 leading-relaxed">We believe that integrity forms the bedrock of a thriving society. Partnering with Integrain Foundation positions your organization as a champion of integrity, ethics, and community well-being. This alignment enhances your brand's reputation, demonstrating your commitment to corporate social responsibility and ethical practices.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { title: 'Enhance Your Brand Reputation', desc: 'Align with core values. Consumers and clients today favor brands that stand for something meaningful. By partnering with us, you showcase your dedication to integrity, fostering trust and loyalty among your stakeholders.' },
            { title: 'Drive Positive Social Impact', desc: 'Your partnership helps us implement programs that empower individuals and communities. From educational initiatives to support for local businesses, our projects are designed to create lasting positive change.' },
          ].map(item => (
            <div key={item.title} className="card border-t-4 border-brand-gold">
              <h3 className="font-bold text-lg text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Partner Types */}
        <h2 className="text-2xl font-bold text-brand-green-dark mb-8 text-center">Find Your Partnership Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnerTypes.map(pt => (
            <div key={pt.title} className={`rounded-xl border-l-4 p-6 ${pt.color}`}>
              <h3 className={`text-xl font-bold mb-1 ${pt.titleColor}`}>{pt.title}</h3>
              <p className="text-gray-500 text-sm italic mb-4">{pt.tagline}</p>
              <ul className="space-y-1 mb-5">
                {pt.areas.map(area => (
                  <li key={area} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    {area}
                  </li>
                ))}
              </ul>
              <Link href={pt.href} className="btn-primary text-sm py-2 px-4">Learn About Partnerships</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Ready to Start a Conversation?</h2>
          <p className="text-gray-500 mb-8">Contact us to discuss how we can create a meaningful partnership that drives real change.</p>
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
