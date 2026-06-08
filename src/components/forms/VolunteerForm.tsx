'use client'
import { useState } from 'react'
import { TextInput, PhoneInput, EmailInput, TextArea, SelectInput, Checkbox, SubmitButton } from './FormField'

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
      <div className="text-4xl mb-3">🙌</div>
      <h3 className="font-bold text-green-800 text-lg mb-2">Application Received!</h3>
      <p className="text-green-700 text-sm">Thank you for your interest in volunteering. We'll be in touch soon.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput label="First Name" name="first_name" required />
        <TextInput label="Last Name" name="last_name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PhoneInput label="Phone Number" name="phone_number" />
        <EmailInput label="Email" name="email" />
      </div>
      <SelectInput label="Area of Interest" name="area_of_interest" options={[
        'Consumer Advocacy', 'Community Development', 'Economic Empowerment',
        'Educational Initiatives', 'Disaster Relief', 'Administrative Support', 'Research'
      ]} />
      <SelectInput label="Education Level" name="education" options={[
        'High School Diploma', 'Some College', "Associate's Degree", "Bachelor's Degree",
        "Master's Degree", 'Doctorate', 'Trade/Vocational'
      ]} />
      <TextInput label="Related work or past experience" name="work_info" />
      <TextInput label="Anything else you'd like to add or questions about volunteering?" name="additional_info" />
      <TextArea label="Additional Notes" name="note" rows={3} />
      <Checkbox label="I agree to send my personal information to Integrain Foundation for the purpose of volunteering." name="consent" required />
      <SubmitButton label={loading ? 'Submitting...' : 'Submit Application'} />
    </form>
  )
}
