import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts } from '@/data/posts'

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) return { title: 'Post Not Found' }
  return { title: `${post.title} | Integrain Foundation` }
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch { return dateStr }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()

  // Split content into paragraphs for readable rendering
  const paragraphs = post.content.split(/(?<=\.\s{2,})|(?<=\?\s{2,})|(?<=!\s{2,})/).filter(p => p.trim().length > 50)

  const related = posts.filter(p => 
    p.slug !== post.slug && 
    p.categories.some(c => (post.categories as readonly string[]).includes(c))
  ).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-green-300 hover:text-white text-sm transition-colors">← Blog</Link>
            {post.categories.map(cat => (
              <span key={cat} className="text-xs font-medium px-2 py-0.5 bg-green-700 text-green-200 rounded-full">{cat}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <p className="text-green-300 text-sm">{formatDate(post.date)}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {post.image && (
            <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8 object-cover max-h-80" />
          )}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            {paragraphs.length > 1 ? paragraphs.map((para, i) => (
              <p key={i}>{para.trim()}</p>
            )) : (
              <p>{post.content}</p>
            )}
          </div>

          {/* Share / CTA */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <p className="font-semibold text-gray-800 mb-1">Support Our Mission</p>
                <p className="text-gray-500 text-sm">Help us continue this work in communities that need it most.</p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Link href="/donate" className="btn-gold text-sm py-2 px-4">Donate</Link>
                <Link href="/volunteer" className="btn-secondary text-sm py-2 px-4">Volunteer</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-brand-cream py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-brand-green-dark mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map(r => (
                <Link key={r.id} href={`/blog/${r.slug}`} className="card group hover:-translate-y-0.5 transition-transform">
                  <div className="flex items-center gap-1 mb-2">
                    {r.categories.map(cat => (
                      <span key={cat} className="text-xs font-medium px-2 py-0.5 bg-green-100 text-brand-green rounded-full">{cat}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm group-hover:text-brand-green transition-colors leading-snug">{r.title}</h3>
                  <p className="text-xs text-gray-400 mt-2">{formatDate(r.date)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
