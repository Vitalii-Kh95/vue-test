<template>
  <div
    v-if="visible"
    :class="[
      'fixed left-1/2 top-4 z-50 -translate-x-1/2 transform transition-opacity duration-5000 ease-in',
      fading ? 'opacity-0' : 'opacity-100'
    ]"
    @transitionend="handleFadeEnd"
    :style="{ maxWidth: `${popupMaxWidth}px` }"
  >
    <div
      class="alert relative flex items-center justify-between overflow-visible rounded-full p-4 shadow-lg"
      :class="typeClass"
    >
      <div class="min-w-0 flex-1" :class="messageFits ? 'whitespace-nowrap' : 'whitespace-normal'">
        <slot>{{ message }}</slot>
      </div>
      <button
        @click="close"
        class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-red-600 shadow-md hover:bg-gray-200"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useWindowSizeStore } from '@/stores/WindowSizeStore';

const visible = ref(false);
const fading = ref(false);
const message = ref('');
const popupMaxWidth = ref(600); // Default max width
const typeClass = ref('alert-error'); // Default styling
const messageFits = ref(true); // Whether the message fits on one line

const windowSizeStore = useWindowSizeStore();
let autoCloseTimeout = null;
let fadeTimeout = null;

function show() {
  visible.value = true;
  fading.value = false;

  if (autoCloseTimeout) clearTimeout(autoCloseTimeout);
  if (fadeTimeout) clearTimeout(fadeTimeout);

  // Trigger fading after 3 seconds and fully close after 5 seconds
  fadeTimeout = setTimeout(() => fadeOut(), 1000); // Start fade-out earlier
  autoCloseTimeout = setTimeout(() => close(), 6000); // Auto close after 5 seconds
}

function setMessage(newMessage, type = 'error') {
  message.value = newMessage;
  typeClass.value = type === 'success' ? 'alert-success' : 'alert-error';
  adjustPopupWidth();
}

function fadeOut() {
  fading.value = true; // Start fade-out effect
}

function handleFadeEnd() {
  if (fading.value) close(); // Close after fade-out completes
}

function close() {
  visible.value = false;
  fading.value = false;
  if (autoCloseTimeout) clearTimeout(autoCloseTimeout);
  if (fadeTimeout) clearTimeout(fadeTimeout);
}

function adjustPopupWidth() {
  if (windowSizeStore['2xl']) {
    popupMaxWidth.value = 800;
    messageFits.value = true;
  } else if (windowSizeStore.xl) {
    popupMaxWidth.value = 700;
    messageFits.value = true; // Plenty of space for one line
  } else if (windowSizeStore.lg) {
    popupMaxWidth.value = 600;
    messageFits.value = true;
  } else if (windowSizeStore.md) {
    popupMaxWidth.value = 500;
    messageFits.value = true;
  } else if (windowSizeStore.sm) {
    popupMaxWidth.value = 400;
    messageFits.value = false; // Smaller screens may wrap
  } else {
    popupMaxWidth.value = 300;
    messageFits.value = false; // Extra small screens wrap
  }
}

onMounted(() => {
  adjustPopupWidth(); // Set initial width
  watch(
    () => [windowSizeStore.xl, windowSizeStore.lg, windowSizeStore.md, windowSizeStore.sm],
    adjustPopupWidth
  ); // Adjust width dynamically on screen size change
});

defineExpose({ show, close, setMessage });
</script>
