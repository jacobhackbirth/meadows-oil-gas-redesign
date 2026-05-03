interface PageHeaderProps {
  label?: string
  title: string
  subtitle?: string
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <div
      className="section-padding"
      style={{
        backgroundColor: '#000',
        background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(200,146,26,0.07) 0%, transparent 60%), #000',
      }}
    >
      <div className="container-max px-6 sm:px-8">
        {label && <span className="section-label">{label}</span>}
        <h1
          className="text-white leading-none"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', textTransform: 'uppercase', letterSpacing: '0.02em' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl leading-relaxed" style={{ color: 'rgba(156,163,175,1)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
