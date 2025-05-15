<script setup>
// import PortfolioCards from '@/components/portfolio/PortfolioCards.vue';
// import { projects } from '@/constants';
</script>

<template>
  <div class="">
    <!-- <div class="container mx-auto">
      <PortfolioCards :projects="projects" />
    </div> -->
    <div role="tablist" class="tabs-boxed tabs">
      <router-link :to="{ name: 'portfolio-blog-project' }" role="tab" class="tab"
        >Tab 1</router-link
      >
      <router-link :to="{ name: 'portfolio-more-soon' }" role="tab" class="tab">Tab 2</router-link>
    </div>
    <RouterView />
  </div>
</template>
