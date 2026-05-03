import Link from 'next/link'

const siteLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-max px-6 sm:px-8" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white', marginBottom: '1rem' }}>
              Meadows <span style={{ color: 'var(--color-brand-gold)' }}>Oil &amp; Gas</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal', maxWidth: '22rem' }}>
              Expert land brokerage, title opinions, leasehold acquisitions, right-of-way, and wind leasing across Oklahoma, Kansas, Texas, and beyond. Serving operators since 2009.
            </p>
            <div className="flex items-center gap-5 mt-5">
              <a href="https://www.landman.org" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,146,26,0.6)', textDecoration: 'none', border: '1px solid rgba(200,146,26,0.2)', padding: '0.25rem 0.625rem' }}>AAPL</a>
              <a href="https://www.ocapl.org" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,146,26,0.6)', textDecoration: 'none', border: '1px solid rgba(200,146,26,0.2)', padding: '0.25rem 0.625rem' }}>OCAPL</a>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1rem' }}>Navigation</div>
            <nav className="flex flex-col gap-3">
              {siteLinks.map(({ label, href }) => (
                <Link key={href} href={href} style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1rem' }}>Contact</div>
            <div className="flex flex-col gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
              <p style={{ color: 'rgba(156,163,175,1)' }}>609 S. Kelly Ave., Suite G3<br />Edmond, OK 73003</p>
              <a href="tel:4052858500" style={{ color: 'var(--color-brand-gold)', textDecoration: 'none' }}>405.285.8500</a>
              <p style={{ color: 'rgba(156,163,175,0.6)' }}>Fax: 405.285.8598</p>
              <a href="mailto:info@meadowsoilandgas.com" style={{ color: 'var(--color-brand-gold)', textDecoration: 'none' }}>info@meadowsoilandgas.com</a>
            </div>
            <a
              href="https://www.linkedin.com/company/meadowsoil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} Meadows Oil &amp; Gas Corporation. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>
            Edmond, OK · Founded 2009
          </p>
        </div>
      </div>
    </footer>
  )
}
