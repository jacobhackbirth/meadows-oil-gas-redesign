import Link from 'next/link'

export default function CTASection() {
  return (
    <section style={{ backgroundColor: '#000', borderTop: '1px solid rgba(200,146,26,0.1)' }}>
      <div className="container-max px-6 sm:px-8" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="section-label" style={{ color: 'var(--color-brand-gold)' }}>Ready to Start?</span>
            <h2
              className="leading-none text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', textTransform: 'uppercase', letterSpacing: '0.02em', fontWeight: 300 }}
            >
              Accurate Land Work.
              <br />
              <span style={{ fontWeight: 700 }}>Done Right.</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
              If you need fast, accurate land work from landmen who have done it for over a decade —
              we&apos;re ready. Describe your project and we&apos;ll respond the same business day.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3"
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                backgroundColor: 'var(--color-brand-gold)', color: '#000',
                padding: '1.1rem 2.5rem', borderRadius: '9999px', textDecoration: 'none',
              }}
            >
              Request a Quote →
            </Link>
            <a
              href="tel:4052858500"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}
            >
              or call 405.285.8500
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
