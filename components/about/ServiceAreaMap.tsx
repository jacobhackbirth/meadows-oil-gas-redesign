'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const PRIMARY = new Set(['Oklahoma', 'Kansas', 'Texas'])
const EXTENDED = new Set([
  'Colorado', 'New Mexico', 'Arkansas', 'Missouri',
  'Nebraska', 'Louisiana', 'Wyoming', 'North Dakota',
  'South Dakota', 'Montana',
])

export default function ServiceAreaMap() {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; name: string } | null>(null)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <ComposableMap
        projection="geoAlbersUsa"
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name: string = geo.properties.name
              const isPrimary = PRIMARY.has(name)
              const isExtended = EXTENDED.has(name)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(evt) => {
                    if (isPrimary || isExtended) {
                      setTooltip({ x: evt.clientX, y: evt.clientY, name })
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    default: {
                      fill: isPrimary
                        ? 'rgba(200,146,26,0.7)'
                        : isExtended
                        ? 'rgba(200,146,26,0.2)'
                        : 'rgba(255,255,255,0.07)',
                      stroke: 'rgba(0,0,0,0.3)',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: isPrimary ? 'rgba(200,146,26,0.9)' : isExtended ? 'rgba(200,146,26,0.35)' : 'rgba(255,255,255,0.07)',
                      stroke: 'rgba(0,0,0,0.3)',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    pressed: { outline: 'none' },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div
          style={{
            position: 'fixed',
            left: Math.min(tooltip.x + 12, (typeof window !== 'undefined' ? window.innerWidth : 800) - 160),
            top: tooltip.y - 40,
            backgroundColor: '#000',
            border: '1px solid rgba(200,146,26,0.4)',
            padding: '0.35rem 0.75rem',
            pointerEvents: 'none',
            zIndex: 100,
          }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brand-gold)' }}>
            {tooltip.name}
          </span>
          {PRIMARY.has(tooltip.name) && (
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>Primary</span>
          )}
        </div>
      )}
    </div>
  )
}
