<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// Can we use nested RouterView for that?
const router = useRouter();
const search = ref(null);
function submit() {
  return router.push({
    name: 'search',
    params: {
      q: search.value || ''
    }
  });
}
</script>
<template>
  <form @submit.prevent="submit" role="search" class="join">
    <label class="input input-bordered flex items-center gap-2 overflow-hidden rounded-full pe-0">
      <input
        v-model="search"
        type="text"
        class="join-item grow text-base-content focus:outline-2 focus:outline-transparent"
        placeholder="Search"
      />
      <button class="btn btn-info join-item me-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </label>
  </form>
</template>
