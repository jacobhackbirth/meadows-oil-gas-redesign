const navItems = [
  { label: 'Core Services', href: '#core-services' },
  { label: 'Technical & Mapping', href: '#technical' },
  { label: 'Wind Leasing', href: '#wind' },
  { label: 'FAQ', href: '#faq' },
]

export default function ServicesNav() {
  return (
    <div style={{ backgroundColor: '#111', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: '4rem', zIndex: 30 }}>
      <div className="container-max px-6 sm:px-8">
        <div className="flex items-center gap-0 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              style={{
                fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none', padding: '1rem 1.25rem',
                whiteSpace: 'nowrap', borderRight: '1px solid rgba(255,255,255,0.06)',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
