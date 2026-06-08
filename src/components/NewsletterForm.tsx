'use client'

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-3 max-w-md mx-auto"
      onSubmit={e => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
      />
      <button type="submit" className="btn-primary text-sm py-2.5 px-5">
        Subscribe
      </button>
    </form>
  )
}
