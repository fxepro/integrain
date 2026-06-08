'use client'
import { useState } from 'react'
import { TextInput, PhoneInput, EmailInput, TextArea, SelectInput, RangeInput, Checkbox, SubmitButton } from './FormField'

export default function ProjectProposalForm() {
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
      <div className="text-4xl mb-3">📋</div>
      <h3 className="font-bold text-green-800 text-lg mb-2">Proposal Submitted!</h3>
      <p className="text-green-700 text-sm">Thank you for submitting your project proposal. Our team will review it and contact you within 30 days.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextInput label="First Name" name="first_name" />
        <TextInput label="Last Name" name="last_name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <PhoneInput label="Phone Number" name="phone_number" />
        <EmailInput label="Email Address" name="email_address" />
      </div>
      <SelectInput label="Area of Interest" name="area_of_interest" options={[
        'Consumer Advocacy', 'Community Development', 'Economic Empowerment', 'Educational Initiatives', 'Disaster Relief', 'Research'
      ]} />
      <TextInput label="Project Title" name="project_title" />
      <TextInput label="Problem Statement" name="problem_statement" />
      <RangeInput label="Project Budget ($)" name="project_budget" min={0} max={500000} step={5000} />
      <RangeInput label="Project Duration (weeks)" name="project_duration" min={1} max={104} step={1} />
      <SelectInput label="Project Budget Source" name="budget_source" options={[
        'Foundation support', 'I will fundraise', 'Mixed — foundation + self-funded', 'External grant'
      ]} />
      <TextInput label="Project Goals" name="project_goals" />
      <TextInput label="Target Audience / Beneficiaries" name="target_audience" />
      <TextArea label="Project Activities" name="project_activities" rows={4} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <TextInput label="Country" name="country" />
        <TextInput label="State" name="state" />
        <TextInput label="City" name="city" />
      </div>
      <TextArea label="Additional Notes" name="notes" rows={3} />
      <Checkbox label="I affirm that the information provided is accurate and I agree to Integrain Foundation's terms for project review." name="acknowledgement_of_terms" />
      <SubmitButton label={loading ? 'Submitting...' : 'Submit Proposal'} />
    </form>
  )
}
