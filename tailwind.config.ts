// @ts-nocheck

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
        italic: ['var(--font-arapey)'], // for italics
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
        'text-color-dim': creamyMelon,
        'icon-color': melon,
        'icon-color-alt': deepBlue,
        // Colors by herarchy
        primary: softMelocoton,
        secondary: creamyMelon,
      },
      fontSize: {
        '6xl': '4rem',
      },
      boxShadow: {
        'button-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
export default config;
