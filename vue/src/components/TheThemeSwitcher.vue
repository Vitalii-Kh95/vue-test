<script setup>
import IconSun from '@/components/icons/IconSun.vue';
import IconMoon from '@/components/icons/IconMoon.vue';
import { useColorMode } from '@vueuse/core';

const mode = useColorMode({
  attribute: 'data-theme',
  modes: ['light', 'dark']
});
</script>

<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input
      type="checkbox"
      class="theme-controller"
      v-model="mode"
      true-value="light"
      false-value="dark"
    />
    <IconSun />
    <IconMoon />
  </label>
</template>
