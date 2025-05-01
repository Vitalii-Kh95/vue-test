<template>
  <div class="relative m-1 flex w-full flex-col text-base-content">
    <RibbonHeader :title="title" />
    <div class="ml-[1px] mt-11 rounded-b-lg bg-base-100 p-4 shadow-md">
      <div class="w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import RibbonHeader from './RibbonHeader.vue';
defineProps({
  title: String
});
</script>
