<script setup>
import FlexibleBlock from './FlexibleBlock.vue';
</script>

<template>
  <FlexibleBlock title="Languages">
    <slot>
      <h2>English</h2>
      <h2>Russian (native)</h2>
    </slot>
  </FlexibleBlock>
</template>
