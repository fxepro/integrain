import Link from 'next/link'

export const metadata = { title: 'Advocacy & Representation | Integrain Foundation' }

export default function AdvocacyAndRepresentation() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Advocacy & Representation</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Defending the Defenseless — Our mission is to stand up for those who cannot stand up for themselves, to challenge the forces that place profit over people.</p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: 'Education and Awareness',
              desc: 'The first step in consumer protection is education. We work tirelessly to educate consumers about their rights and how to recognize and avoid fraudulent practices. Through workshops, online resources, and community outreach programs, we provide valuable information on topics ranging from understanding credit scores to recognizing phishing scams. By empowering consumers with knowledge, we help them make informed decisions and avoid exploitation.'
            },
            {
              title: 'Advocacy and Legal Support',
              desc: 'When consumers face unfair treatment or fall victim to scams, they often feel helpless. Our organization provides legal support and advocacy services to those who have been wronged. We work with a network of attorneys and legal experts who volunteer their time to represent consumers in court, helping them seek justice and compensation. Whether fighting against predatory lenders or challenging unfair business practices, we ensure that consumers\' voices are heard.'
            },
            {
              title: 'Policy and Reform',
              desc: 'To create lasting change, we advocate for stronger consumer protection laws and regulations. We work with lawmakers, regulators, and other advocacy groups to push for reforms that will safeguard consumer rights. Our efforts have led to the implementation of stricter regulations on payday lenders, the introduction of clearer labeling laws, and greater corporate accountability. We believe that systemic change is essential to creating a fair and just marketplace for everyone.'
            },
            {
              title: 'Community Empowerment',
              desc: 'We believe that empowered communities are better equipped to protect themselves from exploitation. Through community-based initiatives, we work to build the capacity of local groups and organizations to advocate for their own rights. We provide resources, training, and support to help communities establish their own consumer protection networks, empowering them to take action when they encounter injustice.'
            },
          ].map(item => (
            <div key={item.title} className="card border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Need Legal Advocacy Support?</h2>
          <p className="text-blue-700 mb-8">We offer free consultations and can connect you with our network of volunteer attorneys and advocates.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/advocacy-and-representation-services" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
