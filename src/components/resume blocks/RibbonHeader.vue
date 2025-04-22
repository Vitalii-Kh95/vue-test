<template>
  <div
    class="absolute -top-3 left-0 z-10 flex w-[calc(100%+10px)] items-center bg-neutral px-4 py-2 text-lg font-bold text-white"
  >
    {{ title }}
    <!-- Fold Effect (Triangle Cut) -->
    <div
      class="absolute right-0 top-full h-[10px] w-[8px] bg-neutral [clip-path:polygon(0_0,100%_0,0_100%)]"
    ></div>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  classes: Array
});
</script>
