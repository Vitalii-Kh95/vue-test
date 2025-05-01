<script setup>
defineProps(['title']);
</script>

<template>
  <div class="rounded-lg p-2 text-center">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
  </div>
  <div
    class="h-1 rounded-lg bg-secondary bg-gradient-to-r from-muted via-neutral to-muted p-1 text-center"
  ></div>
</template>
