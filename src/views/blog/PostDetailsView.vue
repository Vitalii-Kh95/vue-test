<script setup>
import PostDetails from '@/components/blog/PostDetails.vue';
// import AsideBlock from '@/components/blog/TheAsideBlock.vue';
import Header from '@/components/blog/PostHeader.vue';
import NotFound from '@/components/NotFound.vue';
import { usePostStore } from '@/stores/PostStore';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { onBeforeRouteUpdate } from 'vue-router';
import { defineAsyncComponent } from 'vue';

// import { useRoute } from 'vue-router';
// import { watch, onMounted } from 'vue';

// const route = useRoute();
const breakpoints = useBreakpoints(breakpointsTailwind);
const postStore = usePostStore();

const AsideBlock = defineAsyncComponent(() => import('@/components/blog/TheAsideBlock.vue'));

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.slug !== from.params.slug) {
    await postStore.getPost(to.params.slug);
    document.title = postStore.post.title || 'Blog Example';
  }
});
</script>
<template>
  <div v-if="postStore.post" class="flex w-full flex-col items-center">
    <Header v-once :title="postStore.post.title" />
    <div class="container mx-auto mt-6 grid w-[90%] grid-cols-3 gap-20">
      <PostDetails :post="postStore.post" />

      <keep-alive>
        <AsideBlock v-if="!breakpoints.smallerOrEqual('xl').value" />
      </keep-alive>
    </div>
  </div>
  <NotFound v-else return-route-name="blog" />
</template>
