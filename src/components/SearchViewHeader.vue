<script setup>
import SearchViewSearch from './SearchViewSearch.vue';
// defineProps(['query']);
// const emit = defineEmits(['submit-query']);
</script>
<template>
  <div class="hero flex h-[15rem] flex-col justify-center gap-0 bg-base-200">
    <div class="hero-content w-full flex-grow text-center">
      <form role="search" class="join"></form>
      <SearchViewSearch />
      <button class="btn btn-info btn-lg">Search</button>
    </div>

    <div class="hero-content flex-1 text-center">
      <h1 class="text-5xl font-bold">{{ $route.query.search || 'sdf' }}</h1>
    </div>
  </div>
</template>
