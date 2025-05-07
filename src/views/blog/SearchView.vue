<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
import SearchViewHeader from '@/components/blog/TheSearchViewHeader.vue';
import PostCards from '@/components/blog/PostCards.vue';
import Pagination from '@/components/pagination/ThePagination.vue';

const route = useRoute();
const postStore = usePostStore();
watch(
  () => route.query.q,
  async (query) => {
    if (query) {
      postStore.getPosts({ search: query });
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="container mx-auto flex flex-col items-center">
    <SearchViewHeader
      class="mx-3"
      @submit-query="(query) => $router.push({ name: 'blog-search', query: { q: query } })"
    />
    <PostCards v-if="route.query.q" :posts="postStore.posts" />
    <Pagination v-if="route.query.q" class="my-5" />
  </div>
</template>
