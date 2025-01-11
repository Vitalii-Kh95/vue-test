<script setup>
const menuItems = ['home', 'blog', 'projects'];
</script>

<template>
  <li v-for="item in menuItems" :key="item">
    <router-link
      :to="{ name: item }"
      class="text-lg"
      :class="[$route.name === item ? 'pointer-events-none underline' : '']"
      >{{ item }}</router-link
    >
  </li>
</template>
