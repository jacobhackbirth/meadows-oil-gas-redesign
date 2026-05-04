'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

const utilityLinks = [
  { label: 'Associate Login', href: 'https://meadowsoil.redearthsystems.com/' },
  { label: 'AAPL', href: 'https://www.landman.org' },
  { label: 'OCAPL', href: 'https://www.ocapl.org' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(8px)' }}>
      <div className="container-max px-6 sm:px-8" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <Image src="/images/logo.png" alt="Meadows Oil & Gas Corp." width={52} height={52} style={{ objectFit: 'contain' }} />
        </Link>

        {/* Desktop center nav pill */}
        <nav className="hidden md:flex items-center" style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '9999px', padding: '0.3rem 0.4rem', gap: '0.1rem' }}>
          {navLinks.map(({ label, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.62rem', letterSpacing: '0.12em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  padding: '0.45rem 1rem', borderRadius: '9999px',
                  color: isActive ? '#000' : 'rgba(255,255,255,0.7)',
                  backgroundColor: isActive ? 'var(--color-brand-gold)' : 'transparent',
                  transition: 'all 0.2s',
                  fontWeight: isActive ? 700 : 400,
                }}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop utility links */}
        <div className="hidden md:flex items-center gap-5" style={{ borderLeft: '1px solid rgba(255,255,255,0.12)', paddingLeft: '1.5rem' }}>
          {utilityLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', textDecoration: 'none' }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        aria-label="Site navigation"
        style={{
          position: 'fixed', inset: 0, top: '4.5rem', backgroundColor: '#000', zIndex: 49,
          opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s', padding: '2rem 1.5rem',
        }}
      >
        <nav className="flex flex-col gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              tabIndex={mobileOpen ? 0 : -1}
              style={{
                fontFamily: 'var(--font-display)', fontSize: '1.75rem', letterSpacing: '0.06em',
                textTransform: 'uppercase', color: 'white', textDecoration: 'none',
                padding: '0.875rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-wrap gap-4 mt-5">
            {utilityLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={mobileOpen ? 0 : -1}
                style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
