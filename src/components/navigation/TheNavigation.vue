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
import { useWindowSizeStore } from '@/stores/WindowSizeStore';
// import { storeToRefs } from 'pinia';

const windowSizeStore = useWindowSizeStore();
defineProps(['xs']);

const route = useRoute();
const displaySearch = computed(() => {
  return (
    (route.path.includes('blog') || route.path.includes('projects')) &&
    !route.path.includes('search')
  );
});

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
          <DropdownMenu />
        </ul>
      </div>
      <div class="hidden lg:flex">
        <MenuItems />
      </div>
    </div>

    <div class="navbar-end flex-grow gap-2">
      <!-- I need to get into nested routs or routers.
      So if I get blog or projects at the root
      I display search component -->
      <component v-if="displaySearch" :is="windowSizeStore.xs ? SearchButton : SearchBox" />
      <ProfileMenu />
      <ThemeSwitcher class="pr-5" />
    </div>
  </div>
</template>
