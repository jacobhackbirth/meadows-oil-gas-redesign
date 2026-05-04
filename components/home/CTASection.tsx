import Link from 'next/link'

export default function CTASection() {
  return (
    <section style={{ backgroundColor: '#000', borderTop: '1px solid rgba(200,146,26,0.1)' }}>
      <div className="container-max px-6 sm:px-8" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="leading-none text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', textTransform: 'uppercase', letterSpacing: '0.02em', fontWeight: 700 }}
            >
              Built for Speed.
              <br />
              <span style={{ fontWeight: 300 }}>Proven by Results.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                backgroundColor: 'var(--color-brand-gold)', color: '#000',
                padding: '1.1rem 2.5rem', borderRadius: '9999px', textDecoration: 'none',
              }}
            >
              Contact Us <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
