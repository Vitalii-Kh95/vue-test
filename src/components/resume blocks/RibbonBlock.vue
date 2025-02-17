<template>
  <div class="relative w-full">
    <!-- Ribbon Title (Separate Block) -->
    <RibbonHeader :title="title" />

    <!-- Content Block (Separate from Ribbon) -->
    <div class="relative z-0 mt-6 w-full rounded-lg bg-base-100 p-4 text-base-content shadow-md">
      <slot />
    </div>
  </div>
</template>

<script setup>
import RibbonHeader from './RibbonHeader.vue';
defineProps({
  title: String
});
</script>
