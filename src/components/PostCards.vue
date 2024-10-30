<script setup>
import { watch } from 'vue';
import PostCard from './PostCard.vue';
const props = defineProps(['posts']);
// watch(props.posts, () => console.log('posts changed'));
</script>

<template>
  <div class="mb-8 grid-cols-1 gap-5 sm:grid md:grid-cols-3">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
