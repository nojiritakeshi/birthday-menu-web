import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      // 背景色
      backgroundColor: {
        main: '#f4f4e9',
        sub: '#685144'
      },
      borderColor: {
        main: '#c3bb9c'
      }
    }
  },
  plugins: []
};
export default config;
