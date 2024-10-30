<script setup>
import { RouterView } from 'vue-router';
import TheNavigation from '@/components/TheNavigation.vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const xs = breakpoints.smaller('sm');
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TheNavigation :xs="xs" />
    <RouterView />
  </div>
</template>
