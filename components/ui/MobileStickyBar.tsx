import Link from 'next/link'
import { Phone, MessageSquare } from 'lucide-react'

export default function MobileStickyBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex"
      style={{ borderTop: '1px solid rgba(200,146,26,0.2)', backgroundColor: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(8px)', height: '3.5rem' }}
    >
      <a
        href="tel:4052858500"
        className="flex-1 flex items-center justify-center gap-2"
        style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', borderRight: '1px solid rgba(255,255,255,0.08)' }}
      >
        <Phone size={14} />
        Call
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2"
        style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#000', backgroundColor: 'var(--color-brand-gold)', textDecoration: 'none', fontWeight: 700 }}
      >
        <MessageSquare size={14} />
        Contact
      </Link>
    </div>
  )
}
