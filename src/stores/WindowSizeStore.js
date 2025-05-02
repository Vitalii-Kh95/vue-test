import { defineStore } from 'pinia';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

export const useWindowSizeStore = defineStore('windowSizeStore', {
  state: () => {
    return {
      xs: breakpoints['xs'],
      sm: breakpoints['sm'],
      md: breakpoints['md'],
      lg: breakpoints['lg'],
      xl: breakpoints['xl'],
      '2xl': breakpoints['2xl'],
      lte_sm: breakpoints.smallerOrEqual('sm'),
      lte_md: breakpoints.smallerOrEqual('md'),
      lte_lg: breakpoints.smallerOrEqual('lg'),
      lte_xl: breakpoints.smallerOrEqual('xl'),
      gte_sm: breakpoints.greaterOrEqual('sm'),
      gte_md: breakpoints.greaterOrEqual('md'),
      gte_lg: breakpoints.greaterOrEqual('lg'),
      gte_xl: breakpoints.greaterOrEqual('xl')
    };
  }
});
