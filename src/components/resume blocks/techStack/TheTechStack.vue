<script setup>
import IconPython from '@/components/icons/IconPython.vue';
import IconJavaScript from '@/components/icons/IconJavaScript.vue';
import IconTypeScript from '@/components/icons/IconTypeScript.vue';
import IconVue from '@/components/icons/IconVue.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconDjango from '@/components/icons/IconDjango.vue';
import IconSQL from '@/components/icons/IconSQL.vue';
import IconAPI from '@/components/icons/IconAPI.vue';
import TechStackGrid from './TechStackGrid.vue';
import FrontEndSkills from './FrontEndSkills.vue';
import BackEndSkills from './BackEndSkills.vue';
import Cell from './TechStackCell.vue';
// import { ref, nextTick } from 'vue';
// import { gsap } from 'gsap';
// import { Flip } from 'gsap/Flip';
// gsap.registerPlugin(Flip);

// const gridContainer = ref(null);
// const isTwoCols = ref(true);

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
// :class="[isTwoCols ? 'grid-cols-2' : 'grid-cols-1']"
// ref="gridContainer"
// const toggleColumns = async () => {
//   const state = Flip.getState(gridContainer.value.children);

//   isTwoCols.value = !isTwoCols.value;
//   await nextTick();

//   Flip.from(state, {
//     duration: 0.6,
//     ease: 'power2.inOut',
//     absolute: true,
//     nested: true,
//     stagger: 0.05
//   });
// };
</script>

<template>
  <div class="">
    <h2 class="col-span-10 row-span-1 mx-auto text-[2.6rem] font-bold">Tech Stack</h2>
    <!-- <div
      class="h-1 w-full rounded-lg bg-secondary bg-gradient-to-r from-muted via-neutral to-muted p-1 text-center"
    ></div> -->
    <div class="col-span-10 row-span-4 grid grid-cols-subgrid grid-rows-subgrid gap-6">
      <div
        class="col-span-10 row-span-2 grid grid-cols-subgrid grid-rows-subgrid gap-1 px-5 text-start"
      >
        <h3 class="col-span-10 row-span-1 px-1 font-serif text-3xl font-bold">Front-end</h3>
        <div class="col-span-10 row-span-1 grid grid-cols-subgrid grid-rows-subgrid gap-x-2 p-3">
          <FrontEndSkills class="col-span-5" />
          <div class="col-span-5">
            <TechStackGrid :items="frontendItems" />
          </div>
        </div>
      </div>
      <div class="col-span-10 row-span-2 grid grid-cols-subgrid grid-rows-subgrid gap-1 px-5">
        <div class="col-span-10 row-span-1 px-4 text-end">
          <h3 class="font-serif text-3xl font-bold">Back-end</h3>
        </div>
        <div class="col-span-10 row-span-1 grid grid-cols-subgrid grid-rows-subgrid gap-x-2 p-3">
          <div class="col-span-5">
            <div class="grid grid-cols-2 gap-x-3 gap-y-6">
              <Cell
                v-for="item in backendItems"
                :key="item.title"
                :title="item.title"
                :icon="item.icon"
              />
            </div>
          </div>
          <BackEndSkills class="col-span-5 text-start" />
        </div>
      </div>
    </div>
    <!-- <button @click="toggleColumns" class="btn btn-primary mb-4">Toggle Grid</button> -->
  </div>
</template>
<!-- <script setup>
import FlexibleBlock from './FlexibleBlock.vue';
</script>

<template>
  <FlexibleBlock title="Tech Stack">
    <div>
      <h2>Back-end</h2>
      <p>• Python, Django, Django REST Framework</p>
      <p>• SQL</p>

      <h2>Front-end</h2>
      <p>• Javascript, Vue 3, Vite</p>
      <p>• Tailwind CSS</p>

      <h2>DevOps & Tools</h2>
      <p>• Nginx</p>
      <p>• Git, GitHub</p>
    </div>
  </FlexibleBlock>
</template> -->
