<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
import PostCards from '@/components/PostCards.vue';
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
    <div class="container mx-auto flex flex-col items-center">
      <PostCards :posts="postStore.posts" />
      <Pagination class="my-5" />
    </div>
  </div>
</template>
