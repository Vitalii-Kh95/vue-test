<script setup>
const menuItems = ['home', 'blog', 'projects', 'contacts'];
const props = defineProps(['classes']);
</script>

<template>
  <router-link
    v-for="item in menuItems"
    :key="item"
    :to="{ name: item }"
    activeClass="underline pointer-events-none"
    :class="props.classes"
    >{{ item }}</router-link
  >
</template>
