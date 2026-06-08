import ResearchInitiativeForm from '@/components/forms/ResearchInitiativeForm'

export const metadata = { title: 'Research Initiative | Integrain Foundation' }

export default function ResearchInitiative() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Submit a Research Initiative</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Partner with us on evidence-based research that drives real change in communities.</p>
        </div>
      </section>
      <section className="section max-w-3xl">
        <ResearchInitiativeForm />
      </section>
    </>
  )
}
