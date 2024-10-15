<script setup>
import SearchViewSearch from './SearchViewSearch.vue';
</script>
<template>
  <div class="hero flex h-[15rem] flex-col justify-center gap-0 bg-base-200">
    <div class="hero-content w-full flex-grow text-center">
      <SearchViewSearch />
      <button class="btn btn-info btn-lg">Search</button>
    </div>

    <div class="hero-content flex-1 text-center">
      <h1 class="text-5xl font-bold">{{ $route.params.query || 'sdf' }}</h1>
    </div>
  </div>
</template>
