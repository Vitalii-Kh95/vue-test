<template>
  <div class="relative m-1 flex w-full flex-col text-base-content md:pt-6">
    <keep-alive>
      <component
        :is="['sm', 'md'].includes(breakpoints.active().value) ? GradientHeader : RibbonHeader"
        :title="title"
      />
    </keep-alive>
    <div
      class="ml-[1px] p-4"
      :class="
        ['sm', 'md'].includes(breakpoints.active().value)
          ? ''
          : 'mt-11 rounded-b-lg bg-base-100 shadow-md'
      "
    >
      <div class="m-0 w-fit sm:mx-auto lg:mx-0">
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
