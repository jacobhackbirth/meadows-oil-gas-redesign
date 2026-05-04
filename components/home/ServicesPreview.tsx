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
    <section className="section-padding" style={{ backgroundColor: '#000' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="mb-12">
          <span className="section-label" style={{ color: 'var(--color-brand-gold)' }}>Our Services</span>
          <h2 className="section-title text-white">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ title, body, tags, href }) => (
            <Link key={title} href={href} style={{ textDecoration: 'none', display: 'block' }}>
              <div
                className="h-full flex flex-col"
                style={{
                  backgroundColor: '#111',
                  borderRadius: '10px',
                  padding: '2rem',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  border: '1px solid rgba(255,255,255,0.04)',
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.78rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--color-brand-gold)', margin: '0 0 0.75rem',
                }}>
                  {title}
                </h3>
                <div style={{ width: '2rem', height: '2px', backgroundColor: 'var(--color-brand-gold)', marginBottom: '1rem', opacity: 0.7 }} />
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(200,200,200,0.75)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
                  {body}
                </p>
                <p className="mt-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
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
