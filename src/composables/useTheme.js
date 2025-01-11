import { ref, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export function useTheme() {
  // 1) Reactive state: 'light' or 'dark'
  const colorMode = ref('light');

  // 2) On mount, load from localStorage or detect system preference
  onMounted(() => {
    const stored = localStorage.getItem('my-color-mode');
    if (stored === 'dark' || stored === 'light') {
      colorMode.value = stored;
    } else {
      // No stored preference => use system setting
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      colorMode.value = prefersDark ? 'dark' : 'light';
    }
  });

  // 3) Route-based prefix
  const route = useRoute();
  const prefix = computed(() => {
    if (route.path.startsWith('/blog')) return 'blog';
    if (route.path.startsWith('/projects')) return 'projects';
    // Add more route checks if needed...
    return 'home';
  });

  // 4) Combine prefix + colorMode => e.g. "blog-dark"
  const finalTheme = computed(() => `${prefix.value}-${colorMode.value}`);

  // 5) Whenever finalTheme changes, update <html data-theme> and localStorage
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

  // 6) Toggle function
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
