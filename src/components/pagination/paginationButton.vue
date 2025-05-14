<script setup>
defineProps({
  label: String,
  callback: Function,
  disabled: Boolean
});
</script>

<template>
  <li>
    <button
      :disabled="disabled"
      class="btn btn-ghost btn-xs text-sm sm:btn-sm active:bg-primary"
      :class="disabled ? 'pointer-events-none' : 'hover:bg-base-200 hover:text-base-content'"
      @click="callback"
    >
      {{ label }}
    </button>
  </li>
</template>
