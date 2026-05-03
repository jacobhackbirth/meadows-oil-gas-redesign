import Link from 'next/link'
import { Wind } from 'lucide-react'

export default function WindLeasingBanner() {
  return (
    <div
      id="wind"
      className="section-padding"
      style={{
        backgroundColor: '#111',
        borderTop: '3px solid var(--color-brand-green)',
        scrollMarginTop: '3rem',
      }}
    >
      <div className="container-max px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Wind size={24} style={{ color: 'var(--color-brand-green)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-green)' }}>
                Renewable Energy
              </span>
            </div>
            <h2
              className="text-white leading-none mb-5"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', textTransform: 'uppercase', letterSpacing: '0.02em' }}
            >
              Wind Leasing Services
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal', maxWidth: '36rem' }}>
              As the energy landscape shifts, Meadows Oil &amp; Gas is ready to support wind developers,
              landowners, and operators through wind lease negotiations, acreage aggregation, easements,
              and surface use agreements across the central and southern plains.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Lease Negotiation', 'Acreage Aggregation', 'Surface Agreements', 'Easements', 'OK & KS Coverage'].map(tag => (
                <span
                  key={tag}
                  style={{ fontFamily: 'var(--font-display)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-brand-green)', border: '1px solid rgba(45,125,58,0.35)', padding: '0.25rem 0.625rem' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/contact?service=Wind+Leasing"
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                backgroundColor: 'var(--color-brand-green)', color: '#fff',
                padding: '0.875rem 2rem', borderRadius: '9999px', textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Discuss a Wind Project →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { stat: '2017', label: 'Wind Practice Founded' },
              { stat: 'OK+KS', label: 'Primary States' },
              { stat: '100%', label: 'Experienced Landmen' },
              { stat: 'Fast', label: 'Turnaround Guarantee' },
            ].map(({ stat, label }) => (
              <div key={label} className="p-5" style={{ backgroundColor: 'rgba(45,125,58,0.08)', border: '1px solid rgba(45,125,58,0.2)', borderTop: '2px solid var(--color-brand-green)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-brand-green)', lineHeight: 1, marginBottom: '0.4rem' }}>{stat}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
