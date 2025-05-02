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
      @close="handleClose"
    ></Popup>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { usePopupStore } from '@/stores/usePopupStore';
import Popup from '@/components/Popup.vue';
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';

const breakpoints = useBreakpoints(breakpointsTailwind);
const { popups, close } = usePopupStore();

const handleClose = (id) => {
  close(id); // Call the store's close method
};
const popupMaxWidth = ref(400);
const messageFits = ref(true);
const adjustPopupWidth = () => {
  if (breakpoints.active().value === '2xl') {
    popupMaxWidth.value = 800;
    messageFits.value = true;
  } else if (breakpoints.active().value === 'xl') {
    popupMaxWidth.value = 700;
    messageFits.value = true; // Plenty of space for one line
  } else if (breakpoints.active().value === 'lg') {
    popupMaxWidth.value = 600;
    messageFits.value = true;
  } else if (breakpoints.active().value === 'md') {
    popupMaxWidth.value = 500;
    messageFits.value = true;
  } else {
    popupMaxWidth.value = 400;
    messageFits.value = false; // Smaller screens may wrap
  }
};
onMounted(() => {
  adjustPopupWidth();
});
watch(breakpoints.active(), adjustPopupWidth);
</script>
