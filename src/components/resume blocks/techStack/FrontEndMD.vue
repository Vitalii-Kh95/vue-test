<script setup>
import IconJavaScript from '@/components/icons/IconJavaScript.vue';
import IconTypeScript from '@/components/icons/IconTypeScript.vue';
import IconVue from '@/components/icons/IconVue.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';
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
  <div
    class="col-span-18 row-span-2 grid grid-cols-subgrid grid-rows-subgrid gap-1 px-5 text-start"
  >
    <h3 class="col-span-18 row-span-1 px-1 font-serif text-3xl font-bold">Front-end</h3>
    <div class="col-span-18 row-span-1 grid grid-cols-subgrid grid-rows-subgrid gap-x-2 p-3">
      <FrontEndSkills class="col-span-12 xl:col-span-9" />
      <div class="col-span-5 col-start-[14] xl:col-span-8 xl:col-start-11">
        <TechStackGrid :items="frontendItems" />
      </div>
    </div>
  </div>
</template>
