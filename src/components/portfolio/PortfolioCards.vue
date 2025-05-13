<script setup>
import PortfolioCard from './PortfolioCard.vue';
defineProps(['projects']);
</script>

<template>
  <div class="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
    <PortfolioCard v-for="project in projects" :key="project.title" :project="project" />
  </div>
</template>
