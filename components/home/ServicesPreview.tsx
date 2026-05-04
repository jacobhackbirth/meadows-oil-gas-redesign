import Link from 'next/link'

const services = [
  {
    title: 'Leasehold Acquisitions',
    body: 'Securing oil and gas leases across Oklahoma mineral estates. We handle negotiation, drafting, and execution.',
    tags: 'Bonus negotiations · Paid-up leases · Ratifications',
    href: '/services',
  },
  {
    title: 'Mineral & Leasehold Ownership',
    body: 'Comprehensive ownership reports tracing mineral and leasehold interests through chain of title.',
    tags: 'Run sheets · Division order title opinions · Ownership schedules',
    href: '/services',
  },
  {
    title: 'Title Services',
    body: 'Title opinions and curative work founded on rigorous courthouse research and abstract review.',
    tags: 'Drilling title opinions · Curative drafting · Title examination',
    href: '/services',
  },
  {
    title: 'Right-of-Ways',
    body: 'Pipeline, road, and utility right-of-way acquisition across Oklahoma surface estates.',
    tags: 'Easement negotiation · Damage settlements · ROW agent services',
    href: '/services',
  },
  {
    title: 'Wind Leasing',
    body: 'Wind and renewable energy lease acquisition and landowner negotiation for wind project development.',
    tags: 'Wind lease negotiation · Landowner outreach · Project area consolidation',
    href: '/services',
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="section-label">Our Services</span>
            <h2 className="section-title" style={{ color: '#000' }}>What We Do</h2>
          </div>
          <Link
            href="/services"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ title, body, tags, href }) => (
            <Link key={title} href={href} style={{ textDecoration: 'none', display: 'block' }}>
              <div
                className="h-full p-8 flex flex-col"
                style={{
                  backgroundColor: '#fff',
                  borderTop: '3px solid var(--color-brand-gold)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: 'var(--color-brand-gold)', margin: '0 0 0.75rem',
                  }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
                  {body}
                </p>
                <p className="mt-5 text-xs leading-relaxed" style={{ color: 'rgba(0,0,0,0.35)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
                  {tags}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
