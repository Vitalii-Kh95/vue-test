<script setup>
import { onBeforeRouteUpdate } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
import SearchViewHeader from '@/components/blog/TheSearchViewHeader.vue';
import PostCards from '@/components/blog/PostCards.vue';
import Pagination from '@/components/blog/pagination/ThePagination.vue';

const postStore = usePostStore();

onBeforeRouteUpdate(async (to, from) => {
  if (to.query.q !== from.query.q) {
    await postStore.getPosts({ search: to.query.q });
    document.title = `#${to.params.slug}`;
  }
});
</script>

<template>
  <div class="">
    <div class="container mx-auto flex flex-col items-center">
      <SearchViewHeader
        @submit-query="(query) => $router.push({ name: 'blog-search', query: { q: query } })"
      />
      <div class="container mx-auto flex flex-col items-center px-6">
        <PostCards :posts="postStore.posts" />
        <Pagination class="my-5" />
      </div>
    </div>
  </div>
</template>
