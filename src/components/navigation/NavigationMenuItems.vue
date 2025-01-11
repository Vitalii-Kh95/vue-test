<script setup>
const menuItems = ['home', 'blog', 'projects'];
</script>

<template>
  <router-link
    v-for="item in menuItems"
    :key="item"
    :to="{ name: item }"
    activeClass="underline"
    class="btn btn-ghost text-xl"
    :class="{ 'pointer-events-none': $route.name === item }"
    >{{ item }}</router-link
  >
</template>
