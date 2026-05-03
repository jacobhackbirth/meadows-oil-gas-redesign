import Link from 'next/link'
import { Map, Layers } from 'lucide-react'

const items = [
  {
    icon: Map,
    title: 'GIS & Digital Mapping',
    body: 'Custom GIS deliverables including ownership maps, plat maps, lease boundary shapefiles, and pipeline corridor maps. Compatible with ArcGIS, QGIS, and standard E&P platforms.',
    tags: ['Shapefiles', 'Ownership Maps', 'Plat Maps', 'Lease Boundaries'],
  },
  {
    icon: Layers,
    title: 'Seismic Mapping Support',
    body: 'Seismic survey area research, permit support, and surface ownership identification for 2D/3D acquisition programs. Coordinating between geophysical crews and surface owners across the central plains.',
    tags: ['Survey Permitting', 'Surface Ownership', '2D/3D Support', 'Crew Coordination'],
  },
]

export default function TechnicalServices() {
  return (
    <div
      id="technical"
      className="section-padding"
      style={{ backgroundColor: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)', scrollMarginTop: '3rem' }}
    >
      <div className="container-max px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="section-label">Technical Services</span>
            <h2 className="section-title" style={{ color: '#000' }}>Mapping &amp; GIS</h2>
          </div>
          <Link
            href="/contact?service=GIS+%26+Mapping"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Request Mapping Work →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(({ icon: Icon, title, body, tags }) => (
            <div key={title} className="p-8" style={{ backgroundColor: '#f5f5f5', borderTop: '3px solid var(--color-brand-gold)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Icon size={20} style={{ color: 'var(--color-brand-gold)' }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#000', margin: 0 }}>{title}</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>{body}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} style={{ fontFamily: 'var(--font-display)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', border: '1px solid rgba(0,0,0,0.12)', padding: '0.2rem 0.5rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
