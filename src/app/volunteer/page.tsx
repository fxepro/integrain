import VolunteerForm from '@/components/forms/VolunteerForm'

export const metadata = { title: 'Volunteer | Integrain Foundation' }

const benefits = [
  { title: 'Impact Lives', desc: "When you volunteer, you're not just giving your time — you're giving hope. Every hour you spend with us is an investment in someone's future." },
  { title: 'Grow Your Skills', desc: 'We offer opportunities to develop new skills, enhance your leadership abilities, and gain valuable experience across many fields.' },
  { title: 'Build Meaningful Connections', desc: 'Join a vibrant community of like-minded individuals, building lasting friendships and collaborating with people who share your passion.' },
  { title: 'Be Part of Something Bigger', desc: 'Your efforts contribute to a larger mission of creating sustainable solutions for those in need — a mission that outlasts any single project.' },
]

export default function Volunteer() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Join Us — Make a Difference</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Passionate about creating positive change? We need your help. Let's work together.</p>
        </div>
      </section>
      <section className="bg-brand-green text-white py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[{ stat: '500+', label: 'Active Volunteers' }, { stat: '50+', label: 'Communities Served' }, { stat: '10K+', label: 'Lives Impacted' }].map(item => (
            <div key={item.label}>
              <div className="text-3xl font-bold text-brand-gold">{item.stat}</div>
              <div className="text-green-200 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-2xl font-bold text-brand-green-dark mb-8">Why Volunteer With Us?</h2>
            <div className="space-y-6">
              {benefits.map(b => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-8 h-8 bg-brand-green rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{b.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-green-dark mb-6">Ready to Get Started?</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
