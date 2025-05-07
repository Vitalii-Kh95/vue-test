<script setup>
import PortfolioCards from '@/components/portfolio/PortfolioCards.vue';
import { projects } from '@/constants';
</script>

<template>
  <div class="container mx-auto flex flex-col items-center">
    <PortfolioCards :projects="projects" />
  </div>
</template>
