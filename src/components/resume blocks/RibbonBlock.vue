<template>
  <div class="relative w-full rounded-lg bg-base-100 p-4 text-base-content shadow-md">
    <!-- Ribbon Title -->
    <div
      class="absolute -top-3 left-0 flex w-[calc(100%+10px)] items-center bg-neutral px-4 py-2 text-lg font-bold text-white"
    >
      {{ title }}
      <!-- Tailwind-Only Fold Effect -->
      <div
        class="absolute right-0 top-full h-[10px] w-[8px] bg-neutral [clip-path:polygon(0_0,100%_0,0_100%)]"
      ></div>
    </div>

    <!-- Content -->
    <div class="mt-6">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
});
</script>
