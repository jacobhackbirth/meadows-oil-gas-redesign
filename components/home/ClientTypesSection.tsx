const clients = [
  {
    title: 'E&P Operators',
    desc: 'When you need leasehold acquired, title cleared, and project ready — fast. We run lean and deliver on operator timelines without large-firm overhead.',
  },
  {
    title: 'Land Investors & Acquisitions',
    desc: 'For mineral buyers, royalty acquirers, and portfolio assemblers who need clean chain-of-title research, accurate ownership runs, and fast due diligence.',
  },
  {
    title: 'Renewable Energy Developers',
    desc: 'Wind project developers who need a land partner with real experience aggregating footprints, negotiating wind leases, and coordinating surface use across multiple landowners.',
  },
  {
    title: 'Midstream & Infrastructure',
    desc: 'Pipeline operators and infrastructure companies requiring right-of-way acquisition and surface use agreements across multi-county project areas.',
  },
]

export default function ClientTypesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#000' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
          <div className="lg:col-span-1">
            <span className="section-label" style={{ color: 'var(--color-brand-gold)' }}>Who We Serve</span>
            <h2 className="leading-none text-white" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              Our Clients
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
          {clients.map(({ title, desc }) => (
            <div
              key={title}
              className="p-8"
              style={{ backgroundColor: '#000' }}
            >
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'white', marginBottom: '0.75rem' }}>
                {title}
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
