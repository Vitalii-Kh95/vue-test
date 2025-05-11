<script setup>
import { useHealthStore } from '@/stores/HealthStore';
import MenuItems from './NavigationMenuItems.vue';
import DropdownMenu from './TheNavigationDropdownMenu.vue';
// import IconHamburger from '@/components/icons/IconHamburger.vue';
import IconHamburger from '@/assets/icons/IconHamburger.min.svg?raw';
import ThemeSwitcher from './TheThemeSwitcher.vue';

const menuItems = [
  { displayedName: 'home', routeName: 'home' },
  { displayedName: 'portfolio', routeName: 'portfolio' }
];
const healthStore = useHealthStore();
</script>
<template>
  <div class="navbar fixed top-0 z-20 bg-neutral px-0 py-0 text-neutral-content">
    <div class="navbar-start ps-1">
      <div class="dropdown" v-if="healthStore.blogAPIStatus === 'ok'">
        <div tabindex="0" role="button" class="btn btn-ghost sm:hidden">
          <div v-html="IconHamburger" class="h-5 w-5" />
        </div>
        <ul
          tabindex="0"
          role="menu"
          class="menu dropdown-content menu-md z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 text-base-content shadow"
        >
          <DropdownMenu :menu-items="menuItems" />
        </ul>
      </div>
      <div class="hidden sm:flex" v-if="healthStore.blogAPIStatus === 'ok'">
        <MenuItems :menu-items="menuItems" />
      </div>
    </div>

    <div class="navbar-end flex-grow gap-2">
      <ThemeSwitcher class="pr-5" />
    </div>
  </div>
</template>
