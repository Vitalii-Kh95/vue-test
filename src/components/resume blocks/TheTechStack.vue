<script setup>
import ResumeBlock from './ResumeBlock.vue';
</script>

<template>
  <div>
    <ResumeBlock title="Tech Stack">
      <slot>
        <h2>Back-end</h2>
        <p>- Python, Django, Django REST Framework</p>
        <p>- SQL</p>
        <h2>Front-end</h2>
        <p>- Javascript, Vue 3, Vite</p>
        <p>- Tailwind CSS</p>
        <h2>DevOps & Tools</h2>
        <p>- Nginx</p>
        <p>- Git, GitHub</p>
      </slot>
    </ResumeBlock>
  </div>
</template>
