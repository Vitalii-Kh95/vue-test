<script setup>
defineProps(['title']);
</script>

<template>
  <div class="">
    <div class="rounded-lg p-2 text-center">
      <h1 class="text-2xl font-bold">{{ title }}</h1>
    </div>
    <div
      class="h-1 rounded-lg bg-gradient-to-r from-base-300 via-neutral to-base-300 p-0.5 text-center"
    ></div>
  </div>
</template>
