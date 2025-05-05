<script setup>
import PaginationButton from './paginationButton.vue';
import { usePostStore } from '@/stores/PostStore';
import { useRoute } from 'vue-router';
const route = useRoute();
// it's an appendix from times I had projects view,
// but I decided to keep it that way
const type = route.path.includes('blog') ? 'blog' : null;
const store = type === 'blog' ? usePostStore() : null;
</script>

<template>
  <nav v-if="store.pageCount > 1" aria-label="Paginate me">
    <ul class="flex">
      <PaginationButton
        label="Previous"
        :callback="store.getPreviousPage"
        :disabled="!store.previousPage"
      />
      <li v-for="n in store.pageCount" :key="n">
        <button
          v-if="n !== store.currentPage"
          class="relative block rounded px-3 py-1.5 text-sm transition duration-300 hover:bg-base-200 hover:text-base-content focus:bg-secondary focus:text-secondary-content focus:outline-none active:bg-primary"
          @click="
            store.getPosts({
              limit: 6,
              offset: (n - 1) * 6,
              search: route.query.q,
              tag: route.name === `${type}-tag-detail` ? route.params.slug : undefined
            })
          "
        >
          {{ n }}
        </button>
        <span v-else class="relative block rounded bg-base-300 px-3 py-1.5 text-sm font-medium">
          {{ n }}
        </span>
      </li>
      <PaginationButton label="Next" :callback="store.getNextPage" :disabled="!store.nextPage" />
    </ul>
  </nav>
</template>
