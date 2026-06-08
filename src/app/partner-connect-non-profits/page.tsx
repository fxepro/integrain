import PartnerForm from '@/components/forms/PartnerForm'

export const metadata = { title: 'Non-Profit Partnership | Integrain Foundation' }

export default function Page() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Non-Profit Partnership</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Complete the form below and our partnerships team will follow up within 3–5 business days.</p>
        </div>
      </section>
      <section className="section max-w-2xl">
        <PartnerForm type="nonprofit" />
      </section>
    </>
  )
}
