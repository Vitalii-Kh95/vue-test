<template>
  <div
    v-if="visible"
    class="w-full transform transition-opacity duration-5000 ease-in"
    :class="faded ? 'opacity-0' : 'opacity-100'"
  >
    <div
      class="alert relative flex items-center justify-between overflow-visible rounded-full p-4 shadow-lg"
      :class="type"
    >
      <div class="min-w-0 flex-1" :class="wrap ? 'whitespace-nowrap' : 'whitespace-normal'">
        <slot>{{ message }}</slot>
      </div>
      <button
        @click="closePopup"
        class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-red-600 shadow-md hover:bg-gray-200"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, nextTick } from 'vue';

const faded = ref(false);
const visible = ref(true); // Control visibility of the popup

// I need to declare variables to use them in functions
let fadeTimeout = null;
let autoCloseTimeout = null;

function show() {
  // Trigger faded after 1 second and closePopup after 5 seconds
  fadeTimeout = setTimeout(() => fadeOut(), 1000); // Start fade-out earlier
  autoCloseTimeout = setTimeout(() => closePopup(), 7000); // Auto closePopup after 5 seconds
}

function fadeOut() {
  faded.value = true; // Start fade-out effect
}

const closePopup = () => {
  visible.value = false; // Hide the popup
  if (autoCloseTimeout) clearTimeout(autoCloseTimeout);
  if (fadeTimeout) clearTimeout(fadeTimeout);
  nextTick(() => {
    emit('close', props.id); // Emit closePopup event
  });
};

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  message: String,
  type: {
    type: String,
    default: 'alert-error'
  },
  wrap: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['close']);

show();

onBeforeUnmount(() => {
  if (autoCloseTimeout) clearTimeout(autoCloseTimeout);
  if (fadeTimeout) clearTimeout(fadeTimeout);
});

// function setMessage(newMessage, type = 'error') {
//   message.value = newMessage;
//   typeClass.value = type === 'success' ? 'alert-success' : 'alert-error';
//   adjustPopupWidth();
// }
// defineExpose({ show, closePopup, setMessage });
</script>
