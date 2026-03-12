import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',
          light: '#ff8533',
          dark: '#cc5500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],   // for body text
        serif: ['Merriweather', 'serif'],                // for headings
        mono: ['Fira Code', 'monospace'],               // for code blocks
      },
    },
  },
  plugins: [],
};

export default config;