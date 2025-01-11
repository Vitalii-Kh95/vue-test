import { defineStore } from 'pinia';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

export const useWindowSizeStore = defineStore('windowSizeStore', {
  state: () => {
    return {
      xs: breakpoints.smaller('sm'),
      sm: breakpoints.between('sm', 'md'),
      md: breakpoints.between('md', 'lg'),
      lg: breakpoints.between('lg', 'xl'),
      xl: breakpoints['xl'] // Screens >= xl
    };
  }
});
