import Link from 'next/link'
export const metadata = { title: 'Projects | Integrain Foundation' }
export default function Projects() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Our Projects</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Real-world initiatives creating lasting change in communities across the United States and around the world.</p>
        </div>
      </section>
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'California Wildfire Relief 2025', category: 'Disaster Relief', status: 'Active', desc: 'Setting up emergency supply hubs, providing financial assistance to displaced families, and deploying mental health counselors across wildfire-affected areas in California.' },
            { title: 'Financial Literacy for Underserved Communities', category: 'Economic Empowerment', status: 'Active', desc: 'Workshops and one-on-one coaching to help individuals in low-income communities develop budgeting, saving, and investing skills.' },
            { title: 'Community Learning Centers', category: 'Educational Initiatives', status: 'Active', desc: 'Establishing community learning centers that provide adult literacy, computer training, and after-school tutoring programs.' },
            { title: 'Consumer Rights Advocacy', category: 'Advocacy & Representation', status: 'Active', desc: 'Legal support and advocacy for individuals facing predatory lending, housing discrimination, and consumer fraud.' },
          ].map(p => (
            <div key={p.title} className="card">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-medium px-2 py-1 bg-green-100 text-brand-green rounded-full">{p.category}</span>
                <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{p.status}</span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
              <Link href="/donate" className="text-brand-green text-sm font-medium hover:underline">Support this project →</Link>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold text-brand-green-dark mb-3">Have a Project Idea?</h2>
          <p className="text-gray-500 mb-5">Submit a community project proposal for consideration by our team.</p>
          <Link href="/project-proposal" className="btn-primary">Submit a Proposal</Link>
        </div>
      </section>
    </>
  )
}
