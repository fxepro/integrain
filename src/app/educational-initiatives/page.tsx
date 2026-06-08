import Link from 'next/link'

export const metadata = { title: 'Educational Initiatives | Integrain Foundation' }

export default function EducationalInitiatives() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Educational Initiatives</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Potential Through Education — Education is not just a right but a transformative force that can empower individuals, strengthen communities, and shape a better world.</p>
        </div>
      </section>

      <section className="section">
        <div className="space-y-10">
          {[
            {
              title: 'Educational Programs',
              desc: 'Our educational programs are the heart of our mission. We offer a variety of learning opportunities designed to meet the needs of different age groups, learning styles, and academic goals. From early childhood education to adult literacy programs, we provide tailored learning experiences that foster curiosity, critical thinking, and lifelong learning. Our programs are delivered through schools, community centers, and online platforms, ensuring that education is accessible to all, even in remote or underserved areas.'
            },
            {
              title: 'Scholarships',
              desc: 'Financial barriers often stand in the way of individuals pursuing their educational dreams. To address this, we offer scholarships to deserving students who demonstrate academic potential but lack the financial means to pursue their education. Our scholarships cover a wide range of educational levels and fields of study, from vocational training to university degrees. By investing in these individuals, we are investing in the future of our communities and our world.'
            },
            {
              title: 'Vocational Training',
              desc: 'Not everyone\'s educational journey leads to a traditional college degree, and that\'s perfectly fine. Vocational training provides individuals with the practical skills they need to succeed in a wide range of careers, from healthcare and technology to construction and the arts. Our vocational training programs are designed to meet the needs of local economies and industries, ensuring that graduates have the skills they need to find and keep good jobs.'
            },
            {
              title: 'Community Learning Centers',
              desc: 'We believe that learning should be a lifelong journey, not just something that happens in schools. Our community learning centers provide a space for people of all ages to continue their education, explore new interests, and develop new skills. These centers offer a wide range of programs, from literacy classes and computer training to arts and crafts workshops and after-school tutoring for children.'
            },
          ].map(item => (
            <div key={item.title} className="card border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-purple-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-purple-50 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">Invest in Education, Invest in Futures</h2>
          <p className="text-purple-700 mb-8">Every dollar you donate helps fund scholarships, learning programs, and vocational training for underserved individuals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-primary">Donate Now</Link>
            <Link href="/educational-initiatives-services" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
