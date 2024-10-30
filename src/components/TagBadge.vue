<template>
  <router-link
    class="btn btn-info btn-xs rounded-full"
    :to="{ name: 'tag-detail', params: { slug: tag.slug } }"
    >#{{ tag.name }}
  </router-link>
</template>

<script setup>
defineProps(['tag']);
</script>
