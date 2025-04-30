<script setup>
import ResumeBlock from './ResumeBlock.vue';
</script>

<template>
  <ResumeBlock title="Languages">
    <slot>
      <h2>English</h2>
      <h2>Russian (native)</h2>
    </slot>
  </ResumeBlock>
</template>
