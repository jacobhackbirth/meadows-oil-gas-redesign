import Link from 'next/link'

const steps = [
  { num: '01', title: 'Initial Consultation', body: 'You reach out via our contact form or by phone. We listen to your project needs, timeline, and geographic scope — no obligation.' },
  { num: '02', title: 'Scope & Proposal', body: 'Within 24 hours we define the project scope, assign the right landmen, and provide a clear timeline and deliverable outline.' },
  { num: '03', title: 'Field Execution', body: 'Our team begins courthouse research, ownership verification, and landowner contacts — keeping you informed throughout the process.' },
  { num: '04', title: 'Delivery & Support', body: 'You receive a complete, accurate deliverable package. We remain available for follow-on curative work, questions, or the next project.' },
]

export default function ProcessSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#000' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="mb-12">
          <span className="section-label" style={{ color: 'var(--color-brand-gold)' }}>Our Process</span>
          <h2
            className="text-white leading-none"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', textTransform: 'uppercase', letterSpacing: '0.02em', fontWeight: 700 }}
          >
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {steps.map(({ num, title, body }, i) => (
            <div
              key={num}
              style={{
                padding: '2.5rem 2rem 2rem',
                borderRight: i < steps.length - 1 ? '1px solid rgba(200,146,26,0.2)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 700,
                color: 'rgba(200,146,26,0.18)', lineHeight: 1, marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}>
                {num}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white', marginBottom: '0.75rem' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem' }}>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 0,
              backgroundColor: 'var(--color-brand-gold)', borderRadius: '9999px',
              textDecoration: 'none', overflow: 'hidden',
            }}
          >
            <span style={{ padding: '0.85rem 1.5rem', fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000' }}>
              Start a Project
            </span>
            <span style={{ width: '2.75rem', height: '2.75rem', backgroundColor: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 700, fontSize: '1rem', flexShrink: 0 }}>
              →
            </span>
          </Link>
          <Link
            href="/about/process"
            style={{
              fontFamily: 'var(--font-display)', fontSize: '0.62rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textDecoration: 'none',
            }}
          >
            See Full Process →
          </Link>
        </div>
      </div>
    </section>
  )
}
