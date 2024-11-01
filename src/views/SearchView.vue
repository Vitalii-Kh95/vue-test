<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SearchViewHeader from '@/components/TheSearchViewHeader.vue';
import PostCards from '@/components/PostCards.vue';
import { getPosts } from '@/functions';

const route = useRoute();
const router = useRouter();
const posts = ref([]);
onMounted(async () => {
  if (route.query.q != '' && route.query.q != undefined) {
    posts.value = await getPosts(route.query.q);
  }
});
watch(
  () => route.query.q,
  async (query) => (posts.value = await getPosts(query)),
  { immediate: true }
);
const enterFromClass = ref('opacity-0 transform -translate-x-1/2');
const leaveToClass = ref('opacity-0 transform translate-x-1/2');
</script>

<template>
  <div class="container mx-auto pt-5">
    <SearchViewHeader
      @submit-query="(query) => router.push({ name: 'search', query: { q: query } })"
    />
    <transition
      mode="out-in"
      enter-active-class="transition-all ease-in-out duration-200"
      leave-active-class="transition-all ease-in-out duration-200"
      :enter-from-class="enterFromClass"
      :leave-to-class="leaveToClass"
    >
      <PostCards :posts="posts" />
    </transition>
  </div>
</template>
