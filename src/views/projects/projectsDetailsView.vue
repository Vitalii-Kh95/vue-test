<script setup>
import PostDetail from '@/components/PostDetail.vue';
import AsideBlock from '@/components/TheAsideBlock.vue';
import Header from '@/components/ThePostHeader.vue';
import { useRoute } from 'vue-router';
import { useProjectStore } from '@/stores/ProjectStore';
import { useWindowSizeStore } from '@/stores/WindowSizeStore';

const route = useRoute();
const projectStore = useProjectStore();
projectStore.getPost(route.params.slug);
const windowSizeStore = useWindowSizeStore();
</script>
<template>
  <div class="flex w-full flex-col items-center">
    <Header :title="projectStore.project.title" />
    <div class="container mx-auto mt-6 grid w-[90%] grid-cols-3 gap-20">
      <PostDetail
        :post="projectStore.project"
        :class="windowSizeStore.lte_xl ? 'col-span-full' : 'col-span-2'"
      />
      <AsideBlock v-if="!windowSizeStore.lte_xl" />
    </div>
  </div>
</template>
