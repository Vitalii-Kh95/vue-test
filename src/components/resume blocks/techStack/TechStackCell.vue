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
  <div
    class="flex h-fit w-full items-center rounded-sm border bg-base-300 px-3 py-3 pt-3.5 shadow-lg"
  >
    <div class="w-1/4">
      <component :is="icon" v-if="icon" class="h-7 w-7"></component>
    </div>
    <div class="font-serif text-xl font-medium">{{ title }}</div>
  </div>
</template>
