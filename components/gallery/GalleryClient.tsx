'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const placeholderItems = [
  { id: 1, title: 'Field Operations — Oklahoma', category: 'Operations', color: 'rgba(200,146,26,0.15)' },
  { id: 2, title: 'Courthouse Research — Payne County', category: 'Title', color: 'rgba(200,146,26,0.08)' },
  { id: 3, title: 'Leasing Campaign — Kansas', category: 'Leasing', color: 'rgba(200,146,26,0.12)' },
  { id: 4, title: 'Pipeline ROW — Kingfisher County', category: 'ROW', color: 'rgba(200,146,26,0.18)' },
  { id: 5, title: 'Wind Farm Scouting — Western OK', category: 'Wind', color: 'rgba(45,125,58,0.15)' },
  { id: 6, title: 'GIS Mapping — Multi-County', category: 'GIS', color: 'rgba(200,146,26,0.1)' },
  { id: 7, title: 'Title Opinion Delivery — Texas', category: 'Title', color: 'rgba(200,146,26,0.14)' },
  { id: 8, title: 'Mineral Ownership Survey', category: 'Leasing', color: 'rgba(200,146,26,0.09)' },
  { id: 9, title: 'Seismic Permit Support', category: 'GIS', color: 'rgba(200,146,26,0.16)' },
]

export default function GalleryClient() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])

  const prev = useCallback(() => {
    setActive(i => i === null ? null : i === 0 ? placeholderItems.length - 1 : i - 1)
  }, [])

  const next = useCallback(() => {
    setActive(i => i === null ? null : i === placeholderItems.length - 1 ? 0 : i + 1)
  }, [])

  useEffect(() => {
    if (active !== null) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [active])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close, prev, next])

  return (
    <>
      {/* Page header */}
      <div className="section-padding" style={{ backgroundColor: '#000', background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,146,26,0.07) 0%, transparent 60%), #000' }}>
        <div className="container-max px-6 sm:px-8">
          <span className="section-label">Visual Documentation</span>
          <h1 className="text-white leading-none" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Field Gallery
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
            Visual documentation from field operations, courthouse research, and project execution across Oklahoma, Kansas, and Texas.
          </p>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container-max px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {placeholderItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                tabIndex={0}
                className="group text-left"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                aria-label={`View: ${item.title}`}
              >
                <div
                  style={{
                    backgroundColor: '#111',
                    aspectRatio: '4/3',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.5rem',
                    background: `radial-gradient(ellipse at 30% 30%, ${item.color} 0%, transparent 70%), #111`,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.2s',
                  }}
                >
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-display)', fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(200,146,26,0.7)', border: '1px solid rgba(200,146,26,0.3)', padding: '0.2rem 0.5rem' }}>
                    {item.category}
                  </div>
                  <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(200,146,26,0.3)', marginBottom: '0.75rem' }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'lightboxFadeIn 0.2s ease' }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={placeholderItems[active].title}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
            style={{ position: 'absolute', left: '1rem', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <ChevronLeft size={32} />
          </button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '56rem', width: '100%', margin: '0 2rem' }}>
            <div style={{ aspectRatio: '4/3', background: `radial-gradient(ellipse at 30% 30%, ${placeholderItems[active].color} 0%, transparent 70%), #111`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                {placeholderItems[active].category}
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'white' }}>
                {placeholderItems[active].title}
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
                {active + 1} / {placeholderItems.length}
              </span>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
            style={{ position: 'absolute', right: '1rem', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <ChevronRight size={32} />
          </button>
          <button
            onClick={close}
            aria-label="Close gallery"
            style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>
      )}
    </>
  )
}
