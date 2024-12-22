<script setup>
import { computed } from 'vue';
import TagBadge from './TagBadge.vue';
const props = defineProps(['post']);
const datePostWasCreated = computed(() => new Date(props.post.created_at).toLocaleString());
</script>

<template>
  <div>
    <img class="img-fluid rounded" :src="post.image" alt="" />

    <div class="divider"></div>

    <p v-html="post.content"></p>
    <div class="mt-7 flex justify-end gap-1">
      <span v-for="tag in post.tags" :key="tag.name">
        <TagBadge :tag="tag" />
      </span>
    </div>
    <div class="divider"></div>

    <div class="flex justify-between">
      <div class="p-2">Published: {{ datePostWasCreated }}</div>
    </div>
  </div>
</template>
