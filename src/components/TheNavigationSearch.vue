<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IconSearch from './icons/IconSearch.vue';
// Can we use nested RouterView for that?
const router = useRouter();
function submit(form) {
  return router.push({
    name: 'search',
    query: { q: form.target.elements.q.value }
  });
}
</script>
<template>
  <form @submit.prevent="(form) => submit(form)" role="search" class="join">
    <label class="input input-bordered flex items-center gap-2 overflow-hidden rounded-full pe-0">
      <input
        type="search"
        name="q"
        class="join-item grow text-base-content focus:outline-2 focus:outline-transparent"
        placeholder="Search"
      />
      <button class="btn btn-info join-item me-0">
        <IconSearch />
      </button>
    </label>
  </form>
</template>
