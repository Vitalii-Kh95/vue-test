import { ref, computed, watch } from 'vue';
import router from '@/router';

// Initialize colorMode with value from localStorage BEFORE component mounting
// This prevents the flash of incorrect theme on page load
const getInitialColorMode = () => {
  // Try to load from localStorage first
  const stored = localStorage.getItem('my-color-mode');
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }

  // Fall back to system preference if available
  if (typeof window !== 'undefined') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  // Default fallback
  return 'light';
};

// Initialize with the proper value right away
const colorMode = ref(getInitialColorMode());

export function useTheme() {
  // Set theme immediately on script execution
  const applyTheme = (mode, prefix = 'home') => {
    const finalTheme = `${prefix}-${mode}`;
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', finalTheme);
    }
  };

  // Get initial route prefix based on current URL
  const getInitialPrefix = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      // Check if current path contains 'blog'
      if (path.includes('/blog')) return 'blog';
      // Add other path checks as needed
    }
    return 'home'; // Default
  };

  // Apply theme immediately when the composable is imported with the correct prefix
  // This runs before the component is mounted
  applyTheme(colorMode.value, getInitialPrefix());

  // Route-based prefix
  const prefix = computed(() => {
    const name = router.currentRoute.value.name;

    if (name && name.includes('blog')) return 'blog';
    // Add more route checks if needed...
    return 'home';
  });

  // Combine prefix + colorMode => e.g. "blog-dark"
  const finalTheme = computed(() => `${prefix.value}-${colorMode.value}`);

  // Watch for theme changes and persist them
  watch(
    finalTheme,
    (newVal) => {
      // Set data-theme for DaisyUI or Tailwind-based theming
      document.documentElement.setAttribute('data-theme', newVal);

      // Also store just the 'light'/'dark' portion for next visit
      localStorage.setItem('my-color-mode', colorMode.value);
    },
    { immediate: true }
  );

  // Toggle function
  function toggleTheme() {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
  }

  return {
    colorMode, // 'light' or 'dark'
    prefix, // e.g. 'blog', 'projects', 'home'
    finalTheme, // e.g. 'blog-dark'
    toggleTheme // flips between light/dark
  };
}
