import Link from 'next/link'

const steps = [
  { num: '01', title: 'Initial Consultation', body: 'You reach out via our contact form or by phone. We listen to your project needs, timeline, and geographic scope — no obligation.' },
  { num: '02', title: 'Scope & Proposal', body: 'Within 24 hours we define the project scope, assign the right landmen, and provide a clear timeline and deliverable outline.' },
  { num: '03', title: 'Field Execution', body: 'Our team begins courthouse research, ownership verification, and landowner contacts — keeping you informed throughout the process.' },
  { num: '04', title: 'Delivery & Support', body: 'You receive a complete, accurate deliverable package. We remain available for follow-on curative work, questions, or the next project.' },
]

export default function ProcessSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-brand-navy)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 items-end">
          <div>
            <span className="section-label" style={{ color: 'var(--color-brand-gold)' }}>Our Process</span>
            <h2
              className="leading-none text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', letterSpacing: '0.02em' }}
            >
              How We Work
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {steps.map(({ num, title, body }) => (
            <div
              key={num}
              className="p-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderTop: '2px solid var(--color-brand-gold)', border: '1px solid rgba(255,255,255,0.06)', borderTopWidth: '2px', borderTopColor: 'var(--color-brand-gold)' }}
            >
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(200,146,26,0.5)', marginBottom: '0.75rem' }}>
                Step {num}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', marginBottom: '0.75rem' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>{body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-6">
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'var(--color-brand-gold)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
            }}
          >
            Start a Project <span>→</span>
          </Link>
          <Link
            href="/about/process"
            style={{
              fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
            }}
          >
            See Full Process <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
