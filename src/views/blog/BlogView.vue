<script setup>
import { ref } from 'vue';
import { usePostStore } from '@/stores/PostStore';

import PostCards from '@/components/PostCards.vue';
import Pagination from '@/components/pagination/ThePagination.vue';

const postStore = usePostStore();
postStore.getPosts({});
const curentPage = ref(1);
// const posts = ref([]);
// onMounted(async () => (posts.value = await getPosts()));

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

function setCurrentPage(page) {
  curentPage.value = page;
  postStore.getPosts({ limit: 6, offset: (page - 1) * 6 });
}
</script>

<template>
  <div class="container mx-auto flex flex-col items-center px-12">
    <h1 class="mb-2 mt-5 text-center text-4xl font-bold">Recent blog posts</h1>

    <transition
      class="flex-grow"
      mode="out-in"
      enter-active-class="transition-all ease-in-out duration-200"
      leave-active-class="transition-all ease-in-out duration-200"
      :enter-from-class="enterFromClass"
      :leave-to-class="leaveToClass"
    >
      <PostCards :posts="postStore.posts" />
    </transition>
    <Pagination :current-page="curentPage" @set-current-page="setCurrentPage" class="my-5" />
  </div>
</template>
