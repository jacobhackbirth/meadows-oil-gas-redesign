const clients = [
  { label: 'Independent Operators', desc: 'Fast, accurate land work when your drilling window is tight.' },
  { label: 'Private Equity & A&D', desc: 'Diligence support for acquisitions and portfolio transactions.' },
  { label: 'Pipeline Companies', desc: 'ROW negotiations, easements, and surface use agreements.' },
  { label: 'Mineral Investors', desc: 'Ownership verification, title research, and due diligence.' },
  { label: 'Wind Developers', desc: 'Leasing aggregation and surface agreements for renewable projects.' },
  { label: 'Large E&P Companies', desc: 'Overflow capacity on leasing campaigns and title programs.' },
]

export default function ClientTypesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#000' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="mb-10">
          <span className="section-label" style={{ color: 'var(--color-brand-gold)' }}>Who We Serve</span>
          <h2 className="leading-none text-white" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Built for Operators
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          {clients.map(({ label, desc }) => (
            <div
              key={label}
              className="p-8"
              style={{ backgroundColor: '#000' }}
            >
              <div style={{ width: '2rem', height: '2px', backgroundColor: 'var(--color-brand-gold)', marginBottom: '1rem', opacity: 0.7 }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', marginBottom: '0.5rem' }}>
                {label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
