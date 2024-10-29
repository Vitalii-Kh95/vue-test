<template>
  <router-link class="btn btn-info btn-xs rounded-full" :to="`/tags/${tagName}`"
    >#{{ tagName }}
  </router-link>
</template>

<script setup>
defineProps(['tagName']);
</script>
