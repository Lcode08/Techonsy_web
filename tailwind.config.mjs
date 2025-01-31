import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 2s ease-out',
        'fade-in-right': 'fadeInRight 2s ease-out',
        'fade-in-left': 'fadeInLeft 2s ease-out',
        'fade-in-down': 'fadeInDown 2s ease-out',
        'logo-fade-in': 'fadeInRoll 1.5s ease-out, bounce 0.5s ease-in-out 1.5s forwards'
  
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInRoll: {
          '0%': { opacity: 0, transform: 'translateX(-100px) rotate(-360deg)'},
          '80%': {opacity: 1, transform: 'translateX(0px) rotate(0deg)'},
          '100%': {transform: 'translateX(0px) rotate(0deg) scale(1.1)' }
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%' : {
            transform: 'translateY(-10px)'
          }
        }
      },
    },
  },
  plugins: [],
};

