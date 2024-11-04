<script setup>
import PostCard from './PostCard.vue';
defineProps(['posts']);
</script>

<template>
  <div class="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
