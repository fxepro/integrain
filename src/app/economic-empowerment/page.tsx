import Link from 'next/link'

export const metadata = { title: 'Economic Empowerment | Integrain Foundation' }

export default function EconomicEmpowerment() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Economic Empowerment</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Financial Independence for All — We provide financial literacy, resources, and opportunities for individuals to achieve financial independence, for themselves and their families.</p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Financial Literacy Education',
              desc: 'Financial literacy is the foundation of economic empowerment. Many individuals struggle with managing their finances simply because they were never taught how. Our financial literacy programs are designed to fill this gap by providing accessible, practical education on topics such as budgeting, saving, investing, and managing debt. We offer workshops, online courses, and one-on-one coaching to help individuals develop the skills they need to make informed financial decisions.',
              color: 'border-yellow-500'
            },
            {
              title: 'Access to Resources',
              desc: 'Knowledge alone is not enough to achieve financial independence; individuals also need access to the resources that can help them put their knowledge into practice. We connect individuals with financial resources such as microloans, grants, and financial assistance programs that can help them start or grow a business, invest in education, or cover essential expenses during times of crisis.',
              color: 'border-green-500'
            },
            {
              title: 'Entrepreneurship Support',
              desc: 'For many individuals in underserved communities, entrepreneurship represents a path to economic independence. We provide comprehensive support for aspiring entrepreneurs, including business planning assistance, mentorship, access to capital, and networking opportunities. Our entrepreneurship programs are designed to help individuals turn their ideas into viable businesses and achieve financial success.',
              color: 'border-blue-500'
            },
            {
              title: 'Job Placement Services',
              desc: 'Finding stable, well-paying employment is a key component of economic empowerment. We offer job placement services that connect individuals with employers who are committed to fair wages and equitable employment practices. Our job placement specialists work one-on-one with individuals to understand their skills, experience, and career goals, and then match them with job opportunities that align with their aspirations.',
              color: 'border-purple-500'
            },
          ].map(item => (
            <div key={item.title} className={`card border-l-4 ${item.color}`}>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">Help Us Empower Families Financially</h2>
          <p className="text-yellow-700 mb-8">Your support funds financial literacy programs, microloans, and entrepreneurship training for individuals who need it most.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-gold">Donate Now</Link>
            <Link href="/economic-empowerment-services" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
