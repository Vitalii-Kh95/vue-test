<script setup>
import IconSun from '@/components/icons/IconSun.vue';
import IconMoon from '@/components/icons/IconMoon.vue';
import { useTheme } from '@/composables/useTheme.js';

const { colorMode, toggleTheme } = useTheme();

function onCheckboxChange() {
  toggleTheme();
}
</script>

<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input
      type="checkbox"
      name="themeToggle"
      class="theme-controller"
      :checked="colorMode === 'light'"
      @change="onCheckboxChange"
    />
    <IconSun class="swap-off" />
    <IconMoon class="swap-on" />
  </label>
</template>
