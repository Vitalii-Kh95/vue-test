<script setup>
import PostDetails from '@/components/PostDetails.vue';
import AsideBlock from '@/components/TheAsideBlock.vue';
import Header from '@/components/ThePostHeader.vue';
import NotFound from '@/components/NotFound.vue';
import { usePostStore } from '@/stores/PostStore';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import { useRoute } from 'vue-router';
import { watch, onMounted } from 'vue';

const route = useRoute();
const breakpoints = useBreakpoints(breakpointsTailwind);
const postStore = usePostStore();

const loadPost = async (slug) => {
  await postStore.getPost(slug);
};

onMounted(() => {
  loadPost(route.params.slug);
});

watch(
  () => route.params.slug,
  (newSlug) => {
    loadPost(newSlug);
  }
);
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
