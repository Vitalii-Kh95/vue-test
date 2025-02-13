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
          ...themes['light'], // Retains default DaisyUI "neutral"
          primary: 'oklch(60% 0.08 250)', // Softer Purplish-Blue
          'primary-content': 'oklch(100% 0 0)', // White
          secondary: 'oklch(65% 0.05 185.08)',
          'secondary-content': 'oklch(100% 0.0144 185.08)'
          // accent: 'oklch(80% 0.12 40)', // Warm Golden Orange (Soft Contrast)
          // 'accent-content': 'oklch(10% 0.01 95)' // Near-Black for readability
        },
        'home-dark': {
          ...themes['dark'], // Retains default DaisyUI "neutral"
          primary: 'oklch(45% 0.08 250)', // Darker Purplish-Blue
          'primary-content': 'oklch(90% 0.01 95)', // Light Gray
          secondary: 'oklch(66% 0.06 185.08)', // Slightly Darker Cyan (Aligned with Blog)
          'secondary-content': 'oklch(98% 0.01 95)' // Near-White
          // accent: 'oklch(70% 0.15 40)', // Muted Deep Orange
          // 'accent-content': 'oklch(95% 0.005 95)' // Soft White
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
