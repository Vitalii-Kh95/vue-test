<script setup>
import PostDetail from '@/components/PostDetail.vue';
import AsideBlock from '@/components/TheAsideBlock.vue';
import Header from '@/components/ThePostHeader.vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const route = useRoute();
const postStore = usePostStore();
postStore.getPost(route.params.slug);
</script>
<template>
  <div class="flex w-full flex-col items-center">
    <Header v-if="postStore.post" :title="postStore.post.title" />
    <div class="container mx-auto mt-6 grid w-[90%] grid-cols-3 gap-20">
      <PostDetail
        v-if="postStore.post"
        :post="postStore.post"
        :class="breakpoints.smallerOrEqual('xl').value ? 'col-span-full' : 'col-span-2'"
      />
      <AsideBlock v-if="!breakpoints.smallerOrEqual('xl').value" />
    </div>
  </div>
</template>
