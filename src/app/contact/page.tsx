import ContactForm from '@/components/forms/ContactForm'

export const metadata = { title: 'Contact | Integrain Foundation' }

export default function Contact() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Get In Touch</h1>
          <p className="text-green-100 text-xl max-w-xl mx-auto">Let's create more informed, equitable, and just societies — together.</p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-brand-green-dark mb-6">Contact Information</h2>
            <div className="space-y-5">
              {[
                { icon: '📞', label: 'Phone', value: '719-300-4045', href: 'tel:7193004045' },
                { icon: '✉️', label: 'Email', value: 'contact@integrainfoundation.org', href: 'mailto:contact@integrainfoundation.org' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-800">{item.label}</p>
                    <a href={item.href} className="text-brand-green hover:underline text-sm">{item.value}</a>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">📍</div>
                <div>
                  <p className="font-semibold text-gray-800">Addresses</p>
                  <p className="text-gray-500 text-sm mt-1">30026 Alicia Parkway #654<br />Laguna Niguel, CA 92677</p>
                  <p className="text-gray-500 text-sm mt-2">13395 Voyager Pkwy Ste 130<br />Colorado Springs, CO 80921</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">🔒 Confidential Contact</h3>
              <p className="text-blue-700 text-sm mb-3">Need to report something sensitive? Use our confidential form to connect and report privately.</p>
              <a href="/confidential-contact" className="text-blue-600 font-medium text-sm hover:underline">Use Confidential Form →</a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-green-dark mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
