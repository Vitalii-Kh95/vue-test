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
    <!-- I need to use this Suspense crap to be able to call asyncronous
    functions writen outside of a component and
    render it or something like that -->
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>
