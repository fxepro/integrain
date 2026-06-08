import Link from 'next/link'

export const metadata = { title: 'Research | Integrain Foundation' }

const pillars = [
  { title: 'Evidence-Based Strategies', desc: 'Utilizing research findings, we develop strategies and programs based on solid evidence. This approach increases the likelihood of achieving desired outcomes and can demonstrate effectiveness to stakeholders and funders.' },
  { title: 'Informed Decision-Making', desc: 'Research helps us make informed decisions about our programs, initiatives, and resource allocation. It allows us to understand the needs and preferences of our target audience, ensuring our efforts are effective and impactful.' },
  { title: 'Fundraising & Grant Applications', desc: 'Research provides the data and insights necessary to create compelling proposals and reports. Grantors and donors often require evidence of need and impact, and thorough research provides this critical information.' },
  { title: 'Credibility and Trust', desc: 'Truth-telling relies on accurate, reliable information. Research ensures that the information shared is credible, fostering trust with communities, partners, donors, and policymakers alike.' },
  { title: 'Policy Influence', desc: 'Data-driven research enables us to influence policy at local, national, and international levels. By presenting evidence-based recommendations, we can advocate for systemic changes that benefit underserved communities.' },
  { title: 'Community Understanding', desc: 'Research helps us better understand the communities we serve — their strengths, challenges, and aspirations. This understanding is essential to designing programs that truly meet their needs.' },
]

export default function Research() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Research</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Research is fundamental. Truth-telling is a mission in and of itself — everything else relies on it.</p>
        </div>
      </section>

      <section className="section">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-lg text-gray-600 leading-relaxed">Truth-telling enhances credibility and ultimately contributes to more informed, equitable, and just societies. Our research is the backbone of everything we do at Integrain Foundation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(p => (
            <div key={p.title} className="card border-t-4 border-brand-green">
              <h3 className="font-bold text-base text-gray-800 mb-3">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Articles */}
      <section className="bg-brand-cream py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-8 text-center">Global Status Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'The Education Crisis: Barriers, Impact, and the Path Forward', href: '/global-status-the-education-crisis-barriers-impact-and-the-path-forward' },
              { title: 'Limited Healthcare Access for Marginalized Communities', href: '/global-status-limited-healthcare-access-for-marginalized-communities' },
              { title: 'Global Poverty Rates: The Challenge of Living on Less Than $2.15 per Day', href: '/global-poverty-rates-the-challenge-of-living-on-less-than-2-15-per-day' },
              { title: 'The Challenge of Income Inequality: Trends, Causes, and Solutions', href: '/the-global-challenge-of-income-inequality-trends-causes-and-solutions' },
              { title: 'Freedom of Expression: Global Challenges and Restricted Voices', href: '/freedom-of-expression-global-challenges-and-the-reality-of-restricted-voices' },
              { title: 'Political Participation: Addressing the Global Disparity in Representation', href: '/political-participation-addressing-the-global-disparity-in-representation' },
            ].map(article => (
              <Link key={article.title} href={article.href} className="card group hover:-translate-y-0.5 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                  <h3 className="font-medium text-gray-800 group-hover:text-brand-green transition-colors text-sm leading-relaxed">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
