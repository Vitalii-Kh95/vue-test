<template>
  <div
    class="w-full transform transition-opacity duration-5000 ease-in"
    :class="faded ? 'opacity-0' : 'opacity-100'"
  >
    <div
      class="alert relative flex items-center justify-between overflow-visible rounded-full p-4 shadow-lg"
      :class="type"
    >
      <div class="min-w-0 flex-1 whitespace-normal text-center">
        <slot>{{ message }}</slot>
      </div>
      <button
        @click="closePopup(id)"
        class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-red-600 shadow-md hover:bg-gray-200"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';

const faded = ref(false);

let fadeTimeout = setTimeout(() => fadeOut(), 1000); // Start fade-out earlier
let autoCloseTimeout = setTimeout(() => closePopup(), 6000);

function fadeOut() {
  faded.value = true; // Start fade-out effect
}

const closePopup = () => {
  if (autoCloseTimeout) clearTimeout(autoCloseTimeout);
  if (fadeTimeout) clearTimeout(fadeTimeout);
  emit('close', props.id); // Emit closePopup event
};

const props = defineProps({
  id: {
    type: Symbol,
    required: true
  },
  message: String,
  type: {
    type: String,
    default: 'alert-error'
  }
});
const emit = defineEmits(['close']);

onBeforeUnmount(() => {
  if (autoCloseTimeout) clearTimeout(autoCloseTimeout);
  if (fadeTimeout) clearTimeout(fadeTimeout);
});
</script>
