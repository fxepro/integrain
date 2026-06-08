import Link from 'next/link'

export const metadata = { title: 'Donate | Integrain Foundation' }

const givingOptions = [
  { title: 'One-Time Donation', desc: 'Make an immediate impact with a single gift. Every dollar goes directly to our programs.' },
  { title: 'Monthly Giving', desc: 'Become a sustaining member with a recurring monthly gift that provides reliable support.' },
  { title: 'Asset Giving', desc: 'Donate non-cash assets like stocks, real estate, or personal property — often with significant tax advantages.' },
  { title: 'Stock Giving', desc: 'Donate appreciated securities directly to avoid capital gains taxes and maximize your charitable impact.' },
  { title: 'Legacy Giving', desc: 'Create a lasting legacy by including Integrain Foundation in your estate plan or will.' },
  { title: 'Offline Donations', desc: 'Send a check or money order. Contact us for mailing instructions and donation forms.' },
]

export default function Donate() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Make a Difference Today</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Your contributions provide families with food, shelter, and hope. Every dollar makes a direct and meaningful impact.</p>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-8 text-center">Choose Your Payment Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="card border-2 border-brand-green">
              <h3 className="font-bold text-lg mb-3 text-brand-green">Credit Card / Bank Transfer</h3>
              <p className="text-gray-500 text-sm mb-5">Secure donations via Stripe. All major credit cards accepted.</p>
              <button className="btn-primary w-full text-center">Donate via Card</button>
            </div>
            <div className="card border-2 border-blue-400">
              <h3 className="font-bold text-lg mb-3 text-blue-600">PayPal</h3>
              <p className="text-gray-500 text-sm mb-5">Quick and secure donation through your PayPal account or Venmo.</p>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium transition-colors">Donate via PayPal</button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <p className="text-gray-500 text-sm mb-3">You can also scan our QR code for quick mobile donations</p>
            <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto flex items-center justify-center text-gray-400 text-xs">QR Code</div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="bg-brand-cream py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-3 text-center">Other Ways of Giving</h2>
          <p className="text-gray-500 text-center mb-10">Multiple paths to support our mission — find the one that works best for you.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {givingOptions.map(opt => (
              <div key={opt.title} className="card">
                <h3 className="font-bold text-base text-gray-800 mb-2">{opt.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Info */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-4">Your Gift May Be Tax-Deductible</h2>
          <p className="text-gray-500 mb-6">Integrain Foundation is a registered 501(c)(3) nonprofit. Contributions may reduce your federal income, capital gains, and estate taxes depending on the type of gift.</p>
          <Link href="/tax-advantages" className="btn-secondary">Learn About Tax Advantages</Link>
        </div>
      </section>
    </>
  )
}
