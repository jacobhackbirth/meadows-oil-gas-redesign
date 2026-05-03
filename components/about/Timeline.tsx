interface TimelineEvent {
  year: string
  title: string
  description: string
}

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div style={{ position: 'absolute', left: '3.5rem', top: 0, bottom: 0, width: '1px', backgroundColor: 'rgba(0,0,0,0.08)' }} />

      <div className="flex flex-col gap-0">
        {events.map(({ year, title, description }, i) => (
          <div key={`${year}-${i}`} className="flex gap-6 pb-8">
            {/* Year badge */}
            <div className="shrink-0 flex flex-col items-center" style={{ width: '7rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600,
                  letterSpacing: '0.05em', color: 'var(--color-brand-gold)', lineHeight: 1,
                  backgroundColor: '#fff', padding: '0 0.5rem', position: 'relative', zIndex: 1,
                }}
              >
                {year}
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 pb-8" style={{ borderBottom: i < events.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}>
              <h3
                style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#000', marginBottom: '0.5rem' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
