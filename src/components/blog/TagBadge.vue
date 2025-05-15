<template>
  <router-link
    v-once
    class="badge badge-secondary font-medium"
    :to="{ name: `blog-posts-by-tag`, params: { slug: tag } }"
    >#{{ tag }}
  </router-link>
</template>

<script setup>
defineProps(['tag']);
</script>
