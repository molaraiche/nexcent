import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xsm: '275px',
      },
    },
    colors: {
      text: {
        900: '#18191F',
        300: '#D9DBE1',
      },
      neutral: {
        black: '#263238',
        D_Grey: '#4D4D4D',
        Grey: '#717171',
        L_Grey: '#89939E',
        'Grey-blue': '#ABBED1',
        Silver: '#F5F7FA',
        white: '#fff',
      },
      primary: '#4CAF4F',
      secondary: '#263238',
      info: '#2194f3',
      shade: {
        1: '#43A046',
        2: '#388E3B',
        3: '#237D31',
        4: '#1B5E1F',
        5: '#103E13',
      },
      tint: {
        1: '#66BB69',
        2: '#81C784',
        3: '#A5D6A7',
        4: '#C8E6C9',
        5: '#E8F5E9',
      },
    },
  },
  plugins: [],
};
export default config;
