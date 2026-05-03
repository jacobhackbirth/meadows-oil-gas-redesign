import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

const reasons = [
  { title: 'No Learning Curve', body: 'Career landmen with 10+ years each — your project gets expertise, not on-the-job training.' },
  { title: 'Fast Turnaround', body: 'We accelerate timelines through efficiency without sacrificing the accuracy operators depend on.' },
  { title: 'Complex Ownership', body: 'Heirship chains, curative backlogs, multi-section units — we\'ve handled it all across the central plains.' },
  { title: 'Technology Driven', body: 'Latest digital tools for title research, ownership reporting, and GIS mapping for faster delivery.' },
  { title: 'Transparent Pricing', body: 'Clear fee structures before work begins. No surprise invoices. References available on request.' },
  { title: 'AAPL & OCAPL Members', body: 'Active professional affiliations mean our team operates under a recognized ethical framework.' },
]

export default function WhySection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="section-label">Why Meadows</span>
            <h2 className="section-title" style={{ color: '#000' }}>What Sets<br />Us Apart</h2>
            <p className="section-subtitle text-sm" style={{ maxWidth: '28rem' }}>
              Since 2009, we&apos;ve built our reputation on precision, integrity, and the ability to move fast when operators need it most.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 mt-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-brand-gold)', textDecoration: 'none' }}
            >
              About Us →
            </Link>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ title, body }) => (
              <div key={title} className="flex gap-4">
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--color-brand-gold)' }} />
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#000', marginBottom: '0.4rem' }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
