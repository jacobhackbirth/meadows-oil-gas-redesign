'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="hidden md:flex items-center justify-center"
      style={{
        position: 'fixed', bottom: '2rem', right: '1.5rem', zIndex: 40,
        width: '2.5rem', height: '2.5rem', borderRadius: '9999px',
        backgroundColor: 'var(--color-brand-gold)', color: '#000',
        border: 'none', cursor: 'pointer',
        boxShadow: '0 4px 16px rgba(200,146,26,0.35)',
      }}
    >
      <ArrowUp size={16} />
    </button>
  )
}
