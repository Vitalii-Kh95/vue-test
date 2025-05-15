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
      class="btn btn-square btn-ghost btn-sm text-sm active:bg-primary"
      @click="callback"
    >
      {{ label }}
    </button>
  </li>
</template>
