<script setup>
import SearchBox from './TheNavigationSearch.vue';
import MenuItems from './TheNavigationMenuItems.vue';
import DropdownMenu from './TheNavigationDrowdownMenu.vue';
import ProfileMenu from './TheNavigationProfileButton.vue';
import IconHamburger from './icons/IconHamburger.vue';
import ThemeSwitcher from './TheThemeSwitcher.vue';
import SearchButton from './TheNavigationSearchButton.vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const xs = breakpoints.smaller('sm');

//const emit = defineEmits(['q']);
// const { status, data } = useAuth();

// const loggedIn = computed(() => {
//   return status.value === 'authenticated';
// });
</script>
<template>
  <div class="navbar sticky top-0 z-10 bg-neutral px-0 text-neutral-content">
    <div class="navbar-start ps-1">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <IconHamburger />
        </div>
        <ul
          tabindex="0"
          role="menu"
          class="menu dropdown-content menu-md z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-base-content shadow"
        >
          <DropdownMenu :classes="'text-lg'" />
        </ul>
      </div>
      <div class="hidden lg:flex">
        <MenuItems :classes="'btn btn-ghost text-xl'" />
      </div>
    </div>

    <div class="navbar-end flex-grow gap-2">
      <component v-if="$route.name != 'search'" :is="xs ? SearchButton : SearchBox" />
      <ProfileMenu />
      <ThemeSwitcher class="pr-5" />
    </div>
  </div>
</template>
