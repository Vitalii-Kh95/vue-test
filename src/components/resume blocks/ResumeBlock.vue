<template>
  <div class="relative m-1 flex w-full flex-col text-base-content">
    <keep-alive>
      <component
        :is="breakpoints.active().value === 'md' ? GradientHeader : RibbonHeader"
        :title="title"
      />
    </keep-alive>
    <div
      class="ml-[1px] p-4"
      :class="breakpoints.active().value !== 'md' ? 'mt-11 rounded-b-lg bg-base-100 shadow-md' : ''"
    >
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import GradientHeader from './GradientHeader.vue';
import RibbonHeader from './RibbonHeader.vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
defineProps({
  title: String
});
</script>
