<script setup>
import PortfolioCards from '@/components/portfolio/PortfolioCards.vue';
import { projects } from '@/constants';
</script>

<template>
  <div class="">
    <div class="container mx-auto">
      <PortfolioCards :projects="projects" />
    </div>
  </div>
</template>
