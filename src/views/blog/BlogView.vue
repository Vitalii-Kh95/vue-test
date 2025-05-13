<script setup>
import { usePostStore } from '@/stores/PostStore';
import PostCards from '@/components/blog/PostCards.vue';
import Pagination from '@/components/pagination/ThePagination.vue';

const postStore = usePostStore();
</script>

<template>
  <div class="">
    <div class="container mx-auto flex flex-col items-center px-12">
      <h1 class="mb-2 mt-5 text-center text-4xl font-bold">Recent blog posts</h1>
      <PostCards :posts="postStore.posts" />
      <Pagination class="my-5" />
    </div>
  </div>
</template>
