import Link from 'next/link'

export const metadata = { title: 'Engage | Integrain Foundation' }

export default function Engage() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Engage With Us</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Cultivating Goodness, Nurturing Communities — We believe that integrity forms the bedrock of a thriving society.</p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-2xl font-bold text-brand-green-dark mb-5">Enhance Your Brand Reputation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Align with core values. Partnering with Integrain Foundation positions your organization as a champion of integrity, ethics, and community well-being. This alignment enhances your brand's reputation, demonstrating your commitment to corporate social responsibility and ethical practices.</p>
            <p className="text-gray-600 leading-relaxed">Consumers and clients today are more discerning than ever, favoring brands that stand for something meaningful. By engaging with us, you showcase your dedication to integrity, fostering trust and loyalty among your stakeholders.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-green-dark mb-5">Drive Positive Social Impact</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Your engagement helps us implement programs that empower individuals and communities. From educational initiatives to support for local businesses, our projects are designed to create lasting positive change. Together, we can uplift communities, ensuring everyone has the opportunity to thrive.</p>
            <p className="text-gray-600 leading-relaxed">Integrain Foundation is dedicated to addressing systemic issues and promoting equality and justice. Your support enables us to tackle these challenges head-on, advocating for fair treatment and opportunities for all members of society.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-brand-green-dark mb-8 text-center">Ways to Engage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Donate', desc: 'Financial contributions of any size make a direct difference in the lives of those we serve.', href: '/donate', cta: 'Give Now', color: 'bg-brand-gold text-white hover:bg-yellow-600' },
            { title: 'Volunteer', desc: 'Give your time and skills to support our programs and make a hands-on difference in communities.', href: '/volunteer', cta: 'Sign Up', color: 'bg-brand-green text-white hover:bg-brand-green-dark' },
            { title: 'Partner', desc: 'Corporate, government, and nonprofit partnerships multiply our impact and extend our reach.', href: '/partner', cta: 'Partner With Us', color: 'bg-blue-600 text-white hover:bg-blue-700' },
            { title: 'Spread the Word', desc: 'Share our mission on social media, with your network, and in your community.', href: '/contact', cta: 'Contact Us', color: 'bg-purple-600 text-white hover:bg-purple-700' },
            { title: 'Submit a Project', desc: 'Have a community project that needs support? Submit your proposal for consideration.', href: '/project-proposal', cta: 'Submit Proposal', color: 'bg-gray-700 text-white hover:bg-gray-800' },
            { title: 'Stay Informed', desc: 'Subscribe to our newsletter and follow our research and advocacy work around the world.', href: '#newsletter', cta: 'Subscribe', color: 'bg-brand-green text-white hover:bg-brand-green-dark' },
          ].map(item => (
            <div key={item.title} className="card flex flex-col">
              <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-5">{item.desc}</p>
              <Link href={item.href} className={`text-center py-2.5 px-4 rounded-md font-medium text-sm transition-colors ${item.color}`}>
                {item.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="newsletter" className="bg-brand-cream py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-gray-500 mb-6">Stay informed on our work, research, and ways you can make a difference.</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
            <button type="submit" className="btn-primary text-sm py-2.5 px-5">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  )
}
