export const metadata = { title: 'Privacy Policy | Integrain Foundation' }
export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-brand-green-dark text-white py-16 px-4">
        <div className="max-w-3xl mx-auto"><h1 className="text-4xl font-bold">Privacy Policy</h1></div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>
          {[
            { title: 'Information We Collect', body: 'We collect information you provide directly to us, such as when you donate, volunteer, contact us, or subscribe to our newsletter. This may include your name, email address, phone number, mailing address, and payment information. We also collect information automatically when you use our website, including log data, device information, and cookies.' },
            { title: 'How We Use Your Information', body: 'We use the information we collect to process donations and transactions, communicate with you about our programs and activities, send newsletters and updates (with your consent), respond to your comments and questions, improve our website and services, and comply with legal obligations.' },
            { title: 'Information Sharing', body: 'We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.' },
            { title: 'Data Security', body: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.' },
            { title: 'Your Rights', body: 'You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications at any time. To exercise these rights, contact us at contact@integrainfoundation.org.' },
            { title: 'Contact Us', body: 'If you have questions about this Privacy Policy, please contact us at contact@integrainfoundation.org or by mail at 30026 Alicia Parkway #654, Laguna Niguel, CA 92677.' },
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
