<script setup>
// import IconJavaScript from '@/components/icons/IconJavaScript.vue';
// import IconTypeScript from '@/components/icons/IconTypeScript.vue';
// import IconVue from '@/components/icons/IconVue.vue';
// import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconJavaScript from '@/assets/icons/IconJavaScript.min.svg?raw';
import IconTypeScript from '@/assets/icons/IconTypeScript.min.svg?raw';
import IconVue from '@/assets/icons/IconVue.min.svg?raw';
import IconTailwind from '@/assets/icons/IconTailwind.min.svg?raw';
import TechStackGrid from './TechStackGrid.vue';
import FrontEndSkills from './FrontEndSkills.vue';

const frontendItems = [
  {
    title: 'JavaScript',
    icon: IconJavaScript
  },
  {
    title: 'TypeScript',
    icon: IconTypeScript
  },
  {
    title: 'Vue',
    icon: IconVue
  },
  {
    title: 'TailwindCSS',
    icon: IconTailwind
  }
];
</script>

<template>
  <div v-once class="col-span-18 row-span-2 gap-1 px-5 text-start subgrid">
    <h3 class="col-span-18 row-span-1 px-1 font-serif text-3xl font-bold">Front-end</h3>
    <div class="col-span-18 row-span-1 gap-x-2 p-3 subgrid">
      <FrontEndSkills class="col-span-11 xl:col-span-10" />
      <div class="col-span-6 col-start-[13] xl:col-span-7 xl:col-start-12">
        <TechStackGrid :items="frontendItems" />
      </div>
    </div>
  </div>
</template>
