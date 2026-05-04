import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url("/images/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.75) 55%, rgba(5,5,5,0.1) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.75) 0%, rgba(0,0,0,0) 50%)' }} />

      <div className="container-max px-6 sm:px-8 w-full" style={{ position: 'relative', zIndex: 1, paddingTop: '9rem', paddingBottom: '6rem' }}>
        <div className="max-w-2xl">

          {/* Pill label */}
          <div
            className="hero-animate"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '9999px', padding: '0.35rem 0.875rem', marginBottom: '1.75rem',
              animationDelay: '0.1s',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-brand-gold)', display: 'block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
              Oklahoma Land Services
            </span>
          </div>

          <h1
            className="hero-animate text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              fontWeight: 700,
              animationDelay: '0.2s',
              lineHeight: 0.95,
            }}
          >
            <span style={{ display: 'block' }}>Trusted</span>
            <span style={{ display: 'block' }}>Land &amp;</span>
            <span style={{ display: 'block', color: 'var(--color-brand-gold)' }}>Title Services</span>
          </h1>

          <p
            className="hero-animate mt-6"
            style={{
              color: 'white', fontFamily: 'var(--font-display)',
              fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 600, animationDelay: '0.32s',
            }}
          >
            Serving Operators Since 2009
          </p>

          <p
            className="hero-animate mt-3 max-w-md leading-relaxed"
            style={{
              color: 'rgba(200,200,200,0.85)', fontFamily: 'var(--font-sans)',
              fontSize: '1rem', textTransform: 'none', letterSpacing: 'normal',
              animationDelay: '0.4s',
            }}
          >
            Precise, dependable land and title solutions that empower our clients to move with confidence.
          </p>

          <div className="hero-animate flex flex-wrap gap-4 mt-9" style={{ animationDelay: '0.52s' }}>
            {/* Gold pill button with arrow circle */}
            <Link
              href="/services"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 0,
                backgroundColor: 'var(--color-brand-gold)', borderRadius: '9999px',
                textDecoration: 'none', overflow: 'hidden',
              }}
            >
              <span style={{
                padding: '0.9rem 1.5rem',
                fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000',
              }}>
                Our Services
              </span>
              <span style={{
                width: '3rem', height: '3rem', backgroundColor: 'rgba(0,0,0,0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#000', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0,
              }}>
                →
              </span>
            </Link>

            {/* Outline pill button */}
            <Link
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '0.9rem 1.75rem',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '9999px', textDecoration: 'none',
                fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          zIndex: 1,
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, rgba(200,146,26,0.5), transparent)', animation: 'scrollBounce 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}
