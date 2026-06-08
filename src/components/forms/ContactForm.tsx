'use client'
import { useState } from 'react'
import { TextInput, PhoneInput, TextArea, Checkbox, SubmitButton } from './FormField'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    // TODO: POST to /api/contact or your form handler (Resend, Formspree, etc.)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
      <div className="text-4xl mb-3">✅</div>
      <h3 className="font-bold text-green-800 text-lg mb-2">Message Sent!</h3>
      <p className="text-green-700 text-sm">Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <TextInput label="Your Name" name="your_name" required />
      <PhoneInput label="Phone Number" name="phone_number" />
      <TextInput label="Subject or Area of Interest" name="subject_or_area_of_interest" />
      <TextArea label="Additional Note" name="note" rows={5} />
      <Checkbox label="I agree to the use of my personal data in accordance with the Privacy Policy." name="consent" required />
      <SubmitButton label={loading ? 'Sending...' : 'Send Message'} />
    </form>
  )
}
