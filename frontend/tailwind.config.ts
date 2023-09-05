import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      "desktop": "640px",
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