<script setup>
import { computed } from 'vue';
import TagBadge from './TagBadge.vue';
const props = defineProps(['post']);
const datePostWasCreated = computed(() => new Date(props.post.created_at).toLocaleString());
</script>

<template>
  <div class="col-span-full xl:col-span-2">
    <img class="rounded" :src="post.image" alt="" />

    <div class="divider"></div>

    <p class="font-serif text-xl">{{ post.content }}</p>
    <div class="mt-7 flex flex-wrap-reverse justify-end gap-1">
      <span v-for="tag in post.tags" :key="tag.name">
        <TagBadge :tag="tag" />
      </span>
    </div>
    <div class="divider mb-3"></div>

    <div class="flex items-center justify-between pb-4">
      <router-link class="btn btn-primary rounded-xl" :to="{ name: 'blog' }">Go Back</router-link>
      <span class="ps-2">Published: {{ datePostWasCreated }}</span>
    </div>
  </div>
</template>
