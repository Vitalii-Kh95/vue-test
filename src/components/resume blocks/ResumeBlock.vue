<template>
  <div class="flex flex-col rounded-lg bg-base-100 p-4 text-base-content shadow-md">
    <div class="rounded-lg bg-secondary p-2">
      <h1 class="pb-2 text-lg font-bold text-info-content">{{ title }}</h1>
    </div>
    <div class="overflow-auto p-2">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
});
</script>
