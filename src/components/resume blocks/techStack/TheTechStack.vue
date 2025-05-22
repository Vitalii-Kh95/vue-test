<script setup>
import FrontEndMobile from './FrontEndMobile.vue';
import BackEndMobile from './BackEndMobile.vue';
import FrontEndMD from './FrontEndMD.vue';
import BackEndMD from './BackEndMD.vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
</script>

<template>
  <div class="">
    <h2
      class="col-span-18 row-span-1 mx-auto text-3xl font-bold md:text-[2.2rem] 2xl:text-[2.6rem]"
    >
      Technical Proficiencies
    </h2>
    <div class="col-span-18 row-span-4 gap-6 subgrid">
      <keep-alive>
        <component :is="breakpoints.greaterOrEqual('md').value ? FrontEndMD : FrontEndMobile" />
      </keep-alive>
      <keep-alive>
        <component :is="breakpoints.greaterOrEqual('md').value ? BackEndMD : BackEndMobile" />
      </keep-alive>
    </div>
  </div>
</template>
