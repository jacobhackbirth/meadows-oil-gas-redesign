import Link from 'next/link'

export default function CTASection() {
  return (
    <section style={{ backgroundColor: '#3a3a3a', borderTop: '1px solid rgba(200,146,26,0.25)' }}>
      <div className="container-max px-6 sm:px-8" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="leading-none text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', textTransform: 'uppercase', letterSpacing: '0.02em', fontWeight: 700 }}
            >
              Built for Speed.
            </h2>
            <p
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 3vw, 2.5rem)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'rgba(255,255,255,0.85)', fontWeight: 400, marginTop: '0.25rem' }}
            >
              Proven by Results.
            </p>
          </div>

          <div className="flex lg:justify-end">
            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 0,
                backgroundColor: 'var(--color-brand-gold)', borderRadius: '9999px',
                textDecoration: 'none', overflow: 'hidden',
              }}
            >
              <span style={{ padding: '1rem 1.75rem', fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000' }}>
                Contact Us
              </span>
              <span style={{ width: '3.25rem', height: '3.25rem', backgroundColor: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
