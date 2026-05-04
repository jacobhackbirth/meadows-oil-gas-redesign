const stats = [
  { value: '2009', label: 'Established' },
  { value: '10+', label: 'Yrs Per Landman' },
  { value: 'OK · KS · TX', label: '& Beyond' },
  { value: '3', label: 'Core Services' },
]

export default function StatsBar() {
  return (
    <div style={{ backgroundColor: '#111', borderTop: '1px solid rgba(200,146,26,0.12)', borderBottom: '1px solid rgba(200,146,26,0.12)' }}>
      <div className="container-max px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className="py-8 flex flex-col items-center text-center"
              style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 600, color: 'var(--color-brand-gold)', lineHeight: 1,
                  letterSpacing: value.length > 4 ? '0.04em' : '0',
                }}
              >
                {value}
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
