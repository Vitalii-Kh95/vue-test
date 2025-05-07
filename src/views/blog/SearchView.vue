<script setup>
// import { watch } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
import SearchViewHeader from '@/components/blog/TheSearchViewHeader.vue';
import PostCards from '@/components/blog/PostCards.vue';
import Pagination from '@/components/pagination/ThePagination.vue';

const route = useRoute();
const postStore = usePostStore();

onBeforeRouteUpdate(async (to, from) => {
  if (to.query.q !== from.query.q) {
    await postStore.getPosts({ search: to.query.q });
    document.title = `#${to.params.slug}`;
  }
});

// watch(
//   () => route.query.q,
//   async (query) => {
//     if (query) {
//       postStore.getPosts({ search: query });
//     }
//   },
//   { immediate: true }
// );
</script>

<template>
  <div class="container mx-auto flex flex-col items-center">
    <SearchViewHeader
      class="mx-3"
      @submit-query="(query) => $router.push({ name: 'blog-search', query: { q: query } })"
    />

    <div class="container mx-auto flex flex-col items-center">
      <PostCards :posts="postStore.posts" />
      <Pagination class="my-5" />
    </div>
  </div>
</template>
