'use client'
import { useState } from 'react'
import { TextInput, PhoneInput, EmailInput, TextArea, SelectInput, FileInput, Checkbox, SubmitButton } from './FormField'

export default function WhistleblowerForm() {
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
      <div className="text-4xl mb-3">🔒</div>
      <h3 className="font-bold text-green-800 text-lg mb-2">Report Received Confidentially</h3>
      <p className="text-green-700 text-sm">Your report has been received. Your information is kept strictly confidential. We will follow up through your preferred contact method.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
        🔒 <strong>Confidential:</strong> All information submitted through this form is kept strictly confidential and used only to investigate and address the reported concern.
      </div>
      <TextInput label="Your Name (optional)" name="your_name" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <EmailInput label="Email Address" name="email_address" />
        <PhoneInput label="Phone Number" name="phone_number" />
      </div>
      <TextInput label="Subject of Report" name="subject_of_report" />
      <TextArea label="Description of Concern" name="description_concern" rows={6} />
      <TextInput label="Involved Parties (names, organizations, if known)" name="involved_parties" />
      <SelectInput label="Preferred Mode of Communication" name="preferred_mode_of_communication" options={['Email', 'Phone', 'In-person meeting']} />
      <FileInput label="Supporting Evidence (optional — documents, images)" name="supporting_evidence_optional" />
      <TextArea label="Proposed Timeline (when did/does this occur?)" name="proposed_timeline" rows={2} />
      <Checkbox label="I affirm that the information provided is accurate to the best of my knowledge." name="acknowledgment" />
      <SubmitButton label={loading ? 'Submitting...' : 'Submit Confidential Report'} />
    </form>
  )
}
