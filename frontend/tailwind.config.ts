import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "tablet": "680px",
      "desktop": "1000px",
      "desktopLG":"1140px"
    },
    colors: {
      "bodyPurple": "#EDD8F3",
      "darkPink": "#43184E",
      "lightPurple": "#F0EBFA",
      "darkPurple": "#1F0F3D",
      "darkerPurple":"#49238F"
    }
  },
  plugins: [],
}
export default config