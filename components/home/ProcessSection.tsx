import Link from 'next/link'

const steps = [
  { num: '01', title: 'Initial Consultation', body: 'Tell us about your project — state, county, scope, and deadline. We respond the same business day.' },
  { num: '02', title: 'Scope & Proposal', body: 'We outline deliverables, timeline, and a clear fee structure. No ambiguity before we start.' },
  { num: '03', title: 'Field Execution', body: 'Our career landmen conduct courthouse research, title exams, leasing, or ROW work with precision.' },
  { num: '04', title: 'Delivery & Support', body: 'Final deliverables in your preferred format. We stand behind our work through drilling and production.' },
]

export default function ProcessSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-brand-navy)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 mb-14">
          <div className="lg:col-span-1">
            <span className="section-label" style={{ color: 'var(--color-brand-gold)' }}>How We Work</span>
            <h2
              className="leading-none text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'uppercase', letterSpacing: '0.02em' }}
            >
              Our Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
              From first call to final deliverable in four clear steps — no surprises.
            </p>
            <Link
              href="/contact"
              className="inline-flex mt-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', textDecoration: 'none' }}
            >
              Start a Project →
            </Link>
          </div>

          {steps.map(({ num, title, body }) => (
            <div
              key={num}
              className="p-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderTop: '2px solid var(--color-brand-gold)', border: '1px solid rgba(255,255,255,0.06)', borderTopWidth: '2px', borderTopColor: 'var(--color-brand-gold)' }}
            >
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(200,146,26,0.5)', marginBottom: '0.75rem' }}>{num}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', marginBottom: '0.75rem' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
