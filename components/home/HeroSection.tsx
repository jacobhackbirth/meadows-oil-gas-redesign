import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: `
          radial-gradient(ellipse 120% 80% at 70% 50%, rgba(200,146,26,0.06) 0%, transparent 60%),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.012) 40px,
            rgba(255,255,255,0.012) 41px
          ),
          #050505
        `,
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '20%', left: 0, right: 0, height: '1px', backgroundColor: 'rgba(200,146,26,0.05)' }} />
        <div style={{ position: 'absolute', top: '80%', left: 0, right: 0, height: '1px', backgroundColor: 'rgba(200,146,26,0.05)' }} />
        <div style={{ position: 'absolute', left: '60%', top: 0, bottom: 0, width: '1px', backgroundColor: 'rgba(200,146,26,0.04)' }} />
      </div>

      <div className="container-max px-6 sm:px-8 w-full" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="max-w-3xl">
          <span
            className="hero-animate section-label"
            style={{ animationDelay: '0.1s', color: 'var(--color-brand-gold)' }}
          >
            Oklahoma Land Services
          </span>

          <h1
            className="hero-animate text-white leading-none mt-3"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              animationDelay: '0.2s',
            }}
          >
            <span style={{ display: 'block' }}>Trusted</span>
            <span style={{ display: 'block', color: 'var(--color-brand-gold)', fontWeight: 300 }}>Land &amp;</span>
            <span style={{ display: 'block' }}>Title Services</span>
          </h1>

          <p
            className="hero-animate mt-5"
            style={{
              color: 'var(--color-brand-gold)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              animationDelay: '0.35s',
            }}
          >
            Serving Operators Since 2009
          </p>

          <p
            className="hero-animate mt-4 max-w-xl leading-relaxed"
            style={{
              color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              textTransform: 'none', letterSpacing: 'normal',
              animationDelay: '0.4s',
            }}
          >
            Precise, dependable land and title solutions that empower our clients to move with confidence.
          </p>

          <div className="hero-animate flex flex-wrap gap-4 mt-9" style={{ animationDelay: '0.55s' }}>
            <Link
              href="/services"
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                backgroundColor: 'var(--color-brand-gold)', color: '#000',
                padding: '1rem 2rem', borderRadius: '9999px', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
              }}
            >
              Our Services <span>→</span>
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                backgroundColor: 'transparent', color: 'white',
                padding: '1rem 2rem', border: '1.5px solid rgba(255,255,255,0.25)',
                borderRadius: '9999px', textDecoration: 'none',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
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
