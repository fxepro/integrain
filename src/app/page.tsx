import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Users, Globe, BookOpen, Shield, TrendingUp } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

const U = 'https://images.unsplash.com'

export const metadata = {
  title: 'Integrain Foundation | Rooted in Integrity, Enabling a Better Society',
  description: 'Integrain Foundation empowers socially underprivileged, economically underserved, and politically underrepresented communities through advocacy, education, and community development.',
}

const stats = [
  { stat: '244M', label: 'Children out of school globally, often due to socioeconomic barriers, conflict, or displacement.', href: '/global-status-the-education-crisis-barriers-impact-and-the-path-forward', tag: 'Education', color: 'border-purple-400' },
  { stat: '50%', label: 'Of people in some countries have no access to essential health services (WHO).', href: '/global-status-limited-healthcare-access-for-marginalized-communities', tag: 'Healthcare Access', color: 'border-blue-400' },
  { stat: '10%', label: "Of the world's population lives on less than $2.15 per day — disproportionately affecting children and rural communities.", href: '/global-poverty-rates-the-challenge-of-living-on-less-than-2-15-per-day', tag: 'Poverty', color: 'border-yellow-400' },
  { stat: '30%+', label: 'Of U.S. wealth held by the top 1%. In Brazil and South Africa, the top 10% hold over 55%.', href: '/the-global-challenge-of-income-inequality-trends-causes-and-solutions', tag: 'Income Inequality', color: 'border-red-400' },
]

const services = [
  { icon: Shield, title: 'Advocacy & Representation', desc: 'Protect consumer rights, promote fair practices, and address issues of fraud and exploitation.', href: '/advocacy-and-representation', color: 'text-blue-600' },
  { icon: Users, title: 'Community Development', desc: 'Strengthen communities through infrastructure projects, social services, and local leadership.', href: '/community-development', color: 'text-brand-green' },
  { icon: TrendingUp, title: 'Economic Empowerment', desc: 'Provide financial literacy and resources to help individuals achieve financial independence.', href: '/economic-empowerment', color: 'text-yellow-600' },
  { icon: BookOpen, title: 'Educational Initiatives', desc: 'Offer programs, scholarships, and training to improve access to quality learning for all.', href: '/educational-initiatives', color: 'text-purple-600' },
]

const whoWeServe = [
  { title: 'Socially Underprivileged', desc: 'Individuals or groups who face systemic disadvantages based on race, socioeconomic status, gender, or disability — with limited access to education, employment, and social services.', href: '/socially-underprivileged-2', color: 'bg-blue-50 border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  { title: 'Economically Underserved', desc: 'Individuals or communities lacking adequate access to financial services and resources — including limited access to banking, credit, affordable loans, and investment opportunities.', href: '/economically-underserved-2', color: 'bg-yellow-50 border-yellow-200', badge: 'bg-yellow-100 text-yellow-700' },
  { title: 'Politically Underrepresented', desc: 'Groups or communities that lack proportional or meaningful representation in political decision-making — whose voices are too often absent from policies that affect their lives.', href: '/politically-underrepresented-2', color: 'bg-purple-50 border-purple-200', badge: 'bg-purple-100 text-purple-700' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-300 uppercase tracking-widest text-sm font-medium mb-4">Rooted in Integrity</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Under-privileged.<br />
              Under-served.<br />
              Under-represented.
            </h1>
            <p className="text-xl text-green-100 mb-4 leading-relaxed font-medium">The power to change is within you and me.</p>
            <p className="text-green-200 mb-10 leading-relaxed">
              Let's work together for a better world. We are reaching 5 million girls, boys, women and men in socially, economically, and politically marginalized communities every year — all over the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate" className="bg-brand-gold hover:bg-yellow-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center">Donate Today</Link>
              <Link href="/about-us" className="border-2 border-white text-white hover:bg-white hover:text-brand-green px-8 py-4 rounded-md font-semibold text-lg transition-colors text-center">About Us</Link>
            </div>
          </div>
          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={`${U}/photo-1531206715517-5c0ba140b2b8?w=1200&q=80&fit=crop`}
              alt="Integrain Foundation — empowering communities"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* How it's getting done */}
      <section className="bg-brand-cream py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm font-medium text-brand-green uppercase tracking-widest mb-2">How it's getting done</p>
          <h2 className="text-3xl font-bold text-brand-green-dark text-center mb-10">Our Approach to Change</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Leverage Digital Platforms', desc: 'Utilize social media, streaming services, and online communities to run targeted awareness campaigns that reach marginalized populations where they are.' },
              { num: '02', title: 'Partner with Communities', desc: 'Form partnerships with nonprofits, local leaders, and influencers. Collaborate with on-the-ground and online advocates for more tailored, authentic outreach.' },
              { num: '03', title: 'Expand Educational Programs', desc: 'Develop and scale programs that offer education, mentorship, and skills training tailored to girls, boys, women, and men in underserved communities.' },
            ].map(item => (
              <div key={item.num} className="card">
                <span className="text-4xl font-bold text-brand-green opacity-20">{item.num}</span>
                <h3 className="font-bold text-lg text-gray-800 mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-green-dark text-center mb-3">Who We Serve</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">We address the global status of diverse populations and the inequalities they face.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoWeServe.map(group => (
              <div key={group.title} className={`rounded-xl border p-6 ${group.color}`}>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${group.badge}`}>{group.title}</span>
                <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-5">{group.desc}</p>
                <Link href={group.href} className="text-brand-green text-sm font-medium hover:underline inline-flex items-center gap-1">View More <ArrowRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-green-dark text-center mb-3">How We Help</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">Four pillars of action driving real, measurable change in communities across the nation and world.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(svc => (
              <Link key={svc.title} href={svc.href} className="card group hover:-translate-y-1 transition-transform duration-200 flex flex-col">
                <svc.icon size={36} className={`${svc.color} mb-4`} />
                <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-brand-green transition-colors flex-grow">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-brand-green text-sm font-medium">Learn more <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Status */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-green-dark text-center mb-3">Global Status</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">The socially underprivileged, economically underserved, and politically underrepresented face inequalities that demand urgent attention.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map(s => (
              <Link key={s.tag} href={s.href} className={`card border-t-4 ${s.color} group hover:-translate-y-1 transition-transform`}>
                <div className="text-4xl font-bold text-brand-green-dark mb-2">{s.stat}</div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">{s.tag}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{s.label}</p>
                <span className="mt-3 text-brand-green text-xs font-medium group-hover:underline">See more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Three Ways to Help */}
      <section className="bg-brand-green-dark text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Three Ways You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Donate', desc: 'Your contributions provide families with food, shelter, and hope. Every dollar makes a direct impact.', href: '/donate', cta: 'Give Now' },
              { icon: Users, title: 'Volunteer', desc: 'Join our on-ground efforts to bring immediate relief. Your time transforms lives and communities.', href: '/volunteer', cta: 'Sign Up' },
              { icon: Globe, title: 'Spread the Word', desc: 'Share our mission and amplify our reach. Help us connect with more helping hands.', href: '/engage', cta: 'Get Involved' },
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-5">
                  <item.icon size={28} className="text-brand-gold" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-green-200 text-sm leading-relaxed mb-5">{item.desc}</p>
                <Link href={item.href} className="bg-brand-gold hover:bg-yellow-600 text-white px-6 py-2.5 rounded-md font-medium transition-colors text-sm">{item.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-cream py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-gray-500 mb-6">Stay informed on how we're making a difference and how you can help.</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
