export default function LinkedInStrip() {
  return (
    <div style={{ backgroundColor: '#111', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-max px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
          Follow Meadows Oil &amp; Gas on LinkedIn
        </p>
        <a
          href="https://www.linkedin.com/company/meadowsoil"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2"
          style={{
            fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--color-brand-gold)', textDecoration: 'none',
            border: '1px solid rgba(200,146,26,0.35)', padding: '0.5rem 1.25rem',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          Follow on LinkedIn ↗
        </a>
      </div>
    </div>
  )
}
