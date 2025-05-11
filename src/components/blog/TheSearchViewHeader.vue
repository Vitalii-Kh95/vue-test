<script setup>
// import IconSearch from '@/components/icons/IconSearch.vue';
import IconSearch from '@/assets/icons/IconSearch.min.svg?raw';
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
  if (resultString.length > 29) return resultString.slice(0, 28) + '...';
  return resultString;
});
</script>
<template>
  <div class="relative h-48 w-full bg-gradient-to-r from-base-100 via-base-200 to-base-100 md:h-60">
    <div
      class="md:pb- absolute left-1/2 flex h-full max-w-80 -translate-x-1/2 flex-col items-center justify-start gap-y-5 pt-16 text-center md:w-full md:max-w-none md:gap-y-8"
    >
      <form
        @submit.prevent="submit"
        role="search"
        class="join rounded-full border-base-content/20 has-[input:focus]:border"
      >
        <label
          class="input join-item input-bordered flex max-w-72 items-center gap-2 rounded-full md:input-lg focus-within:outline-0 focus-within:outline-offset-0 md:w-96 md:max-w-none"
        >
          <input
            v-model="searchInputText"
            type="search"
            name="q"
            class="grow"
            placeholder="Search "
          />
          <div v-html="IconSearch" class="mt-1" />
        </label>
        <button
          type="submit"
          class="btn btn-info join-item rounded-r-full md:btn-lg"
          :disabled="searchInputText.trim() === ''"
        >
          Search
        </button>
      </form>

      <div class="whitespace-nowrap">
        <h1 class="text-2xl font-bold md:text-4xl lg:text-5xl">{{ headerTitle }}</h1>
      </div>
    </div>
  </div>
</template>
