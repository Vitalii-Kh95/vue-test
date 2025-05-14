<script setup>
import Cell from './TechStackCell.vue';
defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="grid grid-cols-1 content-start gap-x-3 gap-y-5 xl:grid-cols-2 xl:gap-y-8">
    <Cell v-for="item in items" :key="item.title" :title="item.title" :icon="item.icon" />
  </div>
</template>
