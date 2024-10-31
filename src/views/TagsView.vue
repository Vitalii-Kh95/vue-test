<script setup>
import { onMounted, ref } from 'vue';
import TagBadge from '@/components/TagBadge.vue';
import { getTags } from '@/functions';

const tags = ref([]);
onMounted(async () => (tags.value = await getTags()));
</script>

<template>
  <div class="container mx-auto flex flex-col items-center">
    <p class="my-3 flex gap-1 self-start overflow-clip">
      Tags:
      <TagBadge v-for="tag in tags" :key="tag.name" :tag="tag" />
    </p>
  </div>
</template>
