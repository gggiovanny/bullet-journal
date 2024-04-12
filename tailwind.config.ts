import type { Config } from 'tailwindcss';

const deepBlue = '#1A0933';
const melon = '#ED9E8F';
const creamyMelon = '#FFDBC3';
const softMelocoton = '#FEF6E2';
const white = '#FFFFFF';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-almarai)'],
      },
      colors: {
        // Color names. Only to be used in branded elements
        'deep-blue': deepBlue,
        melon: melon,
        'creamy-melon': creamyMelon,
        'soft-melocoton': softMelocoton,
        white: white,
        // Colors by usage. Use these by default
        'background-color': softMelocoton,
        'surface-color': creamyMelon,
        'text-color': deepBlue,
        'text-color-alt': melon,
        'text-color-placeholder': creamyMelon,
        'icon-color': melon,
        'icon-color-alt': deepBlue,
        // Colors by herarchy
        primary: softMelocoton,
        secondary: creamyMelon,
      },
    },
  },
  plugins: [],
};
export default config;
