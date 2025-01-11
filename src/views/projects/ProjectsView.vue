<script setup>
import { ref } from 'vue';
import PostCards from '@/components/PostCards.vue';
import Pagination from '@/components/pagination/ThePagination.vue';
import { useProjectStore } from '@/stores/ProjectStore';

const projectStore = useProjectStore();
projectStore.getPosts({});

const enterFromClass = ref('opacity-0 transform -translate-x-1/2');
const leaveToClass = ref('opacity-0 transform translate-x-1/2');
</script>

<template>
  <div class="container mx-auto flex flex-col items-center px-12">
    <h1 class="mb-2 mt-5 text-center text-4xl font-bold">My projects</h1>

    <transition
      class="flex-grow"
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
</template>
