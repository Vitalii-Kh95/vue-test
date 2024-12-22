<script setup>
defineProps(['title']);
</script>

<template>
  <div
    class="hero flex h-[15rem] flex-col justify-center gap-0 bg-gradient-to-r from-base-100 via-base-200 to-base-100"
  >
    <div class="hero-content flex-1 text-center">
      <h1 class="text-5xl font-bold">{{ title }}</h1>
    </div>
  </div>
</template>
