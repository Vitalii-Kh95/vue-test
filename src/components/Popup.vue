<template>
  <div class="w-full">
    <div
      class="alert relative flex items-center justify-between overflow-visible rounded-full p-4 shadow-lg"
      :class="type"
    >
      <div class="min-w-0 flex-1 whitespace-normal">
        <slot>{{ message }}</slot>
      </div>
      <button
        @click="emit('close', id)"
        class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg text-red-600 shadow-md hover:bg-gray-200"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
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
</script>
