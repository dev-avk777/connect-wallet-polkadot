import type { Config } from 'tailwindcss'
import { palette } from './src/styles/palette'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ...palette,
      },
      borderRadius: {
        '8': '8px',
        '10': '10px',
      },
    },
  },
  plugins: [],
} satisfies Config
