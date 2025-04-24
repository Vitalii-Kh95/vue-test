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
  <div class="grid gap-x-3 gap-y-8 md:grid-cols-2">
    <Cell v-for="item in items" :key="item.title" :title="item.title" :icon="item.icon" />
  </div>
</template>
