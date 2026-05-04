export default function LinkedInStrip() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-max px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
          Follow our work
        </p>
        <a
          href="https://www.linkedin.com/company/meadowsoil"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2"
          style={{
            fontFamily: 'var(--font-display)', fontSize: '0.62rem', letterSpacing: '0.1em',
            textTransform: 'none', color: 'white', textDecoration: 'none',
            backgroundColor: '#0a66c2', padding: '0.45rem 1rem', borderRadius: '9999px',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          Meadows Oil &amp; Gas
        </a>
      </div>
    </div>
  )
}
