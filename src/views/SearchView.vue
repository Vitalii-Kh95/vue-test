<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import SearchViewHeader from '@/components/SearchViewHeader.vue';

const route = useRoute();
const searchQuery = ref(route.query.search);
</script>

<template>
  <div class="container mx-auto pt-5">
    <SearchViewHeader :query="searchQuery" />
  </div>
</template>
