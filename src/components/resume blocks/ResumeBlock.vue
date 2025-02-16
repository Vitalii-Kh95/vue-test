<template>
  <div
    class="flex flex-col rounded-lg bg-base-100 p-4 text-base-content shadow-md"
    :class="sizeClass"
  >
    <div v-if="title" class="rounded-lg p-2" :class="titleBgClass">
      <h1 class="pb-2 text-lg font-bold">{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { computed, useAttrs } from 'vue';
const attrs = useAttrs();

// Compute title background color based on position
const titleBgClass = computed(() => (attrs.position === 'left' ? ['bg-secondary'] : ['bg-accent']));

// Compute width class based on size prop
const sizeClass = computed(() => (attrs.size === 'full' ? 'w-full' : 'w-fit'));

defineProps({
  title: String
});
</script>
