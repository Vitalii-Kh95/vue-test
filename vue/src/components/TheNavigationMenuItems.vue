<script setup>
const menuItems = ['home', 'blog', 'projects', 'contacts'];
</script>

<template>
  <div>
    <router-link
      v-for="item in menuItems"
      :to="{ name: item }"
      :key="item"
      class="btn btn-ghost text-xl"
      >{{ item }}</router-link
    >
  </div>
</template>
