<template>
  <div
    class="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 flex-col gap-1"
    :style="{ width: `${popupMaxWidth}px` }"
  >
    <Popup
      v-for="popup in popups"
      :id="popup.id"
      :key="popup.id"
      :message="popup.message"
      :type="popup.type"
      :wrap="messageFits"
      @close="handleClose"
      @vue:mounted="() => console.log('mounted', popup.id)"
      @vue:unmounted="() => console.log('unmounted', popup.id)"
    />
  </div>
</template>

<script setup>
// Import necessary tools
import { usePopupStore } from '@/stores/usePopupStore';
import Popup from '@/components/Popup.vue'; // Import the Popup component
// import { ref, watch } from 'vue';
// import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

// const breakpoints = useBreakpoints(breakpointsTailwind);
// Access the Pinia store
const { popups, close } = usePopupStore();

const handleClose = (id) => {
  close(id); // Call the store's close method
};

// const popupMaxWidth = ref();
// const messageFits = ref(true);
// function adjustPopupWidth() {
//   if (breakpoints.current.value === '2xl') {
//     popupMaxWidth.value = 800;
//     messageFits.value = true;
//   } else if (breakpoints.current.value === 'xl') {
//     popupMaxWidth.value = 700;
//     messageFits.value = true; // Plenty of space for one line
//   } else if (breakpoints.current.value === 'lg') {
//     popupMaxWidth.value = 600;
//     messageFits.value = true;
//   } else if (breakpoints.current.value === 'md') {
//     popupMaxWidth.value = 500;
//     messageFits.value = true;
//   } else {
//     popupMaxWidth.value = 400;
//     messageFits.value = false; // Smaller screens may wrap
//   }
// }
// adjustPopupWidth();
// watch(breakpoints.current, adjustPopupWidth);
</script>
