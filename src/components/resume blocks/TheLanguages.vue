<script setup>
import ResumeBlock from './ResumeBlock.vue';
</script>

<template>
  <ResumeBlock title="Languages">
    <slot>
      <h2 class="md:inline md:after:content-[',\0020'] lg:block lg:after:content-none">English</h2>
      <h2 class="md:inline lg:block">Russian</h2>
    </slot>
  </ResumeBlock>
</template>
