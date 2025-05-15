<script setup></script>

<template>
  <div>
    This is Blog tab component
    <router-link class="btn btn-primary mx-auto block h-32 w-10/12 pt-6" :to="{ name: 'blog' }"
      ><span class="text-xl text-primary-content"
        >Нажми На эту большую уродливую кнопку что бы перейти на блог</span
      ></router-link
    >
  </div>
</template>
