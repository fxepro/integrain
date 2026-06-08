'use client'
import { useState } from 'react'

export default function NewsletterForm({ inline = false }: { inline?: boolean }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 600))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) return (
    <p className="text-green-700 font-medium text-sm">✅ You're subscribed! Thank you.</p>
  )

  return (
    <form onSubmit={handleSubmit} className={inline ? 'flex gap-3' : 'space-y-3'}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder="Your email address"
        className="flex-1 border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
      />
      <button type="submit" className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
        {loading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  )
}
