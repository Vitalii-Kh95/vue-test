<script setup>
import PaginationButton from './paginationButton.vue';
import { usePostStore } from '@/stores/PostStore';

const postStore = usePostStore();
</script>

<template>
  <nav aria-label="Paginate me">
    <ul class="flex">
      <PaginationButton
        label="Previous"
        :callback="postStore.getPreviousPage"
        :disabled="!postStore.previousPage"
      />
      <li
        v-for="n in postStore.pageCount"
        :key="n"
        :class="[
          'relative block rounded px-3 py-1.5 text-sm transition duration-300',
          n === postStore.currentPage
            ? 'bg-base-300 font-medium'
            : 'hover:bg-base-200 hover:text-base-content focus:bg-neutral-100 focus:outline-none active:bg-neutral-100'
        ]"
      >
        <button
          v-if="n !== postStore.currentPage"
          class=""
          @click="postStore.getPosts({ limit: 6, offset: (n - 1) * 6 })"
        >
          {{ n }}
        </button>
        <span v-else class="">{{ n }}</span>
      </li>
      <PaginationButton
        label="Next"
        :callback="postStore.getNextPage"
        :disabled="!postStore.nextPage"
      />
    </ul>
  </nav>
</template>
