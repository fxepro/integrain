'use client'
import { useState } from 'react'
import { TextInput, PhoneInput, EmailInput, SubmitButton } from './FormField'

interface StockEntry { symbol: string; shares: string; value: string }

export default function StockDonationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [stocks, setStocks] = useState<StockEntry[]>([{ symbol: '', shares: '', value: '' }])

  function addStock() { setStocks(s => [...s, { symbol: '', shares: '', value: '' }]) }
  function removeStock(i: number) { setStocks(s => s.filter((_, idx) => idx !== i)) }
  function updateStock(i: number, field: keyof StockEntry, val: string) {
    setStocks(s => s.map((st, idx) => idx === i ? { ...st, [field]: val } : st))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
      <div className="text-4xl mb-3">📈</div>
      <h3 className="font-bold text-green-800 text-lg mb-2">Stock Donation Request Received!</h3>
      <p className="text-green-700 text-sm">Thank you for your generous stock donation. Our team will contact you within 2 business days with transfer instructions.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="font-semibold text-gray-800 mb-4">Donor Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput label="First Name" name="first_name" required />
          <TextInput label="Last Name" name="last_name" required />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <PhoneInput label="Phone Number" name="phone_number" required />
          <EmailInput label="Email" name="email" required />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">Stocks to Donate</h3>
          <button type="button" onClick={addStock} className="text-sm text-brand-green font-medium hover:underline">+ Add Stock</button>
        </div>
        <div className="space-y-3">
          {stocks.map((st, i) => (
            <div key={i} className="grid grid-cols-3 gap-3 p-4 bg-gray-50 rounded-lg relative">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Stock Symbol</label>
                <input type="text" value={st.symbol} onChange={e => updateStock(i, 'symbol', e.target.value)} placeholder="e.g. AAPL" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green uppercase" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Number of Shares</label>
                <input type="number" value={st.shares} onChange={e => updateStock(i, 'shares', e.target.value)} placeholder="0" min="0" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Approx. Value ($)</label>
                <input type="number" value={st.value} onChange={e => updateStock(i, 'value', e.target.value)} placeholder="0.00" min="0" step="0.01" className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green" />
              </div>
              {stocks.length > 1 && (
                <button type="button" onClick={() => removeStock(i)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xs">✕</button>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-2">You can add up to 10 stock entries. Our team will provide transfer instructions after submission.</p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
        💡 Donating appreciated stock held longer than one year lets you avoid capital gains tax and deduct the full fair market value. <a href="/tax-advantages" className="underline font-medium">Learn more about tax advantages.</a>
      </div>

      <SubmitButton label={loading ? 'Submitting...' : 'Submit Stock Donation Request'} />
    </form>
  )
}
