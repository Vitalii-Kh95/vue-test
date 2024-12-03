<script setup>
import { RouterView } from 'vue-router';
import TheNavigation from '@/components/navigation/TheNavigation.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TheNavigation />
    <RouterView class="grow" />
  </div>
</template>
