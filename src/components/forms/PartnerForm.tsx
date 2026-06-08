'use client'
import { useState } from 'react'
import { TextInput, PhoneInput, EmailInput, TextArea, SelectInput, Checkbox, SubmitButton } from './FormField'

type PartnerType = 'corporate' | 'government' | 'individual' | 'nonprofit'

interface PartnerFormProps {
  type: PartnerType
}

const config = {
  corporate:   { orgLabel: 'Organization Name',             orgName: 'organization_name' },
  government:  { orgLabel: 'Governmental Organization Name', orgName: 'organization_name' },
  individual:  { orgLabel: null,                             orgName: '' },
  nonprofit:   { orgLabel: 'Non-Profit Organization Name',  orgName: 'organization_name' },
}

export default function PartnerForm({ type }: PartnerFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const cfg = config[type]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
      <div className="text-4xl mb-3">🤝</div>
      <h3 className="font-bold text-green-800 text-lg mb-2">Partnership Inquiry Received!</h3>
      <p className="text-green-700 text-sm">Thank you for your interest in partnering with Integrain Foundation. Our team will review your submission and follow up within 3–5 business days.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {cfg.orgLabel && <TextInput label={cfg.orgLabel} name={cfg.orgName} />}
      {type === 'individual' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput label="First Name" name="first_name" />
          <TextInput label="Last Name" name="last_name" />
        </div>
      ) : (
        <TextInput label="Contact Person" name="contact_person" />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput label="City" name="city" />
        <TextInput label="State" name="state" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <EmailInput label="Email Address" name="email_address" />
        <PhoneInput label="Phone Number" name="phone_number" />
      </div>
      <TextInput label="Subject" name="subject" />
      <TextArea label="Description" name="description" rows={4} />
      <SelectInput label="Preferred Mode of Communication" name="preferred_mode_of_communication" options={['Email', 'Phone', 'In-person meeting']} />
      <TextArea label="Proposed Timeline" name="proposed_timeline" rows={2} />
      <Checkbox label="I acknowledge that the information provided is accurate and I agree to be contacted by Integrain Foundation." name="acknowledgment" />
      <SubmitButton label={loading ? 'Submitting...' : 'Submit Partnership Inquiry'} />
    </form>
  )
}
