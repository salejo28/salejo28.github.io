/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0f',
          light: '#12121a',
          card: '#1a1a24',
        },
        accent: {
          cyan: '#00d4aa',
          purple: '#7c3aed',
          amber: '#f59e0b',
        },
        border: '#27272a',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        blink: 'blink 1.5s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(50px, 50px) scale(1.1)' },
          '50%': { transform: 'translate(-30px, 100px) scale(0.9)' },
          '75%': { transform: 'translate(80px, -50px) scale(1.05)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 212, 170, 0.2)' },
          '50%': { boxShadow: '0 0 0 10px rgba(0, 212, 170, 0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent':
          'linear-gradient(135deg, #00d4aa 0%, #7c3aed 100%)',
        'gradient-accent-2':
          'linear-gradient(135deg, #7c3aed 0%, #f59e0b 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
