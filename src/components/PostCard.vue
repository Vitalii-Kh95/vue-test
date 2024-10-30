<script setup>
import TagBadge from './TagBadge.vue';
defineProps(['post']);
</script>

<template>
  <div
    class="text-surface shadow-secondary-1 mx-3 mt-6 flex flex-col rounded-lg border-2 bg-white duration-150 hover:scale-105 sm:shrink-0 sm:grow sm:basis-0"
  >
    <a href="#!">
      <img class="h-[15vw] w-full rounded-t-lg object-cover" :src="post.image" alt="" />
    </a>
    <div class="flex flex-col justify-between px-6 pb-1 pt-6">
      <h5 class="mb-2 text-xl font-bold leading-tight">{{ post.title }}</h5>
      <p v-html="post.description" class="mb-4 h-[100px] overflow-hidden text-ellipsis"></p>
      <span class="mt-5 flex items-end gap-1 overflow-hidden text-black">
        <TagBadge v-for="tag in post.tags" v-bind:key="tag" :tag-name="tag" />
      </span>
    </div>
    <div
      class="text-surface/75 flex items-center justify-between overflow-hidden border-t-2 border-neutral-100 px-6 py-3 text-center"
    >
      <button
        class="bg-primary-100 text-primary-700 hover:bg-primary-accent-200 focus:bg-primary-accent-200 active:bg-primary-accent-200 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 motion-reduce:transition-none"
      >
        <router-link
          :to="{ name: 'blog-detail', params: { slug: post.slug } }"
          class="btn-outline-secondary btn btn-sm"
          >Details
        </router-link>
      </button>
      <p class="dark:text-neutral-300">Created: {{ post.created_at }}</p>
    </div>
  </div>
</template>
