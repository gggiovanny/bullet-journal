// @ts-nocheck

import type { Config } from 'tailwindcss';

const deepBlue = '#1A0933';
const melon = '#ED9E8F';
const creamyMelon = '#FFDBC3';
const softMelocoton = '#FEF6E2';
const white = '#FFFFFF';

function addColorVars({ addBase, theme }) {
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
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
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
        'button-inner-shadow': 'inset 0 4px 8px 0 rgb(0 0 0 / 0.2)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [addColorVars(), require('tailwindcss-animate')],
};
export default config;
