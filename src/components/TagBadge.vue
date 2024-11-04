<template>
  <router-link class="badge badge-accent" :to="{ name: 'tag-detail', params: { slug: tag.slug } }"
    >#{{ tag.name }}
  </router-link>
</template>

<script setup>
defineProps(['tag']);
</script>
