<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
import SearchViewHeader from '@/components/TheSearchViewHeader.vue';
import PostCards from '@/components/PostCards.vue';
import Pagination from '@/components/pagination/ThePagination.vue';

const route = useRoute();
const postStore = usePostStore();
watch(
  () => route.query.q,
  async (query) => {
    if (query) {
      postStore.getPosts({ search: query });
    }
  },
  { immediate: true }
);
const enterFromClass = ref('opacity-0 transform -translate-x-1/2');
const leaveToClass = ref('opacity-0 transform translate-x-1/2');
</script>

<template>
  <div class="container mx-auto flex flex-col items-center pt-5">
    <SearchViewHeader
      class="mx-3"
      @submit-query="(query) => $router.push({ name: 'search', query: { q: query } })"
    />
    <transition
      mode="out-in"
      enter-active-class="transition-all ease-in-out duration-200"
      leave-active-class="transition-all ease-in-out duration-200"
      :enter-from-class="enterFromClass"
      :leave-to-class="leaveToClass"
    >
      <PostCards v-if="route.query.q" :posts="postStore.posts" />
    </transition>
    <Pagination v-if="route.query.q" class="my-5" />
  </div>
</template>
