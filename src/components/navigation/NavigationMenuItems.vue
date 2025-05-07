<script setup>
defineProps({
  menuItems: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <router-link
    v-for="item in menuItems"
    :key="item.routeName"
    :to="{ name: item.routeName }"
    activeClass="underline"
    class="btn btn-ghost text-xl"
    :class="{ 'pointer-events-none': $route.name === item }"
    >{{ item.displayedName }}</router-link
  >
</template>
