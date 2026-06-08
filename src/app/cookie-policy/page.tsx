export const metadata = { title: 'Cookie Policy | Integrain Foundation' }
export default function CookiePolicy() {
  return (
    <>
      <section className="bg-brand-green-dark text-white py-16 px-4">
        <div className="max-w-3xl mx-auto"><h1 className="text-4xl font-bold">Cookie Policy</h1></div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500 mb-8">Last updated: January 2025</p>
          {[
            { title: 'What Are Cookies?', body: 'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.' },
            { title: 'How We Use Cookies', body: 'We use cookies to understand how you use our website, remember your preferences, improve your experience, and analyze site traffic. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted).' },
            { title: 'Types of Cookies We Use', body: 'Essential Cookies: Necessary for the website to function properly. Analytics Cookies: Help us understand how visitors interact with our website. Preference Cookies: Remember your settings and preferences. Marketing Cookies: Used to deliver relevant advertisements (if applicable).' },
            { title: 'Managing Cookies', body: 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit.' },
            { title: 'Contact', body: 'If you have questions about our use of cookies, please contact us at contact@integrainfoundation.org.' },
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
