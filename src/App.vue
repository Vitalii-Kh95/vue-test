<script setup>
import { RouterView } from 'vue-router';
import TheNavigation from '@/components/navigation/TheNavigation.vue';
import PopupManager from '@/components/PopupManager.vue';
import { useHealthStore } from '@/stores/HealthStore';
import { onMounted, onBeforeUnmount } from 'vue';

const healthStore = useHealthStore();

onMounted(() => {
  // Perform health check on app load
  healthStore.fetchHealthStatus();
});

onBeforeUnmount(() => {
  // Ensure retry interval is cleared when the app is unmounted
  healthStore.stopRetry();
});
</script>

<template>
  <div class="flex h-screen flex-col">
    <TheNavigation />
    <!-- Due to the way I handle scrolling on landing page (lg+) I can't apply sticky class to Navbar,
     thus I need to compensate it with pt class.
     It happens because of height being fixed at 100vh
     and sticky element only fixed when it's in those boundaries
     I could use nested containers as I do on landing page everywhere,
     but it seems like making navbar fixed is more safe and easy option
     The 4 rem number comes from height given by daysiUI class "navbar"
     but I also wrapped this number with theme dependent variable
     which adds some flexibility -->
    <RouterView class="flex-1 pt-[--menu-height]" />
    <PopupManager />
  </div>
</template>
