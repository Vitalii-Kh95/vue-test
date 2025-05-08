import { ref, watch } from 'vue';
import router from '@/router';

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

const colorMode = ref(getInitialColorMode());

// 2. Function to apply theme (used in multiple places)
function applyCurrentTheme() {
  const path = router.currentRoute.value?.path || window.location.pathname;
  const prefix = path.includes('/blog') ? 'blog' : 'home';
  const theme = `${prefix}-${colorMode.value}`;
  document.documentElement.setAttribute('data-theme', theme);
}

// 3. Apply theme immediately on import
applyCurrentTheme();

// 4. Watch for route changes at module level
watch(
  () => router.currentRoute.value?.path,
  () => {
    applyCurrentTheme();
  },
  { immediate: true }
);

export function useTheme() {
  // 5. Simple toggle function
  function toggleTheme() {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
    localStorage.setItem('my-color-mode', colorMode.value);
    applyCurrentTheme();
  }

  return { colorMode, toggleTheme };
}
