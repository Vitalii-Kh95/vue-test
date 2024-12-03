import { defineStore } from 'pinia';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

export const useWindowSizeStore = defineStore('windowSizeStore', {
  state: () => {
    return {
      xs: breakpoints.smaller('sm'),
      lg: breakpoints.smaller('xl')
    };
  }
});
