<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="flex h-[3.5rem] w-full rounded-sm bg-base-content/5 shadow-lg">
    <!-- Left spacer -->
    <div class="flex-shrink grow basis-0" />

    <!-- Content -->
    <div class="flex gap-2 overflow-hidden rounded ps-1 pt-4">
      <div v-html="icon" class="h-7 w-7 shrink-0" />
      <div class="overflow-hidden text-ellipsis whitespace-nowrap font-mono text-xl font-medium">
        {{ title }}
      </div>
    </div>

    <!-- Right spacer -->
    <div class="flex-shrink grow basis-0" />
  </div>
</template>
