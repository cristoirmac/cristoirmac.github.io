import { ImageResponse } from 'next/og';

export const alt = 'Chris McFadden — CTO & Engineering Executive';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Typographic OG image, generated at build time (no external assets, no headshot).
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fbfaf7',
        padding: '80px',
        fontFamily: 'Georgia, serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 12,
            backgroundColor: '#1a1a18',
            color: '#fbfaf7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          CM
        </div>
        <div
          style={{ fontSize: 26, color: '#3a5a5c', letterSpacing: 2, textTransform: 'uppercase' }}
        >
          Chief Technology Officer
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: 76,
            color: '#1a1a18',
            lineHeight: 1.05,
            fontWeight: 500,
            maxWidth: 980,
          }}
        >
          Technology leadership for moments of scale and transformation.
        </div>
      </div>

      <div style={{ fontSize: 30, color: '#3a3a36' }}>
        Chris McFadden · Enterprise SaaS · Applied AI · Platform &amp; Reliability
      </div>
    </div>,
    size,
  );
}
