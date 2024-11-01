<script setup>
import IconSearch from './icons/IconSearch.vue';
const emit = defineEmits(['submit-query']);

function submit(form) {
  if (!form.target.elements.q.value) return;
  const q = form.target.elements.q.value;
  form.target.elements.q.value = '';
  return emit('submit-query', q);
}
</script>
<template>
  <div class="hero flex h-[15rem] flex-col justify-center gap-0 bg-base-200">
    <div class="hero-content w-full flex-grow text-center">
      <form @submit.prevent="(form) => submit(form)" role="search" class="join">
        <label class="input input-lg input-bordered flex w-4/5 items-center gap-2">
          <input type="search" name="q" class="w-full" placeholder="Search" />
          <IconSearch />
        </label>
        <button type="submit" class="btn btn-info btn-lg">Search</button>
      </form>
    </div>

    <div class="hero-content flex-1 text-center">
      <h1 class="text-5xl font-bold">{{ $route.query.q || 'Search' }}</h1>
    </div>
  </div>
</template>
