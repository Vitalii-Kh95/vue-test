<script setup>
import About from '@/components/resume blocks/TheAbout.vue';
import Contact from '@/components/resume blocks/TheContact.vue';
import Skills from '@/components/resume blocks/TheSkills.vue';
import TechStack from '@/components/resume blocks/TheTechStack.vue';
import Languages from '@/components/resume blocks/TheLanguages.vue';
import Practices from '@/components/resume blocks/ThePractices.vue';
</script>

<template>
  <main class="flex h-screen flex-col overflow-hidden md:flex-row">
    <!-- <div class="h-[7vw] text-center">Это страница где я представляюсь</div> -->
    <!-- <div class="flex h-full flex-grow overflow-hidden"> -->
    <!-- Left Panel -->
    <aside class="flex w-full flex-col gap-4 p-6 md:w-1/3">
      <About position="left" size="full" />
      <Contact position="left" size="full" />
      <Languages position="left" size="full" />
    </aside>

    <!-- Right Panel -->
    <section
      class="flex w-full flex-col gap-4 overflow-auto bg-muted p-6 text-secondary-content md:w-2/3"
    >
      <!-- <Skills /> -->
      <TechStack position="right" />
      <Practices position="right" />
    </section>
    <!-- </div> -->
  </main>
</template>
