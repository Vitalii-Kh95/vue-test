<script setup>
import SearchBox from './TheNavigationSearch.vue';
import ProfileMenu from './TheNavigationProfileButton.vue';
import Menu from './NavigationMenu.vue';
import ThemeSwitcher from './TheThemeSwitcher.vue';
import SearchButton from './TheNavigationSearchButton.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);

const route = useRoute();

const menuItems = [
  { displayedName: 'back to portfolio', routeName: 'portfolio' },
  { displayedName: 'home', routeName: 'blog' }
];
// const displaySearch = computed(() => {
//   return route.path.includes('blog') && !route.path.includes('search');
// });
const displaySearch = computed(() => {
  return !route.path.includes('search');
});
</script>
<template>
  <div class="navbar fixed top-0 z-20 bg-neutral px-0 py-0 text-neutral-content">
    <Menu class="navbar-start ps-1" :menuItems="menuItems" />

    <div class="navbar-end flex-grow gap-2">
      <component
        v-if="displaySearch"
        :is="breakpoints.smallerOrEqual('lg').value ? SearchButton : SearchBox"
      />
      <ProfileMenu />
      <ThemeSwitcher class="pr-5" />
    </div>
  </div>
</template>
