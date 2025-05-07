import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';
console.log(themes.light);
console.log(themes.dark);
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme$="-dark"]'],
  theme: {
    extend: {
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
        3000: '3000ms',
        4000: '4000ms',
        5000: '5000ms'
      },
      colors: {
        muted: 'oklch(var(--muted) / <alpha-value>)',
        background: 'oklch(var(--background) / <alpha-value>)'
      },
      fontFamily: {
        cursive: ['"Pacifico"', 'cursive']
      },
      backgroundImage: {
        radial: 'radial-gradient(var(--tw-gradient-stops))'
      },
      gridColumn: {
        'span-18': 'span 18 / span 18'
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        'blog-light': {
          ...themes['light'],
          primary: 'oklch(76.76% 0.184 183.61)',
          accent: 'oklch(49.12% 0.3096 275.75)',
          secondary: 'oklch(65% 0.05 185.08)',
          'secondary-content': 'oklch(100% 0.0144 185.08)',
          '--muted': '98.3% 0.0123 317.74',
          '--background': '62.22% 0.0791 303.93'
        },
        'blog-dark': {
          ...themes['dark'],
          primary: 'oklch(74.51% 0.167 183.61)',
          accent: 'oklch(65.69% 0.196 275.75)',
          secondary: 'oklch(66.82% 0.0544 185.08)',
          'secondary-content': 'oklch(6.6% 0.05 185.08)',
          '--muted': '98.3% 0.0123 317.74'
        },
        'home-light': {
          ...themes['light'], // Retains default DaisyUI "neutral"
          primary: 'oklch(76.76% 0.184 183.61)',
          accent: 'oklch(46.14% 0.0598 283.81)',
          'accent-content': 'oklch(25% 0.02 283.81)',
          wasprimary: 'oklch(60% 0.08 250)', // Softer Purplish-Blue
          'primary-content': 'oklch(100% 0 0)', // White
          secondary: 'oklch(65% 0.05 185.08)',
          'secondary-content': 'oklch(25% 0.02 185.08)',
          // muted: 'oklch(98.19% 0.0145 322.34)'
          '--muted': '98.3% 0.0123 317.74',
          '--background': '94.93% 0.0594 181.85'
          // accent: 'oklch(80% 0.12 40)', // Warm Golden Orange (Soft Contrast)
          // 'accent-content': 'oklch(10% 0.01 95)' // Near-Black for readability
        },
        'home-dark': {
          ...themes['dark'], // Retains default DaisyUI "neutral"
          primary: 'oklch(74.51% 0.167 183.61)',
          accent: 'oklch(65.69% 0.196 275.75)',
          wasprimary: 'oklch(45% 0.08 250)', // Darker Purplish-Blue
          'primary-content': 'oklch(90% 0.01 95)', // Light Gray
          '--muted': '98.3% 0.0123 317.74',
          secondary: 'oklch(66% 0.06 185.08)', // Slightly Darker Cyan (Aligned with Blog)
          'secondary-content': 'oklch(98% 0.01 95)' // Near-White
          // accent: 'oklch(70% 0.15 40)', // Muted Deep Orange
          // 'accent-content': 'oklch(95% 0.005 95)' // Soft White
        }
      }
    ]
  }
};
