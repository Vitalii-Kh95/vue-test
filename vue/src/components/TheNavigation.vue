<script setup>
import SearchBox from './TheNavigationSearch.vue';
import MenuItems from './TheNavigationMenuItems.vue';
import ProfileMenu from './TheNavigationProfileMenu.vue';
//const emit = defineEmits(['q']);
// const { status, data } = useAuth();

// const loggedIn = computed(() => {
//   return status.value === 'authenticated';
// });
</script>
<template>
  <div>
    <MenuItems class="flex-1" />
    <div class="flex-none gap-2">
      <SearchBox v-if="$route.name != 'search'" />
      <ProfileMenu class="pr-5" />
    </div>
  </div>
</template>
