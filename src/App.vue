<script setup>
import { RouterView } from 'vue-router';
import TheNavigation from '@/components/navigation/TheNavigation.vue';
import { useHealthStore } from '@/stores/HealthStore';
import { defineAsyncComponent, onBeforeUnmount } from 'vue';

const healthStore = useHealthStore();

healthStore.fetchHealthStatus();

const PopupManager = defineAsyncComponent(() => import('@/components/PopupManager.vue'));

onBeforeUnmount(() => {
  // Ensure retry interval is cleared when the app is unmounted
  healthStore.stopRetry();
});
</script>

<template>
  <div class="flex h-screen flex-col">
    <!--
     sticky element (Navbar) is fixed only when it's in boundaries of initial parrent's height
     that is 100vh (h-screen)
     since some pages need to be scrollable, and go beyound 100vh,
     I wrapped RouterView in a div with overflow-hidden and fixed height
     Scrolling happens inside this element not Navbar's parent
     -->
    <TheNavigation />
    <div class="flex-1 overflow-hidden pb-1">
      <RouterView class="h-full overflow-auto" />
    </div>
    <!-- <RouterView class="flex-1 pt-[--menu-height]" /> -->
    <component v-if="healthStore.usePopups" :is="PopupManager" />
  </div>
</template>
