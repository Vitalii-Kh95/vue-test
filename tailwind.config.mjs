import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';
console.log(themes.light);
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
        3000: '3000ms',
        4000: '4000ms',
        5000: '5000ms'
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        'blog-light': {
          ...themes['light'],
          secondary: 'oklch(65% 0.05 185.08)',
          'secondary-content': 'oklch(100% 0.0144 185.08)'
        },
        'blog-dark': {
          ...themes['dark'],
          secondary: 'oklch(66.82% 0.0544 185.08)',
          'secondary-content': 'oklch(6.6% 0.05 185.08)'
        },
        'home-light': {
          primary: 'oklch(70% 0.2 145)',
          'primary-content': 'oklch(15% 0.03 145)',
          secondary: 'oklch(80% 0.1 90)',
          'secondary-content': 'oklch(20% 0.05 90)',
          accent: 'oklch(70% 0.15 220)',
          'accent-content': 'oklch(15% 0.03 220)',
          neutral: 'oklch(90% 0.02 95)',
          'neutral-content': 'oklch(20% 0.02 95)',
          error: 'oklch(70% 0.3 25)',
          'danger-content': 'oklch(15% 0.2 25)',
          info: 'oklch(80% 0.15 260)',
          'info-content': 'oklch(20% 0.03 260)',
          'base-100': 'oklch(100% 0 0)',
          'base-content': 'oklch(15% 0.03 0)'
        },
        'home-dark': {
          primary: 'oklch(60% 0.25 145)',
          'primary-content': 'oklch(85% 0.05 145)',
          secondary: 'oklch(55% 0.2 90)',
          'secondary-content': 'oklch(85% 0.04 90)',
          accent: 'oklch(65% 0.2 220)',
          'accent-content': 'oklch(85% 0.05 220)',
          neutral: 'oklch(20% 0.02 95)',
          'neutral-content': 'oklch(85% 0.02 95)',
          danger: 'oklch(55% 0.35 25)',
          'danger-content': 'oklch(85% 0.2 25)',
          info: 'oklch(65% 0.2 260)',
          'info-content': 'oklch(85% 0.03 260)',
          'base-100': 'oklch(10% 0 0)',
          'base-content': 'oklch(85% 0.02 0)'
        },
        'projects-light': {
          ...themes['light'],
          secondary: 'oklch(65% 0.05 185.08)',
          'secondary-content': 'oklch(100% 0.0144 185.08)'
        },
        'projects-dark': {
          ...themes['dark'],
          secondary: 'oklch(66.82% 0.0544 185.08)',
          'secondary-content': 'oklch(6.6% 0.05 185.08)'
        }
      }
    ]
  }
};
