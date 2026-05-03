const testimonials = [
  {
    quote: 'Meadows Oil & Gas delivered a complex multi-section title opinion faster than any firm we\'ve worked with. Accurate, thorough, and no back-and-forth needed.',
    name: 'Operations Manager',
    company: 'Oklahoma Independent Operator',
  },
  {
    quote: 'We used Meadows on a tight acquisition timeline. Their ownership run was clean, properly formatted, and exactly what our engineers needed. Would hire again without hesitation.',
    name: 'A&D Manager',
    company: 'Midcontinent E&P Company',
  },
  {
    quote: 'Their ROW team handled a multi-county pipeline project across Oklahoma and Kansas. Professional, courteous landmen who know how to work with surface owners.',
    name: 'Project Manager',
    company: 'Pipeline Operator',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f5f5f5', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="mb-10 text-center">
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Client Feedback</span>
          <h2 className="section-title" style={{ color: '#000' }}>What Operators Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, company }) => (
            <blockquote
              key={name}
              className="flex flex-col p-8"
              style={{ backgroundColor: '#fff', borderTop: '3px solid var(--color-brand-gold)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
            >
              <p
                className="flex-1 text-sm leading-relaxed mb-6"
                style={{ color: '#333', fontFamily: 'var(--font-sans)', fontStyle: 'italic', textTransform: 'none', letterSpacing: 'normal' }}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <footer>
                <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--color-brand-gold)', marginBottom: '0.75rem', opacity: 0.6 }} />
                <cite className="not-italic">
                  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000' }}>{name}</span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-brand-gray)', marginTop: '0.25rem' }}>{company}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
