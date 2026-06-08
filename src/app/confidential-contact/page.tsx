import WhistleblowerForm from '@/components/forms/WhistleblowerForm'

export const metadata = { title: 'Confidential Contact | Integrain Foundation' }

export default function ConfidentialContact() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Confidential Contact</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Connect and report information confidentially. Your identity is protected.</p>
        </div>
      </section>
      <section className="section max-w-2xl">
        <WhistleblowerForm />
      </section>
    </>
  )
}
