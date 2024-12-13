<script setup>
import PaginationButton from './paginationButton.vue';
import { usePostStore } from '@/stores/PostStore';
import { useRoute } from 'vue-router';
const route = useRoute();

const postStore = usePostStore();
</script>

<template>
  <nav v-if="postStore.pageCount > 1" aria-label="Paginate me">
    <ul class="flex">
      <PaginationButton
        label="Previous"
        :callback="postStore.getPreviousPage"
        :disabled="!postStore.previousPage"
      />
      <li v-for="n in postStore.pageCount" :key="n">
        <button
          v-if="n !== postStore.currentPage"
          class="relative block rounded px-3 py-1.5 text-sm transition duration-300 hover:bg-base-200 hover:text-base-content focus:bg-secondary focus:text-secondary-content focus:outline-none active:bg-accent"
          @click="
            postStore.getPosts({
              limit: 6,
              offset: (n - 1) * 6,
              search: route.query.q,
              tag: route.name === 'tag-detail' ? route.params.slug : undefined
            })
          "
        >
          {{ n }}
        </button>
        <span v-else class="relative block rounded bg-base-300 px-3 py-1.5 text-sm font-medium">
          {{ n }}
        </span>
      </li>
      <PaginationButton
        label="Next"
        :callback="postStore.getNextPage"
        :disabled="!postStore.nextPage"
      />
    </ul>
  </nav>
</template>
