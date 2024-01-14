import { colors, nextui } from '@nextui-org/theme'
import { COLORS } from './src/constants'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/button.js',
    './node_modules/@nextui-org/theme/dist/components/spinner.js',
  ],
  theme: {
    extend: {
      colors: {
        'main-darkest': COLORS.mainDarkest,
        'main-darker': COLORS.mainDarker,
        'main-dark': COLORS.mainDark,
        primary: COLORS.primary,
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: COLORS.mainDarkest,
            primary: COLORS.primary,
          },
        },
      },
    }),
  ],
}
