<script setup>
// import PortfolioCards from '@/components/portfolio/PortfolioCards.vue';
import { projects } from '@/constants';
</script>

<template>
  <div class="overflow-hidden pt-6">
    <!-- <div class="container mx-auto">
      <PortfolioCards :projects="projects" />
    </div> -->
    <div class="mx-auto flex h-full flex-col items-center px-6">
      <div role="tablist" class="tabs tabs-bordered">
        <router-link
          v-for="project in projects"
          :key="project.routeByName"
          role="tab"
          class="tab"
          :class="[$route.name === project.routeByName ? 'tab-active' : '']"
          :to="{ name: project.routeByName }"
          >{{ project.title }}</router-link
        >
        <!-- <router-link :to="{ name: 'portfolio-blog-project' }" role="tab" class="tab"
          >Blog</router-link
        >
        <router-link :to="{ name: 'portfolio-more-soon' }" role="tab" class="tab"
          >More soon</router-link
        > -->
      </div>
      <RouterView class="container flex-1 overflow-auto py-6" />
    </div>
  </div>
</template>
