<script setup>
import IconSearch from '@/components/icons/IconSearch.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePostStore } from '@/stores/PostStore';
const emit = defineEmits(['submit-query']);

const searchInputText = ref('');
function submit() {
  if (!searchInputText.value.trim()) return;
  return emit('submit-query', searchInputText.value);
}
const route = useRoute();
const postStore = usePostStore();
const headerTitle = computed(() => {
  let resultString;
  if (!route.query.q) resultString = 'Search';
  else if (route.query.q && postStore.posts.length === 0)
    resultString = `Nothing matched "${route.query.q}"`;
  else {
    resultString = route.query.q;
  }
  if (resultString.length > 30) return resultString.slice(0, 29) + '...';
  return resultString;
});
</script>
<template>
  <div
    class="hero flex h-[15rem] flex-col justify-center gap-0 bg-gradient-to-r from-base-100 via-base-200 to-base-100"
  >
    <div class="hero-content w-full flex-grow text-center">
      <form @submit.prevent="submit" role="search" class="join">
        <label class="input input-lg input-bordered flex w-4/5 items-center gap-2">
          <input
            v-model="searchInputText"
            type="search"
            name="q"
            class="w-full"
            placeholder="Search"
          />
          <IconSearch />
        </label>
        <button type="submit" class="btn btn-info btn-lg" :disabled="searchInputText.trim() === ''">
          Search
        </button>
      </form>
    </div>

    <div class="hero-content flex-1 text-center">
      <h1 class="text-5xl font-bold">{{ headerTitle }}</h1>
    </div>
  </div>
</template>
