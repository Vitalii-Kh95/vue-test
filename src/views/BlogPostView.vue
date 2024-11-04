<script setup>
import PostDetail from '@/components/PostDetail.vue';
import AsideBlock from '@/components/AsideBlock.vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';

const route = useRoute();
const postStore = usePostStore();
postStore.getPost(route.params.slug);
</script>
<template>
  <div class="flex w-full flex-col items-center">
    <!-- <Header :title="post.title" /> -->
    <div class="container mx-auto mt-6 grid w-[90%] grid-cols-3 gap-20">
      <PostDetail :post="postStore.post" />
      <AsideBlock />
    </div>
  </div>
</template>
