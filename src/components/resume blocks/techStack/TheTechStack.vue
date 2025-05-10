<script setup>
import FrontEndMobile from './FrontEndMobile.vue';
import BackEndMobile from './BackEndMobile.vue';
import FrontEndMD from './FrontEndMD.vue';
import BackEndMD from './BackEndMD.vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
// import { ref, nextTick } from 'vue';
// import { gsap } from 'gsap';
// import { Flip } from 'gsap/Flip';
// gsap.registerPlugin(Flip);

// const gridContainer = ref(null);
// const isTwoCols = ref(true);

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
    <h2
      class="col-span-18 row-span-1 mx-auto text-3xl font-bold md:text-[2.2rem] 2xl:text-[2.6rem]"
    >
      Tech Stack
    </h2>
    <!-- <div
      class="h-1 w-full rounded-lg bg-secondary bg-gradient-to-r from-muted via-neutral to-muted p-1 text-center"
    ></div> -->
    <div class="col-span-18 row-span-4 grid grid-cols-subgrid grid-rows-subgrid gap-6">
      <keep-alive>
        <component :is="breakpoints.greaterOrEqual('md').value ? FrontEndMD : FrontEndMobile" />
      </keep-alive>
      <keep-alive>
        <component :is="breakpoints.greaterOrEqual('md').value ? BackEndMD : BackEndMobile" />
      </keep-alive>
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
