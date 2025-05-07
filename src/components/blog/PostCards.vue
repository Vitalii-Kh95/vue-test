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
    class="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3"
    enter-active-class="transition-all ease-in-out duration-200"
    leave-active-class="transition-all ease-in-out duration-200"
    enter-from-class="opacity-0 transform -translate-x-1/2"
    enter-to-class="opacity-100 transform translate-x-0"
    leave-from-class="opacity-100 transform translate-x-0"
    leave-to-class="opacity-0 transform translate-x-1/2"
  >
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </TransitionGroup>
</template>
