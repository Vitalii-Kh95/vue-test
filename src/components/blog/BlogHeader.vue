<script setup>
// In SearchView another specific header is used
defineProps(['title']);
</script>

<template>
  <div
    class="flex min-h-24 flex-col justify-center bg-gradient-to-r from-base-100 via-base-200 to-base-100"
  >
    <div class="text-center">
      <h1 class="text-3xl font-bold md:text-5xl">{{ title }}</h1>
    </div>
  </div>
</template>
