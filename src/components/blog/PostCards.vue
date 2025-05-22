<script setup>
import PostCard from './PostCard.vue';
defineProps(['posts']);
// import { ref } from 'vue';
// const enterFromClass = ref('opacity-0 transform -translate-x-1/2');
// const leaveToClass = ref('opacity-0 transform translate-x-1/2');
</script>

<template>
  <TransitionGroup
    tag="div"
    class="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3"
    enter-active-class="transition-opacity duration-300 ease-out"
    leave-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </TransitionGroup>
</template>
