import ProjectProposalForm from '@/components/forms/ProjectProposalForm'

export const metadata = { title: 'Project Proposal | Integrain Foundation' }

export default function ProjectProposal() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Submit a Project Proposal</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">Have a community project that needs support? Tell us about it — we review all proposals within 30 days.</p>
        </div>
      </section>
      <section className="section max-w-3xl">
        <ProjectProposalForm />
      </section>
    </>
  )
}
