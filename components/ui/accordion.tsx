interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
  headingLevel?: 'h2' | 'h3'
}

export default function Accordion({ items, headingLevel: Heading = 'h3' }: AccordionProps) {
  return (
    <div className="space-y-2">
      {items.map(({ title, content }) => (
        <details
          key={title}
          className="bg-white"
          style={{ borderLeft: '3px solid transparent', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}
        >
          <summary className="flex items-center justify-between gap-4 cursor-pointer select-none px-6 py-5" style={{ listStyle: 'none' }}>
            <Heading style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#000', fontWeight: 400, margin: 0 }}>
              {title}
            </Heading>
            <span className="shrink-0" style={{ color: 'var(--color-brand-gold)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', lineHeight: 1 }} aria-hidden="true">+</span>
          </summary>
          <div className="px-6 pb-6">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-brand-gray)', fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 'normal', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem' }}>
              {content}
            </p>
          </div>
        </details>
      ))}
    </div>
  )
}
