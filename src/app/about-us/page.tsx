import Link from 'next/link'
import Image from 'next/image'

export const metadata = { title: 'About Us | Integrain Foundation' }

const U = 'https://images.unsplash.com'

export default function AboutUs() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">About Integrain Foundation</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Steadfast in our mission to champion social betterment — protecting those who are underprivileged, marginalized, and underrepresented.</p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Our Mission', img: `${U}/photo-1559027615-cd4628902d4a?w=800&q=80&fit=crop`, text: 'To empower socially underprivileged, economically underserved, and politically underrepresented communities by providing access to essential resources, education, and advocacy. We aim to bridge the gaps of inequality, fostering self-sufficiency and leadership.' },
            { label: 'Our Vision', img: `${U}/photo-1521791136064-7986c2920216?w=800&q=80&fit=crop`, text: 'A world where all people, regardless of their social, economic, or political status, have equal access to opportunities, rights, and resources — a global society that is inclusive, just, and compassionate.' },
            { label: 'Our Values', img: `${U}/photo-1582213782179-e0d53f98f2ca?w=800&q=80&fit=crop`, text: 'We are guided by the principles of equity, justice, and empowerment. We value diversity, inclusion, and the dignity of every individual — driven by compassion, transparency, and accountability.' },
          ].map(item => (
            <div key={item.label} className="card border-t-4 border-brand-green overflow-hidden p-0">
              <div className="h-48 relative">
                <Image src={item.img} alt={item.label} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-brand-green mb-3">{item.label}</h2>
                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-10 text-center">Empowering Communities, Protecting Rights, Building Futures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Standing Up for Your Rights', desc: 'We stand up for your rights, ensuring fair treatment and protection from exploitation. Our advocacy efforts tackle fraud, predatory practices, and misinformation — empowering you to make informed decisions.' },
              { title: 'Building Strong Communities', desc: 'We believe in the power of strong communities. Our development initiatives create sustainable environments where people can thrive through infrastructure projects, social services, and local leadership support.' },
              { title: 'Economic Opportunities', desc: 'Financial independence is key to a better life. We provide financial literacy programs, resources, and opportunities to help individuals take control of their finances and achieve long-term stability.' },
              { title: 'Education as Transformation', desc: "Education is not just a right — it's a transformative force. We offer programs, scholarships, and training to improve access to quality learning for all individuals, regardless of background." },
            ].map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="w-2 rounded-full bg-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Join Us in Making a Difference</h2>
          <p className="text-gray-500 mb-8">Whether through donation, volunteering, or partnership — your involvement creates lasting change.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-gold">Donate Now</Link>
            <Link href="/volunteer" className="btn-secondary">Volunteer</Link>
            <Link href="/partner" className="btn-primary">Partner With Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
