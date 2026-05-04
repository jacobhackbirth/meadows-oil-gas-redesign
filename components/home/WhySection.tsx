'use client'

import { useState } from 'react'

const pillars = [
  {
    num: '01',
    title: 'Experience',
    body: 'Over 17 years navigating Oklahoma mineral rights, title chains, and leasehold acquisitions. We have worked every major Oklahoma basin.',
    items: ['Panhandle Eastern & Western', 'Anadarko Basin', 'Arkoma Basin', 'South Central Oklahoma'],
  },
  {
    num: '02',
    title: 'Precision',
    body: "Title opinions and curative work built on exhaustive courthouse research. We don't cut corners on chain-of-title.",
    items: ['County deed and mortgage records', 'Probate and estate research', 'Curative drafting', 'Run sheet preparation'],
  },
  {
    num: '03',
    title: 'Reach',
    body: 'Based in Oklahoma City with the capability to handle domestic projects across the midcontinent and foreign projects on request.',
    items: ['Oklahoma City headquarters', 'Domestic project coverage', 'International capability'],
  },
  {
    num: '04',
    title: 'Trust',
    body: 'AAPL and OCAPL members. Every engagement built on transparency, clear deliverables, and direct communication.',
    items: ['AAPL member', 'OCAPL member', 'Fixed-scope project agreements', 'Direct principal contact'],
  },
]

export default function WhySection() {
  const [active, setActive] = useState(0)
  const p = pillars[active]

  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-0">

          {/* Sidebar nav */}
          <div className="lg:col-span-1 lg:pr-10" style={{ borderRight: '1px solid rgba(0,0,0,0.08)' }}>
            <span className="section-label" style={{ display: 'block', marginBottom: '1.5rem' }}>Why Meadows</span>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {pillars.map((p, i) => (
                <button
                  key={p.num}
                  onClick={() => setActive(i)}
                  style={{
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: active === i ? 'var(--color-brand-gold)' : 'rgba(0,0,0,0.4)',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderLeft: `2px solid ${active === i ? 'var(--color-brand-gold)' : 'transparent'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {p.num} {p.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 lg:pl-12">
            <div style={{ borderTop: '2px solid var(--color-brand-gold)', paddingTop: '1.5rem' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'rgba(0,0,0,0.06)', lineHeight: 1, marginBottom: '0.5rem' }}>
                {p.num}
              </span>
              <h3
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#000', marginBottom: '1rem' }}
              >
                {p.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.7, color: 'var(--color-brand-gray)', marginBottom: '1.5rem', maxWidth: '38rem', textTransform: 'none', letterSpacing: 'normal' }}>
                {p.body}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {p.items.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#000', textTransform: 'none', letterSpacing: 'normal' }}>
                    <span style={{ color: 'var(--color-brand-gold)', fontWeight: 700 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
