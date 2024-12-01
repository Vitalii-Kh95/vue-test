<script setup>
const menuItems = ['home', 'blog', 'projects', 'contacts'];
const props = defineProps(['classes']);
</script>

<template>
  <li v-for="item in menuItems" :key="item">
    <router-link :to="{ name: item }" :class="props.classes">{{ item }}</router-link>
  </li>
</template>
