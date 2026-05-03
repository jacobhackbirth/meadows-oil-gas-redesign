import Link from 'next/link'
import { FileText, MapPin, Wind, Map } from 'lucide-react'

const services = [
  {
    icon: FileText,
    number: '01',
    title: 'Leasing & Acquisitions',
    body: 'Expert leasehold acquisition across Oklahoma, Kansas, Texas, and beyond. Ownership reporting, due diligence, and regulatory support built for speed.',
    href: '/services#core-services',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Title Services',
    body: 'Title opinions, curative work, and ownership reporting delivered by career landmen. Accurate, fast, and referenced by major operators.',
    href: '/services#core-services',
  },
  {
    icon: MapPin,
    number: '03',
    title: 'Right-of-Way',
    body: 'Full-service ROW acquisition — easements, surface agreements, and negotiations handled by experienced professionals who know the terrain.',
    href: '/services#core-services',
  },
  {
    icon: Wind,
    number: '04',
    title: 'Wind Leasing',
    body: 'Dedicated wind leasing practice serving landowners, developers, and operators across the central plains renewable energy transition.',
    href: '/services#wind',
  },
  {
    icon: Map,
    number: '05',
    title: 'GIS & Mapping',
    body: 'High-accuracy GIS mapping and seismic support. Custom shapefiles, ownership maps, and digital deliverables for every project type.',
    href: '/services#technical',
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="section-label">What We Do</span>
            <h2 className="section-title" style={{ color: '#000' }}>Core Services</h2>
          </div>
          <Link
            href="/services"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, number, title, body, href }) => (
            <Link
              key={title}
              href={href}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                className="h-full p-8 flex flex-col"
                style={{
                  backgroundColor: '#fff',
                  borderTop: '3px solid var(--color-brand-gold)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'rgba(0,0,0,0.06)', lineHeight: 1, marginBottom: '0.75rem' }}>{number}</span>
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} style={{ color: 'var(--color-brand-gold)' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#000', margin: 0 }}>{title}</h3>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>{body}</p>
                <span className="mt-5 text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-brand-gold)' }}>Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
