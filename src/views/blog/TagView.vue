<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import TagBadge from '@/components/TagBadge.vue';
import PostCards from '@/components/PostCards.vue';
import { getTags } from '@/functions';
import { usePostStore } from '@/stores/PostStore';

const route = useRoute();
const postStore = usePostStore();
postStore.getPosts({ tag: route.params.slug });

// const tags = ref([]);
// onMounted(async () => {
//   posts.value = await getPostsByTag(route.params.slug);
//   tags.value = await getTags();
// });
watch(
  () => route.params.slug,
  async (slug) => postStore.getPosts({ tag: slug }),
  { immediate: true }
);

const enterFromClass = ref('opacity-0 transform -translate-x-1/2');
const leaveToClass = ref('opacity-0 transform translate-x-1/2');
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <div class="container mx-auto flex flex-col items-center">
      <p class="my-3 flex gap-1 self-start overflow-clip">
        Other tags:
        <TagBadge v-for="tag in tags" :key="tag.name" :tag="tag" />
      </p>

      <transition
        mode="out-in"
        enter-active-class="transition-all ease-in-out duration-200"
        leave-active-class="transition-all ease-in-out duration-200"
        :enter-from-class="enterFromClass"
        :leave-to-class="leaveToClass"
      >
        <PostCards :posts="postStore.posts" />
      </transition>
      <!-- <Pagination :total="pagesCount" @curent-page="(n) => (curentPage = n)" class="" /> -->
    </div>
  </div>
</template>
