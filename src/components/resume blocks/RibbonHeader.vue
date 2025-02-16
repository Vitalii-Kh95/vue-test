<template>
  <div class="relative">
    <!-- Ribbon Background -->
    <div class="absolute left-0 top-1/2 h-1/2 w-full -skew-x-12 bg-secondary"></div>

    <!-- Title Text -->
    <div class="relative z-10 rounded-l bg-secondary px-4 py-2 font-bold text-info-content shadow">
      <slot />
    </div>
  </div>
</template>
