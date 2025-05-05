<script setup>
import { computed } from 'vue';
import TagBadge from './TagBadge.vue';
const props = defineProps(['post']);
const datePostWasCreated = computed(() => new Date(props.post.created_at).toLocaleString());
</script>

<template>
  <div
    class="card mx-3 mt-6 flex flex-col rounded-lg shadow-2xl duration-150 hover:scale-105 sm:shrink-0 sm:grow sm:basis-0"
  >
    <a href="#!">
      <img class="h-[15vw] w-full rounded-t-lg object-cover" :src="post.image" alt="" />
    </a>
    <div class="card-body justify-between px-6 pb-1 pt-6 text-base-content">
      <h5 class="card-title">{{ post.title }}</h5>
      <div class="flex-grow">
        <div class="h-[100px] text-ellipsis">
          <p class="line-clamp-4 font-sans leading-relaxed">{{ post.description }}</p>
        </div>
      </div>
      <span
        class="mt-5 flex flex-wrap-reverse items-end justify-end gap-x-1 gap-y-2.5 overflow-hidden"
      >
        <TagBadge v-for="tag in post.tags" :key="tag" :tag="tag" />
      </span>
    </div>
    <div class="divider my-0"></div>
    <div class="flex items-center justify-between overflow-hidden px-6 py-3 text-center">
      <router-link
        :to="{
          name: 'blog-details',
          params: { slug: post.slug }
        }"
        class="btn btn-primary"
        >Details
      </router-link>
      <p class="text-end text-base-content">Published: {{ datePostWasCreated }}</p>
    </div>
  </div>
</template>
