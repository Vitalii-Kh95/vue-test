<script setup>
import IconDjango from '@/components/icons/IconDjango.vue';
import IconSQL from '@/components/icons/IconSQL.vue';
import IconAPI from '@/components/icons/IconAPI.vue';
</script>

<template>
  <div class="col-span-18 row-span-2 flex flex-col gap-1 px-1 text-start">
    <h3 class="col-span-18 row-span-1 px-1 text-end font-serif text-2xl font-bold md:text-3xl">
      Back-end
    </h3>
    <div class="flex gap-x-1">
      <IconDjango class="mt-1.5 h-7 w-7 shrink-0" />
      Develop robust web apps with Django’s powerful features like ORM, authentication, and admin
      panel—all with minimal boilerplate.
    </div>
    <div class="flex gap-x-1">
      <IconSQL class="mt-1.5 h-7 w-7 shrink-0" />
      Structure and query relational databases efficiently, with a focus on performance,
      normalization, and real-world use cases.
    </div>
    <div class="flex gap-x-1">
      <IconAPI class="mt-1 h-7 w-7 shrink-0" />
      Design clean, secure, and well-documented APIs that integrate seamlessly with frontend clients
      and external services.
    </div>
  </div>
</template>
