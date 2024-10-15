<template>
    <nuxt-link class="btn btn-info btn-xs rounded-full"
        :to="`/tags/${tagName}`">#{{ tagName }}
    </nuxt-link>
</template>

<script setup>
const props = defineProps(['tagName']);
</script>