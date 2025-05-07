<script setup>
import PostDetails from '@/components/blog/PostDetails.vue';
import AsideBlock from '@/components/blog/TheAsideBlock.vue';
import Header from '@/components/blog/PostHeader.vue';
import NotFound from '@/components/NotFound.vue';
import { usePostStore } from '@/stores/PostStore';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { onBeforeRouteUpdate } from 'vue-router';

// import { useRoute } from 'vue-router';
// import { watch, onMounted } from 'vue';

// const route = useRoute();
const breakpoints = useBreakpoints(breakpointsTailwind);
const postStore = usePostStore();

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.slug !== from.params.slug) {
    await postStore.getPost(to.params.slug);
    document.title = postStore.post.title || 'Blog Example';
  }
});

// const loadPost = async (slug) => {
//   await postStore.getPost(slug);
// };

// onMounted(() => {
//   loadPost(route.params.slug);
// });

// watch(
//   () => route.params.slug,
//   (newSlug) => {
//     loadPost(newSlug);
//   }
// );
</script>
<template>
  <div v-if="postStore.post" class="flex w-full flex-col items-center">
    <Header v-if="postStore.post" :title="postStore.post.title" />
    <div class="container mx-auto mt-6 grid w-[90%] grid-cols-3 gap-20">
      <PostDetails
        v-if="postStore.post"
        :post="postStore.post"
        :class="breakpoints.smallerOrEqual('xl').value ? 'col-span-full' : 'col-span-2'"
      />
      <AsideBlock v-if="!breakpoints.smallerOrEqual('xl').value" />
    </div>
  </div>
  <NotFound v-else return-route-name="blog" />
</template>
