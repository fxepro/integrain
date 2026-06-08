import Link from 'next/link'

export const metadata = { title: 'Community Development | Integrain Foundation' }

export default function CommunityDevelopment() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Community Development</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Building Stronger Communities — We strengthen communities and individuals to build better futures through infrastructure projects, social services, and local leadership.</p>
        </div>
      </section>

      <section className="section">
        <div className="space-y-12">
          {[
            {
              title: 'Infrastructure Development',
              desc: 'Infrastructure is the foundation of any community. Without proper roads, schools, hospitals, and other essential facilities, communities cannot function effectively. We work closely with local governments and stakeholders to design and implement infrastructure projects that meet the unique needs of each community. From building clean water systems to constructing affordable housing, our projects are designed to improve the quality of life for residents and create opportunities for economic growth. We also ensure that our infrastructure projects are sustainable, using environmentally friendly materials and practices that minimize our impact on the planet.'
            },
            {
              title: 'Social Services',
              desc: 'A strong community is one where everyone has access to the resources and support they need to lead healthy, fulfilling lives. We provide a wide range of social services, including healthcare, education, and job training programs, to help individuals and families overcome the challenges they face. Our healthcare initiatives focus on preventative care, mental health support, and access to medical services for underserved populations. In education, we work to improve literacy rates, provide scholarships, and support schools with the resources they need to offer a high-quality education. Our job training programs are designed to help individuals develop the skills they need to secure stable employment.'
            },
            {
              title: 'Local Leadership Support',
              desc: 'Strong communities require strong leaders. We invest in local leadership development programs that identify and nurture community leaders at all levels. Through mentorship, training, and networking opportunities, we help individuals develop the skills and knowledge they need to lead effectively and create positive change in their communities. By building a pipeline of capable community leaders, we ensure that our work has a lasting impact long after our direct involvement ends.'
            },
          ].map(item => (
            <div key={item.title} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-1">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                  <div className="w-6 h-6 bg-brand-green rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark">{item.title}</h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Support Community Development</h2>
          <p className="text-gray-500 mb-8">Your donation directly funds infrastructure projects, social services, and leadership programs in underserved communities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-gold">Donate Now</Link>
            <Link href="/community-development-services" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
