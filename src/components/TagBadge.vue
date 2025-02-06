<template>
  <router-link
    class="badge badge-secondary font-medium"
    :to="{ name: `${type}-tag-detail`, params: { slug: tag } }"
    >#{{ tag }}
  </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const type = route.path.includes('projects') ? 'projects' : 'blog';

defineProps(['tag']);
</script>
