<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectStore } from '@/stores/ProjectStore';
import SearchViewHeader from '@/components/TheSearchViewHeader.vue';
import PostCards from '@/components/PostCards.vue';
import Pagination from '@/components/pagination/ThePagination.vue';

const route = useRoute();
const projectStore = useProjectStore();
watch(
  () => route.query.q,
  async (query) => {
    if (query) {
      projectStore.getPosts({ search: query });
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
      @submit-query="(query) => $router.push({ name: 'projects-search', query: { q: query } })"
    />
    <transition
      mode="out-in"
      enter-active-class="transition-all ease-in-out duration-200"
      leave-active-class="transition-all ease-in-out duration-200"
      :enter-from-class="enterFromClass"
      :leave-to-class="leaveToClass"
    >
      <PostCards v-if="route.query.q" :posts="projectStore.projects" />
    </transition>
    <Pagination v-if="route.query.q" class="my-5" />
  </div>
</template>
