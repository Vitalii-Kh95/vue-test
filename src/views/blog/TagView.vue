<script setup>
// import { watch } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
import Header from '@/components/blog/PostDetailsOrTagViewHeader.vue';
import PostCards from '@/components/blog/PostCards.vue';
import Pagination from '@/components/pagination/ThePagination.vue';

const route = useRoute();
const postStore = usePostStore();

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.slug !== from.params.slug) {
    await postStore.getPosts({ tag: to.params.slug });
    document.title = `#${to.params.slug}`;
  }
});
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <Header :title="`#${route.params.slug}`" />
    <div
      v-if="postStore.posts.length > 0"
      class="container mx-auto flex flex-col items-center px-6"
    >
      <PostCards :posts="postStore.posts" />
      <Pagination class="my-5" />
    </div>
    <h1 v-else class="mx-auto pt-10 text-4xl text-error">No results</h1>
  </div>
</template>
