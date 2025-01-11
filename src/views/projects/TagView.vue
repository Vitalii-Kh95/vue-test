<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectStore } from '@/stores/ProjectStore';
import PostCards from '@/components/PostCards.vue';
import Pagination from '@/components/pagination/ThePagination.vue';

const route = useRoute();
const projectStore = useProjectStore();

watch(
  () => route.params.slug,
  async (slug) => projectStore.getPosts({ tag: slug }),
  { immediate: true }
);

const enterFromClass = ref('opacity-0 transform -translate-x-1/2');
const leaveToClass = ref('opacity-0 transform translate-x-1/2');
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <div class="container mx-auto flex flex-col items-center">
      <transition
        mode="out-in"
        enter-active-class="transition-all ease-in-out duration-200"
        leave-active-class="transition-all ease-in-out duration-200"
        :enter-from-class="enterFromClass"
        :leave-to-class="leaveToClass"
      >
        <PostCards :posts="projectStore.projects" />
      </transition>
      <Pagination class="my-5" />
    </div>
  </div>
</template>
