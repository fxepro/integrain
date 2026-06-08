import StockDonationForm from '@/components/forms/StockDonationForm'
import Link from 'next/link'

export const metadata = { title: 'Stock Giving | Integrain Foundation' }

export default function StockGiving() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Stock Giving</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Donate appreciated securities and maximize your charitable impact while minimizing your tax burden.</p>
        </div>
      </section>
      <section className="section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-2xl font-bold text-brand-green-dark mb-5">Why Donate Stock?</h2>
            <div className="space-y-4">
              {[
                { title: 'Avoid Capital Gains Tax', desc: 'By donating appreciated stock directly, you avoid paying capital gains tax on the appreciation — a significant saving on long-held investments.' },
                { title: 'Deduct Full Market Value', desc: 'You can deduct the full fair market value of the stock (up to 30% of AGI), not just your cost basis.' },
                { title: 'Give More, Cost Less', desc: "Stock donations are typically worth 20–40% more to us than an equivalent cash gift, because you're not paying the tax before donating." },
              ].map(item => (
                <div key={item.title} className="card border-l-4 border-brand-gold">
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
              <Link href="/tax-advantages" className="btn-secondary text-sm py-2 px-4 inline-block mt-2">Full Tax Advantages Guide</Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-green-dark mb-6">Submit Stock Donation</h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <StockDonationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
