<template>
  <div class="relative flex w-full flex-col rounded-lg bg-base-100 p-4 text-base-content shadow-md">
    <RibbonHeader :title="title" />
    <div class="w-full pt-10">
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
