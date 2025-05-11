<script setup>
// import IconPython from '@/components/icons/IconPython.vue';
// import IconDjango from '@/components/icons/IconDjango.vue';
// import IconSQL from '@/components/icons/IconSQL.vue';
// import IconAPI from '@/components/icons/IconAPI.vue';
import IconPython from '@/assets/icons/IconPython.min.svg?raw';
import IconAPI from '@/assets/icons/IconAPI.min.svg?raw';
import IconSQL from '@/assets/icons/IconSQL.min.svg?raw';
import IconDjango from '@/assets/icons/IconDjango.min.svg?raw';
import TechStackGrid from './TechStackGrid.vue';
import BackEndSkills from './BackEndSkills.vue';

const backendItems = [
  {
    title: 'Python',
    icon: IconPython
  },
  {
    title: 'Django',
    icon: IconDjango
  },
  {
    title: 'SQL',
    icon: IconSQL
  },
  {
    title: 'RESTful API',
    icon: IconAPI
  }
];
</script>

<template>
  <div class="col-span-18 row-span-2 grid grid-cols-subgrid grid-rows-subgrid gap-1 px-5">
    <div class="col-span-18 row-span-1 px-4 text-end">
      <h3 class="font-serif text-3xl font-bold">Back-end</h3>
    </div>
    <div class="col-span-18 row-span-1 grid grid-cols-subgrid grid-rows-subgrid gap-x-2 p-3">
      <div class="col-span-5 xl:col-span-8">
        <TechStackGrid :items="backendItems" />
      </div>
      <BackEndSkills class="col-span-12 col-start-7 text-start xl:col-span-9 xl:col-start-10" />
    </div>
  </div>
</template>
