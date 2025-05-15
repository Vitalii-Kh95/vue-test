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
  <nav v-show="store.pageCount > 1" aria-label="Paginate me">
    <ul class="flex gap-x-0.5 sm:gap-x-1">
      <PaginationButton
        label="<"
        :callback="store.getPreviousPage"
        :disabled="!store.previousPage"
      />
      <li v-for="n in store.pageCount" :key="n">
        <button
          v-show="n !== store.currentPage"
          class="btn btn-square btn-ghost btn-sm text-sm active:bg-primary"
          @click="
            store.getPosts({
              limit: 6,
              offset: (n - 1) * 6,
              search: route.query.q,
              tag: route.name === `${type}-posts-by-tag` ? route.params.slug : undefined
            })
          "
        >
          {{ n }}
        </button>
        <button
          v-show="n === store.currentPage"
          class="btn btn-disabled btn-ghost btn-sm text-sm active:bg-primary"
        >
          {{ n }}
        </button>
        <!-- <span
          v-show="n === store.currentPage"
          class="relative block rounded bg-base-300 px-3 py-1.5 text-sm font-medium"
        >
          {{ n }}
        </span> -->
      </li>
      <PaginationButton label=">" :callback="store.getNextPage" :disabled="!store.nextPage" />
    </ul>
  </nav>
</template>
