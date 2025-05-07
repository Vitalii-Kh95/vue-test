<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
import Header from '@/components/blog/PostHeader.vue';
import PostCards from '@/components/blog/PostCards.vue';
import Pagination from '@/components/pagination/ThePagination.vue';

const route = useRoute();
const postStore = usePostStore();

watch(
  () => route.params.slug,
  async (slug) => postStore.getPosts({ tag: slug }),
  { immediate: true }
);
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <Header :title="`#${route.params.slug}`" />
    <div v-if="postStore.posts.length > 0" class="container mx-auto flex flex-col items-center">
      <PostCards :posts="postStore.posts" />
      <Pagination class="my-5" />
    </div>
    <h1 v-else class="mx-auto pt-10 text-4xl text-error">No results</h1>
  </div>
</template>
