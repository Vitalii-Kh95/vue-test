<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.pagetransition-enter-active,
.pagetransition-leave-active {
  transition: all 0.4s;
}

.pagetransition-enter-from,
.pagetransition-leave-to {
  filter: blur(10px);
}

.layouttransition-enter-active,
.layouttransition-leave-active {
  transition: all 0.4s;
}

.layouttransition-enter-from,
.layouttransition-leave-to {
  filter: blur(10px);
}
</style>