<script setup>
import ResumeBlock from './ResumeBlock.vue';
</script>

<template>
  <div>
    <ResumeBlock title="About">
      <slot>
        <p>
          I am a self-taught backend developer with hands-on experience building web applications.
        </p>
        <p>
          Coming from a different field, I transitioned into tech to work on meaningful projects and
          expand my skills.
        </p>
        <p>
          I focus on writing clean, maintainable code and continuously improving through practice
          and learning.
        </p>
      </slot>
    </ResumeBlock>
  </div>
</template>
