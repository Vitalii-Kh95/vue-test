<script setup>
import SearchBox from './TheNavigationSearch.vue';
import MenuItems from './NavigationMenuItems.vue';
import DropdownMenu from './TheNavigationDropdownMenu.vue';
import ProfileMenu from './TheNavigationProfileButton.vue';
import IconHamburger from '@/components/icons/IconHamburger.vue';
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
    <div class="navbar-start ps-1">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost sm:hidden">
          <IconHamburger />
        </div>
        <ul
          tabindex="0"
          role="menu"
          class="menu dropdown-content menu-md z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-base-content shadow"
        >
          <DropdownMenu :menu-items="menuItems" />
        </ul>
      </div>
      <div class="hidden sm:flex">
        <MenuItems :menu-items="menuItems" />
      </div>
    </div>

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
