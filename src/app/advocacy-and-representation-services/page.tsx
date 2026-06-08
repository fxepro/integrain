import Link from 'next/link'
export const metadata = { title: 'Advocacy And Representation Services | Integrain Foundation' }
export default function Page() {
  return (
    <>
      <section className="hero-gradient text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Advocacy And Representation Services</h1>
        </div>
      </section>
      <section className="section">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 mb-8">This page is being updated with the latest content. Please check back soon or contact us for more information.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/" className="btn-secondary">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}
