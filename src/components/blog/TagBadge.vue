<template>
  <router-link
    v-once
    class="badge badge-secondary font-medium"
    :to="{ name: `${type}-posts-by-tag`, params: { slug: tag } }"
    >#{{ tag }}
  </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const type = route.path.includes('blog') ? 'blog' : null;

defineProps(['tag']);
</script>
