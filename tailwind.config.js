// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // enables class-based dark mode
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'charity-yellow': 'hsl(var(--charity-yellow))',
        'charity-orange': 'hsl(var(--charity-orange))',
        'charity-warm': 'hsl(var(--charity-warm))',
      },
    },
  },
  safelist: [
    'text-foreground',
    'bg-background',
    'border-border',
    'charity-gradient',
    'charity-text-gradient',
  ],
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.border-border': {
          borderColor: 'hsl(var(--border))',
        },
        '.text-foreground': {
          color: 'hsl(var(--foreground))',
        },
        '.bg-background': {
          backgroundColor: 'hsl(var(--background))',
        },
      })
    }
  ],
}
