import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'custom-bg': "url('/BackgroundImage.webp')",
        'contact-bg': "url('/contact.jpeg')"
      },
      colors: {
        primary: '#244e26',
        secondary: '#173e2b',
        primaryLight: '#3c185e',
        primaryDark: '#12071f',
        secondaryLight: '#9d4db8',
        secondaryDark: '#62247a',
        complementary: '#0a1d31',
        hoverBg: '#5e2a75',
        hoverText: '#ffffff'
      },
      
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '2.5rem' }], // Example: 36px
        'h2': ['1.875rem', { lineHeight: '2.25rem' }], // Example: 30px
        'h3': ['1.5rem', { lineHeight: '2rem' }], // Example: 24px
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        typing: 'typing 4s steps(40, end) forwards',
      },
    }
  },
  plugins: [],
};

export default config;
