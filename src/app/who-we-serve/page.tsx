import Link from 'next/link'
export const metadata = { title: 'Who We Serve | Integrain Foundation' }
const groups = [
  { id: 'socially-underprivileged', title: 'Socially Underprivileged', color: 'border-blue-500', desc: 'We serve individuals and communities who face social disadvantage due to factors such as race, ethnicity, religion, gender, disability, or sexual orientation. Social underprivilege often intersects with economic and political marginalization, creating compounding cycles of exclusion and inequality. Our programs work to break these cycles by providing targeted support, advocacy, and community-building initiatives that help individuals achieve social inclusion and dignity. We address discrimination, promote equal rights, and create spaces where every person is valued and respected.', href: '/socially-underprivileged-2' },
  { id: 'economically-underserved', title: 'Economically Underserved', color: 'border-yellow-500', desc: 'Economic hardship affects millions of individuals and families who lack access to basic necessities, stable employment, and financial security. The economically underserved often face barriers such as lack of education, limited job opportunities, and inadequate access to financial services. Our economic empowerment programs provide financial literacy education, job training, microloans, and business development support to help individuals build financial independence and improve their standard of living.', href: '/economically-underserved-2' },
  { id: 'politically-underrepresented', title: 'Politically Underrepresented', color: 'border-purple-500', desc: 'Political underrepresentation occurs when certain groups of people do not have adequate representation in government and political decision-making processes. This includes women, minorities, indigenous peoples, and other marginalized groups whose voices are often silenced or ignored in political discourse. We advocate for inclusive political systems, support civic education and engagement, and work to ensure that all voices are heard in the democratic process.', href: '/politically-underrepresented-2' },
]
export default function WhoWeServe() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Who We Serve</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Service is a privilege, not a sacrifice. We are dedicated to serving those who need it most.</p>
        </div>
      </section>
      <section className="section">
        <div className="space-y-10">
          {groups.map(g => (
            <div key={g.id} id={g.id} className={`card border-l-4 ${g.color}`}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{g.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{g.desc}</p>
              <Link href={g.href} className="btn-primary text-sm py-2 px-4">Learn More</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
