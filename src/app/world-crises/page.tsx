export const metadata = { title: 'World Crises | Integrain Foundation' }
const crises = [
  { type: 'Humanitarian Crises', def: 'A situation where large populations face extreme hardship and suffering due to war, natural disaster, or political oppression, leading to urgent needs for food, shelter, healthcare, and safety.', need: 'Increased funding and resources are needed for food, shelter, healthcare, and protection. International aid and support systems are essential to help vulnerable populations. Stronger partnerships with local organizations can improve response efficiency.', examples: ['Rohingya Crisis: Over a million refugees in Bangladesh facing severe human rights abuses, with food, medical care, and educational resources in short supply.', 'Afghanistan: Following the Taliban takeover, millions face food insecurity, women\'s rights have been severely curtailed, and the humanitarian situation has deteriorated rapidly.'] },
  { type: 'Environmental Crises', def: 'Situations where environmental degradation or natural events threaten ecosystems, human health, and livelihoods on a large scale.', need: 'Urgent action on climate change, investment in renewable energy, and international cooperation to address the root causes of environmental degradation.', examples: ['Climate change is causing more frequent and severe weather events, rising sea levels, and disruptions to ecosystems worldwide.', 'Deforestation continues at alarming rates, threatening biodiversity and contributing to climate change.'] },
  { type: 'Political & Governance Crises', def: 'Situations where political instability, authoritarian rule, or government failure leads to human rights abuses, displacement, and social breakdown.', need: 'Support for democratic institutions, civil society organizations, and human rights defenders. International pressure on governments that violate human rights.', examples: ['Democratic backsliding in multiple countries with erosion of checks and balances and free press.', 'Political violence and election interference threatening democratic processes globally.'] },
]
export default function WorldCrises() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">World Crises</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">A broad overview of various crisis types and affected regions, covering humanitarian, environmental, and political crises around the world.</p>
        </div>
      </section>
      <section className="section">
        <div className="space-y-10">
          {crises.map(c => (
            <div key={c.type} className="card">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-3">{c.type}</h2>
              <p className="text-gray-600 italic mb-4 text-sm">{c.def}</p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-blue-800 mb-2">The Need</h3>
                <p className="text-blue-700 text-sm">{c.need}</p>
              </div>
              <h3 className="font-semibold text-gray-700 mb-2">Current Examples</h3>
              <ul className="space-y-2">
                {c.examples.map(ex => (
                  <li key={ex} className="text-sm text-gray-600 flex gap-2"><span className="text-brand-green mt-0.5">•</span>{ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
