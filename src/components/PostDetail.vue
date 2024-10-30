<script setup>
import TagBadge from './TagBadge.vue';

defineProps(['post']);
</script>

<template>
  <div class="col-span-2">
    <!--    ЭТО ТЕЛО ПОСТА -->
    <img class="img-fluid rounded" :src="post.image" alt="" />

    <div class="divider"></div>

    <p v-html="post.content"></p>
    <div class="mt-5 text-right">
      <span
        v-for="tag in post.tags"
        :key="tag.name"
        class="mt-5 flex items-end gap-1 overflow-hidden text-black"
      >
        <TagBadge :tag="tag" />
      </span>
    </div>
    <div class="divider"></div>

    <div class="flex justify-between">
      <div class="lead mr-auto p-2">Author: {{ post.author }}</div>
      <div class="p-2">Published: {{ post.created_at }}</div>
    </div>
    <div class="divider"></div>
  </div>
</template>
