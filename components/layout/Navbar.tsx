'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: 'rgba(0,0,0,0.97)',
        borderBottom: scrolled ? '1px solid rgba(200,146,26,0.18)' : '1px solid rgba(255,255,255,0.06)',
        transition: 'border-color 0.3s',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="container-max px-6 sm:px-8" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white', textDecoration: 'none',
          }}
        >
          Meadows <span style={{ color: 'var(--color-brand-gold)' }}>Oil &amp; Gas</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.15em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: pathname.startsWith(href) ? 'var(--color-brand-gold)' : 'rgba(255,255,255,0.7)',
                transition: 'color 0.2s',
                borderBottom: pathname.startsWith(href) ? '1px solid var(--color-brand-gold)' : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: '#000', backgroundColor: 'var(--color-brand-gold)',
              padding: '0.5rem 1.25rem', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700,
            }}
          >
            Contact Us
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        aria-label="Site navigation"
        style={{
          position: 'fixed', inset: 0, top: '4rem', backgroundColor: '#000', zIndex: 49,
          opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s', padding: '2rem 1.5rem',
        }}
      >
        <nav className="flex flex-col gap-1">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              tabIndex={mobileOpen ? 0 : -1}
              style={{
                fontFamily: 'var(--font-display)', fontSize: '1.75rem', letterSpacing: '0.06em',
                textTransform: 'uppercase', color: pathname.startsWith(href) ? 'var(--color-brand-gold)' : 'white',
                textDecoration: 'none', padding: '0.875rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            tabIndex={mobileOpen ? 0 : -1}
            style={{
              marginTop: '1.5rem', fontFamily: 'var(--font-display)', fontSize: '0.8rem',
              letterSpacing: '0.15em', textTransform: 'uppercase', color: '#000',
              backgroundColor: 'var(--color-brand-gold)', padding: '1rem 2rem',
              textDecoration: 'none', fontWeight: 700, textAlign: 'center', borderRadius: '9999px',
            }}
          >
            Contact Us →
          </Link>
          <a
            href="tel:4052858500"
            tabIndex={mobileOpen ? 0 : -1}
            className="flex items-center gap-2 mt-4"
            style={{
              fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
            }}
          >
            <Phone size={14} /> 405.285.8500
          </a>
        </nav>
      </div>
    </header>
  )
}
