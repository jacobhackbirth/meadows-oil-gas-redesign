import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center',
        backgroundColor: '#000',
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
      {/* Decorative lines */}
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
            Land Brokerage &amp; Energy Services
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
            Expert Land
            <br />
            <span style={{ color: 'var(--color-brand-gold)', fontWeight: 300 }}>Services.</span>
            <br />
            Done Right.
          </h1>

          <p
            className="hero-animate mt-7 max-w-xl leading-relaxed"
            style={{
              color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              textTransform: 'none', letterSpacing: 'normal',
              animationDelay: '0.4s',
            }}
          >
            Since 2009, Meadows Oil &amp; Gas has delivered precise, dependable land and title solutions
            across Oklahoma, Kansas, Texas, and beyond. Career landmen with 10+ years of experience —
            no learning curve.
          </p>

          <div className="hero-animate flex flex-wrap gap-4 mt-9" style={{ animationDelay: '0.55s' }}>
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                backgroundColor: 'var(--color-brand-gold)', color: '#000',
                padding: '1rem 2rem', borderRadius: '9999px', textDecoration: 'none',
              }}
            >
              Request a Quote →
            </Link>
            <Link
              href="/services"
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                backgroundColor: 'transparent', color: 'white',
                padding: '1rem 2rem', border: '1.5px solid rgba(255,255,255,0.25)',
                borderRadius: '9999px', textDecoration: 'none',
              }}
            >
              Our Services
            </Link>
          </div>

          {/* State coverage */}
          <div className="hero-animate flex flex-wrap gap-2 mt-10" style={{ animationDelay: '0.7s' }}>
            {['Oklahoma', 'Kansas', 'Texas', '+ More'].map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: s === '+ More' ? 'rgba(255,255,255,0.25)' : 'rgba(200,146,26,0.75)',
                  border: `1px solid ${s === '+ More' ? 'rgba(255,255,255,0.08)' : 'rgba(200,146,26,0.3)'}`,
                  padding: '0.25rem 0.625rem', borderRadius: '2px',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          animation: 'scrollBounce 2s ease-in-out infinite',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
        }}
      >
        <div style={{ width: '1px', height: '2.5rem', background: 'linear-gradient(to bottom, transparent, rgba(200,146,26,0.5))' }} />
      </div>
    </section>
  )
}
