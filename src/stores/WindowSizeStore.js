import { defineStore } from 'pinia';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

export const useWindowSizeStore = defineStore('windowSizeStore', {
  state: () => {
    return {
      xs: breakpoints.smaller('sm'),
      sm: breakpoints.smaller('md'),
      md: breakpoints.smaller('lg'),
      lg: breakpoints.smaller('xl'),
      xl: breakpoints['xl'] // Screens >= xl
    };
  }
});
