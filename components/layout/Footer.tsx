import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How We Work', href: '/about/process' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Careers', href: '/careers' },
  { label: 'Resources', href: '/resources' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Associate Login ↗', href: 'https://meadowsoil.redearthsystems.com/' },
  { label: 'AAPL ↗', href: 'https://www.landman.org' },
  { label: 'OCAPL ↗', href: 'https://www.ocapl.org' },
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/company/meadowsoil' },
]

const serviceLinks = [
  { label: 'All Services', href: '/services' },
  { label: 'Brokerage & Land', href: '/services/brokerage' },
  { label: 'GIS & Mapping', href: '/services/technical' },
  { label: 'Wind Leasing', href: '/services/wind' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-max px-6 sm:px-8" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <Image src="/images/logo.png" alt="Meadows Oil & Gas Corp." width={56} height={56} style={{ objectFit: 'contain' }} />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal', maxWidth: '20rem', marginBottom: '1.25rem' }}>
              Comprehensive land services built for speed, accuracy, and reliability. Trusted since 2009.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.landman.org" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,146,26,0.8)', textDecoration: 'none', border: '1px solid rgba(200,146,26,0.3)', padding: '0.3rem 0.75rem' }}>AAPL Member</a>
              <a href="https://www.ocapl.org" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,146,26,0.8)', textDecoration: 'none', border: '1px solid rgba(200,146,26,0.3)', padding: '0.3rem 0.75rem' }}>OCAPL Member</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', marginBottom: '1.25rem' }}>Navigation</div>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map(({ label, href }) => (
                <Link key={href} href={href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', textTransform: 'none', letterSpacing: 'normal' }}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', marginBottom: '1.25rem' }}>Services</div>
            <nav className="flex flex-col gap-2.5">
              {serviceLinks.map(({ label, href }) => (
                <Link key={href} href={href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', textTransform: 'none', letterSpacing: 'normal' }}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', marginBottom: '1.25rem' }}>Contact</div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <span style={{ color: 'var(--color-brand-gold)', marginTop: '2px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(156,163,175,1)', lineHeight: 1.6, textTransform: 'none', letterSpacing: 'normal' }}>
                  <strong style={{ color: 'white', display: 'block', marginBottom: '0.15rem' }}>Meadows Oil &amp; Gas Corp.</strong>
                  609 S. Kelly Ave., Suite G3<br />Edmond, OK 73003
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span style={{ color: 'var(--color-brand-gold)', marginTop: '2px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 5.55 5.55l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', textTransform: 'none', letterSpacing: 'normal' }}>
                  <a href="tel:4052858500" style={{ color: 'var(--color-brand-gold)', textDecoration: 'none', display: 'block' }}>405.285.8500</a>
                  <span style={{ color: 'rgba(156,163,175,0.6)' }}>Fax: 405.285.8598</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <span style={{ color: 'var(--color-brand-gold)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <a href="mailto:info@meadowsoilandgas.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-brand-gold)', textDecoration: 'none', textTransform: 'none', letterSpacing: 'normal' }}>
                  info@meadowsoilandgas.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
            © {new Date().getFullYear()} Meadows Oil &amp; Gas Corporation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
