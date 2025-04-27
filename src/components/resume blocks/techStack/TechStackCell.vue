<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: [Object, Function],
    required: true
  }
});
</script>

<template>
  <div class="flex h-[3.5rem] w-full bg-base-300/70 shadow-lg">
    <!-- Left spacer -->
    <div class="flex-shrink grow basis-0" />

    <!-- Content -->
    <div class="flex gap-2 overflow-hidden rounded pt-4">
      <component :is="icon" v-if="icon" class="h-7 w-7 shrink-0" />
      <div class="overflow-hidden text-ellipsis whitespace-nowrap font-mono text-xl font-medium">
        {{ title }}
      </div>
    </div>

    <!-- Right spacer -->
    <div class="flex-shrink grow basis-0" />
  </div>
</template>
