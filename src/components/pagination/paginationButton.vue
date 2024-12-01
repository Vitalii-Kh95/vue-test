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
      class="relative block rounded bg-transparent px-3 py-1.5 text-sm transition duration-300 focus:bg-neutral-100 focus:outline-none active:bg-neutral-100"
      :class="disabled ? 'pointer-events-none' : 'hover:bg-base-200 hover:text-base-content'"
      @click="callback"
    >
      {{ label }}
    </button>
  </li>
</template>
