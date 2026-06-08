export const metadata = { title: 'Tax Advantages | Integrain Foundation' }
export default function TaxAdvantages() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Tax Advantages of Giving</h1>
          <p className="text-green-100 text-xl max-w-2xl mx-auto">By using proper tax planning strategies, charitable contributions can reduce three kinds of federal taxes: income, capital gains, and estate taxes.</p>
        </div>
      </section>
      <section className="bg-brand-cream py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Reduce Income Tax', 'Reduce Capital Gains Tax', 'Reduce Estate Taxes'].map(t => (
            <div key={t} className="bg-white rounded-xl p-4 text-center shadow-sm">
              <p className="font-bold text-brand-green">{t}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="max-w-3xl mx-auto space-y-10">
          {[
            { title: 'Charitable Contributions and Income Tax Savings', body: 'Giving to charity can significantly reduce your federal income tax liability while supporting causes you care about. By strategically planning your charitable contributions, you can align your philanthropic goals with effective tax-saving strategies. Charitable contributions made to qualifying organizations are tax-deductible if you itemize deductions on your federal tax return. Depending on your income level and the type of donation, you can deduct up to 60% of your adjusted gross income (AGI) for cash gifts and up to 30% for gifts of appreciated assets, such as stocks or real estate.' },
            { title: 'Cash Donations', body: 'Cash is the simplest form of giving, and it offers immediate tax benefits. Ensure the organization is a qualified 501(c)(3) to claim your deduction. Keep records of all cash donations, including bank statements and receipts from the organization.' },
            { title: 'Appreciated Asset Donations', body: 'Donating appreciated assets — such as stocks, real estate, or mutual funds — that you\'ve held for more than a year can be particularly tax-efficient. You can deduct the full fair market value of the asset and avoid paying capital gains tax on the appreciation. This strategy allows you to give more while paying less in taxes.' },
            { title: 'Qualified Charitable Distributions (QCDs)', body: 'If you are 70½ or older, you can make a Qualified Charitable Distribution directly from your IRA to a qualified charity. QCDs are excluded from your taxable income, which can help reduce your adjusted gross income (AGI) and potentially lower your tax bracket.' },
          ].map(s => (
            <div key={s.title} className="card border-l-4 border-brand-gold">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-bold text-blue-900 mb-2">⚠️ Consult a Tax Professional</h3>
            <p className="text-blue-700 text-sm">Tax laws are complex and change frequently. We strongly recommend consulting with a qualified tax advisor or financial planner before making large charitable gifts to ensure you maximize your tax benefits.</p>
          </div>
        </div>
      </section>
    </>
  )
}
