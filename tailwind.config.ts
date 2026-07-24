import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        // Full horizontal nav only appears above this; compact menu below. Tested 1024–1280.
        nav: '1180px',
      },
      colors: {
        // Restrained ink-on-paper palette with a single, muted accent.
        paper: '#fbfaf7',
        surface: '#ffffff',
        ink: {
          DEFAULT: '#1a1a18',
          soft: '#3a3a36',
          muted: '#6b6b64',
          faint: '#9a9a90',
        },
        line: '#e6e3db',
        accent: {
          DEFAULT: '#3a5a5c', // deep slate-teal, used sparingly
          soft: '#5c7d7f',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
        content: '72rem',
      },
      fontSize: {
        display: ['clamp(2.6rem, 5.5vw, 4.5rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        title: ['clamp(1.9rem, 3.4vw, 2.9rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
      },
      letterSpacing: {
        label: '0.16em',
      },
    },
  },
  plugins: [],
};

export default config;
