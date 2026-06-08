import Link from 'next/link'

export const metadata = { title: 'World Issues | Integrain Foundation' }

const globalIssues = [
  {
    category: 'Conflicts & Humanitarian Crises',
    trend: 'Getting Worse',
    trendColor: 'text-red-600 bg-red-50',
    desc: 'Conflicts and instability, especially in regions like the Middle East and parts of Africa, are leading to humanitarian crises and displacing millions. Ongoing violence creates severe human rights abuses with food, medical care, and educational resources in short supply.',
    href: '/world-crises',
  },
  {
    category: 'Economic Inequality',
    trend: 'Getting Worse',
    trendColor: 'text-red-600 bg-red-50',
    desc: 'Economic disparity continues to widen, with the wealthiest individuals and nations accumulating ever-greater shares of global wealth while billions struggle to meet basic needs. This inequality undermines social cohesion and democratic institutions.',
    href: '/global-poverty-rates-the-challenge-of-living-on-less-than-2-15-per-day',
  },
  {
    category: 'Education Access',
    trend: 'Slow Progress',
    trendColor: 'text-yellow-600 bg-yellow-50',
    desc: 'While global literacy rates have improved, access to quality education remains profoundly unequal. Financial barriers, cultural norms, and geographic isolation continue to keep millions of children and adults from achieving their educational potential.',
    href: '/global-status-the-education-crisis-barriers-impact-and-the-path-forward',
  },
  {
    category: 'Healthcare Access',
    trend: 'Mixed Progress',
    trendColor: 'text-yellow-600 bg-yellow-50',
    desc: 'Healthcare access varies dramatically between and within countries. Marginalized communities face significant barriers to receiving adequate medical care, preventive services, and mental health support — often with devastating consequences.',
    href: '/global-status-limited-healthcare-access-for-marginalized-communities',
  },
  {
    category: 'Political Representation',
    trend: 'Slow Progress',
    trendColor: 'text-yellow-600 bg-yellow-50',
    desc: 'Political participation remains deeply unequal across the globe, with women, minorities, and marginalized groups significantly underrepresented in decision-making processes. Strengthening democratic institutions and inclusive governance is essential.',
    href: '/political-participation-addressing-the-global-disparity-in-representation',
  },
  {
    category: 'Freedom of Expression',
    trend: 'Getting Worse',
    trendColor: 'text-red-600 bg-red-50',
    desc: 'Cybersecurity threats and misinformation campaigns are increasingly destabilizing economies and political systems. In many countries, freedom of press and expression are under attack, with journalists and activists facing persecution.',
    href: '/freedom-of-expression-global-challenges-and-the-reality-of-restricted-voices',
  },
]

export default function World() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">The World We're Working In</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">The complex nature of global issues — a concise overview of key global challenges highlighting positive and negative trends.</p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {globalIssues.map(issue => (
            <div key={issue.category} className="card hover:-translate-y-1 transition-transform duration-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-gray-800 text-lg">{issue.category}</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 ml-2 ${issue.trendColor}`}>
                  {issue.trend}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{issue.desc}</p>
              <Link href={issue.href} className="text-brand-green text-sm font-medium hover:underline">Read more →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/world-crises" className="card border-l-4 border-red-500 group">
            <h3 className="font-bold text-red-800 mb-2 group-hover:text-red-600 transition-colors">World Crises Overview</h3>
            <p className="text-gray-500 text-sm">Humanitarian, environmental, political, economic, and health crises affecting regions worldwide.</p>
          </Link>
          <Link href="/disasters" className="card border-l-4 border-orange-500 group">
            <h3 className="font-bold text-orange-800 mb-2 group-hover:text-orange-600 transition-colors">Natural Disasters Tracker</h3>
            <p className="text-gray-500 text-sm">Tracking recent natural disasters including floods, hurricanes, fires, and other extreme weather events.</p>
          </Link>
        </div>
      </section>
    </>
  )
}
