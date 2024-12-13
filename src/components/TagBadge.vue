<template>
  <router-link
    class="badge badge-secondary font-medium"
    :to="{ name: 'tag-detail', params: { slug: tag.slug } }"
    >#{{ tag.name }}
  </router-link>
</template>

<script setup>
defineProps(['tag']);
</script>
