import AnimatedCounter from '@/components/ui/AnimatedCounter'

const stats = [
  { value: 15, suffix: '+', label: 'Years in Business' },
  { value: 3, suffix: '', label: 'Primary States' },
  { value: 10, suffix: '+', label: 'Avg. Years Experience' },
  { value: 2, suffix: '', label: 'Professional Affiliations' },
]

export default function StatsBar() {
  return (
    <div style={{ backgroundColor: '#111', borderTop: '1px solid rgba(200,146,26,0.12)', borderBottom: '1px solid rgba(200,146,26,0.12)' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className="py-8 flex flex-col items-center text-center"
              style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 600, color: 'var(--color-brand-gold)', lineHeight: 1,
                }}
              >
                <AnimatedCounter value={value} suffix={suffix} />
              </span>
              <span
                className="mt-1"
                style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
