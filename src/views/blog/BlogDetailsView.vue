<script setup>
import PostDetail from '@/components/PostDetail.vue';
import AsideBlock from '@/components/TheAsideBlock.vue';
import Header from '@/components/ThePostHeader.vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
import { useWindowSizeStore } from '@/stores/WindowSizeStore';

const route = useRoute();
const postStore = usePostStore();
postStore.getPost(route.params.slug);
const windowSizeStore = useWindowSizeStore();
</script>
<template>
  <div class="flex w-full flex-col items-center">
    <Header :title="postStore.post.title" />
    <div class="container mx-auto mt-6 grid w-[90%] grid-cols-3 gap-20">
      <PostDetail
        :post="postStore.post"
        :class="windowSizeStore.lg ? 'col-span-full' : 'col-span-2'"
      />
      <AsideBlock v-if="!windowSizeStore.lg" />
    </div>
  </div>
</template>
