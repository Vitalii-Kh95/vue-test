<template>
  <div
    class="relative flex flex-col rounded-lg p-4 text-base-content"
    :class="[wrapperClass, { 'mt-6': titleStyle === 'ribbon' }]"
  >
    <!-- Title Section -->
    <component
      :is="
        titleStyle === 'ribbon'
          ? RibbonHeader
          : titleStyle === 'gradient'
            ? GradientHeader
            : NotRibbonHeader
      "
      :title="title"
      :classes="titleStyle === 'ribbon' ? '' : titleBgClass"
    ></component>

    <!-- Content Block with Fixed Spacing -->
    <div class="w-full" :class="[titleStyle === 'ribbon' ? 'pt-10' : 'px-20 pt-5']">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, useAttrs } from 'vue';
import RibbonHeader from './RibbonHeader.vue';
import NotRibbonHeader from './NotRibbonHeader.vue';
import GradientHeader from './GradientHeader.vue';
const attrs = useAttrs();

// Compute title background color based on position
const titleBgClass = computed(() =>
  attrs.position === 'left' ? ['bg-secondary'] : ['bg-neutral', 'text-neutral-content']
);
const wrapperClass = computed(() => {
  const classes = [];
  if (attrs.size === 'full') {
    classes.push('w-full');
  } else {
    classes.push('w-fit lg:max-w-[50%]'); // Fit content, but not wider than 50%
  }

  if (attrs.position === 'left') {
    classes.push(['bg-base-100 shadow-md']);
  } else {
    classes.push(['bg-muted']);
  }
  return classes;
});
defineProps({
  title: String,
  titleStyle: { type: String, default: 'default' } // 'default' or 'ribbon'
});
</script>
