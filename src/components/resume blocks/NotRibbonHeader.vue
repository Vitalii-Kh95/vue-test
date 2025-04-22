<script setup>
defineProps(['title', 'classes']);
</script>

<template>
  <div class="rounded-lg p-2" :class="classes">
    <h1 class="pb-2 text-lg font-bold">{{ title }}</h1>
  </div>
</template>
