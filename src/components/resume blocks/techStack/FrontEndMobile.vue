<script setup>
// import IconTypeScript from '@/components/icons/IconTypeScript.vue';
// import IconVue from '@/components/icons/IconVue.vue';
// import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconTypeScript from '@/assets/icons/IconTypeScript.min.svg?raw';
import IconVue from '@/assets/icons/IconVue.min.svg?raw';
import IconTailwind from '@/assets/icons/IconTailwind.min.svg?raw';
</script>

<template>
  <div class="col-span-18 row-span-2 flex flex-col gap-1 px-1 text-start">
    <h3 class="col-span-18 row-span-1 px-1 font-serif text-2xl font-bold md:text-3xl">Front-end</h3>
    <div class="flex gap-x-1">
      <div v-html="IconTypeScript" class="h-7 w-7 shrink-0" />
      Build dynamic, scalable interfaces with clean, type-safe code that’s easy to maintain and
      extend.
    </div>
    <div class="flex gap-x-1">
      <div v-html="IconVue" class="mt-1 h-7 w-7 shrink-0" />
      Craft reactive, component-based UIs with Vue that feel smooth, fast, and user-friendly.
    </div>
    <div class="flex gap-x-1">
      <div v-html="IconTailwind" class="mt-0.5 h-7 w-7 shrink-0" />
      Use Tailwind CSS for efficient and responsive styling.
    </div>
  </div>
</template>
