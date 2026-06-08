export const metadata = { title: 'Disasters | Integrain Foundation' }
const disasters2024 = [
  { num: 1, event: 'Flood in Sri Lanka', period: 'Oct 15–29, 2024' },
  { num: 2, event: 'Flood in Nepal', period: 'Sep 30–Oct 14, 2024' },
  { num: 3, event: 'Hurricane John in Mexico', period: 'Sep 30–Oct 14, 2024' },
  { num: 4, event: 'Flooding in Sudan', period: 'Sep 24–Oct 8, 2024' },
  { num: 5, event: 'Tropical Storm Helene (Cayman Islands)', period: 'Sep 24–Oct 8, 2024' },
  { num: 6, event: 'Fire in Argentina', period: 'Sep 23–Oct 7, 2024' },
  { num: 7, event: 'Fire in Peru', period: 'Sep 17–Oct 1, 2024' },
  { num: 8, event: 'Typhoon Yagi in Myanmar', period: 'Sep 12–26, 2024' },
  { num: 9, event: 'Typhoon Yagi in Thailand', period: 'Sep 12–26, 2024' },
  { num: 10, event: 'Flood in Nigeria', period: 'Sep 11–24, 2024' },
  { num: 11, event: 'Typhoon Yagi in Vietnam', period: 'Sep 11–25, 2024' },
  { num: 12, event: 'Fire in Bolivia', period: 'Sep 9–23, 2024' },
  { num: 13, event: 'Flood in India', period: 'Sep 3–17, 2024' },
]
export default function Disasters() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Natural Disasters</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">In the past years and months, the world experienced numerous disasters, many tied to extreme weather events — particularly floods and hurricanes.</p>
        </div>
      </section>
      <section className="section">
        <h2 className="text-2xl font-bold text-brand-green-dark mb-6">2024 Disaster Events</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-brand-green text-white">
              <tr>
                <th className="px-4 py-3 text-left font-medium">#</th>
                <th className="px-4 py-3 text-left font-medium">Event</th>
                <th className="px-4 py-3 text-left font-medium">Period</th>
              </tr>
            </thead>
            <tbody>
              {disasters2024.map((d, i) => (
                <tr key={d.num} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-gray-500">{d.num}</td>
                  <td className="px-4 py-3 text-gray-800 font-medium">{d.event}</td>
                  <td className="px-4 py-3 text-gray-500">{d.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-xs mt-4">Data represents reported disaster events. Source: Integrain Foundation Research.</p>
      </section>
    </>
  )
}
