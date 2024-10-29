<script setup>
import { ref, watch } from 'vue';
// import { useRoute } from 'vue-router';
import PostCards from '@/components/PostCards.vue';

// const route = useRoute();

// const loading = ref(false);
// const error = ref(null);
const posts = ref([]);
// watch(() => route.params.id, fetchData, { immediate: true });

async function getPosts() {
  const url = 'http://localhost:8000/api/posts/';
  // loading.value = true;
  // error.value = null;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      // error.value = response.statusText;
      throw new Error(`Response status: ${response.status}`);
    }
    posts.value = await response.json();
    console.log(posts.value);
  } catch (error) {
    // error.value = error.message;
    console.error(error.message);
  } finally {
    // loading.value = false;
  }
}
getPosts();
// const curentPage = ref(1);
const enterFromClass = ref('opacity-0 transform -translate-x-1/2');
const leaveToClass = ref('opacity-0 transform translate-x-1/2');

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

    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <transition
      mode="out-in"
      enter-active-class="transition-all ease-in-out duration-200"
      leave-active-class="transition-all ease-in-out duration-200"
      :enter-from-class="enterFromClass"
      :leave-to-class="leaveToClass"
    >
      <PostCards :key="posts" :posts="posts" />
    </transition>

    <!-- <Pagination :total="pagesCount" @curent-page="(n) => (curentPage = n)" class="my-5" /> -->
  </div>
</template>
