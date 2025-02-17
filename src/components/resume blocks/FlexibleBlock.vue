<template>
  <div
    class="relative flex flex-col rounded-lg bg-base-100 p-4 text-base-content shadow-md"
    :class="[sizeClass, { 'mt-6': titleStyle === 'ribbon' }]"
  >
    <!-- Title Section -->
    <RibbonHeader v-if="titleStyle === 'ribbon'" :title="title" />
    <div v-else-if="title" class="rounded-lg p-2" :class="titleBgClass">
      <h1 class="pb-2 text-lg font-bold">{{ title }}</h1>
    </div>

    <!-- Content Block -->
    <!-- <div v-if="titleStyle === 'ribbon'" class="relative z-0 mt-6 w-full">
      <slot />
    </div>
    <div v-else class="w-full">
      <slot />
    </div> -->

    <!-- Content Block with Fixed Spacing -->
    <div class="w-full" :class="[titleStyle === 'ribbon' ? 'pt-10' : 'pt-5']">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, useAttrs } from 'vue';
import RibbonHeader from './RibbonHeader.vue';

const attrs = useAttrs();

// Compute title background color based on position
const titleBgClass = computed(() => (attrs.position === 'left' ? ['bg-secondary'] : ['bg-accent']));

// Compute width class based on size prop
const sizeClass = computed(() => {
  if (attrs.size === 'full') return 'w-full'; // Full width
  return 'w-fit lg:max-w-[50%]'; // Fit content, but not wider than 50%
});
defineProps({
  title: String,
  titleStyle: { type: String, default: 'default' } // 'default' or 'ribbon'
});
</script>
