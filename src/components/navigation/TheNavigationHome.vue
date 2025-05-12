<script setup>
import ThemeSwitcher from './TheThemeSwitcher.vue';
import Menu from './NavigationMenu.vue';

const menuItems = [
  { displayedName: 'home', routeName: 'home' },
  { displayedName: 'portfolio', routeName: 'portfolio' }
];
</script>
<template>
  <div class="navbar fixed top-0 z-20 bg-neutral px-0 py-0 text-neutral-content">
    <div class="navbar-start ps-1">
      <Menu :menuItems="menuItems" />
    </div>

    <div class="navbar-end flex-grow gap-2">
      <ThemeSwitcher class="pr-5" />
    </div>
  </div>
</template>
