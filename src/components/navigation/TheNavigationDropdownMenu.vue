<script setup>
defineProps({
  menuItems: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <li v-for="item in menuItems" :key="item.routeName">
    <router-link
      :to="{ name: item.routeName }"
      class="text-lg"
      :class="[$route.name === item ? 'pointer-events-none underline' : '']"
      >{{ item.displayedName }}</router-link
    >
  </li>
</template>
