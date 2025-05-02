<script setup>
import { RouterView } from 'vue-router';
import TheNavigation from '@/components/navigation/TheNavigation.vue';
import PopupManager from '@/components/PopupManager.vue';
// import { useHealthStore } from '@/stores/HealthStore';
// import { ref, onMounted, onBeforeUnmount } from 'vue';

// const healthStore = useHealthStore();

// const popupRef = ref(null);
// onMounted(() => {
//   // Perform health check on app load
//   healthStore.fetchHealthStatus(popupRef.value);
// });

// onBeforeUnmount(() => {
//   // Ensure retry interval is cleared when the app is unmounted
//   healthStore.stopRetry();
// });
</script>

<template>
  <div class="flex h-full flex-col">
    <TheNavigation />
    <RouterView class="flex-1" />
    <PopupManager />
  </div>
</template>
