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
      class="relative block rounded bg-transparent px-3 py-1.5 text-sm transition duration-300 focus:bg-secondary focus:text-secondary-content focus:outline-none active:bg-accent"
      :class="disabled ? 'pointer-events-none' : 'hover:bg-base-200 hover:text-base-content'"
      @click="callback"
    >
      {{ label }}
    </button>
  </li>
</template>
