<script setup>
import ResumeBlock from './ResumeBlock.vue';
</script>

<template>
  <div>
    <ResumeBlock title="Contact">
      <slot>
        <h2>Phone: +998 94 720 80 15</h2>
        <h2><a href="mailto:mew030995@gmail.com">Email: mew030995@gmail.com</a></h2>
        <h2><a href="https://github.com/Vitalii-Kh95">github.com/Vitalii-Kh95</a></h2>
        <h2><a href="https://t.me/Whippoorwill95">Telegram: @Whippoorwill95</a></h2>
      </slot>
    </ResumeBlock>
  </div>
</template>
