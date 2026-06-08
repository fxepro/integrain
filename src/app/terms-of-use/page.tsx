export const metadata = { title: 'Terms of Use | Integrain Foundation' }
export default function TermsOfUse() {
  return (
    <>
      <section className="bg-brand-green-dark text-white py-16 px-4">
        <div className="max-w-3xl mx-auto"><h1 className="text-4xl font-bold">Terms of Use</h1></div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>
          {[
            { title: '1. Acceptance of Terms', body: 'By accessing and using the Integrain Foundation website, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our website.' },
            { title: '2. Use of the Website', body: 'You may use this website for lawful purposes only. You agree not to use the site in any way that violates applicable laws, infringes the rights of others, or restricts or inhibits anyone else\'s use of the website.' },
            { title: '3. Intellectual Property', body: 'All content on this website, including text, graphics, logos, and images, is the property of Integrain Foundation and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.' },
            { title: '4. Donations', body: 'Donations made through our website are voluntary and non-refundable except as required by law. We use donations to support our charitable mission as described on our website.' },
            { title: '5. Disclaimer of Warranties', body: 'This website is provided "as is" without any warranties, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses.' },
            { title: '6. Limitation of Liability', body: 'Integrain Foundation shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use this website.' },
            { title: '7. Governing Law', body: 'These Terms shall be governed by the laws of the State of California without regard to its conflict of law provisions.' },
            { title: '8. Contact', body: 'For questions about these Terms of Use, contact us at contact@integrainfoundation.org.' },
          ].map(s => (
            <div key={s.title} className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
