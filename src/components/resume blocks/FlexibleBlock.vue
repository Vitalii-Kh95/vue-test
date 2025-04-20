<template>
  <div
    class="relative flex flex-col rounded-lg p-4 text-base-content"
    :class="[wrapperClass, { 'mt-6': titleStyle === 'ribbon' }]"
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
const titleBgClass = computed(() =>
  attrs.position === 'left' ? ['bg-secondary'] : ['bg-neutral', 'text-neutral-content']
);
const wrapperClass = computed(() => {
  let classes = [];
  if (attrs.size === 'full') {
    classes.push('w-full');
  } else {
    classes.push('w-fit lg:max-w-[50%]'); // Fit content, but not wider than 50%
  }
  if (attrs.position === 'left') {
    classes = classes.concat(['bg-base-100', 'shadow-md']);
  } else {
    classes = classes.concat(['bg-muted']);
  }
  return classes;
});
defineProps({
  title: String,
  titleStyle: { type: String, default: 'default' } // 'default' or 'ribbon'
});
</script>
