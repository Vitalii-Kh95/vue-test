import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...themes['light'],
          secondary: 'oklch(65% 0.05 185.08)',
          'secondary-content': 'oklch(100% 0.0144 185.08)'
        },
        dark: {
          ...themes['dark'],
          secondary: 'oklch(66.82% 0.0544 185.08)',
          'secondary-content': 'oklch(6.6% 0.05 185.08)'
        }
      }
    ]
  }
};
