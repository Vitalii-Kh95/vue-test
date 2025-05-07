<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BlogNavigation from './TheNavigationBlog.vue';
import HomeNavigation from './TheNavigationHome.vue';

const route = useRoute();
const navigationComponent = computed(() => {
  if (route.path.includes('blog')) {
    return BlogNavigation;
  }
  return HomeNavigation;
});
</script>
<template>
  <component :is="navigationComponent"></component>
</template>
