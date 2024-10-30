<script setup>
import { ref } from 'vue';
import PostCards from '@/components/PostCards.vue';
import { getPosts } from '@/functions';
const posts = await getPosts();

const enterFromClass = ref('opacity-0 transform -translate-x-1/2');
const leaveToClass = ref('opacity-0 transform translate-x-1/2');

// const curentPage = ref(1);

// watch(curentPage, (newValue, oldValue) => {
//   if (newValue < oldValue) {
//     enterFromClass.value = 'opacity-0 transform -translate-x-1/2';
//     leaveToClass.value = 'opacity-0 transform translate-x-1/2';
//   } else {
//     enterFromClass.value = 'opacity-0 transform translate-x-1/2';
//     leaveToClass.value = 'opacity-0 transform -translate-x-1/2';
//   }
// });
</script>

<template>
  <div class="container mx-auto flex flex-col items-center px-20">
    <h1 class="mb-2 mt-5 text-center text-4xl font-bold">Recent blog posts</h1>

    <transition
      mode="out-in"
      enter-active-class="transition-all ease-in-out duration-200"
      leave-active-class="transition-all ease-in-out duration-200"
      :enter-from-class="enterFromClass"
      :leave-to-class="leaveToClass"
    >
      <PostCards :posts="posts" />
    </transition>

    <!-- <Pagination :total="pagesCount" @curent-page="(n) => (curentPage = n)" class="my-5" /> -->
  </div>
</template>
